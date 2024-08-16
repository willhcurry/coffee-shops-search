import { fetchCoffeeStores } from '@/lib/coffee-stores';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const longLat = searchParams.get('longLat') || '';
    const limit = searchParams.get('limit') || '';
    if (longLat) {
      const response = await fetchCoffeeStores(longLat, parseInt(limit));
      return NextResponse.json(response);
      }
  } catch (error) {
    console.log('There is an errror', error);
    return NextResponse.json(`Something went wrong ${error}, {
      status: 500}`)
  }
  
}