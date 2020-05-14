import React from 'react'
import {render} from 'react-dom'
import * as $ from 'jquery';
import Post from '@models/post'
import logo from '@/assets/webpack-logo.png'
import './babel'
// import json from './assets/json'
// import xml from './assets/data.xml'
// import csv from './assets/data.csv'
import './css/styles.css'
import './css/less.less'
import './css/scss.scss'

const post = new Post(`Webpack post title`, logo)
// $('pre').addClass('code').html(post.toString())

const App = () => {
    return (
        <div className="container">
            <h1>Webpack course 2020</h1>
            <hr />
            <div className="logo" />
            <hr />
            <pre className='code'>
                {post.toString()}
            </pre>
            <hr />
            <div className="box">
                <h2>Less build</h2>
            </div>
            <hr />
            <div className="card">
                <h2>Scss build</h2>
            </div>
        </div>
    )
}

render(<App />, document.getElementById('app'))

// console.log(`JSON: ${json}`)
// console.log(`XML: ${xml}`)
// console.log(`CSV: ${csv}`)