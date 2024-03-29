'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  const [event, setEvent] = useState("");
  const [eventDate, setEventDate] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push('/countdown?event=' + event + '&event_date=' + eventDate);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex p-12">
        <h1 className="text-5xl font-bold">CountDown Kun</h1>
      </div>

      <form className="max-w-2xl w-full mx-auto"  onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="event" className="block mb-2 text-sm font-medium">イベント</label>
          <input type="text" id="event"
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 value={event} onChange={(e) => setEvent(e.target.value)}
                 placeholder="子供の入学式" required/>
        </div>
        <div className="mb-5">
          <label htmlFor="event-date" className="block mb-2 text-sm font-medium">日付</label>
          <input type="date" id="event-date"
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 value={eventDate} onChange={(e) => setEventDate(e.target.value)}
                 required/>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">カウントダウンを作成する</button>
      </form>
    </main>
  );
}
