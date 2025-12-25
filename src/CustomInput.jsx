function CustomInput (props) {
    return (
        <span   >
                    <input
                        style={{
                            margin: 6,
                            border: 0,
                            borderBottom: "1px solid black",
                            backgroundColor: "transparent"

                        }}
                        placeholder={props.placeholder}
                        value={props.value}
                        onChange={props.onChange}
                        type={props.type ? props.type : "text"}
                    />

        </span>
    )
}

export default CustomInput;