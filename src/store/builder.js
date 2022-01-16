
import {APIEntrypoint} from "./route-api"
import p from "./route-api"
import c from "./http-common"
const initialState = {
    getAPIData(resolve) {
        const req = c.get(APIEntrypoint(`qa-tester/`) + `get-data`)
        return response.responseData(resolve, req)
    }
}

const response = { 
    responseData(resolve, res){
        return resolve(res)
    }
}

const request = { 
    async request_get_process(){
        return p.process.getprocess()
    }
}

export default {
    initialState, request
}