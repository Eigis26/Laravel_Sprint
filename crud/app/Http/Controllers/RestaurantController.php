<?php

namespace App\Http\Controllers;

use App\Models\restaurant;
use Illuminate\Http\Request;

class RestaurantController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $restaurants = restaurant::all();
        return $restaurants;
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        {
            $restaurant = new restaurant();
            $restaurant -> rest_name = $request->rest_name;
            $restaurant -> rest_code = $request->rest_code;
            $restaurant -> rest_address = $request->rest_address;
            $restaurant -> image = $request->image;
    
            $restaurant -> save();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $restaurnt = restaurant::find($id);
       return $restaurnt;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $restaurant = restaurant::findOrFail($request->id);
        $restaurant -> rest_name = $request->rest_name;
        $restaurant -> rest_code = $request->rest_code;
        $restaurant -> rest_address = $request->rest_address;
        $restaurant -> image = $request->image;

        $restaurant->save();
        return $restaurant;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $restaurant = restaurant::destroy($id);
       return $restaurant;
    }
}
