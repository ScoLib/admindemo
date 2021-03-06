<?php


namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Sco\ActionLog\Factory;

class ActionLogController extends Controller
{
    public function getList(Request $request)
    {
        $ActionLog = new Factory();
        if ($request->filled('user_id')) {
            $ActionLog = $ActionLog->whereUserId(intval($request->input('user_id')));
        }

        if ($request->filled('client_ip')) {
            $ActionLog = $ActionLog->whereClientIp($request->input('client_ip'));
        }

        if ($request->filled('type')) {
            $ActionLog = $ActionLog->whereType($request->input('type'));
        }

        $list = $ActionLog->with('user')->orderBy('created_at', 'desc')->paginate();

        return response()->json($list);
    }
}
