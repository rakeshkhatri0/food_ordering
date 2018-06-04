<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $table ='customer';
    protected $fillable=['Fname' , 'Lname' , 'Address' , 'Amount' , 'TransactionDate' , 'Duration' , 'options'];
}
