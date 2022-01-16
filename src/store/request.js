import BUILDER from "./builder"

export function getprocessdata(){
    return BUILDER.request.request_get_process();
}