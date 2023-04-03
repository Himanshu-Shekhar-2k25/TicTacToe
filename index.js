var count = 0;
var Player1, Player2;
Player1_name = prompt("Enter The name of the first Player")
Player2_name = prompt("Enter the name of the second Player")
document.getElementById('toggle_Player_name').innerHTML = "Pick Your Symbol "+Player1_name;


var matrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
var draw_count = 0;

for (var i = 0; i < document.querySelectorAll('button').length; i++) {
    document.querySelectorAll('button')[i].addEventListener("click", function () {

        if (count == 0) {
            Player1 = this.innerHTML;
            document.getElementById('toggle_Player_name').innerHTML = "Pick Your Symbol "+Player2_name;
        }
        else if (count == 1) {
            Player2 = this.innerHTML;
            document.getElementById('toggle_Player_name').innerHTML = "Let's Play The Game🎉"
        }
        else if (count >= 2) {
            if (count % 2 == 0)
                changeSymbol_player1(this, draw_count)
            else
                changeSymbol_player2(this, draw_count)
            draw_count++;
        }
        count++;
    })
}

function changeSymbol_player1(currBtn, draw_count) {
    currBtn.innerHTML = Player1;
    draw_count++;
    checkWin(currBtn, draw_count, 1);
}

function changeSymbol_player2(currBtn, draw_count) {
    currBtn.innerHTML = Player2;
    draw_count++;
    checkWin(currBtn, draw_count, 2);
}

function checkWin(currBtn, count_draw, player) {
    var code = 0;
    if (player == 1)
        code = 1;
    else if (player == 2)
        code = 2;


    if (count_draw == 9) {
        document.getElementById('result').innerHTML = 'RESULT = 🍿Draw';
    }

    var flag_win = 0;
    switch (currBtn.id) {
        case 'Tile1':
            {
                matrix[0][0] = code
                if((matrix[0][1] == code && matrix[0][2] == code) || (matrix[1][0] == code && matrix[2][0] == code) || (matrix[1][1] == code && matrix[2][2] == code))
                {
                    flag_win  = 1;
                }
                break;
            }
        case 'Tile2':
            {
                matrix[0][1] = code;
                if((matrix[0][0] == code && matrix[0][2] == code) || (matrix[1][1] == code && matrix[2][1] == code))
                {
                    flag_win  = 1;
                }
                break;
            }
        case 'Tile3':
            {
                matrix[0][2] = code;
                if((matrix[0][0] == code && matrix[0][1] == code) || (matrix[1][1] == code && matrix[2][0] == code) || (matrix[1][2] == code && matrix[2][2] ==code))
                {
                    flag_win  = 1;
                }
                break;
            }
        case 'Tile4':
            {
                matrix[1][0] = code;
                if((matrix[0][0] == code && matrix[2][0] == code) || (matrix[1][1] == code && matrix[1][2] == code))
                {
                    flag_win  = 1;
                }
                break;
            }
        case 'Tile5':
            {
                matrix[1][1] = code;
                if((matrix[0][0] == code && matrix[2][2] == code) || (matrix[1][0] == code && matrix[1][2] == code) || (matrix[0][1] == code && matrix[2][1] ==code))
                {
                    flag_win  = 1;
                }
                break;
            }
        case 'Tile6':
            {
                matrix[1][2] = code;
                if((matrix[0][2] == code && matrix[2][2] == code) || (matrix[1][0] == code && matrix[1][1] == code))
                {
                    flag_win  = 1;
                }
                break;
            }
        case 'Tile7':
            {
                matrix[2][0] = code;
                if((matrix[1][0] == code && matrix[0][0] == code) || (matrix[2][1] == code && matrix[2][2] == code) || (matrix[1][1] == code && matrix[0][2] ==code))
                {
                    flag_win  = 1;
                }
                break;
            }
        case 'Tile8':
            {
                matrix[2][1] = code;
                if((matrix[0][1] == code && matrix[1][1] == code) || (matrix[2][2] == code && matrix[2][0] == code))
                {
                    flag_win  = 1;
                }
                break;
            }
        case 'Tile9':
            {
                matrix[2][2] = code;
                if((matrix[0][0] == code && matrix[1][1] == code) || (matrix[2][0] == code && matrix[2][1] == code) || (matrix[0][2] == code && matrix[1][2] ==code))
                {
                    flag_win  = 1;
                }
                break;
            }
    }
    if(flag_win == 1 && currBtn.innerHTML != ' ')
    {
        if(player == 1)
        document.getElementById('result').innerHTML = 'RESULT = '+Player1_name+" 🥇 Wins";
        else if(player == 2)
        document.getElementById('result').innerHTML = 'RESULT = '+Player2_name+"🥇 Wins";
        return;
    }
}
