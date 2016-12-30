function show_number_with_animation(x,y,number){
	var number_cell = $('#number_cell_'+x+'_'+y);
	number_cell.css("background-color",get_number_background_color(number));
	number_cell.css("color",get_number_color(number));
	number_cell.text(number);
	number_cell.animate({
		width:100,
		height:100,
		top:get_pos_top(x),
		left:get_pos_left(y),
	},50);
}

/*function showMoveLeftAnimation(x,y,des_x,des_y){
	var number_cell = $('#number_cell_'+x+'_'+y);
	number_cell.animate({
		top:get_pos_top(des_x),
		left:get_pos_left(des_y),
	},200);
}*/

function showMoveAnimation(x,y,des_x,des_y){
	var number_cell = $('#number_cell_'+x+'_'+y);
	number_cell.animate({
		top:get_pos_top(des_x),
		left:get_pos_left(des_y),
	},200);
}
