import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-10">
      <div className="col-span-7">
        <div className="flex w-full gap-x-3 p-5 rounded-lg bg-white border border-gray-200">
          <div className="flex-shrink-0">
            <img
              src="/default.png"
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-x-2">
              <div className="font-semibold">Айдос Галимжан</div>
              <div className="text-gray-500 text-sm">@aidosgal</div>
              <div className="text-gray-500 text-sm">Окт 3</div>
            </div>
            <div>
              <div>Innovate with our real-time and historical data on the X API!</div>
              <div className="mt-2">
                <Image
                  src="/nature.jpg"
                  alt="Nature Image"
                  width={640}
                  height={360}
                  className="w-full object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
