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
$('pre').addClass('code').html(post.toString())

// console.log(`JSON: ${json}`)
// console.log(`XML: ${xml}`)
// console.log(`CSV: ${csv}`)