window.appNextStep = 1;

//the initialize function calls google maps api to create a map
function initialize() {
	//mapoptions are used to define map settings
	var mapOptions = {
		center: new google.maps.LatLng(37.767316, -122.470354),
		zoom: 16,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		streetViewControl: false,
		zoomControl: false,
		mapTypeControl: false,
		disableDefaultUI: true
	 };

	//map variable holds a reference to the whole google map
	window.map = new google.maps.Map( document.getElementById("map-canvas"), mapOptions );
}

function step1(){
	$('.app-dialog-text').text('Hello, My Name is Mio. I am your guide to explore the garden.');

	//inital starting point
	var image6 = 'assets/location.png',
		markerimage6 = new google.maps.MarkerImage(image6,null,null,null,new google.maps.Size(33,33));
		
	//marker6 holds a reference to a marker placed on the map
	window.marker6 = new google.maps.Marker({
		position: new google.maps.LatLng(37.765500,-122.470400),
		map: map,
		icon: markerimage6
	});

	window.appNextStep = 2;

}

function step2(){
	$('.app-dialog-text').text('Here are the 3 trees on the map. Find and unlock them to get your badge.');
	map.setCenter(new google.maps.LatLng(37.767316, -122.470354));
	map.setZoom(16)

	//tree 1
	//infowindow1 variable holds a reference to an info window
	window.infowindow1 = new google.maps.InfoWindow({
		content: "<h1 id='window'><span id='window_n_1'>Monterey Cypress</span><hr size=1 color='#8fcc92'><div id='white'><span><img src='assets/tag.png' width='12' height='16'>8 [Main Lawn]</span></br></br><img src='assets/unlock.png' width='11' height='16'><span>20 points</span></div></br></h1>",
	});
	var image1 = 'assets/tree1_locked.png';
	var markerimage1 = new google.maps.MarkerImage(image1,null,null,null,new google.maps.Size(36,48));
	
	//marker1 holds a reference to a marker placed on the map
	window.marker1 = new google.maps.Marker({
			position: new google.maps.LatLng(37.767009,-122.467723),
			map: map,
			icon: markerimage1
		});
	 
	//now we can connect the click event on the marker called marker1 with the infowindow called infowindow1
	google.maps.event.addListener(marker1,"click",function() {
		infowindow1.open(map,marker1);
	});
 
	//add bounce on click event to marker1
	 marker1.setAnimation(google.maps.Animation.BOUNCE);
	 setTimeout(function(){
			marker1.setAnimation(google.maps.Animation.NONE);
	 },1500);
 


 	//tree 3
	window.infowindow3 = new google.maps.InfoWindow({
		content: "<h1 id='window'><span id='window_n_3'>Andean Wax Palm</span><hr size=1 color='#8fcc92'><div id='white'><img src='assets/tag.png' width='12' height='16'><span>55A [Andean Cloud Forest]</span></br></br><img src='assets/unlock.png' width='11' height='16'><span>20 points</span></div></br></h1>",
	});
	var image3 = 'assets/tree3_locked.png';
	var markerimage3 = new google.maps.MarkerImage(image3,null,null,null,new google.maps.Size(52,59));
	
	window.marker3 = new google.maps.Marker({
			position: new google.maps.LatLng(37.768781,-122.471318),
			map: map,
			icon: markerimage3
		});
	
	google.maps.event.addListener(marker3,"click",function() {
		infowindow3.open(map,marker3);
	});

    //add bounce on click event to marker3
	 marker3.setAnimation(google.maps.Animation.BOUNCE);
	 setTimeout(function(){
			marker3.setAnimation(google.maps.Animation.NONE);
	 },1500);

	 

 	



	//tree 5
	window.infowindow5 = new google.maps.InfoWindow({
		content: "<h1 id='window_5'><span id='window_n_5'>Coast Redwood</span></a><hr size=1 color='#8fcc92'><div id='white'><img src='assets/tag.png' width='12' height='16'><span>48A [Redwood Grove]</span></br></br><img src='assets/unlock.png' width='11' height='16'><span>20 points</span></div></br></h1>",
	});
	var image5 = 'assets/tree5_locked.png'; 
	var markerimage5 = new google.maps.MarkerImage(image5,null,null,null,new google.maps.Size(30,60));
	
	window.marker5 = new google.maps.Marker({
			position: new google.maps.LatLng(37.766118,-122.472067),
			map: map,  
			icon: markerimage5
		});
	 
	 google.maps.event.addListener(marker5,"click",function() {
		infowindow5.open(map,marker5);
	});
	 
	//add bounce on click event to marker5
	 marker5.setAnimation(google.maps.Animation.BOUNCE);
	 setTimeout(function(){
			marker5.setAnimation(google.maps.Animation.NONE);
	 },1500);

	 
 

	window.appNextStep = 3;

} //step 2

