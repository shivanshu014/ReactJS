function Card({ obj }) {
  // console.log(username);
  return (
    <div className="w-60 flex flex-col rounded-xl bg-black text-white min-h-[22rem] shadow-lg overflow-hidden">
      <div>
        <img
          src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
          alt="test"
          className="object-cover object-center rounded-t-xl h-40 w-full"
        />
      </div>
      <div className="flex flex-col py-3 px-3 pb-4 flex-1">
        <div className="flex justify-between items-center mb-2">
          <h1 className="font-bold text-4xl text-white">{obj.name}</h1>
          <h1 className="text-sm">{obj.name}</h1>
        </div>
        <div className="flex justify-between text-sm text-gray-300 mb-4">
          <p>#345</p>
          <p>0.01 ETH</p>
        </div>
        <button className="mt-auto bg-purple-600 hover:bg-purple-700 text-black font-semibold py-2 px-4 rounded-lg">
          {obj.btn}
        </button>
      </div>
    </div>
  );
}

export default Card;
