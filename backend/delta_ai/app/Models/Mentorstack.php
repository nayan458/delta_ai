<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mentorstack extends Model
{
    use HasFactory;

    public $fillable = [
        'mentor_id',
        'stack_id',
    ];

    public $timestamps = false;
}
