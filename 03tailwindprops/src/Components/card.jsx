function Card({ username }) {
    console.log(username);
    return (
      <div className="w-full flex flex-col rounded-xl bg-black min-h-[19rem]">
        <div>
          <img
            src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
            alt="NFT Image"
            className="object-cover object-center rounded-t-xl w-full h-40"
          />
        </div>
        <div className="flex flex-col py-3 px-3 pb-10 text-white">
          <div className="flex justify-between">
            <h1 className="font-bold">{username || "Unknown"}</h1>
            <h1>Price</h1>
          </div>
          <div className="flex justify-between">
            <p>#345</p>
            <p>0.01 ETH</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Card;
  