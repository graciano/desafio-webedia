<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Post;

class ContentController extends Controller
{
    public function home()
    {
        $posts = Post::orderBy('created_at', 'DESC')->paginate();
        return view('content.home')->with('posts', $posts);
    }

    public function viewPost($slug)
    {
        $post = Post::where('slug', $slug)->first();
        if ($post && $post->exists) {
            return view('content.post')->with('post', $post);
        }
        abort(404);
    }
}
