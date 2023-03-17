<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Note extends Model
{
    use HasFactory;

    protected $primarykey = 'note_id';

    public $fillable = [
        'note_description',
        'note'
    ];

    public $timestamps = false;
}
