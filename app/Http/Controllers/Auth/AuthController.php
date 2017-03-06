<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Util\SocialLogin;
use App\User;
use Socialite;

class AuthController extends Controller
{
    //TODO if using other login providers, like facebook,
    // change it here
    protected $accepted_drivers = [
        'google',
    ];

    /**
     * Redirect the user to the given driver authentication page.
     *
     * @return Response
     */
    public function redirectToProvider($driver = "google")
    {
        return Socialite::driver($driver)->redirect();
    }

    /**
     * Obtain the user information from given driver.
     *
     * @return Response
     */
    public function handleProviderCallback($driver = "google")
    {

        if (!in_array($driver, $this->accepted_drivers)) {
            abort(403);
        }

        $socialiteUser = Socialite::driver($driver)->user();
        $appUser = SocialLogin::findOrCreateUser($socialiteUser, $driver); 
        
        Auth::login($appUser);

        return redirect(route('dashboard'));
    }

    public function login()
    {
        return view('auth.login')->with('drivers', ['google']);
    }

    public function logout()
    {
        Auth::logout();
        return redirect(route('home'));
    }
}
