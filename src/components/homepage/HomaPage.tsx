import { Accordion, AccordionItem } from "@nextui-org/react";
import React from "react";
import HomePageCardsForm from "./HomePageCardsForm";
import HomepageImageCard from "@/components/homepage/HomepageImageCard";

type Props = {
  data: any;
};

export default function HomaPage({ data }: Props) {
  return (
    <>
      <Accordion variant="shadow">
        {data.map((card: any) => (
          <AccordionItem
            key={card.result.card_id}
            aria-label={`Card ${card.result.card_id}`}
            title={`Card ${card.result.card_id}`}
          >
            <div className="w-full border-t border-black flex">
              <HomePageCardsForm
                cardData={card.result.cardData}
                card_id={card.result.card_id}
              />
              <HomepageImageCard cardData={card.result.cardData} />
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
