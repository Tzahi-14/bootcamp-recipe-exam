class Renderer{
    constructor(){

    }
    render(data){
        $("#containar").empty()
        const source = $("#recapie-template").html()
        const template = Handlebars.compile(source)
        const newHtml = template({data})
        $("#containar").append(newHtml)
    }
}