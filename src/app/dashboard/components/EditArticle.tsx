"use client";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import * as React from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { articleCategory } from "@/helper/articleCategory";
import { Textarea } from "@/components/ui/textarea";
import { apiCall } from "@/helper/apiCall";
import { toast } from "react-toastify";

interface IArticleData {
  objectId: string;
  title: string;
  author: string;
  lead: string;
  content: string;
  category: string;
}


interface IEditArticleProps {
  data: IArticleData ;
  loadArticle:()=> void;
}

const EditArticle: React.FunctionComponent<IEditArticleProps> = (props) => {
  //   state management
  const inTitleUpdateRef = React.useRef<HTMLInputElement>(null);
  const inAuthorUpdateRef = React.useRef<HTMLInputElement>(null);
  const inLeadUpdateRef = React.useRef<HTMLTextAreaElement>(null);
  const inContentUpdateRef = React.useRef<HTMLTextAreaElement>(null);
  const [category, setCategory] = React.useState("");

//   open/close dialog 
    const[open,setOpen]=React.useState(false)

  async function btnSaveEdit(objectId: string) {
    try {
      await apiCall.put(`/articles/${objectId}`, {
        title: inTitleUpdateRef.current?.value,
        author: inAuthorUpdateRef.current?.value,
        lead: inLeadUpdateRef.current?.value,
        content: inContentUpdateRef.current?.value,
        category,
      });
      props.loadArticle();
      setOpen(false)
      toast.success("Update Data Berhasil!");
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  }

  return (
    <form>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button type="button" className="bg-amber-400 hover:bg-amber-500">
            Edit
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl">Edit Article</DialogTitle>
            <DialogDescription>Change your Article</DialogDescription>
          </DialogHeader>
          <div id="dialog-content" className="flex flex-col gap-y-3">
            <div>
              <label>Judul Artikel</label>
              <Input
                type="text"
                defaultValue={props.data.title}
                ref={inTitleUpdateRef}
              ></Input>
            </div>
            <div>
              <label>Nama Pena/Penulis</label>
              <Input
                type="text"
                defaultValue={props.data.author}
                ref={inAuthorUpdateRef}
              ></Input>
            </div>
            <div>
              <Select value={props.data.category} onValueChange={setCategory}>
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
              <label>Short Description</label>
              <Textarea
                defaultValue={props.data.lead}
                ref={inLeadUpdateRef}
              ></Textarea>
            </div>
            <div>
              <label>Content</label>
              <Textarea
                defaultValue={props.data.content}
                ref={inContentUpdateRef}
              ></Textarea>
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              onClick={() => btnSaveEdit(props.data.objectId)}
            >
              Save changes
            </Button>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </form>
  );
};

export default EditArticle;
