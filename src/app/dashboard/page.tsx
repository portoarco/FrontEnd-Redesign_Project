"use client";
import { Card, CardContent } from "@/components/ui/card";
import NavbarDashboard from "../components/NavbarDashboard";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { articleCategory } from "@/helper/articleCategory";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useAppDispatch } from "@/lib/redux/hook";
import { setArticleSlice } from "@/lib/redux/features/articleSlice";
import { useRouter } from "next/navigation";
import { apiCall } from "@/helper/apiCall";
import EditArticle from "./components/EditArticle";

interface Article {
  title: string;
  author: string;
  lead: string;
  category: string;
  content: string;
  date: string;
  picture: string;
  objectId: string;
}

function Dashboard() {
  // const user = useAppSelector((state) => state.user);
  // ref managemenet
  const inTitleRef = useRef<HTMLInputElement>(null);
  const inAuthorRef = useRef<HTMLInputElement>(null);
  const [lead, setLead] = useState("");
  const [category, setCategory] = useState<string|undefined>("");
  const [content, setContent] = useState("");
  // const [picture, setPicture] = useState<File | null>(null);

  // buat penampung data artikel

  // simpan data ke redux
  const dispatch = useAppDispatch();

  // kolektifkan data
  const [articles, setArticles] = useState<Article[]>([]);
  // router
  const router = useRouter();

  async function submitArticle() {
    const title = inTitleRef.current?.value;
    const author = inAuthorRef.current?.value;
    const date = new Date().toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    try {
      if (!title || !author || !lead || !category || !content) {
        alert("Harap isi semua data!");
        return;
      }

      await apiCall.post(
        "/articles",

        {
          title,
          author,
          lead,
          category,
          content,
          date,
        } 
      );
      toast.success('Artikel Berhasil Ditambahkan!')

      getArticleList();

      // Reset Form setelah diisi
      if (inTitleRef.current) inTitleRef.current.value = "";
      if (inAuthorRef.current) inAuthorRef.current.value = "";
      setLead("");
      setCategory("");
      setContent("");
      // setPicture(null);
    } catch (error) {
      console.log(error);
      alert("Something Went Wrong! Check Console");
    }
  }

  // getArticleList
  async function getArticleList() {
    try {
      const res = await apiCall.get("/articles");
      setArticles(res.data);

      // simpan data artikel di articleList untuk ke store redux
      const articleList = res.data;
      // simpan data ke redux
      dispatch(setArticleSlice(articleList));
    } catch (error) {
      console.log(error);
      alert("Something Went Wrong, Check Console!");
    }
  }

  // Tetap tampilkan data saat render halaman pertama kali
  useEffect(() => {
    getArticleList();
  }, []);

  // delete Button
  async function onBtnDelete(objectId: string) {
    try {
      const confirmed = confirm("Apa Anda Yakin untuk Hapus?");

      if (!confirmed) {
        return;
      }

      await apiCall.delete(`articles/${objectId}`);

      toast.success("Data berhasil dihapus!");
      getArticleList();
    } catch (error) {
      console.log(error);
      alert("Something Went Wrong, Check Console!");
    }
  }

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.replace("/");
    }
  }, []);

  return (
    <>
      <div className="  w-full min-h-screen flex justify-center items-center">
        <div className="bg-gray-100 w-[95vw] my-[25%] md:my-[10%] xl:my-[8%]  rounded-lg shadow-xl">
          <div id="navbar-content" className="p-4">
            <NavbarDashboard />

            <div id="new-article" className=" mt-5">
              <p className="text-2xl font-semibold text-center">
                Create New Article
              </p>
              <div>
                <Card className="px-3 py-4 shadow-lg mt-5">
                  <CardContent className="flex flex-col gap-y-3">
                    <div>
                      <label className="mt-3">Judul Artikel</label>
                      <Input
                        type="text"
                        placeholder="Masukkan Judul Artikel"
                        ref={inTitleRef}
                      ></Input>
                    </div>
                    <div>
                      <label>Nama Pena/Penulis</label>
                      <Input
                        type="text"
                        placeholder="Masukkan Nama"
                        ref={inAuthorRef}
                      ></Input>
                    </div>
                    <div>
                      <label className="">Category</label>
                      <Select
                        value={category}
                        onValueChange={setCategory}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Category"></SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          {articleCategory.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="mt-3">Short Description</label>
                      <Textarea
                        placeholder="Masukkan Deskripsi Singkat Artikel"
                        value={lead}
                        onChange={(e) => setLead(e.target.value)}
                      ></Textarea>
                    </div>
                    <div>
                      <label className="mt-3">Article Content</label>
                      <Textarea
                        placeholder="Masukkan Teks Artikel Anda"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                      ></Textarea>
                    </div>
                    <div>
                      <label className="mt-3">Picture</label>
                      <Input
                        id="picture"
                        type="file"
                        className="md:w-fit"
                        // onChange={(e) => {
                        //   const file = e.target.files?.[0];
                        //   if (file) setPicture(file);
                        // }}
                      ></Input>
                    </div>
                  </CardContent>
                  <Button className="mt-5 w-fit" onClick={submitArticle}>
                    Submit
                  </Button>
                </Card>
              </div>
            </div>
            <div id="article-dashboard" className="my-10 py-5">
              <p className="text-2xl font-semibold text-center">
                Manage Article
              </p>
              <div className=" w-fit my-10">
                <Select>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Category"></SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All</SelectItem>
                    {articleCategory.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col md:flex-row gap-x-6 min-w-full md:overflow-x-auto overflow-y-auto gap-y-4 p-4">
                {articles.map((article) => (
                  <Card
                    key={article.objectId}
                    className="md:min-w-[350px] md:max-w-sm md:w-100 overflow-hidden flex flex-col   "
                  >
                    <CardContent className="flex flex-col flex-1 p-0">
                      <div className=" h-50 relative ">
                        {article.picture ? (
                          <Image
                            src={article.picture}
                            fill
                            alt="headerpicture"
                            className="object-cover"
                          ></Image>
                        ) : (
                          // <div className="flex w-full h-full justify-center items-center">
                          //   <p>No Image</p>
                          // </div>
                          <Image
                            src="/banner4.png"
                            fill
                            alt="headerpicture"
                            className="object-cover"
                          ></Image>
                        )}
                      </div>
                      <div className="p-4 flex flex-col justify-between flex-1">
                        <Badge className="bg-blue-400">
                          {article.category}
                        </Badge>
                        <p className="text-xl font-bold text-wrap  text-justify mt-5">
                          {article.title}
                        </p>

                        <div className="flex flex-col">
                          <div className="flex justify-between my-5">
                            <Button type="button">Show Details</Button>
                            {/* Btn Edit dan Delete */}
                            <div className="flex gap-x-2">
                              <EditArticle
                                data={article}
                                loadArticle={getArticleList}
                              ></EditArticle>

                              <Button
                                variant={"destructive"}
                                onClick={() => onBtnDelete(article.objectId)}
                              >
                                Delete
                              </Button>
                            </div>
                          </div>
                          <div className="flex justify-between text-sm text-gray-600">
                            <p className="">{article.date}</p>
                            <p>Author : {article.author}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
