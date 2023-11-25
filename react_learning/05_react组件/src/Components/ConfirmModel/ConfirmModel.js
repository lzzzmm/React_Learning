import "./ComfirmModel.css"
import Card from "../UI/Card/Card";
import BackDrop from "../BackDrop/BackDrop";
const ConfirmModel = props=>{
    return <BackDrop>
        <Card className={"confirmModel"}>
            <div className={"confirmText"}>
                {props.confirmTest}
            </div>
            <div className={"confirmButton"}>
                <button className={"onButton"} onClick={props.onConfirm}>确认</button>
                <button onClick={props.onCancel}>取消</button>
            </div>
        </Card>
    </BackDrop>
};

export default ConfirmModel;