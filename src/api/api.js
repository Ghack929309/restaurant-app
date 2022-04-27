import axios from 'axios'

export default axios.create({
    baseURL:'https://google-image-search1.p.rapidapi.com/',
    headers : {
        'X-RapidAPI-Host': 'google-image-search1.p.rapidapi.com',
        'X-RapidAPI-Key': 'bf4fa3a809msh4f703146c7597f5p1b3b10jsn0ee7d3d40646'
    }
})


