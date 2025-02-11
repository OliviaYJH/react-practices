import React, {Component} from 'react';

export default class TitelBar01 extends Component {
    constructor(props) {
        super(props);
    }

    onClickTitleBar() {
        console.log('TitleBar01 Clicked!');
    }

    render() {
        return (
            <div>
                <h4 onClick={this.onClickTitleBar}>
                    Function Handler in Class Component(click here!)
                </h4>
            </div>
        );
    }
}