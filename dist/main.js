const renderer = new Renderer()

$("#btn-ingredient").on("click",function(){
    const ingredientValue = $("#input-ingredient").val()
    $.get(`/recipes/${ingredientValue}`,function(data){
        console.log(data)
        renderer.render(data)
    })
})

$("#containar").on("click","#img",function(){
    const firstIngredient = $(this).siblings(".ingredients").find(".ingredient")[0].textContent
    alert(firstIngredient)
})