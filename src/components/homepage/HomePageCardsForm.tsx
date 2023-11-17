import { updateHomePageData } from "@/lib/serveractions";

type Props = {
  cardData: {
    title: string;
    description: string;
    image_url: string;
  };
  card_id: string;
};

export default function HomePageCardsForm({ cardData, card_id }: Props) {
  return (
    <form
      action={updateHomePageData}
      className=" w-full border-r flex flex-col gap-2 p-5 rounded-3xl "
    >
      <input
        type="text"
        name="card_id"
        defaultValue={card_id}
        readOnly
        className="p-2 hidden border border-black/60 w-full  disabled:cursor-not-allowed rounded-lg disabled:blur-[.05rem]"
        placeholder="id"
      />
      <input
        type="text"
        name="prevImageUrl"
        defaultValue={cardData.image_url}
        readOnly
        className="p-2 hidden border border-black/60 w-full  disabled:cursor-not-allowed rounded-lg disabled:blur-[.05rem]"
        placeholder="id"
      />
      <input
        type="text"
        name="title"
        defaultValue={cardData.title}
        className="p-2 border border-black/60 w-full  disabled:cursor-not-allowed rounded-lg disabled:blur-[.05rem]"
        placeholder="Title"
      />
      <textarea
        rows={4}
        name="description"
        defaultValue={cardData.description}
        className="resize-none p-2 border disabled:cursor-not-allowed border-black/60 w-full rounded-lg disabled:blur-[.05rem]"
        placeholder="Description"
      />
      <input
        type="file"
        name="image"
        className="p-2 border border-black/60 w-full rounded-lg  disabled:cursor-not-allowed disabled:blur-[.05rem]"
      />
      <div className="flex gap-5 items-center justify-center">
        <button
          type="submit"
          className="text-white disabled:cursor-not-allowed  py-2 px-8 bg-[#001942]  rounded-lg"
        >
          Save
        </button>
      </div>
    </form>
  );
}
