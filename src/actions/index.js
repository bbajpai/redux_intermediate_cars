
const URL_ROOT = 'http://localhost:3005'

export function getCars(keyword){
   // console.log(`made a request with ${keyword}`)
    console.log(`${URL_ROOT}/carsIndex?q=${keyword}`);

    const request = fetch(`${URL_ROOT}/carsIndex?q=${keyword}`,{
    method:'GET'})
    .then(response => response.json())

    return {
         type:'SEARCH_CARS',
         payload:request
     }
}

export function carDetail(id){
    const request = fetch(`${URL_ROOT}/carsIndex?id=${id}`, {method:'GET'})
    .then(response => response.json())

    console.log(`${URL_ROOT}/carsIndex?id=${id}`);
   // console.log("Hiiiii" +request)
    //const request = fetch(`${URL_ROOT}`, {method:'POST',
    //    data:{
       //         firstname:"hello"}
   // } })
    //.then(response => response.json())

    return{
        type:'CAR_DETAIL',
        payload:request
    }

}

