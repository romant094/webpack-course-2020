import Post from '@models/post'
import logo from '@/assets/webpack-logo.png'
// import json from './assets/json'
// import xml from './assets/data.xml'
// import csv from './assets/data.csv'
import './css/styles.css'

const post = new Post(`Webpack post title`, logo)

console.log(`Post to string: ${post.toString()}`)
// console.log(`JSON: ${json}`)
// console.log(`XML: ${xml}`)
// console.log(`CSV: ${csv}`)