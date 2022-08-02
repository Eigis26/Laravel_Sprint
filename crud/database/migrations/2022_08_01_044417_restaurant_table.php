<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('restaurant', function (Blueprint $table) {
            $table->increments('id');
            $table->string('rest_name');
            $table->integer('rest_code');
            $table->string('rest_address');
            $table->string('image');
            $table->timestamps();
        });

        Schema::create('menu', function (Blueprint $table){
            $table->increments('id');
            $table->unsignedInteger('restaurant_id');
            $table->string('dish');
            $table->longText('description');
            $table->timestamps();
            $table->foreign('restaurant_id')->references('id')->on('restaurant')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};
