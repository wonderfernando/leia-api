import express from "express"
import routes from "./routes.js"


class App {
    constructor(){
        this.app = express()
        this.middlewares()
        router()
    }

    middlewares(){
        this.app.use(express.json())
    }
    router(){
        this.app.use(routes)
    }
}
const appE = new App().app 
export default appE