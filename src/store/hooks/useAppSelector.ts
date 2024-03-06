import { useSelector } from "react-redux";

import type { RootState } from "../index";
import type { TypedUseSelectorHook } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
