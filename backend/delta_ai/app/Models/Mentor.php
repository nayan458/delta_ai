<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Mentor extends Model
{
    use HasFactory,HasApiTokens,Notifiable;

    protected $primarykey = 'mentor_id';
    
    public $fillable = [
        'name',
        'email',
        'username',
        'password',
        'rating',
        'status'
    ];

    public $timestamps = false;
}
