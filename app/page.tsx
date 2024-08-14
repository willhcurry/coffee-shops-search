import Banner from '@/components/banner.client';
import Card from '@/components/card.server';

export default function Home() {
  const coffeeStoreId = 'espresso-coffee';
  const coffeeStores = [
    {
      "name": "Dark Horse Coffee",
      "imgUrl": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "name": "Dark Horse Coffee",
      "imgUrl": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "name": "Dark Horse Coffee",
      "imgUrl": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "name": "Dark Horse Coffee",
      "imgUrl": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "name": "Dark Horse Coffee",
      "imgUrl": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "name": "Dark Horse Coffee",
      "imgUrl": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];
  return (
    <div className="mb-56">
      <main className="flex min-h-screen flex-col items-center justify-between p-14">
        <Banner />

        <div className='mt-20'>
          <h2 className='mt-8 pb-8 text-4xl font-bold text-white'>
            Utah Stores
          </h2>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-6'>
            {coffeeStores.map((coffeeStore, idx) => (
              <Card
                key={`${coffeeStore.name}-${idx}`}
                name={coffeeStore.name}
                imgUrl={coffeeStore.imgUrl}
                href={`/coffee-store/${idx}`}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
