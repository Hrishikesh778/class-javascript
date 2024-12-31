function cards(prop){
    console.log(prop,"props")
    let cardMapData = prop.map((val)=>{
        return `
            <div>
                <img src=${val.imgSrc}>
                <h2>${val.content}</h2>
            </div>
        `
    })

    console.log(cardMapData,"sdcsd")
    return cardMapData.join(" ")
}

export default cards