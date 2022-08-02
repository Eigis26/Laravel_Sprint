<?php

namespace App\Models;

use App\Models\restaurant;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class menu extends Model
{
    use HasFactory;
    protected $table = 'menu';

    protected $primaryKey = 'id';

    public function restaurant(){
        return $this->belongsTo(restaurant::class);

}
}
