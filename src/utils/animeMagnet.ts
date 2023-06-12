import * as cheerio from "cheerio";
import axios from "axios";

const getAnimeMagnetURL = async (name: String) => {
  interface animeDataInterface {
    animeName: string | undefined;
    magnetURL: string | undefined;
    size: string;
    date: string | undefined;
    seeder: number;
    leacher: number;
    totalDownload: number;
  }

  const animeData: animeDataInterface[] = [];

  try {
    const response = await axios.get(
      `https://nyaa.si/?f=0&c=0_0&q=${name}&s=downloads&o=desc`
    );

    const $ = cheerio.load(response.data);
    const targetTag = $(`.torrent-list > tbody > tr`);

    targetTag.each((i, ele) => {
      const animeName = $(ele)
        .find(`td:nth-child(2) > a:nth-child(2)`)
        .attr("title")
        ? $(ele).find(`td:nth-child(2) > a:nth-child(2)`).attr("title")
        : $(ele).find(`td:nth-child(2) > a:nth-child(1)`).attr("title");

      const magnetURL = $(ele)
        .find(`td:nth-child(3) > a:nth-child(2)`)
        .attr("href");
      const size = $(ele).find(`td:nth-child(4)`).text();
      const date = $(ele).find(`td:nth-child(5)`).text();
      const seeder = parseInt($(ele).find(`td:nth-child(6)`).text());
      const leacher = parseInt($(ele).find(`td:nth-child(7)`).text());
      const totalDownload = parseInt($(ele).find(`td:nth-child(8)`).text());

      animeData.push({
        animeName,
        magnetURL,
        size,
        date,
        seeder,
        leacher,
        totalDownload,
      });
    });
  } catch (error) {
    console.log(error);
  }

  return animeData;
};
