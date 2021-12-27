import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class EmptyPage extends Component {
    render() {
        return (
            <div>
                <h1>잘못된 접근입니다.</h1>
                <Link to="/">돌아가기</Link>
            </div>
        );
    }
}

export default EmptyPage;