class InputQuestion {
    constructor(name,message){
        this.type="input",
        this.name = name,
        this.message = message
    }
}

const questions = [
    new InputQuestion("title", "What is the title of your project"),
    new InputQuestion("description", "What is your title about")
  ]


  module.exports = questions