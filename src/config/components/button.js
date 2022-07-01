import { Button } from "@mui/material";

function TAButton(props) {
    const { loading, label, disabled, onClick } = props;
    return <>
        <Button disabled={loading || disabled} onClick={onClick} variant="contained" >{loading ? "loading..." : label}</Button>
    </>
}
export default TAButton;