function step3() {
	$('.app-dialog-text').text('You can click each tree icon to see its information. Pick a tree, and find it.');
	map.setCenter(new google.maps.LatLng(37.767316, -122.470354));
	map.setZoom(16)

	window.appNextStep = 4;
}


//tree5 found
function step4(){
	$('.app-dialog-text').text('You found your first tree!');
	marker6.setPosition( new google.maps.LatLng(37.766088,-122.472058) );
	map.setCenter(new google.maps.LatLng(37.76610587404168, -122.47206399873738));
	map.setZoom(20);

	window.appNextStep = 5;

}

function step5(){
	$('.app-dialog-text').text('Augmented Reality (AR) is a way for your camera to augment the real world with data.');
	map.setCenter(new google.maps.LatLng(37.76813556043271, -122.4686188720703));
	map.setZoom(16);
	$('.unlock-tree-1').show();
	
	$('.button-next').hide();
	
	window.appNextStep = 6;

}

function step6(){
	$('.app-dialog-text').text('The first tree has been unlocked! Now let\'s go to the other two trees.');
	map.setCenter(new google.maps.LatLng(37.767316, -122.470354));
	map.setZoom(16);

	//update icon for unlocked tree
	var image5 = 'assets/tree5_unlocked.png',
		markerimage5 = new google.maps.MarkerImage(image5,null,null,null,new google.maps.Size(30,60));
	
	marker5.setIcon(markerimage5);

	$('.unlock-tree-1').hide();
	$('.button-next').show();
	marker6.setPosition( new google.maps.LatLng(37.766088,-122.472058) );

	window.appNextStep = 7;

}

//tree3 found
function step7(){
	$('.app-dialog-text').text('You found your second tree!');
	marker6.setPosition( new google.maps.LatLng(37.768779, -122.471341) );
	map.setCenter(new google.maps.LatLng(37.768781,-122.471318));
	map.setZoom(20);

	window.appNextStep = 8;

}

function step8(){
	$('.app-dialog-text').text('Augmented Reality (AR) is a way for your camera to augment the real world with data.');
	map.setCenter(new google.maps.LatLng(37.768781,-122.471318));
	map.setZoom(16);
	$('.unlock-tree-2').show();
	
	$('.button-next').hide();
	
	window.appNextStep = 9;

}

function step9(){
	$('.app-dialog-text').text('The second tree has been unlocked! Now let\'s go to the last tree.');
	map.setCenter(new google.maps.LatLng(37.76813556043271, -122.4686188720703));
	map.setZoom(16);

	//update icon for unlocked tree
	var image3 = 'assets/tree3_unlocked.png',
		markerimage3 = new google.maps.MarkerImage(image3,null,null,null,new google.maps.Size(52,59));
	
	marker3.setIcon(markerimage3);

	$('.unlock-tree-3').hide();
	$('.button-next').show();
	//tree 3
	marker6.setPosition( new google.maps.LatLng(37.768779, -122.471341));

	window.appNextStep = 10;

}

//tree1 found
function step10(){
	$('.app-dialog-text').text('You found your last tree!');
	marker6.setPosition( new google.maps.LatLng(37.766987, -122.467709) );
	map.setCenter(new google.maps.LatLng(37.767009,-122.467723));
	map.setZoom(20);

	window.appNextStep = 11;

}

