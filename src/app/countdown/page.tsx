'use client'

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation'
import { isHoliday } from 'japanese-holidays';

function Countdown() {
  const searchParams = useSearchParams()

  const event = searchParams.get('event') as string;
  const eventDate = new Date(searchParams.get('event_date') as string);

  const today = new Date();
  // @ts-ignore
  const diffTime = Math.abs(eventDate - today);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const daysLeft = (diffDays + "日");

  let businessDays = 0;
  let businessDays3 = 0;
  for (let d = new Date(today); d <= eventDate; d.setDate(d.getDate() + 1)) {
    if (d.getDay() !== 0 && d.getDay() !== 6 && !isHoliday(d)) {
      businessDays++;
    }
    if (![0, 6, 3].includes(d.getDay()) && !isHoliday(d)) {
      businessDays3++;
    }
  }
  const businessDaysLeft = businessDays + "日";
  const businessDaysLeft3 = businessDays3 + "日";

  return (
    <main className="flex min-h-screen items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-xl font-bold">Today: {today.toDateString()}</h1>
        <br/>
        <h1 className="text-6xl font-bold">{event}</h1>
        <p className="text-xl">{eventDate.toDateString()}</p>
        <br/>
        <p className="text-2xl">まであと</p>
        <h1 className="text-6xl font-bold">{daysLeft}</h1>
        <br/>
        <p className="text-2xl">営業日換算残り</p>
        <h1 className="text-4xl font-bold">{businessDaysLeft}</h1>
        <br/>
        <p className="text-2xl">営業日(週休3日)換算残り</p>
        <h1 className="text-4xl font-bold">{businessDaysLeft3}</h1>
      </div>
    </main>
  );
}

const Page = () => {
  return (
    <Suspense>
      <Countdown />
    </Suspense>
  );
}

export default Page;