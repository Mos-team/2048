var score=0;
var success_string = 'Success';
var board = new Array();
var has_conflict = new Array();
$(document).ready(function(){
	new_game();
});

function new_game(){
	init();
	generate_one_number();
	generate_one_number();
}

function init(){
	for(var i=0;i<4;i++){
		board[i]=new Array();
		has_conflict[i] = new Array();
		for(var j=0;j<4;j++){
			var grid_cell = $("#grid_cell_"+i+"_"+j);
			grid_cell.css("left",get_pos_left(j));
			grid_cell.css("top",get_pos_top(i));
			board[i][j]=0;
			has_conflict[i][j]=false;
		}
	}
	update_board_view();
}

function update_board_view(){
	$(".number_cell").remove();
	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			$('#grid_container').append('<div class="number_cell" id="number_cell_' + i + '_' + j + '"></div>');
			var number_cell = $('#number_cell_'+i+'_'+j);
			if(board[i][j]==0){
				number_cell.css("width",0);
				number_cell.css("height",0);
			}else{
				number_cell.css({width:100,height:100});
				number_cell.css("left",get_pos_left(j));
				number_cell.css("top",get_pos_top(i));
				number_cell.css("background-color",get_number_background_color(board[i][j]));
				number_cell.css("color",get_number_color(board[i][j]));
				number_cell.text(board[i][j]);
			}
			has_conflict[i][j] = false;
		}
	}
}

function generate_one_number(){
	if(full_space(board)){
		return false;
	}
	//随机一个位置
	var rand_x = Math.floor(Math.random()*4);
	var rand_y = Math.floor(Math.random()*4);
	while(board[rand_x][rand_y]!=0){//board[rand_x][rand_y]不为空时，重新生成，即只能在空格出生成随机数
		var rand_x = Math.floor(Math.random()*4);
		var rand_y = Math.floor(Math.random()*4);
	}
	//随机一个数字
	var rand_number = Math.random()<0.5?2:4;
	
	board[rand_x][rand_y] = rand_number;
	
	show_number_with_animation(rand_x, rand_y, rand_number);
    return true;
}

$(document).keydown(function(event){
	/*if($("#score").text()==success_string){
		new_game();
		return ;
	}*/
	switch(event.keyCode){
		case 37:	//left
			event.preventDefault(); //取消事件的默认动作
			
			if(move_left()){
				generate_one_number();
			}
		default:
			break;
	}
});

//action_move_left
function move_left(){
	if(!can_move_left(board)){
		return false;
	}
	
	for(var row=0;row<4;row++){
		for(var col =1;col<4;col++){
			for(var k=0;k<col;k++){
				if(board[row][k]==0 && no_block_horizontal(row,k,col,board)){
					//待检测的元素和落脚处的元素之间无障碍且落脚处元素为0,落脚点[row,k]
					showMoveLeftAnimation(row,col,row,k);
					board[row][k]=board[row][col];
					board[row][col]=0;
					continue;
				}else if(board[row][k]==board[row][col]&& no_block_horizontal(row,k,col,board)){
					//待检测的元素和落脚处的元素之间无障碍且两者数值相等,落脚点[row,k]
					showMoveLeftAnimation(row,col,row,k);
					board[row][k]+=board[row][col];
					board[row][col]=0;
					continue;
				}
			}
		}
	}
	update_board_view();
	setTimeout("update_board_view()",200);
	return true;
}
