import {useDispatch} from "react-redux"; // dispatch untuk menjalankan fungsi action
import { useSelector } from "react-redux"; // untuk mengambil data dari global state dan dikirim ke UI
import { AppDispatch, Rootstate } from "./store";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<Rootstate>();

