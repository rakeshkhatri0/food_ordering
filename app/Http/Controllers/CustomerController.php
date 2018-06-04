<?php

namespace App\Http\Controllers;

use App\Customer;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $customer= Customer::all();

        return response()->json($customer);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $customer = new Customer;
        $customer->Fname=$request->get('Fname');
        $customer->Lname=$request->get('Lname');
        $customer->Address=$request->get('Address');
        $customer->Amount=$request->get('Amount');
        $customer->TransactionDate=$request->get('TransactionDate');
        $customer->Duration=$request->get('Duration');
        $customer->Options=$request->get('options');
        $customer->save();
        return response()->json('Succesfully Added');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $customerId)
    {
        $customers = Customer::find($customerId);
        if(!empty($customers)){
            $response = ['status'=>true , 'customers' =>$customers];
        }else{
            $response = ['status' =>false , 'msg' => 'No such id'];
        }
        return response()->json($response);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $customer = Customer::find($id);
        return response()->json($customer);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        $customer = Customer::find($id);
        $customer->Fname=$request->get('Fname');
        $customer->Lname=$request->get('Lname');
        $customer->Address=$request->get('Address');
        $customer->Amount=$request->get('Amount');
        $customer->Duration=$request->get('Duration');
        $customer->TransactionDate=$request->get('TransactionDate');
        $customer->options=$request->get('options');
        if($customer->save()){
            $response=['status'=>true, 'msg'=>'succesfull'];
        }
        else{
            $response=['status'=>false , 'msg'=>'not saved'];
        }
        return response()->json($response);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $customer=Customer::find($id);
        if($customer->delete()){
            $response=['status'=>true, 'msg'=>'succesfull'];
        }
        else{
            $response=['status'=>false , 'msg'=>'not saved'];
        }
        return response()->json($response);
    }
}
