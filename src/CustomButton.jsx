function CustomButton (props) {
    return (
        <span>
            <button
                style={{
                    backgroundColor: "#0047AB",
                    color: "white",
                    border: "0px",
                    paddingTop: 3,
                    paddingBottom: 3,
                    paddingRight: 10,
                    paddingLeft: 10,
                    margin: 5,
                    borderRadius: 5
            }}
                disabled={props.disabled}
                onClick={props.action}>
                {props.text}
            </button>
        </span>
    )
}

export default CustomButton;