function step11(){
	$('.app-dialog-text').text('Augmented Reality (AR) is a way for your camera to augment the real world with data.');
	map.setCenter(new google.maps.LatLng(37.76813556043271, -122.4686188720703));
	map.setZoom(16);
	$('.unlock-tree-3').show();
	
	$('.button-next').hide();
	
	window.appNextStep = 12;

}

function step12(){
	$('.app-dialog-text').text('You have unlocked all the three trees for Level One.');
	map.setCenter(new google.maps.LatLng(37.76813556043271, -122.4686188720703));
	map.setZoom(16);

	//update icon for unlocked tree
	var image1 = 'assets/tree1_unlocked.png',
		markerimage1 = new google.maps.MarkerImage(image1,null,null,null,new google.maps.Size(36,48));
	
	marker1.setIcon(markerimage1);

	$('.unlock-tree-3').hide();
	$('.button-next').show();
	marker6.setPosition( new google.maps.LatLng(37.766987, -122.467709) );

	map.setCenter(new google.maps.LatLng(37.76813556043271, -122.4686188720703));
	map.setZoom(16);

	window.appNextStep = 13;

}


	

	$('.tree-lover-badge').show();

// congratulations - this will be the second to last step
function step13(){
	$('.app-dialog-text').text('You can find your badges here.');
	map.setCenter(new google.maps.LatLng(37.76813556043271, -122.4686188720703));
	map.setZoom(16);

	$('.tree-lover-badge').hide();

	$('.module01.badge1').addClass('complete');
	$("#drawer").addClass("drawer-open");

	window.appNextStep = 14;

}

function step14(){
	$('.app-dialog-text').text('Let\'s start the next adventure!');
	map.setCenter(new google.maps.LatLng(37.76813556043271, -122.4686188720703));
	map.setZoom(16);

	$("#drawer").removeClass("drawer-open");
	$('.level-end').show();
	$('.button-next').hide();

	window.appNextStep = 15;

}


function setPath(){
	// plot polyline into map
	var polyLineCoordinates = [
			//1
			new google.maps.LatLng(37.767009,-122.467723),
			new google.maps.LatLng(37.766813,-122.467564),
			new google.maps.LatLng(37.766508,-122.467993),
			new google.maps.LatLng(37.766372,-122.46868),
			new google.maps.LatLng(37.76622,-122.468956),
			//2
			new google.maps.LatLng(37.766305,-122.469363),
			new google.maps.LatLng(37.766542,-122.469535),
			new google.maps.LatLng(37.766746,-122.469943),
			new google.maps.LatLng(37.766966,-122.469943),
			new google.maps.LatLng(37.767119,-122.470179),
			new google.maps.LatLng(37.767356,-122.470071),
			new google.maps.LatLng(37.767288,-122.470093),
			new google.maps.LatLng(37.767696,-122.470372),
			new google.maps.LatLng(37.767645,-122.470608),
			new google.maps.LatLng(37.768018,-122.470976),
			new google.maps.LatLng(37.768153,-122.470718),
			new google.maps.LatLng(37.768391,-122.470954),
			new google.maps.LatLng(37.768595,-122.470869),
		
			//3
			new google.maps.LatLng(37.768823,-122.471166),
			new google.maps.LatLng(37.768823,-122.471541),
			new google.maps.LatLng(37.768679,-122.47182),
			new google.maps.LatLng(37.768595,-122.471938),
			new google.maps.LatLng(37.768289,-122.472142),
			new google.maps.LatLng(37.76778,-122.472003),
			new google.maps.LatLng(37.768272,-122.472121),
			
			//4
			new google.maps.LatLng(37.767356,-122.471766),
			new google.maps.LatLng(37.767229,-122.471927),
			new google.maps.LatLng(37.767076,-122.471927),
			new google.maps.LatLng(37.766966,-122.47167),
			new google.maps.LatLng(37.76678,-122.47152),
			new google.maps.LatLng(37.766678,-122.471316),
		 
			//6
			new google.maps.LatLng(37.766355,-122.471405),

				
		];
	var polyLine = new google.maps.Polyline({
		path: polyLineCoordinates,
		strokeColor: 'white',            
		strokeOpacity: 1.0,
		strokeWeight: 6 
	});

	polyLine.setMap(map);
}

