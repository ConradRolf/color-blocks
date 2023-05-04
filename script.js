$(document).ready(onReady);
console.log('🟥 🟦 🟩 🟨');

function onReady(){
    console.log('Get some colors going!')

    $('#red-btn').on('click', redBlock);

    $('#blue-btn').on('click', blueBlock);

    $('#green-btn').on('click', greenBlock);

    $('#yellow-btn').on('click', yellowBlock);

    // $('.allBlocks').on('click', '.block', eatBlock);

    $('#red-btn').on('click', rCount)

    $('#blue-btn').on('click', bCount)

    $('#green-btn').on('click', gCount)

    $('#yellow-btn').on('click', yCount)
}

function rCount(){
    $('#red-count').html(function(i, val){
        return +val+1
    })
}

function bCount(){
    $('#blue-count').html(function(i, val){
        return +val+1
    })
}

function gCount(){
    $('#green-count').html(function(i, val){
        return +val+1
    })
}

function yCount(){
    $('#yellow-count').html(function(i, val){
        return +val+1
    })
}

function redBlock(){
    $('.allBlocks').append(`<p class="block">🟥</p>`)
}

function blueBlock(){
    $('.allBlocks').append(`<p class="block">🟦</p>`)
}

function greenBlock(){
    $('.allBlocks').append(`<p class="block">🟩</p>`)
}

function yellowBlock(){
    $('.allBlocks').append(`<p class="block">🟨</p>`)
}

// function eatBlock(){
//     $(this).remove();
// }

