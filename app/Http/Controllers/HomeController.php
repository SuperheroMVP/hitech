<?php

namespace App\Http\Controllers;

use App\Service;
use App\Commitment;
use App\Development;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $services =Service::limit(4)->get();
        $commitments = Commitment::all();
        $developments =Development::all();
        return view('pages.index',compact('services','commitments','developments'));
    }
}
