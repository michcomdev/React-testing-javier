const getGifs = async (category) => {
    const apiKey = "UqyzU8q7snCYTHwd00pNS4gkmjnurHfs";
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURI(category)}&limit=5`);
        const res = await response.json();
        const { data } = res;
        const gifs = data.map(img => {
            return { id: img.id, title: img.title, url: img.images?.downsized_medium.url }
        })
        console.log(gifs);
        return gifs;
    } catch (error) {
        console.error(error);
        return error;
    }
}

export default getGifs