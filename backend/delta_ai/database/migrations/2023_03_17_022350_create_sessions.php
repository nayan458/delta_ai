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
        Schema::create('sessions', function (Blueprint $table) {
            $table->bigInteger('mentor_id')->unsigned();
            $table->foreign('mentor_id')->references('mentor_id')->on('mentors');
            $table->bigInteger('std_id')->unsigned();
            $table->foreign('std_id')->references('std_id')->on('students');
            $table->uuid('session_id')->unique();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sessions');
    }
};
