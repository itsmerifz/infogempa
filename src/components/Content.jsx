import React from "react";

const Content = ({ data }) => {
  return (
    <div className="flex justify-center w-screen items-center">
      <div className="card w-3/4 h-2/3 bg-base-200 p-3">
        <div className="flex justify-between">
          <div className="flex flex-col justify-center">
            <span className="text-2xl font-bold">Gempa Terkini</span>
            {data && (
              <div className="card-body flex-row justify-center">
                <div className="flex flex-col gap-4">
                  <h1 className="text-6xl font-bold text-error">
                    {data.Infogempa.gempa.Magnitude}
                    <span className="text-white text-3xl">S.R.</span>
                  </h1>
                  <p>Tanggal : {data.Infogempa.gempa.Tanggal}</p>
                  <p>Jam : {data.Infogempa.gempa.Jam}</p>
                  <p>Kedalaman: {data.Infogempa.gempa.Kedalaman}</p>
                  <p>Wilayah yang dirasakan : {data.Infogempa.gempa.Wilayah}</p>
                  <p>Potensi: {data.Infogempa.gempa.Potensi}</p>
                  <p>Dirasakan : {data.Infogempa.gempa.Dirasakan}</p>
                </div>
                <img
                  src={`https://data.bmkg.go.id/DataMKG/TEWS/${data.Infogempa.gempa.Shakemap}`}
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
