<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{
    public function index()
    {
        return response()->json(Event::all());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string',
            'client_name' => 'nullable|string',
            'type' => 'nullable|string',
            'start_time' => 'required|date',
            'status' => 'nullable|string',
        ]);

        $event = Event::create($validated);

        return response()->json($event, 201);
    }
}
