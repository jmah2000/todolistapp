

const dataFetcher = async function (url=null)
{
    const response = await fetch(url)
    const jsonData = await response.json()

    return jsonData
}

export default dataFetcher
//export {dataFetcher}