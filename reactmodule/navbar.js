function navbar(arr){
    let returnData = arr.map((val)=>{
        return `
        <ul>
            <li>${val}</li>
        </ul>`
    })
    return returnData
}

export default navbar