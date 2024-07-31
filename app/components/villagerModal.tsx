export default function VillagerModal({ data, modal, setModal }: any) {
  return (
    <div className="absolute m-auto left-0 right-0 top-0 bottom-0 bg-white border-8 w-1/2 h-1/2 z-50">
      <div className="flex flex-col items-center justify-center p-20">
        <div className="">
          <img className="h-44" src={modal.data.image_url} alt={data[0].name} />
        </div>
        <button
          onClick={() => setModal({ ...modal, hidden: true })}
          className="mt-4 px-2 py-2 bg-gray-300 border border-gray-500"
        >
          Close
        </button>
      </div>
    </div>
  );
}
