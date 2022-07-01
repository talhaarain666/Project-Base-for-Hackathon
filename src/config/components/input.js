import { TextField } from "@mui/material";

function TAInput(props) {
    const { label, type, onChange, value } = props;
    return <>
        <TextField id="standard-basic" label={label} variant="standard" type={type} onChange={onChange} value={value} />
    </>
}
export default TAInput;