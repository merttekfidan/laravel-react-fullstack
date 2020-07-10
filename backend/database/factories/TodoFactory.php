<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Todo;
use Faker\Generator as Faker;

$factory->define(Todo::class, function (Faker $faker) {
    return [
        'title'=>$faker->text(5),
        'body'=>$faker->text(30),
        'done'=>$faker->boolean()
    ];
});
