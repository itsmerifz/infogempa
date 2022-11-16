import React from "react";

const Content = ({ data }) => {
  console.log(data);
  return (
    <div className="flex justify-center w-screen items-center">
      <div className="card w-3/4 h-2/3 bg-base-200 p-3">
        <div className="flex justify-center">
          <div className="flex flex-col justify-center">
            <span className="text-2xl font-bold">Gempa Terkini</span>
            {data && (
              <div className="card-body flex-row justify-between gap-24">
                <div className="flex flex-col gap-4">
                  <h1 className="text-6xl font-bold text-error">
                    {data.data.magnitude}
                    <span className="text-white text-3xl">S.R.</span>
                  </h1>
                  <p>Tanggal : {data.data.tanggal}</p>
                  <p>Jam : {data.data.jam}</p>
                  <p>Kedalaman: {data.data.kedalaman}</p>
                  <p>Wilayah yang dirasakan : {data.data.wilayah}</p>
                  <p>Potensi: {data.data.potensi}</p>
                  <p>Dirasakan : {data.data.dirasakan}</p>
                </div>
                <img
                  src={`${data.data.shakemap}`}
                  height={150}
                  width={350}
                  alt="shakemap"
                />

                <div className="absolute bottom-2 right-3">Sumber: <a href="https://bmkg.go.id">Badan Meteorologi, Klimatologi, dan Geofisika</a></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
