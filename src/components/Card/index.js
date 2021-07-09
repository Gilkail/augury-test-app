import React from "react-dom";
import { colors } from "../../constants/colors";
import sizes from "../../constants/sizes";
import "./style.css";

export default function ({ children, style = {}, titleStyle = {}, title }) {
    const defaultCardStyle = {
        backgroundColor: colors.WHITE,
        borderColor: colors.GRAY_DARK,
    };
    const defaultTitleStyle = {
        fontSize: sizes.X_LARGE,
        borderBottomColor: colors.GRAY,
    };
    const cardTitle = title ? (
        <h2
            className="card__title"
            style={{ ...defaultTitleStyle, ...titleStyle }}
        >
            {title}
        </h2>
    ) : (
        ""
    );
    return (
        <div className="card" style={{ ...defaultCardStyle, ...style }}>
            {cardTitle}
            <div className="card__content">{children}</div>
        </div>
    );
}
