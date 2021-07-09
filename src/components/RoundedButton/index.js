import React from "react-dom";
import { colors } from "../../constants/colors";
import sizes from "../../constants/sizes";
import { defaultTexts } from "../../constants/texts";
import "./style.css";

export default function ({
    label = defaultTexts.NO_TEXT,
    color = colors.BLUE_DARK,
    style = {},
    attributes = {},
}) {
    const defaultStyle = {
        fontSize: sizes.NORMAL,
        color: colors.WHITE,
        backgroundColor: color,
    };
    return (
        <button
            className="rounded-button"
            style={{
                ...defaultStyle,
                ...style,
            }}
            {...attributes}
        >
            {label}
        </button>
    );
}
