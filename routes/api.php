<?php

use Illuminate\Http\Request;
use Illuminate\Http\Response;

Route::post('product', 'ProductController@create');
Route::get('products', 'ProductController@getAll');
Route::get('warehouses', 'WarehouseController@getAll');
Route::delete('product/{id}', 'ProductController@destroy');
ROute::patch('product/{id}', 'ProductController@update');

