import { render, screen, fireEvent } from "@testing-library/react";
import RoundedButton from "./";

test("Render RoundedButton", () => {
    render(<RoundedButton label="Test RoundButton" />);
    const linkElement = screen.getByText("Test RoundButton");
    expect(linkElement).toBeInTheDocument();
});

test("Click RoundedButton", () => {
    const onClick = () => console.log("test click");
    render(<RoundedButton label="Test RoundButton" onClick={onClick} />);
    fireEvent.click(screen.getByText("Test RoundButton"));
    expect(onClick).toBeCalled;
});
