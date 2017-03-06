<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Post;
use App\Util\PostUtil;
use Auth;

class PostController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('post.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $post = new Post($request->all());
        $post->author()->associate(Auth::user());
        if (!$request->has('slug')) {
            $post->slug = str_slug($post->title, '-');
        }
        PostUtil::unifySlug($post);
        $post->save();
        return response()->json([
                                'post'=>$post->toArray(),
                                'edit-url'=>route('post.edit', $post->id),
                                'input-method'=>method_field('PUT'),
                                'action'=>route('post.update', $post->id),
                                ]);
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $post = Post::find($id);
        if(!$post)
            abort(404);
        return view('post.edit')->with('post', $post);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $post = Post::find($id);
        if(!$post)
            abort(404);
        // todo validate request
        $post->fill($request->all());
        PostUtil::unifySlug($post);
        $post->save();
        return response('Post saved')->json(['post' => $post->toArray()]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $post = Post::find($id);
        if(!$post)
            abort(404);
        $post->delete();
        return redirect()->back();
    }
}
