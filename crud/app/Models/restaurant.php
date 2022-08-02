<?php

namespace App\Models;

use App\Models\menu;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class restaurant extends Model
{
    use HasFactory;

    protected $table = 'restaurant';

    protected $primaryKey = 'id';

    protected $fillable = [
        'rest_name',
        'rest_code',
        'rest_address',
        'image'
    ];

    public function menu(){
        return $this->hasMany(menu::class);
    }
}
