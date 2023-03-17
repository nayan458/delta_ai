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
        Schema::create('mentorstacks', function (Blueprint $table) {
            $table->bigInteger('mentor_id')->unsigned();
            $table->foreign('mentor_id')->references('mentor_id')->on('mentors');
            $table->bigInteger('stack_id')->unsigned();
            $table->foreign('stack_id')->references('stack_id')->on('codestacks');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mentorstacks');
    }
};
