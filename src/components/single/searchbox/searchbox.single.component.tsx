import SearchBoxPropsType from "./searchbox.single.props.type";
import './searchbox.single.style.scss';

const SearchBoxComponent = ({
        containerClassName = "search-container",
        textboxClassName = "search",
        onTextChange,
        placeholder,
        textboxValue
    }: SearchBoxPropsType) => {

    return (
        <div className={containerClassName}>
            <input
                type="text"
                placeholder={placeholder}
                className={textboxClassName}
                onChange={onTextChange}
                value={textboxValue}
            />
        </div>
    )
}

export default SearchBoxComponent;