<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthenticationController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(AuthenticationController::class)->group(function(){
    Route::get('/login', 'login');
    Route::post('/login', 'login');

    Route::get('/logout', 'logout');
    Route::post('/logout', 'logout');

    Route::get('/register', 'register');
    Route::post('/registermentor', 'registerMentor');

    // Route::get('/forgot-password', [AuthenticationController::class, 'forgotPassword']);
    // Route::post('/forgot-password', [AuthenticationController::class, 'forgotPassword']);

    // Route::get('/reset-password', [AuthenticationController::class,'resetPassword']);
    // Route::post('/reset-password', [AuthenticationController::class, '
});