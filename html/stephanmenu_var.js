/***********************************************************************************
*	(c) Ger Versluis 2000 version 5.411 24 December 2001 (updated Jan 31st, 2003 by Dynamic Drive for Opera7)
*	For info write to menus@burmees.nl		          *
*	You may remove all comments for faster loading	          *		
***********************************************************************************/

	var NoOffFirstLineMenus=8;			// Number of first level items
	var LowBgColor='white';				// Background color when mouse is not over
	var LowSubBgColor='white';			// Background color when mouse is not over on subs
	var HighBgColor='black';			// Background color when mouse is over
	var HighSubBgColor='black';			// Background color when mouse is over on subs
	var FontLowColor='black';			// Font color when mouse is not over
	var FontSubLowColor='black';			// Font color subs when mouse is not over
	var FontHighColor='white';			// Font color when mouse is over
	var FontSubHighColor='white';			// Font color subs when mouse is over
	var BorderColor='black';			// Border color
	var BorderSubColor='black';			// Border color for subs
	var BorderWidth=1;				// Border width
	var BorderBtwnElmnts=1;				// Border between elements 1 or 0
	var FontFamily="arial,comic sans ms,technical"	// Font family menu items
	var FontSize=9;					// Font size menu items
	var FontBold=1;					// Bold menu items 1 or 0
	var FontItalic=0;				// Italic menu items 1 or 0
	var MenuTextCentered='left';			// Item text position 'left', 'center' or 'right'
//	var MenuCentered='center';			// Menu horizontal position 'left', 'center' or 'right'
	var MenuCentered='left';			// Menu horizontal position 'left', 'center' or 'right'
	var MenuVerticalCentered='top';		// Menu vertical position 'top', 'middle','bottom' or static
	var ChildOverlap=.2;				// horizontal overlap child/ parent
	var ChildVerticalOverlap=.2;			// vertical overlap child/ parent
	var StartTop=25;				// Menu offset x coordinate
	var StartLeft=340;				// Menu offset y coordinate
	var VerCorrect=0;				// Multiple frames y correction
	var HorCorrect=0;				// Multiple frames x correction
	var LeftPaddng=3;				// Left padding
	var TopPaddng=2;				// Top padding
	var FirstLineHorizontal=0;			// SET TO 1 FOR HORIZONTAL MENU, 0 FOR VERTICAL
	var MenuFramesVertical=1;			// Frames in cols or rows 1 or 0
	var DissapearDelay=1000;			// delay before menu folds in
	var TakeOverBgColor=1;			// Menu frame takes over background color subitem frame
	var FirstLineFrame='navig';			// Frame where first level appears
	var SecLineFrame='space';			// Frame where sub levels appear
	var DocTargetFrame='space';			// Frame where target documents appear
	var TargetLoc='';				// span id for relative positioning
	var HideTop=0;				// Hide first level when loading new document 1 or 0
	var MenuWrap=1;				// enables/ disables menu wrap 1 or 0
	var RightToLeft=0;				// enables/ disables right to left unfold 1 or 0
	var UnfoldsOnClick=0;			// Level 1 unfolds onclick/ onmouseover
	var WebMasterCheck=0;			// menu tree checking on or off 1 or 0
	var ShowArrow=1;				// Uses arrow gifs when 1
	var KeepHilite=1;				// Keep selected path highligthed
	var Arrws=['tri.gif',5,10,'tridown.gif',10,5,'trileft.gif',5,10];	// Arrow source, width and height

function BeforeStart(){return}
function AfterBuild(){return}
function BeforeFirstOpen(){return}
function AfterCloseAll(){return}


// Menu tree
//	MenuX=new Array(Text to show, Link, background image (optional), number of sub elements, height, width);
//	For rollover images set "Text to show" to:  "rollover:Image1.jpg:Image2.jpg"

Menu1=new Array("Home","http://www3.telus.net/stephanstan","",0,20,138);

