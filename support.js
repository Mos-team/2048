function get_pos_left(j){
	return 20+j*120;
}

function get_pos_top(i){
	return 20+i*120;
}

//背景色
function get_number_background_color(number) {
    switch (number) {
        case 2:
            return '#eee4da';
            break;
        case 4:
            return '#ede0c8';
            break;
        case 8:
            return '#f2b179';
            break;
        case 16:
            return '#f59563';
            break;
        case 32:
            return '#f67c5f';
            break;
        case 64:
            return '#f65e3b';
            break;
        case 128:
            return '#edcf72';
            break;
        case 256:
            return '#edcc61';
            break;
        case 512:
            return '#9c0';
            break;
        case 1024:
            return '#33b5e5';
            break;
        case 2048:
            return '#09c';
            break;
        case 4096:
            return '#a6c';
            break;
        case 8192:
            return '#93c';
            break;
    }
    return 'black';
}

//数字的颜色
function get_number_color(number) {
    if (number <= 4)
        return '#776e65';
    return 'white';
}

//判断是否有空格
function full_space(board) {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (board[i][j] == 0) {
                return false;
            }
        }
    }
    return true;
}

function can_move_left(board){
	//不考虑左侧一列
	for(var i=0;i<4;i++){
		for(var j=1;j<4;j++){
			if(board[i][j-1]==0||board[i][j]==board[i][j-1]){
				return true;
			}
		}
	}
	return false;
}

function can_move_right(board){
	//不考虑右侧一列
	for(var i=0;i<4;i++){
		for(var j=0;j<3;j++){
			if(board[i][j+1]==0||board[i][j]==board[i][j+1]){
				return true;
			}
		}
	}
	return false;
}

function can_move_up(board){
	//不考虑顶部一行
	for(var i=1;i<4;i++){
		for(var j=0;j<4;j++){
			if(board[i-1][j]==0||board[i][j]==board[i-1][j]){
				return true;
			}
		}
	}
	return false;
}

function can_move_down(board){
	//不考虑底部一行
	for(var i=0;i<3;i++){
		for(var j=0;j<4;j++){
			if(board[i+1][j]==0||board[i][j]==board[i+1][j]){
				return true;
			}
		}
	}
	return false;
}

//水平方向无障碍物
function no_block_horizontal(row,col1,col2,board){
	for(var j=col1+1;j<col2;j++){
		if(board[row][j]!=0){//水平方向有障碍物
			return false;
		}
	}
	return true;
}

function no_block_vertical(row1,row2,col,board){
	for(var i=row1+1;i<row2;i++){
		if(board[i][col]!=0){ //垂直方向有障碍物
			return false;
		}
	}
	return true;
}

function noMove(board){	if(can_move_left(board)||can_move_right(board)||can_move_up(board)||can_move_down(board)){
		return false;
	}
	return true;
}

function nospace(board){
	for(var row=0;row<4;row++){
		for(var col=0;col<4;col++){
			if(board[row][col]!=0){
				return true;
			}
		}
	}
	return true;
}