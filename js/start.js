$(document).ready(function () {
	/*
	    GLOBAL VARIABLES
	*/
	ct_debug = true;

	cb_shapes = {
		Square: "border-radius: 0px;",
		RoundedSquare: "border-radius: 10px;",
		Circle: "border-radius: 50px;",
		Skew: "-webkit-transform: rotate(-45deg); - moz - transform: rotate(-45 deg); - ms - transform: rotate(-45 deg); - o - transform: rotate(-45 deg);transform: rotate(-45 deg); - webkit - transform - origin: 0 100 % ; - moz - transform - origin: 0 100 % ; - ms - transform - origin: 0 100 % ; - o - transform - origin: 0 100 % ;transform - origin: 0 100 % ;",
		Diamond: "-webkit-transform: rotate(-45deg); - moz - transform: rotate(-45 deg); - ms - transform: rotate(-45 deg); - o - transform: rotate(-45 deg);transform: rotate(-45 deg); - webkit - transform - origin: 0 100 % ; - moz - transform - origin: 0 100 % ; - ms - transform - origin: 0 100 % ; - o - transform - origin: 0 100 % ;transform - origin: 0 100 % ;",
		DiamondIMGFix: "-webkit-transform: rotate(45deg); - moz - transform: rotate(45 deg); - ms - transform: rotate(45 deg); - o - transform: rotate(45 deg);transform: rotate(45 deg); - webkit - transform - origin: 0 100 % ; - moz - transform - origin: 0 100 % ; - ms - transform - origin: 0 100 % ; - o - transform - origin: 0 100 % ;transform - origin: 0 100 % ;"
	};

	//Eventually enable this obj to be loaded from a file on the server (and/or user account)
	var cb_themes = [{
		name: "default",
		whiteSquare: "#ffeccc",
		whiteSquareText: "#8d5b36",
		blackSquare: "#8d5b36",
		blackSquareText: "#ffeccc",
		whitePossiblePlaces: "rgba(210, 211, 210, 0.05)",
		permWhitePossiblePlaces: "rgba(245, 255, 0, 0.55)",
		blackPossiblePlaces: "rgba(210, 211, 210, 0.15)",
		permBlackPossiblePlaces: "rgba(245, 255, 0, 0.55)",
		boardShape: "Square"
    }, {
		name: "whacky",
		whiteSquare: "#ffccf5",
		whiteSquareText: "##00f7f7",
		blackSquare: "#00f7f7",
		blackSquareText: "#ffccf5",
		whitePossiblePlaces: "rgba(245, 255, 0, 0.55)",
		permWhitePossiblePlaces: "rgba(245, 255, 0, 0.55)",
		blackPossiblePlaces: "rgba(245, 255, 0, 0.55)",
		permBlackPossiblePlaces: "rgba(245, 255, 0, 0.55)",
		boardShape: "Skew"
    }];

	game_pve = true;
	game_playerSide = 'w';

	cb_autoPlayMove = setTimeout(function () {}, 0);
	cb_currentTheme = cb_themes[0];
	cb_autoPlay = false;
	cb_autoPlayDelay = 100;
	cb_fenHistoryMaxLength = 10;
	cb_permHighlighted = ["a6"];

	sf_searchDepth = '6';
    
    gui_blackCapturedId = "blackCaptured";
    gui_whiteCapturedId = "whiteCaptured";
    gui_capturedPieceSize = "50px";

	Init_Chessboard();
	Init_Stockfish();

	//BIND FUNCTIONS
	$("#undoBtn").click(function () {
		clearTimeout(cb_autoPlayMove);
		game.undo();
		board.position(game.fen(), false);
		updateStatus();
        checkForTaken(board.position());
	});

	$("#redoBtn").click(function () {});
});