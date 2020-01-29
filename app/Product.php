<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products';

    protected $fillable = ['name', 'description', 'quantity', 'state', 'warehouses_id'];

    public function getStateAttribute($value) {
        return $value == true ? 'active' : 'inactive';
    }

    public function setStateAttribute($value) {
        $this->attributes['state'] = $value == 'active';
    }

}
