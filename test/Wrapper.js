import React from "react";
import TestUtils from "react-dom/test-utils";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class Wrapper extends React.Component {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}

const wrap = (element) => {
    return TestUtils.renderIntoDocument(
        <Wrapper>
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                {element}
            </MuiThemeProvider>
        </Wrapper>
    );
};

const wrapAndFindByTag = (element, tagName) => {
    const dom = wrap(element);
    return TestUtils.findRenderedDOMComponentWithTag(dom, tagName)
};

module.exports = {wrap, wrapAndFindByTag};