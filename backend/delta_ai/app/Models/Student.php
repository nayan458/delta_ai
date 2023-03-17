<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Student extends Authenticatable
{
    use HasFactory,HasApiTokens,Notifiable;

    protected $primaryKey =   'std_id';

    public $fillable = [
        'name',
        'username',
        'email',
        'location',
        'password',
    ];

    public $timestamps = false;
}
