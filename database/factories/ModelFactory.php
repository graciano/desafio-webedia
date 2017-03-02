<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

/** @var \Illuminate\Database\Eloquent\Factory $factory */
// there's no way to create google test users
// $factory->define(App\User::class, function (Faker\Generator $faker) {
//     static $password;

//     return [
//         'name' => $faker->name,
//         'email' => $faker->unique()->safeEmail,
//         'password' => $password ?: $password = bcrypt('secret'),
//         'remember_token' => str_random(10),
//     ];
// });


$factory->define(App\Model\Post::class, function (Faker\Generator $faker) {
    $faker->addProvider(new Faker\Provider\HtmlLorem($faker));
    $user = App\User::inRandomOrder()->first();
    if ($user && $user->exists) {
        $user_id = $user->id;
        return [
            'author_id' => $user_id,
            'title' => $faker->sentence(6, true),
            'slug' => $faker->slug,
            'preview_text' => $faker->sentence(20, true),
            'html_content' => $faker->randomHtml(),
            'lead' => $faker->sentence(10, true),
            'excerpt' => $faker->sentence(50, true),
            'cover_image' => $faker->imageUrl(640, 480, 'food'),
        ];
    }
    return [];
});
