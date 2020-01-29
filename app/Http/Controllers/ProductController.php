<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Product;

class ProductController extends Controller
{
    public function create(Request $request) {
        $name = $request->input('name');
        $description = $request->input('description');
        $warehouseId = $request->input('warehouses_id');
        $state = $request->input('state');
        $quantity = $request->input('quantity');
        //Guardar los datos
        $product = Product::create([
            'name' => $name,
            'description' => $description,
            'quantity' => $quantity,
            'state' => $state,
            'warehouses_id' => $warehouseId
        ]);
        return response()->json(['id' => $product->id], 201);
    }

    public function getAll() {
        return Product::all();
    }

    public function destroy(Request $request, $id) {
        $product = Product::findOrFail($id);

        $product->delete();

        return response()->json([], 200);
    }

    public function update(Request $request, $id) {
        $product = Product::findOrFail($id);

        $product->state = $request->state;

        $product->save();

        return response()->json([], 200);
    }

}
