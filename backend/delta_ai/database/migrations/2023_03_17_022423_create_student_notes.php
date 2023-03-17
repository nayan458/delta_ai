<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('student_notes', function (Blueprint $table) {
            $table->bigInteger('stack_id')->unsigned();
            $table->foreign('stack_id')->references('stack_id')->on('codestacks');
            $table->bigInteger('std_id')->unsigned();
            $table->foreign('std_id')->references('std_id')->on('students');
            $table->bigInteger('note_id')->unsigned();
            $table->foreign('note_id')->references('note_id')->on('notes');
            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('student_notes');
    }
};
