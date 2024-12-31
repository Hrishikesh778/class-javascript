function navbar(arr){
    let returnData = arr.map((val)=>{
        return `
            <a href=${val.link}><li>${val.item}</li></a>
    `})
    return returnData.join(" ")
}

export default navbar