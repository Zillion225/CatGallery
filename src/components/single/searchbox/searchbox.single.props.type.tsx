import { ChangeEvent } from "react";

type SearchBoxPropsType = {
    containerClassName?: string,
    textboxClassName?: string,
    placeholder?: string,
    textboxValue?: string,
    onTextChange?: (event: ChangeEvent<HTMLInputElement>) => void
};

export default SearchBoxPropsType;