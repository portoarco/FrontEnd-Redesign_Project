import { Badge } from "@/components/ui/badge";
import { apiCall } from "@/helper/apiCall";
import Image from "next/image";
import * as React from "react";

interface IArticleDetailPageProps {
  params:Promise<{ title: string }> ;
}

const getData = async (title: string) => {
  try {
    const res = await apiCall.get(
      `/articles?where=%60title%60%20%3D%20'${title}'`
    );
    console.log(res.data[0]);
    return res.data[0];
  } catch (error) {
    console.log(error);
  }
};


const ArticleDetailPage = async ({params}:IArticleDetailPageProps) => {
  const {title} = await params;
  const detailData = await getData(title);

  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="bg-gray-100 w-[95vw] my-[25%] md:my-[10%] xl:my-[8%]  rounded-lg shadow-xl p-5">
          <p className="md:text-4xl text-2xl text-center font-bold">
            {detailData?.title}
          </p>
          <div className="flex max-sm:justify-center py-2">
            <Badge className="p-2">{detailData?.category}</Badge>
          </div>
          <div className="flex gap-x-5 max-sm:flex-col max-sm:text-sm max-sm:text-center">
            <p>Author: {detailData?.author}</p>
            <p>
              Published:{"  "}
              {detailData?.date}
            </p>
          </div>
          <div id="article-picture" className="md:w-full  relative  h-30 md:h-80 lg:h-110 xl:h-150 rounded-lg shadow-xl overflow-hidden my-5 ">
            <Image
              src="/banner6.png"
              fill
              alt="articlepicture"
              className="object-cover"
            ></Image>
          </div>
          <p id="subtitle" className="text-lg font-semibold md:text-2xl">This is Subtitle.</p>
          <p id="lead-article" className="md:text-xl  text-justify text-gray-700 mb-3">
            This is lead : {detailData?.lead}
          </p>
          <p id="content" className="xl:text-lg">{detailData?.content}</p>
        </div>
      </div>
    </>
  );
};

export default ArticleDetailPage;
