<?php
namespace App\Util;

use App\User;
use Laravel\Socialite\AbstractUser as SocialiteUser;

class SocialLogin
{

    /**
     * Finds or creates user based on given SocialiteUser and the oauth driver
     *
     * @param \Laravel\Socialite\AbstractUser $socialiteUser
     * @param string $driver
     * 
     * @return \App\User
     */
    public static function findOrCreateUser(
                                            SocialiteUser $socialiteUser,
                                            string $driver = 'google')
    {
        $driver_id = $driver.'_id';
        $driver_token = $driver.'_token';
        $userInfo = self::getUserInfo($socialiteUser, $driver);

        $user = User::where($driver_id, $socialiteUser->id)->first();
        if (!self::userExists($user)) {
            $user = User::where('email', $socialiteUser->email)->first();
        }
        if (!self::userExists($user)) {
            $user = new User();
        }
        if (!empty($userInfo)) {
            $user->fill($userInfo);
            $user->save();
        }
        return $user;
    }

    private static function userExists(User $user = null)
    {
        if (!$user) {
            return false;
        }
        return $user->exists;
    }

    private static function getUserInfo(SocialiteUser $user, string $driver)
    {
        $driver_id = $driver.'_id';
        $driver_token = $driver.'_token';
        $info = [];

        if (!empty($user->name)) {
            $info['name'] = $user->name;
        }
        if (!empty($user->email)) {
            $info['email'] = $user->email;
        }
        if (!empty($user->token)) {
            $info[$driver_token] = $user->token;
        }
        if (!empty($user->id)) {
            $info[$driver_id] = $user->id;
        }
        if (!empty($user->avatar)) {
            $info['avatar'] = $user->avatar;
        }

        return $info;
    }
}