function pathProgress(){

	//current location
	marker6.setPosition( new google.maps.LatLng(37.766169,-122.471359) );

	//path progress
	var polyLineCoordinates = [
			//6
			new google.maps.LatLng(37.766355,-122.471405),
			new google.maps.LatLng(37.76622,-122.471573),
			//5
			new google.maps.LatLng(37.766118,-122.472067),     
	];
	var polyLine = new google.maps.Polyline({
			path: polyLineCoordinates,
			strokeColor: '#5d5d5d',
			strokeOpacity: 0,
			strokeWeight: 6 
		});

	polyLine.setMap(map);

}

//dom ready
$(function(){

	// temp - uncomment the following to skip start screen
	// initialize();
	// step1();
	
	$('#fb-connect').on('click', function(e){
		var fbState = $(this).find('span');

		$(this).addClass('connected');
		fbState.text('Connected');
	});

	$('#app-start').on('click', function(e){
		e.preventDefault();

		var $fbStatus = $('#fb-connect');

		if( $fbStatus.hasClass('connected') ){
			$('.app-main').addClass('on');
			$('.app-dialog').addClass('active');
			initialize();
			step1();
			$('.start-screen').addClass('off');
		} else {
			alert('please connect to facebook');
		}

	});


    $('#fb-share').on('click', function(e){
		var fbState = $(this).find('span');

		$(this).addClass('shared');
		fbState.text('Shared');
	});

	$('#app-start').on('click', function(e){
		e.preventDefault();

		var $fbStatus = $('#fb-share');

		if( $fbStatus.hasClass('shared') ){
			$('.app-main').addClass('on');
			$('.app-dialog').addClass('active');
			initialize();
			step1();
			
		}

	});




	$('html, body').on('click', function(e){
	  $('.modal').hide();
	  $('.button-next').show();
	});

	$('.modal').on('click', function(e){
	  e.stopPropagation();
	});

	$('#play-video-1').on('click', function(e){
		e.preventDefault();
		var video = $('#video-tree-1')[0];

		$('#video-tree-1').on("ended", function() {
		   step6();
		});

		video.play();

	});



	$('#play-video-2').on('click', function(e){
		e.preventDefault();
		var video = $('#video-tree-2')[0];

		$('#video-tree-2').on("ended", function() {
		   step9();
		});

		video.play();

	});

	$('#play-video-3').on('click', function(e){
		e.preventDefault();
		var video = $('#video-tree-3')[0];

		$('#video-tree-3').on("ended", function() {
		   step12();
		});

		video.play();

	});

	$('#save-quit').on('click', function(e){
		e.preventDefault();
		appReset();
	});

	//next button
	$(document).on('click', '.button-next', function(e){
		e.preventDefault();

		switch( window.appNextStep ){
			case 2:
				step2();
			break;

			case 3:
				step3();
			break;

			case 4:
				step4();
			break;

			case 5:
				step5();
			break;

			case 6:
				step6();
			break;

			case 7:
				step7();
			break;

			case 8:
				step8();
			break;

			case 9:
				step9();
			break;

			case 10:
				step10();
			break;

			case 11:
				step11();
			break;

			case 12:
				step12();
			break;

			case 13:
				step13();
			break;

			case 14:
				step14();
			break;

			case 15:
				appReset();
			break;

			case 16:
				appReset();
			break;

			case 17:
				appReset();
			break;
			
		}

	});

});

function appReset(){
	$('.modal').hide();
	$('.app-dialog').removeClass('active');

	$('#fb-connect').removeClass('connected');
	$('#fb-connect span').text('Connect');

	$('.start-screen').removeClass('off');
	$('.app-main').removeClass('on');

	window.appNextStep = 1;
}

function toggleDrawer() {
	$("#drawer").toggleClass("drawer-open");
}