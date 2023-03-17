<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Support\Facades\DB;
use App\Models\Student;
use App\Models\Mentor;
use Illuminate\Support\Facades\Hash;

class AuthenticationController extends Controller
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    //student registration
    public function register(Request $request){
        
            
            $student = Student::create([
                'name'=>$request->name,
                'username'=>$request->username,
                'email'=>$request->email,
                'location'=>$request->location,
                'password'=>$request->password,
                'password'=>Hash::make($request['password']),
                ]
            );


            return response()->json(["message" => $student]);
    }
    public function registerMentor(Request $request){
        $mentor = Mentor::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'username'=>$request->username,
            'password'=>$request->password,
            'password'=>Hash::make($request['password']),
            'rating'=>$request->rating,
            'status'=>$request->status,
        ]);
        return response()->json(["message" => $mentor]);
    }
    // student login
    // mentor registration
    // mentor login
}
