import HomePageCardsForm from "@/components/forms/HomePageCardsForm";
import HomepageImageCard from "./HomepageImageCard";

async function getHomepageData() {
  console.log("Fetching-homepage ");
  const res = await fetch("http://localhost:3000/api/get-homepage", {
    cache: "no-store",
    next: {
      tags: ["homepagecards"],
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function page() {
  const data = await getHomepageData();

  return (
    <div className="w-full  border-r h-full flex flex-col gap-2 items-center p-5 overflow-y-scroll">
      {data.data.map((card: any) => (
        <details
          className="w-full border p-3 rounded-lg shadow"
          key={card.result.card_id}
        >
          <summary className="pb-4 cursor-pointer">
            Card {card.result.card_id}
          </summary>
          <div className="w-full  grid grid-cols-2 gap-x-10 items-start justify-items-start">
            <HomepageImageCard cardData={card.result.cardData} />
            <HomePageCardsForm
              cardData={card.result.cardData}
              card_id={card.result.card_id}
            />
          </div>
        </details>
      ))}
    </div>
  );
}
