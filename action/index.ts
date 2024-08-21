'use server'

import { updateCoffeeStore } from '@/lib/airtable';

export const upvoteAction = async (id: string) => {
    console.log('upvote action');

    const data = await updateCoffeeStore(id);
};