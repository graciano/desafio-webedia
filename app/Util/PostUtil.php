<?php
namespace App\Util;

use App\Model\Post;

class PostUtil
{

    public static function unifySlug (Post $post) {
        $i = 1;
        $slug = $post->slug;
        for ($i=1; Post::where('slug', $post->slug)->count() > 0; $i++) {
            $post->slug = "$slug-$i";
        }
    }
}
