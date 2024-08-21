'use client';

import { upvoteAction } from '@/action';
import Image from 'next/image';
import React from 'react'

export default function Upvote({voting: id}: {voting:number, id: string}) {
    const handleOnClick = () => {
        console.log('clicked');
        
    };
    return (
        <form action={() => upvoteAction(id)}>
      <div className="mb-6 flex">
        <Image
          src="/static/icons/star.svg"
          width="24"
          height="24"
          alt="star icon"
        />
                <p className="pl-2">{ voting }</p>
      </div>

      <button onClick={handleOnClick}>Up vote!</button>
      </form>
  );
}
