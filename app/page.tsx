import Banner from '@/components/banner.client';
import Card from '@/components/card.server';

export default function Home() {
  const coffeeStoreId = 'espresso-coffee'
  return (
    <div className="mb-56">
      <main className="flex min-h-screen flex-col items-center justify-between p-14">
        <Banner />
        <Card
          name="Dark Horse Coffee"
          imgUrl='/static/hero-image.png'
          href={`/coffee-store/${coffeeStoreId}`}
        />
      </main>
    </div>
  );
}
