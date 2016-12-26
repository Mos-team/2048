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
	for(var i=0;i<4;i++){
		for(var j=1;j<4;j++){
			if(board[i][j-1]==0||board[i][j]==board[i][j-1]){
				return true;
			}
		}
	}
	return false;
}

function no_block_horizontal(row,col1,col2,board){
	for(var j=col1+1;j<=col2;j++){
		if(board[row][j]!=0){
			return true;
		}
	}
	return false;
}