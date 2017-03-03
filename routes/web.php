<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'ContentController@home')->name('home');

Route::get('/login', 'Auth\AuthController@login')->name('login');

Route::post('/logout', 'Auth\AuthController@logout')->middleware('auth');

Route::group(['prefix' => 'social'], function () {
  Route::get('/login/{driver?}', 'Auth\AuthController@redirectToProvider')
        ->name('social.login');
  Route::get(
             '/callback/{driver?}',
             'Auth\AuthController@handleProviderCallback'
             );
});

Route::get('/dashboard', 'DashboardController@index')->name('dashboard');

Route::get('/{slug}', 'ContentController@viewPost')->name('content.post');
