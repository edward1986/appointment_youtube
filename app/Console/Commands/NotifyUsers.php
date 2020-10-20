<?php

namespace App\Console\Commands;

use App\Events\AppointmentDue;
use App\Models\Appointment;
use Illuminate\Console\Command;

class NotifyUsers extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'notify:users';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send notification to user';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $now = date("Y-m-d H:i");

        $messages = Appointment::where('delivered', 'NO')->where('date_string' ,'<=',  $now);
        if($messages->exists()){
            //Get all messages that their dispatch date is
            foreach ($messages->get() as $message) {
                if($message->delivered == 'NO'  )
                {
                    $message->delivered = 'YES';
                    $message->save();
                    AppointmentDue::dispatch($message);

                }
            }
        }
    }
}
