<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DenemeController extends Controller
{
    public function index(){
        $name = 'selam';
        return view('deneme')->with('name',$name);
    }
}
