<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Model\Post;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if (User::count() < 1) {
            $this->command->error('No user found.');
            $this->command->info('Since there\'s no way to create google '
                                 . 'test users, please go to ' .route('login')
                                 . ' and create a new user.');
        }
        else {
            if(Post::count() < 40){
                for($i=0; $i<40; $i++)
                    factory(Post::class)->make()->save();
            }
        }
    }
}
