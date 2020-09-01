<?php

namespace App\Http\Controllers;

use App\Service;
use App\Resolution;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $services =Service::limit(4)->get();
        $resolutions = Resolution::all();
        return view('pages.index',compact('services','resolutions'));
    }
}
