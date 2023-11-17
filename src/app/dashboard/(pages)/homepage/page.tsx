import HomePageCardsForm from "@/components/homepage/HomePageCardsForm";
import HomepageImageCard from "../../../../components/homepage/HomepageImageCard";
import { getHomepageData } from "@/lib/query";

export default async function page() {
  const data = await getHomepageData();
  return (
    <div className="w-full  border-r h-full flex flex-col gap-2 items-center p-5 overflow-y-scroll">
      {data.data.map((card: any) => (
        <details className="w-full border p-3 rounded-lg shadow" key={card.id}>
          <summary className="pb-4 cursor-pointer">Card {card.id}</summary>
          <div className="w-full  grid grid-cols-2 gap-x-10 items-start justify-items-start">
            <HomepageImageCard cardData={card} />
            <HomePageCardsForm cardData={card} card_id={card.id} />
          </div>
        </details>
      ))}
    </div>
  );
}
