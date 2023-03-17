<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student_note extends Model
{
    use HasFactory;

    public $fillable = [
        'stack_id',
        'std_id',
        'note_id',
    ];

    public $timestamps = false;
}