Menu2=new Array("Financial","blank.htm","",4);
	Menu2_1=new Array("Banking","blank.htm","",5,20,150);	
		Menu2_1_1=new Array("Ukrainian Credit Union","https://www5.memberdirect.net/direct/logon1.jsp?inst=/ab/communitysavings","",0,20,150);
		Menu2_1_2=new Array("CIBC","https://www.cibconline.cibc.com/bvtrx01/script-root-tran/authentication/PreSignOn.cibc?locale=en_CA","",0);
		Menu2_1_3=new Array("Tangerine","http://www.tangerine.ca","",0);
                Menu2_1_4=new Array("PAYPAL","https://www.paypal.com/cgi-bin/webscr?cmd=_login-run","",0);
                Menu2_1_5=new Array("Mastercard","http://www.citibank.com/canada/homepage/english/index.jsp","",0);
	Menu2_2=new Array("Utilities","blank.htm","",1,20,150);	
		Menu2_2_1=new Array("Enmax","https://www.enmax.com/energy/res/res+home.htm","",0,20,150);
	Menu2_3=new Array("Investing","blank.htm","",8);
		Menu2_3_1=new Array("TD Waterhouse","https://webbroker.tdwaterhouse.ca","",0,20,200);
		Menu2_3_2=new Array("Yahoo Finance","http://ca.finance.yahoo.com/portfolio/pf_10/view/v3","",0);
		Menu2_3_3=new Array("Sun Life Financial","http://mysunlife.ca","",0);
		Menu2_3_4=new Array("Morning Star","http://www.morningstar.ca","",0);
		Menu2_3_5=new Array("ROBTV","http://www.robtv.com","",0);
		Menu2_3_6=new Array("Stockhouse","http://www.stockhouse.ca","",0);
		Menu2_3_7=new Array("Globe and Mail","http://www.theglobeandmail.com","",0);
		Menu2_3_8=new Array("National Post","http://www.nationalpost.com","",0);
	Menu2_4=new Array("Investment Newsletters","blank.htm","",6);
		Menu2_4_1=new Array("Paul van Eeden","http://www.paulvaneeden.com","",0,20,200);
		Menu2_4_2=new Array("Oxford Club","http://www.oxfordclub.com","",0);
		Menu2_4_3=new Array("Emerging Capital Report","http://www.agorafinancial.com","",0);
		Menu2_4_4=new Array("Steve Sjuggerud's","http://www.stansburyresearch.com","",0);
		Menu2_4_5=new Array("Investment Reporter","http://www.adviceforinvestors.com","",0);
		Menu2_4_6=new Array("Investor's Digest of Canada","http://www.adviceforinvestors.com","",0);

Menu3=new Array("Mail","blank.htm","",4);
	Menu3_1=new Array("GMAIL","https://accounts.google.com/b/0/ManageAccount?nroma=1","",0,20,180);
	Menu3_2=new Array("TELUS","https://webmail.telus.net/telusbeta/driver?nimlet=showlogin","",0);
	Menu3_3=new Array("HOTMAIL","http://ca.msn.com","",0);
	Menu3_4=new Array("TELUS FAX","https://internetfax.telus.com/general/FindAccountS.asp","",0);

Menu4=new Array("Retail","javascript:top.location.href='blank.htm'","",9);
	Menu4_1=new Array("Amazon.ca","http://www.amazon.ca","",0,20,140);
	Menu4_2=new Array("Futureshop","http://www.futureshop.ca/home.asp?newlang=EN&logon=&langid=EN&dept=0&WLBS=fsweb7","",0,20,140);
	Menu4_3=new Array("Hudson Bay Company","http://www.hbc.com/landing.html","",0,20,140);
	Menu4_4=new Array("Memory Express","http://www.memoryexpress.com","",0,20,140);
	Menu4_5=new Array("Ereader","http://www.ereader.com/ereader/home.htm","",0,20,140);
	Menu4_6=new Array("LeBaron","http://www.lebaron.ca/english/main.htm","",0,20,140);
	Menu4_7=new Array("ABS Alaskan","http://www.absak.com","",0,20,140);
	Menu4_8=new Array("Garmin","http://www.garmin.com","",0,20,140);
	Menu4_9=new Array("VOX Long Distance","http://www.vox.ca","",0,20,140);
Menu5=new Array("CGI PAS","javascript:top.location.href='blank.htm'","",5);
	Menu5_1=new Array("PAS Sprint","https://pas.cgi-cal.com/passprint","",0,20,140);
	Menu5_2=new Array("PAS Wiki","https://pas.cgi-cal.com/wiki/admin/directory.html","",0,20,140);
	Menu5_3=new Array("Energy Portal","https://energy.cgi.com/pls/portal","",0,20,140);
	Menu5_4=new Array("Ted O'Grady Blog","http://tedogrady.blogspot.com","",0,20,140);
	Menu5_5=new Array("Industrial Alliance Benefits","https://www.inalco.com/english/index.jsp","",0,20,140);

Menu6=new Array("Search Engines","blank.htm","",3);
	Menu6_1=new Array("Altavista","http://www.altavista.com","",0,20,150);
	Menu6_2=new Array("Google","http://www.google.com","",0);
	Menu6_3=new Array("Yahoo","http://www.yahoo.com","",0);

Menu7=new Array("Weather","blank.htm","",4);
	Menu7_1=new Array("WX.ca","http://www.wx.ca","",0,20,150);
	Menu7_2=new Array("Weather Office","http://weather.gc.ca/city/pages/ab-52_metric_e.html","",0,20,150);
	Menu7_3=new Array("Weather Org","http://weather.org","",0,20,150);
	Menu7_4=new Array("EORC","http://sharaku.eorc.jaxa.jp/GSMaP/index.htm","",0,20,150);

Menu8=new Array("Sailing","blank.htm","",6);
	Menu8_1=new Array("Laser Org","http://www.laser.org/m/_general/default.asp","",0,20,150);
	Menu8_2=new Array("Laser Forum","http://www.laserforum.org","",0,20,150);
	Menu8_3=new Array("Sailing.ca","http://www.sailing.ca/home.asp","",0,20,150);
	Menu8_4=new Array("Sailing Rules","http://game.finckh.net/indexe.htm","",0,20,150);
	Menu8_5=new Array("Calgary Yacht Club","http://www.cyc.ab.ca","",0,20,150);
	Menu8_6=new Array("Alberta Sailing","http://www.albertasailing.com","",0,20,150);
	