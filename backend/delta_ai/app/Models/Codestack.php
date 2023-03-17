<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Codestack extends Model
{
    use HasFactory;

    
    protected $primarykey = "stack_id";


    public $fillable = [
        "stack_name"
    ];

    public $timestamps = false;
}
