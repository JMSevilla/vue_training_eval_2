import BUILDER from "./builder"

const baseAPI = { 
    base : `/api`
}

const APIEntrypoint = (val = null) => {
    return baseAPI + `/` + val
}

const process = {
    async getprocess(){
        return await new Promise((resolve) => {
            return BUILDER.initialState.getAPIData(resolve)
        })
    }
}

export default {
    APIEntrypoint, process
}