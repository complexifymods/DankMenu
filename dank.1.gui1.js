
//base made by stormzmodz
//Everything Coded By StormzModz
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var MainActivity = ctx;
var Button = android.widget.Button;
var LinearLayout = android.widget.LinearLayout;
var RelativeLayout = android.widget.RelativeLayout;
var PopupWindow = android.widget.PopupWindow;
var ScrollView = android.widget.ScrollView;
var TextView = android.widget.TextView;
var CheckBox = android.widget.CheckBox;
var Switch = android.widget.Switch;
var Toast = android.widget.Toast;
var Runnable = java.lang.Runnable;
var View = android.view.View;
var ColorDrawable = android.graphics.drawable.ColorDrawable;
var Color = android.graphics.Color;
var Gravity = android.view.Gravity;
var Intent = android.content.Intent;
var Uri = android.net.Uri;
var File = java.io.File;
var System = java.lang.System;
var SystemClock = android.os.SystemClock;
var CONTEXT = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var Thread = java.lang.Thread;
var PendingIntent = android.app.PendingIntent;
var path;
path = android.os.Environment.getExternalStorageDirectory().getPath() + "/dank_configurator/";
var path2;
path2 = android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftpe/";
var accesskey;
accesskey = "assssss";
var accesskey1;
accesskey1 = "activated1";
var position;
var clientId;
var pl;
var position;
var colorr;
var cl;
var bggcolor = new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLUE)
var blue = new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLUE)
var red = new android.graphics.drawable.ColorDrawable(android.graphics.Color.RED)
var green = new android.graphics.drawable.ColorDrawable(android.graphics.Color.GREEN)
var white = new android.graphics.drawable.ColorDrawable(android.graphics.Color.WHITE)
var black = new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK)
var ver = 0;
var hor = 0;
var pos = center; 
 var center = android.view.Gravity.CENTER;
var right = android.view.Gravity.RIGHT;
var left = android.view.Gravity.LEFT;
function save(path, filename, content) {
 try {
 java.io.File(path).mkdirs();
 var newFile = new java.io.File(path, filename);
 newFile.createNewFile();
 var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
 outWrite.append(content);
 outWrite.close();
 } catch(err) {
 clientMessage(err);
 }
}

function load(path, filename) {
 var content = "";
 if (java.io.File(path + filename).exists()) {
 var file = new java.io.File(path + filename),
 fos = new java.io.FileInputStream(file),
 str = new java.lang.StringBuilder(),
 ch;
 while ((ch = fos.read()) != -1) {str.append(java.lang.Character(ch)); }
 content = String(str.toString());
 fos.close();
 }
 return content;
}

function savee(){
	var accesskey = "(1,1,3,5,3,1,4,9,9,2,1,5,2,1,3,2,1)";
 var accesskey1 = "active2";
	 save(path, "ZGFua21lbnU.bin", accesskey + ";" + accesskey1 + ";" );
	}
	function loadd(){
		var content = load(path, "ZGFua21lbnU.bin");
	accesskey = content.split(";")[0];
	accesskey1 = content.split(";")[1];
	if(accesskey == "(1,1,3,5,3,1,4,9,9,2,1,5,2,1,3,2,1)"){
		checkid();
}else{
premiumenabler();

		
}
}
loadd();

function savepayload(){
	var pl = position;
	var colorr = cl;
	 save(path, "cG9zaXRpb24.bin", pl + ";" );
	}
	function loaddd(){
		var content = load(path, "cG9zaXRpb24.bin");
	pl = content.split(";")[0];
	colorr = content.split(";")[1];
	if(pl == "right"){
	pos = right;
	ver = 100;
    hor = 100;
	}
	if(pl == "left"){
		pos = left;
		ver = 100;
						hor = 100;
		}
		if(pl=="center"){
			pos = center;
hor = 100;
}
if(colorr=="blue"){
		bggcolor = blue;
		}
		if(colorr=="red"){
		bggcolor = red;
}
}
loaddd();

function savepayloadd(){
	var colorr = cl;
	 save(path, "Y29sb3I.bin", colorr + ";" );
	}
	function loadddd(){
		var content = load(path, "Y29sb3I.bin");
	colorr = content.split(";")[0];
	
if(colorr=="blue"){
		bggcolor = blue;
		}
		if(colorr=="red"){
		bggcolor = red;
		}
		if(colorr=="green"){
		bggcolor = green;
		}
		if(colorr=="white"){
		bggcolor = white;
		}
		if(colorr=="black"){
		bggcolor = black;
}
}
loadddd();
function checkid(){
		var content = load(path2, "clientId.txt");
	if(content == "1494345104295286731"){
		pregame();
	
}else{
	alertToast("We can't seem to find you in the Dank beta");


		
}
}
function viewclientId(){
		var content = load(path2, "clientId.txt");
	alertToast("Your clientId is: "+content+"");
		

}
	

function alertToast(text) {
	try {
		var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
		ctx.runOnUiThread(new java.lang.Runnable({
			run: function () {
				
var thetoast = android.widget.Toast.makeText(com.mojang.minecraftpe.MainActivity.currentMainActivity.get(), "" + text, android.widget.Toast.LENGTH_LONG);
				var layout = new android.widget.LinearLayout(ctx);
				var msg = new android.widget.TextView(ctx);
				var icon = new android.widget.ImageView(ctx);
				icon.setImageResource(android.R.drawable.ic_menu_info_details);
				msg.setText(text);
				msg.setGravity(android.view.Gravity.CENTER);
				msg.setTextSize(16);
				msg.setTextColor(android.graphics.Color.WHITE);
				msg.setPadding(10,10,10,10);
				 var bbg = new android.graphics.drawable.GradientDrawable();
bbg.setColor(android.graphics.Color.BLUE);
bbg.setStroke(8, android.graphics.Color.BLACK); 
bbg.setCornerRadius(0); //
				layout.addView(icon);
				layout.addView(msg);
				
				layout.setBackground(bbg);
				
			
thetoast.setView(layout);
				thetoast.show();
			}
		}));
		
	} catch(e) {
		print(e);
	}
}

function offlineToast(text) {
	try {
		var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
		ctx.runOnUiThread(new java.lang.Runnable({
			run: function () {
				
var thetoast = android.widget.Toast.makeText(com.mojang.minecraftpe.MainActivity.currentMainActivity.get(), "" + text, android.widget.Toast.LENGTH_LONG);
				var layout = new android.widget.LinearLayout(ctx);
				var msg = new android.widget.TextView(ctx);
				var icon = new android.widget.ImageView(ctx);
				icon.setImageResource(android.R.drawable.presence_offline);
				msg.setText(text);
				msg.setGravity(android.view.Gravity.CENTER);
				msg.setTextSize(16);
				msg.setTextColor(android.graphics.Color.WHITE);
				msg.setPadding(10,10,10,10);
				 var bbg = new android.graphics.drawable.GradientDrawable();
bbg.setColor(android.graphics.Color.BLUE);
bbg.setStroke(8, android.graphics.Color.BLACK); 
bbg.setCornerRadius(0); //
				layout.addView(icon);
				layout.addView(msg);
				
				layout.setBackground(bbg);
				
			
thetoast.setView(layout);
				thetoast.show();
			}
		}));
		
	} catch(e) {
		print(e);
	}
}
function onlineToast(text) {
	try {
		var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
		ctx.runOnUiThread(new java.lang.Runnable({
			run: function () {
				
var thetoast = android.widget.Toast.makeText(com.mojang.minecraftpe.MainActivity.currentMainActivity.get(), "" + text, android.widget.Toast.LENGTH_LONG);
				var layout = new android.widget.LinearLayout(ctx);
				var msg = new android.widget.TextView(ctx);
				var icon = new android.widget.ImageView(ctx);
				icon.setImageResource(android.R.drawable.presence_online);
				msg.setText(text);
				msg.setGravity(android.view.Gravity.CENTER);
				msg.setTextSize(16);
				msg.setTextColor(android.graphics.Color.WHITE);
				msg.setPadding(10,10,10,10);
				 var bbg = new android.graphics.drawable.GradientDrawable();
bbg.setColor(android.graphics.Color.BLUE);
bbg.setStroke(8, android.graphics.Color.BLACK); 
bbg.setCornerRadius(0); //
				layout.addView(icon);
				layout.addView(msg);
				
				layout.setBackground(bbg);
				
			
thetoast.setView(layout);
				thetoast.show();
			}
		}));
		
	} catch(e) {
		print(e);
	}
}
//Save function

function customTextView(mod, desc) {
var textview = new android.widget.TextView(ctx);
if(typeof(mod) != "undefined")textview.setText(mod);
textview.setOnLongClickListener(new android.view.View.OnLongClickListener({
onLongClick: function (viewarg) {
if(typeof(desc) != "undefined")alertToast(desc);
return true;
}
}));
return textview;
}
function debugTextView(mod) {
var textview = new android.widget.TextView(ctx);
if(typeof(mod) != "undefined")textview.setText(mod);
textview.setOnLongClickListener(new android.view.View.OnLongClickListener({
onLongClick: function (viewarg) {
if(typeof(mod) != "undefined")
  debugmenu();
return true;
}
}));
return textview;
}

function yeetskeet() {
	
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable() {
		run: function () {
			try {
				popupp = new android.widget.PopupWindow();
				var Layer = new android.widget.LinearLayout(ctx);
				Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
				var aainput = new android.widget.EditText(ctx);
			var item1 = new android.widget.EditText(ctx);
			var item2 = new android.widget.EditText(ctx);
			 var Log= new Button(ctx);
			var Dev = new Button(ctx);
				var Dialog = new android.app.Dialog(ctx);
				Dialog.setContentView(Layer);
				Dialog.show();
				Layer.addView(item1);
				Layer.addView(okynot);
		
					
		
				
				popupp.setHeight(100);
popupp.setWidth(100);
				popupp.showAtLocation(ctx.getWindow()
					.getDecorView(), android.view.Gravity.TOP, 0, 0);
			} catch (e) {
				print("verify dialog:" + e);
			}
		}
	});
}

function terminal() {
	
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable() {
		run: function () {
			try {
				popupp = new android.widget.PopupWindow();
				var Layer = new android.widget.LinearLayout(ctx);
				Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
				var aainput = new android.widget.EditText(ctx);
			var item1 = new android.widget.EditText(ctx);
			
			var Exit = new Button(ctx);
			 var Log= new Button(ctx);
			var Dev = new Button(ctx);
				var Dialog = new android.app.Dialog(ctx);
				Dialog.setContentView(Layer);
				Dialog.show();
				Layer.addView(item1);
				
				item1.setText("");
			item1.setHint("Select Weapon Id");
		
	
Exit.setText("Generate Weapon");		Exit.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.GRAY));	
Exit.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (view) {
					weapon = item1.getText();
Entity.setOffhandSlot(getPlayerEnt(), weapon, 1, 0);
var lvl = "32767";
Player.enchant(weapon, Enchantment.FIRE_ASPECT, lvl);
Player.enchant(weapon, Enchantment.KNOCKBACK, lvl);
Player.enchant(weapon, Enchantment.LOOTING, lvl);
Player.enchant(weapon, Enchantment.SHARPNESS, lvl);
Player.enchant(weapon, Enchantment.UNBREAKING, lvl);
Player.setItemCustomName(weapon, "Modded Weapon");

					}
				});
				Layer.addView(Exit);
				
				popupp.setHeight(100);
popupp.setWidth(100);
				popupp.showAtLocation(ctx.getWindow()
					.getDecorView(), android.view.Gravity.TOP, 0, 0);
			} catch (e) {
				print("verify dialog:" + e);
			}
		}
	});
}

function aranges(){
				
if("/alert" == message) {
                 alertdialog();
						}
						}
						
function pregame() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var autoudLayout = new android.widget.LinearLayout(ctx);
            var autoudScroll = new android.widget.ScrollView(ctx);
            var autoudLayout1 = new android.widget.LinearLayout(ctx);
          
 autoudLayout.setOrientation(1);
            autoudLayout1.setOrientation(1);
            autoudScroll.addView(autoudLayout);
            autoudScroll.setLayerType(View.LAYER_TYPE_SOFTWARE, null);
            autoudLayout1.addView(autoudScroll);
     
     var autoudInfo = new TextView(ctx);
		    autoudInfo.setTextSize(13);
autoudInfo.setText("Dank v1.1 BETA");
			autoudInfo.setTextColor(android.graphics.Color.WHITE);
			autoudInfo.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));

			autoudInfo.setGravity(Gravity.CENTER);
			autoudLayout.addView(autoudInfo);  

var autoudInfo = new TextView(ctx);
		    autoudInfo.setTextSize(12);
autoudInfo.setText("Changelog");
			autoudInfo.setTextColor(android.graphics.Color.WHITE);
			autoudInfo.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

			autoudInfo.setGravity(Gravity.CENTER);
			autoudLayout.addView(autoudInfo);  
			
			var autoudInfo = new TextView(ctx);
		    autoudInfo.setTextSize(12);
autoudInfo.setText("Added esp tab, Added chest esp, Added Xray(working), Added Module descriptions(hold module button to activate), Developer Settings Fixed, Beta Authenication(No leak), Check clientId key");
			autoudInfo.setTextColor(android.graphics.Color.WHITE);
			autoudInfo.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

			autoudInfo.setGravity(Gravity.CENTER);
			autoudLayout.addView(autoudInfo);  

var autoudInfo = new Button(ctx);
		    autoudInfo.setTextSize(12);
autoudInfo.setText("Close");
			autoudInfo.setTextColor(android.graphics.Color.WHITE);
			autoudInfo.setGravity(Gravity.CENTER);
			autoudInfo.setBackground(bg2);
		autoudInfo.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
autoud.dismiss();
opener();
}
}));
autoudLayout.addView(autoudInfo);
			
			
autoud = new PopupWindow(autoudLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/1.7, ctx.getWindowManager().getDefaultDisplay().getHeight()/1.3);
	        autoud.setAnimationStyle(android.R.style.Animation_InputMethod);
            autoud.setBackgroundDrawable(new ColorDrawable(Color.BLACK));
            autoud.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP, 0, 0);
        } catch(error) {
            print("An error occured: " + error);
        }
    }}));
}
function premiumenabler() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var premiumLayout = new android.widget.LinearLayout(ctx);
            var premiumScroll = new android.widget.ScrollView(ctx);
            var premiumLayout1 = new android.widget.LinearLayout(ctx);
          
 premiumLayout.setOrientation(1);
            premiumLayout1.setOrientation(0);
            premiumScroll.addView(premiumLayout);
            premiumScroll.setLayerType(View.LAYER_TYPE_SOFTWARE, null);
            premiumLayout1.addView(premiumScroll);
     
     var autoudInfo = new Button(ctx);
		    autoudInfo.setTextSize(12);
autoudInfo.setText("Dank Installer");
			autoudInfo.setTextColor(android.graphics.Color.WHITE);
			autoudInfo.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
			autoudInfo.setGravity(Gravity.CENTER);
			premiumLayout.addView(autoudInfo);  

var premiumInfo = new Button(ctx);
		    premiumInfo.setTextSize(12);
premiumInfo.setText("Download Menu");
			premiumInfo.setTextColor(android.graphics.Color.WHITE);
			premiumInfo.setGravity(Gravity.CENTER);
			premiumInfo.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLUE));
		premiumInfo.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
premium.dismiss();
savee();
ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE).vibrate(100);
	alertToast("Patching...");
			dankrestart();
			
}
}));
premiumLayout1.addView(premiumInfo);

			
			
premium = new PopupWindow(premiumLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/1.7, ctx.getWindowManager().getDefaultDisplay().getHeight()/1.3);
	        premium.setAnimationStyle(android.R.style.Animation_InputMethod);
            premium.setBackgroundDrawable(new ColorDrawable(Color.BLACK));
            premium.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, 0, 0);
        } catch(error) {
            print("An error occured: " + error);
        }
    }}));
}
function alolenabler() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var alolLayout = new android.widget.LinearLayout(ctx);
            var alolScroll = new android.widget.ScrollView(ctx);
            var alolLayout1 = new android.widget.LinearLayout(ctx);
          
 alolLayout.setOrientation(1);
            alolLayout1.setOrientation(1);
            alolScroll.addView(alolLayout);
            alolScroll.setLayerType(View.LAYER_TYPE_SOFTWARE, null);

   alolLayout1.addView(alolScroll);
     
     var alolInfo = new Button(ctx);
		    alolInfo.setTextSize(12);
alolInfo.setText("This requires a restart. Do you want to continue?");
			alolInfo.setTextColor(android.graphics.Color.WHITE);
			alolInfo.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
			alolInfo.setGravity(Gravity.CENTER);
			alolLayout1.addView(alolInfo);  

var alolInfo = new Button(ctx);
		    alolInfo.setTextSize(12);
alolInfo.setText("Yes");
			alolInfo.setTextColor(android.graphics.Color.WHITE);
			alolInfo.setGravity(Gravity.CENTER);
			alolInfo.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLUE));
		alolInfo.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
alol.dismiss();
savepayload();
ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE).vibrate(100);
	alertToast("Working...");
			dankrestart();
			
}
}));
alolLayout1.addView(alolInfo);

			var alolInfo = new Button(ctx);
		    alolInfo.setTextSize(12);
alolInfo.setText("No");
			alolInfo.setTextColor(android.graphics.Color.WHITE);
			alolInfo.setGravity(Gravity.CENTER);
			alolInfo.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLUE));
		alolInfo.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
alol.dismiss();
ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE).vibrate(100);
	alertToast("User selected no");
			opener();
}
}));
alolLayout1.addView(alolInfo);
			
alol = new PopupWindow(alolLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, RelativeLayout.LayoutParams.WRAP_CONTENT);
	        alol.setAnimationStyle(android.R.style.Animation_InputMethod);
            alol.setBackgroundDrawable(new ColorDrawable(Color.BLACK));
            alol.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, 0, 0);
        } catch(error) {
            print("An error occured: " + error);
        }
    }}));
}

function alollenabler() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var alolLayout = new android.widget.LinearLayout(ctx);
            var alolScroll = new android.widget.ScrollView(ctx);
            var alolLayout1 = new android.widget.LinearLayout(ctx);
          
 alolLayout.setOrientation(1);
            alolLayout1.setOrientation(1);
            alolScroll.addView(alolLayout);
            alolScroll.setLayerType(View.LAYER_TYPE_SOFTWARE, null);

   alolLayout1.addView(alolScroll);
     
     var alolInfo = new Button(ctx);
		    alolInfo.setTextSize(12);
alolInfo.setText("This requires a restart. Do you want to continue?");
			alolInfo.setTextColor(android.graphics.Color.WHITE);
			alolInfo.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
			alolInfo.setGravity(Gravity.CENTER);
			alolLayout1.addView(alolInfo);  

var alolInfo = new Button(ctx);
		    alolInfo.setTextSize(12);
alolInfo.setText("Yes");
			alolInfo.setTextColor(android.graphics.Color.WHITE);
			alolInfo.setGravity(Gravity.CENTER);
			alolInfo.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLUE));
		alolInfo.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
aloll.dismiss();
savepayloadd();
ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE).vibrate(100);
	alertToast("Working...");
			dankrestart();
			
}
}));
alolLayout1.addView(alolInfo);

			var alolInfo = new Button(ctx);
		    alolInfo.setTextSize(12);
alolInfo.setText("No");
			alolInfo.setTextColor(android.graphics.Color.WHITE);
			alolInfo.setGravity(Gravity.CENTER);
			alolInfo.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLUE));
		alolInfo.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
aloll.dismiss();
ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE).vibrate(100);
	alertToast("User selected no");
			opener();
}
}));
alolLayout1.addView(alolInfo);
			
aloll = new PopupWindow(alolLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, RelativeLayout.LayoutParams.WRAP_CONTENT);
	        aloll.setAnimationStyle(android.R.style.Animation_InputMethod);
            aloll.setBackgroundDrawable(new ColorDrawable(Color.BLACK));
            aloll.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, 0, 0);
        } catch(error) {
            print("An error occured: " + error);
        }
    }}));
}


dankrestart = function () {
	try {
		var alarmManager = CONTEXT.getSystemService("alarm"),
			intent = CONTEXT.getPackageManager().getLaunchIntentForPackage(CONTEXT.getPackageName());
		intent.addFlags(335544320);
		alarmManager.set(3, SystemClock.elapsedRealtime() + 500, PendingIntent.getActivity(CONTEXT, 0, intent, 0));
		new File(CONTEXT.getFilesDir() + "/running.lock").delete();
		new Thread({
			run() {
				alertToast("You're All Set");
				Thread.sleep(500);
				System.exit(0);
			}
		}).start();
	} catch (e) {
		print("@" + e.lineNumber + ": " + e);
	}
};
//fonts
var Minecraft = {
Base: {
	Font1: android.os.Build.VERSION.SDK_INT >= 14 ? android.graphics.Typeface.create("Minecraft font_ANDROID", android.graphics.Typeface.NORMAL) : android.graphics.Typeface.DEFAULT,
 Font2: android.os.Build.VERSION.SDK_INT >= 14 ? android.graphics.Typeface.create("sans-serif-medium", android.graphics.Typeface.NORMAL) : android.graphics.Typeface.DEFAULT,
 Font3: android.os.Build.VERSION.SDK_INT >= 14 ? android.graphics.Typeface.create("sans-serif-bold", android.graphics.Typeface.BOLD) : android.graphics.Typeface.DEFAULT,
}
}

//UTILS
   	var Utils = {
	      File: { 		dragopDir: android.os.Environment.getExternalStorageDirectory() + "/DragOP/", 		getTextFromFile: function (file) { 			let readed = (new java.io.BufferedReader(new java.io.FileReader(file))); 			let data = new java.lang.StringBuilder(); 			let string; 			while((string = readed.readLine()) != null) 				data.append(string + "\n"); 			return data.toString(); 		}, 		saveTextToFile: function (file, text) { 			if(!file.exists()) file.createNewFile(); 			let bytes = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, text.length()); 			for(let i = 0; i < text.length(); i++) bytes[i] = text.charCodeAt(i); 			let stream = new java.io.FileOutputStream(file); 			try { 				stream.write(bytes); 			} finally { 				stream.close(); 			} 		} 	},		Render: {
			getFloatBuffer: function (fArray) {
				let bBuffer = java.nio.ByteBuffer.allocateDirect(fArray.length * 4);
				bBuffer.order(java.nio.ByteOrder.nativeOrder());

				let fBuffer = bBuffer.asFloatBuffer();
				fBuffer.put(fArray);
				fBuffer.position(0);
				return fBuffer;
			},
			getShortBuffer: function (sArray) {
				let bBuffer = java.nio.ByteBuffer.allocateDirect(sArray.length * 2);
				bBuffer.order(java.nio.ByteOrder.nativeOrder());

				let sBuffer = bBuffer.asShortBuffer();
				sBuffer.put(sArray);
				sBuffer.position(0);
				return sBuffer;
			},
			renderer: null,
			glSurface: null,
			fov: 110,
			
			color: android.graphics.Color.GREEN,
		color2: android.graphics.Color.WHITE,
		color3: android.graphics.Color.CYAN,
		color4: android.graphics.Color.RED,
		color5: android.graphics.Color.LTGRAY,
			
			initted: false,
			init: function () {
				if(Utils.Render.initted)
					return;
				let options = Utils.File.getTextFromFile(new java.io.File(android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/minecraftpe/", "options.txt")); 


				options = options.split("\n");
				options.forEach(function (entry) {
					let suboption = entry.split(":");
					if(suboption[0] == "gfx_field_of_view") {
						Utils.Render.fov = suboption[1];

					}
				});
				this.renderer = new android.opengl.GLSurfaceView.Renderer({
					onSurfaceCreated: function (gl, config) {
						let GL10 = javax.microedition.khronos.opengles.GL10;
						gl.glClearColor(0, 0, 0, 0);
						gl.glShadeModel(GL10.GL_SMOOTH);
						gl.glClearDepthf(1.0);
						gl.glDisable(GL10.GL_DITHER);
						gl.glEnable(GL10.GL_DEPTH_TEST);
						gl.glDepthFunc(GL10.GL_LEQUAL);
						gl.glHint(GL10.GL_PERSPECTIVE_CORRECTION_HINT, GL10.GL_NICEST);
					},
					onSurfaceChanged: function (gl, width, height) {
						let GL10 = javax.microedition.khronos.opengles.GL10;
						gl.glMatrixMode(GL10.GL_PROJECTION);
						gl.glLoadIdentity();
						android.opengl.GLU.gluPerspective(gl, Utils.Render.fov, width / height, 0.1, 100);
						gl.glMatrixMode(GL10.GL_MODELVIEW);
						gl.glLoadIdentity();
					},
					onDrawFrame: function (gl) {
						
						let GL10 = javax.microedition.khronos.opengles.GL10;
						gl.glClear(GL10.GL_COLOR_BUFFER_BIT | GL10.GL_DEPTH_BUFFER_BIT);
						gl.glLoadIdentity();
						
						if(esp == true && getPlayerEnt() != -1) {
							try {
								
								gl.glDisable(GL10.GL_LIGHTING);
								let yaw = getYaw() % 360;
								let pitch = getPitch() % 360;
								let eyeX = getPlayerX();
								let eyeY = getPlayerY() + 1;
								let eyeZ = getPlayerZ();

								let dCenterX = Math.sin(yaw / 180 * Math.PI);
								let dCenterZ = Math.cos(yaw / 180 * Math.PI);
								let dCenterY = Math.sqrt(dCenterX * dCenterX + dCenterZ * dCenterZ) * Math.tan((pitch - 180) / 180 * Math.PI);

								let centerX = eyeX - dCenterX;
								let centerZ = eyeZ + dCenterZ;
								let centerY = eyeY - dCenterY;

								android.opengl.GLU.gluLookAt(gl, eyeX, eyeY, eyeZ, centerX, centerY, centerZ, 0, 1.0, 0);
								
								
								let mobs = Entity.getAll();
								let mobs2 = Entity.getAll();
								let animals = Entity.getAll();
								let players = Server.getAllPlayers();
                                let blocks = Level.getTile();
                                let invisibles = Server.getAllPlayers();
                                let tracers = Server.getAllPlayers();
                                let blockside = Entity.getAll();
                                let items = Entity.getAll();
                                let items2 = Entity.getAll();
                         
        let p = Entity.getPitch(getPlayerEnt())
		let y = Entity.getYaw(getPlayerEnt())
		let xx = Math.sin(p) * Math.cos(y);
		let yy = Math.sin(p) * Math.sin(y);
		let zz = Math.cos(p);
		var px = getPlayerX();
	   var py = getPlayerY();
		var pz = getPlayerZ();
		
		
		
								players.forEach(function (entry) {
									if(playeresp == true){ 
									if(entry != getPlayerEnt() && Entity.getEntityTypeId(entry) == EntityType.PLAYER) {
										Utils.Render.drawBox(gl, Entity.getX(entry) - 0.5, Entity.getY(entry) + 1, Entity.getZ(entry) - 0.5, 1, 2, 1);
							
}
								
									}
								});
								
								items.forEach(function (entry) {
									if(itemesp == true){ 
									if(entry != getPlayerEnt() && Entity.getEntityTypeId(entry) == EntityType.ITEM) {
										Utils.Render.drawBox1(gl, Entity.getX(entry) - 0.5, Entity.getY(entry) + 1, Entity.getZ(entry) - 0.5, 0.5, 0.5, 0.5);
									}
									}
								});
								items2.forEach(function (entry) {
									if(itemtracer == true){ 
									if(entry != getPlayerEnt() && Entity.getEntityTypeId(entry) == EntityType.ITEM) {
Utils.Render.drawLine1(gl, px, py, pz, Entity.getX(entry), Entity.getY(entry)+1, Entity.getZ(entry));
									}
									}
								});
								
								mobs.forEach(function (entry) {
									if(mobesp == true){ 
									if(entry != getPlayerEnt() && Entity.getEntityTypeId(entry) == EntityType.ZOMBIE || Entity.getEntityTypeId(entry) == EntityType.SKELETON || Entity.getEntityTypeId(entry) == EntityType.SPIDER || Entity.getEntityTypeId(entry) == EntityType.BLAZE || Entity.getEntityTypeId(entry) == EntityType.CAVE_SPIDER || Entity.getEntityTypeId(entry) == EntityType.ZOMBIE_VILLAGER || Entity.getEntityTypeId(entry) == EntityType.SLIME || Entity.getEntityTypeId(entry) == EntityType.LAVA_SLIME || Entity.getEntityTypeId(entry) == EntityType.ENDERMAN || Entity.getEntityTypeId(entry) == EntityType.CREEPER) {
											Utils.Render.drawBox(gl, Entity.getX(entry) - 0.5, Entity.getY(entry) + 1, Entity.getZ(entry) - 0.5, 1, 2, 1);
									}
									}
								});
								
							blockside.forEach(function (entry) {
									if(pointesp == true){ 
									Utils.Render.drawBox(gl,Player.getPointedBlockX()-0.5, Player.getPointedBlockY()+1,Player.getPointedBlockZ()-0.5, 1, 0.3, 1);
									}
								});
								

					mobs2.forEach(function (entry) {
									if(mobesp2 == true){ 
									if(entry != getPlayerEnt() && Entity.getEntityTypeId(entry) == EntityType.ZOMBIE || Entity.getEntityTypeId(entry) == EntityType.SKELETON || Entity.getEntityTypeId(entry) == EntityType.SPIDER || Entity.getEntityTypeId(entry) == EntityType.BLAZE || Entity.getEntityTypeId(entry) == EntityType.CAVE_SPIDER || Entity.getEntityTypeId(entry) == EntityType.ZOMBIE_VILLAGER || Entity.getEntityTypeId(entry) == EntityType.SLIME || Entity.getEntityTypeId(entry) == EntityType.LAVA_SLIME || Entity.getEntityTypeId(entry) == EntityType.ENDERMAN || Entity.getEntityTypeId(entry) == EntityType.CREEPER) {
											Utils.Render.drawLine(gl, px, py, pz, Entity.getX(entry), Entity.getY(entry)+1, Entity.getZ(entry));
									}
									}
								});
				
					tracers.forEach(function (entry) {
									if(traceresp == true){ 
									if(entry != getPlayerEnt() && Entity.getEntityTypeId(entry) == EntityType.PLAYER) {
Utils.Render.drawLine(gl, px, py, pz, Entity.getX(entry), Entity.getY(entry)+1, Entity.getZ(entry));
									}
									}
								});
chests.forEach(function (entry) {
	if(chesteesp == true){
Utils.Render.drawSquare(gl, entry[0] + 1 / 16, entry[1]+1, entry[2] + 1 / 16, 1 / 16 * 15, 0.875, 1 / 16 * 15);
}
});
dxray.forEach(function (entry) {
	if(diamondxray == true){
Utils.Render.drawxray(gl, entry[0] + 1 / 16, entry[1]+1, entry[2] + 1 / 16, 1 / 16 * 15, 0.875, 1 / 16 * 15);
}
});




					

							} catch(e) {
								clientMessage("RenderProblem: " + e);
							}

						} else {
							
						}
					}
				});
				ctx.runOnUiThread(new java.lang.Runnable({
					run: function () {
						Utils.Render.glSurface = new android.opengl.GLSurfaceView(ctx);
						Utils.Render.glSurface.setZOrderOnTop(true);


						Utils.Render.glSurface.setEGLConfigChooser(8, 8, 8, 8, 16, 0);
						Utils.Render.glSurface.getHolder().setFormat(android.graphics.PixelFormat.TRANSLUCENT);
						Utils.Render.glSurface.setRenderer(Utils.Render.renderer);
						

						ctx.getWindow().getDecorView().addView(Utils.Render.glSurface);

						Utils.Render.initted = true;
					}
				}));

			},
			drawBox: function (gl, x, y, z, xsize, ysize, zsize) {
				let GL10 = javax.microedition.khronos.opengles.GL10;
				let size = new Array(xsize, ysize, zsize);
				let vertices = [
					0, 0, 0,
					size[0], 0, 0,
					0, 0, size[2],
					size[0], 0, size[2],

					0, size[1], 0,
					size[0], size[1], 0,
					0, size[1], size[2],
					size[0], size[1], size[2]
				];
				let vertexBuffer = Utils.Render.getFloatBuffer(vertices);
				let lineIndices = [
					0, 1,
					0, 2,
					0, 4,

					3, 1,
					3, 2,
					3, 7,

					5, 4,
					5, 7,
					5, 1,

					6, 4,
					6, 7,
					6, 2
				];
				let polyIndices = [
					0, 1, 4,
					1, 4, 5,

					2, 3, 6,
					7, 6, 3,

					1, 3, 7,
					7, 1, 5,

					0, 2, 6,
					6, 0, 4,

					0, 1, 2,
					3, 1, 2,

					4, 5, 6,
					7, 5, 6
				];
				let lineBuffer = Utils.Render.getShortBuffer(lineIndices);
				let polyBuffer = Utils.Render.getShortBuffer(polyIndices);
				gl.glTranslatef(x, y, z);
				gl.glFrontFace(GL10.GL_CCW);
				gl.glEnable(GL10.GL_BLEND);
				//gl.glEnable(GL10.GL_LINE_SMOOTH);
				gl.glBlendFunc(GL10.GL_SRC_ALPHA, GL10.GL_ONE_MINUS_SRC_ALPHA);
				gl.glLineWidth(12);
				gl.glColor4f(android.graphics.Color.red(Utils.Render.color) / 255,android.graphics.Color.green(Utils.Render.color) / 255, android.graphics.Color.blue(Utils.Render.color) / 255, 0.5);
				gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
				gl.glVertexPointer(3, GL10.GL_FLOAT, 0, vertexBuffer);
				gl.glDrawElements(GL10.GL_LINES, lineIndices.length, GL10.GL_UNSIGNED_SHORT, lineBuffer);
				gl.glColor4f(android.graphics.Color.red(Utils.Render.color) / 255,android.graphics.Color.green(Utils.Render.color2) / 255, android.graphics.Color.blue(Utils.Render.color2) / 255, 0.3);
				gl.glDisable(GL10.GL_LINE_SMOOTH);
				gl.glTranslatef(-x, -y, -z);
			},
			drawSquare: function (gl, x, y, z, xsize, ysize, zsize) {
let GL10 = javax.microedition.khronos.opengles.GL10;
let size = new Array(xsize, ysize, zsize);
let vertices = [
0, 0, 0,
size[0], 0, 0,
0, 0, size[2],
size[0], 0, size[2],

0, size[1], 0,
size[0], size[1], 0,
0, size[1], size[2],
size[0], size[1], size[2]
];
let vertexBuffer = Utils.Render.getFloatBuffer(vertices);
let lineIndices = [
0, 1,
0, 2,
0, 4,

3, 1,
3, 2,
3, 7,

5, 4,
5, 7,
5, 1,

6, 4,
6, 7,
6, 2
];
let polyIndices = [
0, 1, 4,
1, 4, 5,

2, 3, 6,
7, 6, 3,

1, 3, 7,
7, 1, 5,

0, 2, 6,
6, 0, 4,

0, 1, 2,
3, 1, 2,

4, 5, 6,
7, 5, 6
];
let lineBuffer = Utils.Render.getShortBuffer(lineIndices);
let polyBuffer = Utils.Render.getShortBuffer(polyIndices);
gl.glTranslatef(x, y, z);
gl.glFrontFace(GL10.GL_CCW);
gl.glEnable(GL10.GL_BLEND);
//gl.glEnable(GL10.GL_LINE_SMOOTH);
gl.glBlendFunc(GL10.GL_SRC_ALPHA, GL10.GL_ONE_MINUS_SRC_ALPHA);
gl.glLineWidth(4);
gl.glColor4f(android.graphics.Color.red(Utils.Render.color4) / 255,android.graphics.Color.green(Utils.Render.color4) / 255, android.graphics.Color.blue(Utils.Render.color4) / 255, 0.7);
gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
gl.glVertexPointer(3, GL10.GL_FLOAT, 0, vertexBuffer);
gl.glDrawElements(GL10.GL_LINES, lineIndices.length, GL10.GL_UNSIGNED_SHORT, lineBuffer);
gl.glColor4f(android.graphics.Color.red(Utils.Render.color4) / 255, android.graphics.Color.green(Utils.Render.color4) / 255, android.graphics.Color.blue(Utils.Render.color4) / 255, 0.2);
gl.glDisable(GL10.GL_LINE_SMOOTH);
gl.glTranslatef(-x, -y, -z);
},
drawxray: function (gl, x, y, z, xsize, ysize, zsize) {
let GL10 = javax.microedition.khronos.opengles.GL10;
let size = new Array(xsize, ysize, zsize);
let vertices = [
0, 0, 0,
size[0], 0, 0,
0, 0, size[2],
size[0], 0, size[2],

0, size[1], 0,
size[0], size[1], 0,
0, size[1], size[2],
size[0], size[1], size[2]
];
let vertexBuffer = Utils.Render.getFloatBuffer(vertices);
let lineIndices = [
0, 1,
0, 2,
0, 4,

3, 1,
3, 2,
3, 7,

5, 4,
5, 7,
5, 1,

6, 4,
6, 7,
6, 2
];
let polyIndices = [
0, 1, 4,
1, 4, 5,

2, 3, 6,
7, 6, 3,

1, 3, 7,
7, 1, 5,

0, 2, 6,
6, 0, 4,

0, 1, 2,
3, 1, 2,

4, 5, 6,
7, 5, 6
];
let lineBuffer = Utils.Render.getShortBuffer(lineIndices);
let polyBuffer = Utils.Render.getShortBuffer(polyIndices);
gl.glTranslatef(x, y, z);
gl.glFrontFace(GL10.GL_CCW);
gl.glEnable(GL10.GL_BLEND);
//gl.glEnable(GL10.GL_LINE_SMOOTH);
gl.glBlendFunc(GL10.GL_SRC_ALPHA, GL10.GL_ONE_MINUS_SRC_ALPHA);
gl.glLineWidth(4);
gl.glColor4f(android.graphics.Color.red(Utils.Render.color5) / 255,android.graphics.Color.green(Utils.Render.color5) / 255, android.graphics.Color.blue(Utils.Render.color5) / 255, 0.7);
gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
gl.glVertexPointer(3, GL10.GL_FLOAT, 0, vertexBuffer);
gl.glColor4f(android.graphics.Color.red(Utils.Render.color5) / 255, android.graphics.Color.green(Utils.Render.color5) / 255, android.graphics.Color.blue(Utils.Render.color5) / 255, 0.2);
gl.glDrawElements(GL10.GL_TRIANGLES, polyIndices.length, GL10.GL_UNSIGNED_SHORT, polyBuffer);
gl.glDisable(GL10.GL_LINE_SMOOTH);
gl.glTranslatef(-x, -y, -z);
},
			drawCube: function(gl, x, y, z) { //cube code by Not Bypassinq
			let GL10 = javax.microedition.khronos.opengles.GL10;
			let size = new Array(xsize, ysize, zsize);
				let vertices = [
					0, 0, 0,
					size[0], 0, 0,
					0, 0, size[2],
					size[0], 0, size[2],

					0, size[1], 0,
					size[0], size[1], 0,
					0, size[1], size[2],
					size[0], size[1], size[2]
				];
				let vertexBuffer = Utils.Render.getFloatBuffer(vertices);
			let vertex = [
	0, 0, 0,
	1.0, 0, 0,
	0, 0, 1.0,
	1.0, 0, 1.0,

	0, 1.0, 0,
	1.0, 1.0, 0,
	0, 1.0, 1.0,
	1.0, 1.0, 1.0,
];
 let index = [
	0, 1,
	0, 2,
	0, 4,

	3, 1,
	3, 2,
	3, 7,

	5, 4,
	5, 7,
	5, 1,

	6, 4,
	6, 7,
	6, 2
];
let lineBuffer = Utils.Render.getShortBuffer(vertex);
				let polyBuffer = Utils.Render.getShortBuffer(index);
				gl.glTranslatef(x, y, z);
				gl.glFrontFace(GL10.GL_CCW);
				gl.glEnable(GL10.GL_BLEND);
				//gl.glEnable(GL10.GL_LINE_SMOOTH);
				gl.glBlendFunc(GL10.GL_SRC_ALPHA, GL10.GL_ONE_MINUS_SRC_ALPHA);
				gl.glLineWidth(2);
				gl.glColor4f(android.graphics.Color.red(Utils.Render.color) / 255,android.graphics.Color.green(Utils.Render.color) / 255, android.graphics.Color.blue(Utils.Render.color) / 255, 0.7);
				gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
				gl.glVertexPointer(3, GL10.GL_FLOAT, 0, vertexBuffer);
				gl.glDrawElements(GL10.GL_LINES, lineIndices.length, GL10.GL_UNSIGNED_SHORT, lineBuffer);
				gl.glColor4f(android.graphics.Color.red(Utils.Render.color) / 255, android.graphics.Color.green(Utils.Render.color2) / 255, android.graphics.Color.blue(Utils.Render.color2) / 255, 0.1);
				gl.glDrawElements(GL10.GL_TRIANGLES, polyIndices.length, GL10.GL_UNSIGNED_SHORT, polyBuffer);
				gl.glDisable(GL10.GL_LINE_SMOOTH);
				gl.glTranslatef(-x, -y, -z);
},

drawBox1: function (gl, x, y, z, xsize, ysize, zsize) {
				let GL10 = javax.microedition.khronos.opengles.GL10;
				let size = new Array(xsize, ysize, zsize);
				let vertices = [
					0, 0, 0,
					size[0], 0, 0,
					0, 0, size[2],
					size[0], 0, size[2],

					0, size[1], 0,
					size[0], size[1], 0,
					0, size[1], size[2],
					size[0], size[1], size[2]
				];
				let vertexBuffer = Utils.Render.getFloatBuffer(vertices);
				let lineIndices = [
					0, 1,
					0, 2,
					0, 4,

					3, 1,
					3, 2,
					3, 7,

					5, 4,
					5, 7,
					5, 1,

					6, 4,
					6, 7,
					6, 2
				];
				let polyIndices = [
					0, 1, 4,
					1, 4, 5,

					2, 3, 6,
					7, 6, 3,

					1, 3, 7,
					7, 1, 5,

					0, 2, 6,
					6, 0, 4,

					0, 1, 2,
					3, 1, 2,

					4, 5, 6,
					7, 5, 6
				];
				let lineBuffer = Utils.Render.getShortBuffer(lineIndices);
				let polyBuffer = Utils.Render.getShortBuffer(polyIndices);
				gl.glTranslatef(x, y, z);
				gl.glFrontFace(GL10.GL_CCW);
				gl.glEnable(GL10.GL_BLEND);
				//gl.glEnable(GL10.GL_LINE_SMOOTH);
				gl.glBlendFunc(GL10.GL_SRC_ALPHA, GL10.GL_ONE_MINUS_SRC_ALPHA);
				gl.glLineWidth(12);
				gl.glColor4f(android.graphics.Color.red(Utils.Render.color3) / 255,android.graphics.Color.green(Utils.Render.color3) / 255, android.graphics.Color.blue(Utils.Render.color3) / 255, 0.5);
				gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
				gl.glVertexPointer(3, GL10.GL_FLOAT, 0, vertexBuffer);
				gl.glDrawElements(GL10.GL_LINES, lineIndices.length, GL10.GL_UNSIGNED_SHORT, lineBuffer);
				gl.glColor4f(android.graphics.Color.red(Utils.Render.color3) / 255,android.graphics.Color.green(Utils.Render.color3) / 255, android.graphics.Color.blue(Utils.Render.color3) / 255, 0.3);
				gl.glDisable(GL10.GL_LINE_SMOOTH);
				gl.glTranslatef(-x, -y, -z);
			},
			
			drawLine: function (gl, x, y, z, x2, y2, z2) {
				
				let GL10 = javax.microedition.khronos.opengles.GL10;
				let size = new Array(x2, y2, z2);
				let vertices = [
					0, 0, 0,
					x2 - x, y2 - y, z2 - z
				];
				let vertexBuffer = Utils.Render.getFloatBuffer(vertices);
				let indices = [
					0, 1
				];
				let indexBuffer = Utils.Render.getShortBuffer(indices);
				gl.glTranslatef(x, y, z);
				gl.glEnable(GL10.GL_BLEND);
				gl.glDepthMask(false);
				gl.glEnable(GL10.GL_LINE_SMOOTH);
				gl.glBlendFunc(GL10.GL_SRC_ALPHA, GL10.GL_ONE_MINUS_SRC_ALPHA);
				gl.glLineWidth(12);
				gl.glColor4f(android.graphics.Color.red(Utils.Render.color) / 255,android.graphics.Color.green(Utils.Render.color) / 255, android.graphics.Color.blue(Utils.Render.color) /255, 0.7);
				gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
				gl.glVertexPointer(3, GL10.GL_FLOAT, 0, vertexBuffer);
				gl.glDrawElements(GL10.GL_LINES, indices.length, GL10.GL_UNSIGNED_SHORT, indexBuffer);
				gl.glTranslatef(-x, -y, -z);
				gl.glDepthMask(true);
				gl.glDisable(GL10.GL_LINE_SMOOTH);
			
		},
		
		drawLine1: function (gl, x, y, z, x2, y2, z2) {
				
				let GL10 = javax.microedition.khronos.opengles.GL10;
				let size = new Array(x2, y2, z2);
				let vertices = [
					0, 0, 0,
					x2 - x, y2 - y, z2 - z
				];
				let vertexBuffer = Utils.Render.getFloatBuffer(vertices);
				let indices = [
					0, 1
				];
				let indexBuffer = Utils.Render.getShortBuffer(indices);
				gl.glTranslatef(x, y, z);
				gl.glEnable(GL10.GL_BLEND);
				gl.glDepthMask(false);
				gl.glEnable(GL10.GL_LINE_SMOOTH);
				gl.glBlendFunc(GL10.GL_SRC_ALPHA, GL10.GL_ONE_MINUS_SRC_ALPHA);
				gl.glLineWidth(12);
				gl.glColor4f(android.graphics.Color.red(Utils.Render.color3) / 255,android.graphics.Color.green(Utils.Render.color3) / 255, android.graphics.Color.blue(Utils.Render.color3) /255, 0.7);
				gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
				gl.glVertexPointer(3, GL10.GL_FLOAT, 0, vertexBuffer);
				gl.glDrawElements(GL10.GL_LINES, indices.length, GL10.GL_UNSIGNED_SHORT, indexBuffer);
				gl.glTranslatef(-x, -y, -z);
				gl.glDepthMask(true);
				gl.glDisable(GL10.GL_LINE_SMOOTH);
			}
		},
		Block: {
                 isLiquid: function(id) {
			if(id >= 8 && id <= 11) return true;
			return false;
		         }
            },
            Velocity: {
			calculateSpeed: function() {
				return Math.sqrt(Math.pow(Entity.getVelX(getPlayerEnt()), 2) + Math.pow(Entity.getVelZ(getPlayerEnt()), 2));
				}
			},
            Player: {
                isInWater: function() {
			if(Utils.Block.isLiquid(getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())))) {
            return true;
            } else {
			return false;
			   }
		    },
		isBobGround: function() {
			var y = Entity.getY(getPlayerEnt());
			while(y > 1) y -= 1;
			if((Math.round(y * 100) >= 61 && Math.round(y * 100) <= 63) && getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())) != 0 && !Utils.Block.isLiquid(getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())))) {
            return true;
            }
			if((Math.round(y * 100) >= 11 && Math.round(y * 100) <= 13) && getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())) != 0 && !Utils.Block.isLiquid(getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())))) {
            return true;
            } else {
			return false;
			  }
		    },
                isOnGround: function() {
			var y = Entity.getY(getPlayerEnt());
			while(y > 1) y -= 1;
			if((Math.round(y * 100) >= 61 && Math.round(y * 100) <= 63) && getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())) != 0 && !Utils.Block.isLiquid(getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())))) {
            return true;
            }
			if((Math.round(y * 100) >= 11 && Math.round(y * 100) <= 13) && getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())) != 0 && !Utils.Block.isLiquid(getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())))) {
            return true;
            } else {
			return false;
			  }
		    },
            isCollidedHorizontally: function() {
			var x = Entity.getX(getPlayerEnt());
			var z = Entity.getZ(getPlayerEnt());
			var blockX = Math.round(x - 0.5);
			var blockZ = Math.round(z - 0.5);
			while(x < 1) x += 1;
			while(z < 1) z += 1;
			while(x > 1) x -= 1;
			while(z > 1) z -= 1;

			if(Math.round(x * 100) == 31) x -= 0.01;
			if(Math.round(z * 100) == 31) z -= 0.01;
			if(Math.round(x * 100) == 69) x += 0.01;
			if(Math.round(z * 100) == 69) z += 0.01;
			if(Math.round(x * 100) == 30) blockX--;
			if(Math.round(z * 100) == 30) blockZ--;
			if(Math.round(x * 100) == 70) blockX++;
			if(Math.round(z * 100) == 70) blockZ++;
			//clientMessage(blockX+";"+blockZ);
			if(getTile(blockX, Entity.getY(getPlayerEnt()), blockZ) == 0 && getTile(blockX, Entity.getY(getPlayerEnt()) - 1, blockZ) == 0) return false;

			if(Block.getDestroyTime(getTile(blockX, Entity.getY(getPlayerEnt()) - 1, blockZ)) <= 0.1 && Block.getDestroyTime(getTile(blockX, Entity.getY(getPlayerEnt()), blockZ)) <= 0.1) return false;

			if(Math.round(x * 100) == 30 || Math.round(x * 100) == 70) return true;
			if(Math.round(z * 100) == 30 || Math.round(z * 100) == 70) return true;
			return false;
		}
	}
};
function screenChangeHook(screenName){
if(screenName.match("progress_screen") || screenName.includes("progress_screen")){
Utils.Render.init();
esp = true;
 }
}
//GUI Settings/Vars
//Esp Vars
var esp = false;
var mobesp = false;
var mobesp2 = false;
var playeresp = false;
var invisibleesp = false;
var animalesp = false;
var itemesp = false;
var blockesp = false;
var pointesp = false;
var traceresp = false;
var itemtracer = false;
var hm = false;
var hml = false;
var hmll = false;
var hmlll = false;
var hmllll = false;
var hmlllll = false;
var hmllllll = false;
var diamondxray = false;
var chesteesp = false;
var FFS
var FFSS = false;
var FFED = false;  
var chests = [];
var dxray = [];
//Combat Vars
var aq = false;
var aimaura = false;
var hq = false;
var hb1 = false;
var oq = false;
var killaura = false;
var sb = false;
var mh = false;
var tpq = false;
var tpps = false;
var as = false;
var autosword = false;
var rm = false;
var ragemode = false;
//Movement Vars
var gbp = false;
var glidebp = false;
var fl = false;
var fastl = false;
var spbp = false;
var speedbp = false;
var pList = [];
//Player Vars
gm = false;
godmode = false;
var debugs = false;
var debugss = false;
var guiopened = false;
var opened = false;
var guimain = false;
var Gui
var Gui1 = false;
var McpeVersion = ModPE.getMinecraftVersion();
var version = ModPE.getMinecraftVersion();
ModPE.langEdit("menu.play","[Menu Version: " +McpeVersion+"]")
if(version == "1.5.1.1"){
		onlineToast("Connection Success!!");
		onlineToast("You are online on the latest version");

}else{
	if(version == McpeVersion){
}
}


function description() {
	
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable() {
		run: function () {
			try {
				popupp = new android.widget.PopupWindow();
				var Layer = new android.widget.LinearLayout(ctx);
				Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
			var Exit = new Button(ctx);
			 var Log= new TextView(ctx);
			var Dev = new TextView(ctx);
				var Dialog = new android.app.Dialog(ctx);
				Dialog.setContentView(Layer);
				Dialog.show();
				Layer.addView(Log);
				Layer.addView(Dev);
				Log.setText(desctitle);
				Log.setTextSize(25);
				Log.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));		
		Log.setTextColor(android.graphics.Color.WHITE);
Dev.setText(descs);
			Dev.setTextSize(15);
			Dev.setTextColor(android.graphics.Color.WHITE);
			Dev.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));	
Exit.setBackground(bgi);	
Exit.setTextColor(android.graphics.Color.WHITE);
Exit.setText(exittext);     
Exit.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (view) {
						Dialog.dismiss();
						
						
					
					}
				});
				Layer.addView(Exit);
				
				popupp.setHeight(100);
popupp.setWidth(100);
				popupp.showAtLocation(ctx.getWindow()
					.getDecorView(), android.view.Gravity.TOP, 0, 0);
			} catch (e) {
				print("verify dialog:" + e);
			}
		}
	});
}
var descs = "Error_49325; Failed to connect to Dank";
var desctitle = "Error";
var exittext = "Retry";
var errortext = "Retry";
var errortitle = "Error";
var cerror = "Error_49325; Failed to connect to Dank";
//Menu Looks 
var bgi = new android.graphics.drawable.GradientDrawable();
bgi.setColor(android.graphics.Color.BLUE); //ButtonBG
bgi.setStroke(10, android.graphics.Color.BLACK); //ButtonStroke
bgi.setCornerRadius(0); 
var bgs = new android.graphics.drawable.GradientDrawable();
bgs.setColor(android.graphics.Color.BLACK); //ButtonBG
bgs.setStroke(10, android.graphics.Color.BLACK); //ButtonStroke
bgs.setCornerRadius(0); 
var bgss = new android.graphics.drawable.GradientDrawable();
bgss.setColor(android.graphics.Color.TRANSPARENT); //ButtonBG
bgss.setStroke(10, android.graphics.Color.BLACK); //ButtonStroke
bgss.setCornerRadius(0); 
 var bg = new android.graphics.drawable.GradientDrawable();
bg.setColor(android.graphics.Color.TRANSPARENT); //ButtonBG
bg.setStroke(10, android.graphics.Color.BLUE); //ButtonStroke
bg.setCornerRadius(0); //
var bg1 = new android.graphics.drawable.GradientDrawable();
bg1.setColor(android.graphics.Color.TRANSPARENT); //ButtonBG
bg1.setStroke(10, android.graphics.Color.BLUE); //ButtonStroke
bg1.setCornerRadius(0); //
var bg2 = new android.graphics.drawable.GradientDrawable();
bg2.setColor(android.graphics.Color.TRANSPARENT); //ButtonBG
bg2.setStroke(10, android.graphics.Color.BLUE); //ButtonStroke
bg2.setCornerRadius(0); //
var bg3 = new android.graphics.drawable.GradientDrawable();
bg3.setColor(android.graphics.Color.TRANSPARENT); //ButtonBG
bg3.setStroke(10, android.graphics.Color.BLUE); //ButtonStroke
bg3.setCornerRadius(0); //
var bg4 = new android.graphics.drawable.GradientDrawable();
bg4.setColor(android.graphics.Color.TRANSPARENT); //ButtonBG
bg4.setStroke(10, android.graphics.Color.BLUE); //ButtonStroke
bg4.setCornerRadius(0); //
var bg5 = new android.graphics.drawable.GradientDrawable();
bg5.setColor(android.graphics.Color.TRANSPARENT); //ButtonBG
bg5.setStroke(10, android.graphics.Color.BLUE); //ButtonStroke
bg5.setCornerRadius(0); //
var bg6 = new android.graphics.drawable.GradientDrawable();
bg6.setColor(android.graphics.Color.TRANSPARENT); //ButtonBG
bg6.setStroke(10, android.graphics.Color.BLUE); //ButtonStroke
bg6.setCornerRadius(0); //
var bgb = new android.graphics.drawable.GradientDrawable();
bgb.setColor(android.graphics.Color.TRANSPARENT); //ButtonBG
bgb.setStroke(10, android.graphics.Color.BLUE); //ButtonStroke
bgb.setCornerRadius(0); //
//Text Change color
var changing0 = android.graphics.Color.WHITE;
var changing1 = android.graphics.Color.WHITE;
var changing2 = android.graphics.Color.WHITE;
var changing3 = android.graphics.Color.WHITE;
var changing4 = android.graphics.Color.WHITE;
var changing5 = android.graphics.Color.WHITE;
var white = android.graphics.Color.WHITE;
var blue = android.graphics.Color.BLUE;
var size0 = 30;
var size1 = 30;
var size2 = 30;
var size3 = 30;
var sized = 30;
var sizedd = 20;
var sjda = false;
var combatopened = false;



function p11(){
new android.os.Handler().postDelayed(new java.lang.Runnable({
run:function(){
	if(sjda==false){
		
}else{
	if(sjda==true){
p12();
changing0 = blue;
changing1 = white;
titleee.dismiss();
titlee();
}
}
}
}),350);
}

function p12(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function()
{
	if(sjda==false){
	
}else{
	if(sjda==true){
	changing0 = white;
	changing1 = blue;
p13();
titleee.dismiss();
titlee();

}}
}
}),350);
}

function p13(){
new android.os.Handler().postDelayed(new java.lang.Runnable({
run:function(){
	if(sjda==false){
		
}else{
	if(sjda==true){
changing1 = white;
changing2 = blue;
p14();
titleee.dismiss();
titlee();

}
}}
}),350);
}

function p14(){
new android.os.Handler().postDelayed(new java.lang.Runnable({
run:function(){
	if(sjda==false){
		
}else{
	if(sjda==true){
	changing2 = white;
	changing3 = blue;
p15();

titleee.dismiss();
titlee();
}
}}
}),350);
}
function p15(){
new android.os.Handler().postDelayed(new java.lang.Runnable({
run:function(){
	if(sjda==false){
		
}else{
	if(sjda==true){
	changing3 = white;
	changing4 = blue;
p16();

titleee.dismiss();
titlee();
}
}}
}),350);
}
function p16(){
new android.os.Handler().postDelayed(new java.lang.Runnable({
run:function(){
	if(sjda==false){
		
}else{
	if(sjda==true){
	changing4 = white;
	changing5 = blue;
p17();

titleee.dismiss();
titlee();
}
}}
}),350);
}
function p17(){
new android.os.Handler().postDelayed(new java.lang.Runnable({
run:function(){
	if(sjda==false){
		
}else{
	if(sjda==true){
	changing5 = white;
	changing4 = blue;
p18();

titleee.dismiss();
titlee();
}
}}
}),350);
}
function p18(){
new android.os.Handler().postDelayed(new java.lang.Runnable({
run:function(){
	if(sjda==false){
		
}else{
	if(sjda==true){
	changing4 = white;
	changing3 = blue;
p19();

titleee.dismiss();
titlee();
}
}}
}),350);
}
function p19(){
new android.os.Handler().postDelayed(new java.lang.Runnable({
run:function(){
	if(sjda==false){
		
}else{
	if(sjda==true){
	changing3 = white;
	changing2 = blue;
p20();

titleee.dismiss();
titlee();
}
}}
}),350);
}
function p20(){
new android.os.Handler().postDelayed(new java.lang.Runnable({
run:function(){
	if(sjda==false){
		
}else{
	if(sjda==true){
	changing2 = white;
	changing1 = blue;
p11();

titleee.dismiss();
titlee();
}
}}
}),350);
}
//Menu Buttons
function showMenuCBtn() {
ctx.runOnUiThread(new Runnable({ run: function(){
	try{
		var layout = new LinearLayout(ctx);
		layout.setOrientation(1);
		var menuCBtn = new Button(ctx);;
		menuCBtn.setText("Exit"); 
		menuCBtn.setTypeface(Minecraft.Base.Font3);
		menuCBtn.setTextColor(android.graphics.Color.WHITE);
	  menuCBtn.setBackground(bgb);    
		menuCBtn.setOnClickListener(new View.OnClickListener({
			onClick: function(viewarg){
  stormzmodz();                 
GUIR.dismiss();
 menu1.dismiss();
 showMenuRBtn();
 GUIC.dismiss();
					}
				}));
		layout.addView(menuCBtn);
        GUIC = new PopupWindow(layout, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
		GUIC.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
		GUIC.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.BOTTOM, 0, 0);
		}catch(err){
			Toast.makeText(ctx, "An error occured: " + err, 1).show();
		}
	}}));
}

function showMenuMBtn() {
ctx.runOnUiThread(new Runnable({ run: function(){
	try{
		var layout = new LinearLayout(ctx);
		layout.setOrientation(1);
		var menuMBtn = new Button(ctx);;
		menuMBtn.setText("Exit"); 
		menuMBtn.setTypeface(Minecraft.Base.Font3);
		menuMBtn.setTextColor(android.graphics.Color.WHITE);
	  menuMBtn.setBackground(bgb);    
		menuMBtn.setOnClickListener(new View.OnClickListener({
			onClick: function(viewarg){
  stormzmodz();                 
GUIR.dismiss();
 menu2.dismiss();
 showMenuRBtn();
 GUIM.dismiss();
					}
				}));
		layout.addView(menuMBtn);
        GUIM = new PopupWindow(layout, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
		GUIM.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
		GUIM.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.BOTTOM, 0, 0);
		}catch(err){
			Toast.makeText(ctx, "An error occured: " + err, 1).show();
		}
	}}));
}

function showMenuPBtn() {
ctx.runOnUiThread(new Runnable({ run: function(){
	try{
		var layout = new LinearLayout(ctx);
		layout.setOrientation(1);
		var menuPBtn = new Button(ctx);;
		menuPBtn.setText("Exit"); 
		menuPBtn.setTypeface(Minecraft.Base.Font3);
		menuPBtn.setTextColor(android.graphics.Color.WHITE);
	  menuPBtn.setBackground(bgb);    
		menuPBtn.setOnClickListener(new View.OnClickListener({
			onClick: function(viewarg){
  stormzmodz();                 
GUIR.dismiss();
 menu3.dismiss();
 showMenuRBtn();
 GUIP.dismiss();
					}
				}));
		layout.addView(menuPBtn);
        GUIP = new PopupWindow(layout, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
		GUIP.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
		GUIP.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.BOTTOM, 0, 0);
		}catch(err){
			Toast.makeText(ctx, "An error occured: " + err, 1).show();
		}
	}}));
}

function showMenuSBtn() {
ctx.runOnUiThread(new Runnable({ run: function(){
	try{
		var layout = new LinearLayout(ctx);
		layout.setOrientation(1);
		var menuSBtn = new Button(ctx);;
		menuSBtn.setText("Exit"); 
		menuSBtn.setTypeface(Minecraft.Base.Font3);
		menuSBtn.setTextColor(android.graphics.Color.WHITE);
	  menuSBtn.setBackground(bgb);    
		menuSBtn.setOnClickListener(new View.OnClickListener({
			onClick: function(viewarg){
  stormzmodz();                 
GUIR.dismiss();
 menu4.dismiss();
 showMenuRBtn();
 GUIS.dismiss();
					}
				}));
layout.addView(menuSBtn);
        GUIS = new PopupWindow(layout, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
		GUIS.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
		GUIS.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.BOTTOM, 0, 0);
		}catch(err){
			Toast.makeText(ctx, "An error occured: " + err, 1).show();
		}
	}}));
}

function showMenuKBtn() {
ctx.runOnUiThread(new Runnable({ run: function(){
	try{
		var layout = new LinearLayout(ctx);
		layout.setOrientation(1);
		var menuKBtn = new Button(ctx);;
		menuKBtn.setText("Exit"); 
		menuKBtn.setTypeface(Minecraft.Base.Font3);
		menuKBtn.setTextColor(android.graphics.Color.WHITE);
	  menuKBtn.setBackground(bgb);    
		menuKBtn.setOnClickListener(new View.OnClickListener({
			onClick: function(viewarg){
 stormzmodz();                 
 GUIR.dismiss();
 menu5.dismiss();
 showMenuRBtn();
 GUIK.dismiss();
					}
				}));
layout.addView(menuKBtn);
 GUIK = new PopupWindow(layout, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
		GUIK.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
		GUIK.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.BOTTOM, 0, 0);
		}catch(err){
			Toast.makeText(ctx, "An error occured: " + err, 1).show();
		}
	}}));
}
function showMenuEspBtn() {
ctx.runOnUiThread(new Runnable({ run: function(){
	try{
		var layout = new LinearLayout(ctx);
		layout.setOrientation(1);
		var menuKBtn = new Button(ctx);;
		menuKBtn.setText("Exit"); 
		menuKBtn.setTypeface(Minecraft.Base.Font3);
		menuKBtn.setTextColor(android.graphics.Color.WHITE);
	  menuKBtn.setBackground(bgb);    
		menuKBtn.setOnClickListener(new View.OnClickListener({
			onClick: function(viewarg){
 stormzmodz();                 
 GUIR.dismiss();
 menu6.dismiss();
 showMenuRBtn();
 GUIESP.dismiss();
					}
				}));
layout.addView(menuKBtn);
 GUIESP = new PopupWindow(layout, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
		GUIESP.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
		GUIESP.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.BOTTOM, 0, 0);
		}catch(err){
			Toast.makeText(ctx, "An error occured: " + err, 1).show();
		}
	}}));
}
 function opener() {
ctx.runOnUiThread(new Runnable({ run: function(){
	try{
		var layout = new LinearLayout(ctx);
		layout.setOrientation(1);
		var menuBtn = new Button(ctx);;
		menuBtn.setText("Open"); 
		menuBtn.setTextColor(android.graphics.Color.WHITE);
	  menuBtn.setBackground(bgb);     
		menuBtn.setOnClickListener(new View.OnClickListener({
			onClick: function(viewarg){
 stormzmodz();
                GUI.dismiss();
                showMenuRBtn();
        
						
					}
				}));
		layout.addView(menuBtn);
        GUI = new PopupWindow(layout, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
		GUI.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
		GUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.BOTTOM, 0, 0);
		}catch(err){
			Toast.makeText(ctx, "An error occured: " + err, 1).show();
		}
	}}));
}
function showMenuRBtn() {
ctx.runOnUiThread(new Runnable({ run: function(){
	try{
		var layout = new LinearLayout(ctx);
		layout.setOrientation(1);
		var menuRBtn = new Button(ctx);;
		menuRBtn.setText("Exit"); 
		menuRBtn.setTypeface(Minecraft.Base.Font3);
		menuRBtn.setTextColor(android.graphics.Color.WHITE);
	  menuRBtn.setBackground(bgb);    
		menuRBtn.setOnClickListener(new View.OnClickListener({
			onClick: function(viewarg){
 menu.dismiss();
 opener();
 GUIR.dismiss();

					}
				}));
		layout.addView(menuRBtn);
        GUIR = new PopupWindow(layout, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
		GUIR.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
		GUIR.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.BOTTOM, 0, 0);
		}catch(err){
			Toast.makeText(ctx, "An error occured: " + err, 1).show();
		}
	}}));
}



//Menu
function stormzmodz(){
      var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
      ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
      try{
      var menuLayout = new android.widget.LinearLayout(ctx);
      var menuScroll = new android.widget.ScrollView(ctx);
      var menuLayout1 = new android.widget.LinearLayout(ctx);
      var menuLayouthorr = new android.widget.LinearLayout(ctx);
      menuLayout.setOrientation(1);
      menuLayouthorr.setOrientation(1);
      menuLayout1.setOrientation(0);
      menuLayouthorr.setOrientation(0);
      menuLayout1.setBackground(bgss);
      menuScroll.addView(menuLayout);
      menuLayout1.addView(menuScroll);



      var textview = new android.widget.TextView(ctx);
      textview.setTextSize(25); textview.setTextColor(android.graphics.Color.WHITE);
      textview.setText('Dank  v1'); textview.setGravity(android.view.Gravity.LEFT);
      textview.setBackgroundDrawable(bggcolor);
      
  

      menuLayout.addView(textview);
      
      
      var textview = new android.widget.TextView(ctx);
      textview.setTextSize(6); textview.setTextColor(android.graphics.Color.WHITE);
      textview.setText('      '); textview.setGravity(android.view.Gravity.CENTER);
      textview.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
  

      menuLayout.addView(textview);
      
  var row0 = new android.widget.LinearLayout(MainActivity);
				row0.setOrientation(0);
				
  
  var category1Btn = new android.widget.TextView(ctx);
			category1Btn.setText("   Combat");
			category1Btn.setTextColor(Color.WHITE);
category1Btn.setTextSize(15);  
category1Btn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
		    category1Btn.setGravity(Gravity.LEFT);       
			category1Btn.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
				
                   category1Menu();
           showMenuCBtn();
           menu.dismiss();
           GUIR.dismiss();

			    	     
			}
}));
			
			
   
    
			row0.addView(category1Btn);
			
  
		var icon = new android.widget.ImageView(ctx);
				icon.setImageResource(android.R.drawable.ic_menu_info_details);
    icon.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
  alertToast("This is a test");
}
}));
     row0.addView(icon);
			 function category1Menu(){
	ctx.runOnUiThread(new Runnable({ run: function(){
		try{
			var menuLayout = new LinearLayout(ctx);
			var menuScroll = new ScrollView(ctx);
			var menuLayout1 = new LinearLayout(ctx);
			menuLayout.setOrientation(1);
menuLayout.setBackground(bgss);
menuLayout1.setOrientation(1);
menuScroll.addView(menuLayout);
menuLayout1.addView(menuScroll);
      
     var textview = new android.widget.TextView(ctx);
      textview.setTextSize(25); textview.setTextColor(android.graphics.Color.WHITE);
      textview.setText('   Dank  v1'); textview.setGravity(android.view.Gravity.LEFT);
      textview.setBackgroundDrawable(bggcolor);
      
  

      menuLayout.addView(textview);
      
      
      var textview = new android.widget.TextView(ctx);
      textview.setTextSize(6); textview.setTextColor(android.graphics.Color.WHITE);
      textview.setText('      '); textview.setGravity(android.view.Gravity.CENTER);
      textview.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
  

      menuLayout.addView(textview);
      
      var aq = new customTextView("Aim Aura" , "Gives You Aim Assist");
      aq.setTextColor(android.graphics.Color.WHITE);
  if (aimaura == true) aq.setTextColor(android.graphics.Color.GREEN); 
    aq.setTextSize(15);
 aq.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
     aq.setGravity(android.view.Gravity.CENTER);
      aq.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
            aimaura ? aimaura = false : aimaura = true;
     if (aimaura == true) {   
			aq.setTextColor(android.graphics.Color.GREEN);
aimaura = true;

							}
if(aimaura == false){
   aq.setTextColor(android.graphics.Color.WHITE);     
  aimaura = false;
  
     
    }
    

}
      }));
      menuLayout.addView(aq);
      
      var hq = new customTextView("Hitbox" , "Expands hitbox of players");
      hq.setTextColor(android.graphics.Color.WHITE);
  if (hb1 == true) hq.setTextColor(android.graphics.Color.GREEN);
    hq.setTextSize(15);
 hq.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
     hq.setGravity(android.view.Gravity.CENTER);
      hq.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
            hb1 ? hb1 = false : hb1 = true;
     if (hb1 == true) {   
			hq.setTextColor(android.graphics.Color.GREEN);
hb1 = true;

							}
if(hb1 == false){
   hq.setTextColor(android.graphics.Color.WHITE);     
  hb1 = false;
     }
      
      }
      }));
      menuLayout.addView(hq);
      
      var rm = new customTextView("Rage Mode" , "teleports you to nearest player and quickly teleports you back");
      rm.setTextColor(android.graphics.Color.WHITE);
  if (ragemode == true) rm.setTextColor(android.graphics.Color.GREEN);
    rm.setTextSize(15);
 rm.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
     rm.setGravity(android.view.Gravity.CENTER);
      rm.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
            ragemode ? ragemode = false : ragemode = true;
     if (ragemode == true) {   
			rm.setTextColor(android.graphics.Color.GREEN);
ragemode = true;

							}
if(ragemode == false){
   rm.setTextColor(android.graphics.Color.WHITE);     
  ragemode = false;
     }
      
      }
      }));
      menuLayout.addView(rm);
      
      var oq = new customTextView("Op Aura" , "Gives you a faster hitspeed with swords");
      oq.setTextColor(android.graphics.Color.WHITE);
  if (killaura == true) oq.setTextColor(android.graphics.Color.GREEN);
    oq.setTextSize(15);
 oq.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
     oq.setGravity(android.view.Gravity.CENTER);
      oq.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
            killaura ? killaura = false : killaura = true;
     if (killaura == true) {   
			oq.setTextColor(android.graphics.Color.GREEN);
killaura = true;

							}
if(killaura == false){
   oq.setTextColor(android.graphics.Color.WHITE);     
  killaura = false;
     }
      
      }
      }));
      menuLayout.addView(oq);
      
var sb = new customTextView("Spin Bot" , "Allows you to hit multiple Enemies");
      sb.setTextColor(android.graphics.Color.WHITE);
  if (mh == true) sb.setTextColor(android.graphics.Color.GREEN);
    sb.setTextSize(15);
 sb.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
     sb.setGravity(android.view.Gravity.CENTER);
      sb.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
            mh ? mh = false : mh = true;
     if (mh == true) {   
			sb.setTextColor(android.graphics.Color.GREEN);
mh = true;

							}
if(mh == false){
   sb.setTextColor(android.graphics.Color.WHITE);     
  mh = false;
     }
      
      }
      }));
      menuLayout.addView(sb);
      
      var tpq = new customTextView("Tp Aura" , "teleports you to the nearest entity or player");
	
      tpq.setTextColor(android.graphics.Color.WHITE);
  if (tpps == true) tpq.setTextColor(android.graphics.Color.GREEN);
    tpq.setTextSize(15);
 tpq.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
     tpq.setGravity(android.view.Gravity.CENTER);
      tpq.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
            tpps ? tpps = false : tpps = true;
     if (tpps == true) {   
			tpq.setTextColor(android.graphics.Color.GREEN);
tpps = true;

							}
if(tpps == false){
   tpq.setTextColor(android.graphics.Color.WHITE);     
  tpps = false;
     }
      
      }
      }));
      menuLayout.addView(tpq);
      
      var as = new customTextView("Auto Sword" , "Automatically pulls put sword when in certain proximity of a player");
      as.setTextColor(android.graphics.Color.WHITE);
  if (autosword == true) as.setTextColor(android.graphics.Color.GREEN);
    as.setTextSize(15);
 as.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
     as.setGravity(android.view.Gravity.CENTER);
      as.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
            autosword ? autosword = false : autosword = true;
     if (autosword == true) {   
			as.setTextColor(android.graphics.Color.GREEN);
autosword = true;

							}
if(autosword == false){
   as.setTextColor(android.graphics.Color.WHITE);     
  autosword = false;
     }
      
      }
      }));
      menuLayout.addView(as);

var textview = new android.widget.TextView(ctx);
      textview.setTextSize(6); textview.setTextColor(android.graphics.Color.WHITE);
      textview.setText('      '); textview.setGravity(android.view.Gravity.CENTER);
      textview.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
  

      menuLayout.addView(textview); 
      
      var textview = new android.widget.TextView(ctx);
      textview.setTextSize(25); textview.setTextColor(android.graphics.Color.WHITE);
      textview.setText('      '); textview.setGravity(android.view.Gravity.CENTER);
      textview.setBackgroundDrawable(bggcolor);
  

      menuLayout.addView(textview); 

 menu1 = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/3.6, RelativeLayout.LayoutParams.WRAP_CONTENT);
      menu1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
menu1.setAnimationStyle(android.R.style.Animation_Toast);
menu1.getBackground().setAlpha(200);       
      menu1.showAtLocation(ctx.getWindow().getDecorView(), pos | android.view.Gravity.TOP, ver, hor);
    
 }catch(error){
      print('An error occured: ' + error);
      }
      }}));
      }
   var category2Btn = new android.widget.TextView(ctx);
			category2Btn.setText("   Movement");
category2Btn.setTextColor(Color.WHITE);
			category2Btn.setTextSize(15);
		    category2Btn.setGravity(Gravity.LEFT);
		category2Btn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));      
			category2Btn.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
		
                   category2Menu();
                 menu.dismiss();
                 showMenuMBtn();
                   GUIR.dismiss(); 
                 
                  
                    
			
      }
      }));

    
row0.addView(category2Btn);
			
	
		var icon = new android.widget.ImageView(ctx);
				icon.setImageResource(android.R.drawable.ic_menu_info_details);
    icon.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
  alertToast("This is a test");
}
}));
     row0.addView(icon);
			
			 function category2Menu(){
	ctx.runOnUiThread(new Runnable({ run: function(){
		try{
			var menuLayout = new LinearLayout(ctx);
			var menuScroll = new ScrollView(ctx);
			var menuLayout2 = new LinearLayout(ctx);
			menuLayout.setOrientation(1);
			menuLayout.setBackground(bgss);
			menuLayout2.setOrientation(1);
			menuScroll.addView(menuLayout);
			menuLayout2.addView(menuScroll);
      
      var textview = new android.widget.TextView(ctx);
      textview.setTextSize(25); textview.setTextColor(android.graphics.Color.WHITE);
      textview.setText('   Dank  v1'); textview.setGravity(android.view.Gravity.LEFT);
      textview.setBackgroundDrawable(bggcolor);
      
  

      menuLayout.addView(textview);
      
      
      var textview = new android.widget.TextView(ctx);
      textview.setTextSize(6); textview.setTextColor(android.graphics.Color.WHITE);
      textview.setText('      '); textview.setGravity(android.view.Gravity.CENTER);
      textview.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
  

      menuLayout.addView(textview);
      
      var gbp = new TextView(ctx);
		gbp.setText("Server NoClip");
      gbp.setTextColor(android.graphics.Color.WHITE);
  if (glidebp == true) gbp.setTextColor(android.graphics.Color.GREEN);
    gbp.setTextSize(15);
 gbp.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
     gbp.setGravity(android.view.Gravity.CENTER);
      gbp.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
            glidebp ? glidebp = false : glidebp = true;
     if (glidebp == true) {   
			gbp.setTextColor(android.graphics.Color.GREEN);
glidebp = true;

							}
if(glidebp == false){
   gbp.setTextColor(android.graphics.Color.WHITE);     
  glidebp = false;
     }
      
      }
      }));
      menuLayout.addView(gbp);
      
      var fl = new TextView(ctx);
		fl.setText("Fast Ladder");
      fl.setTextColor(android.graphics.Color.WHITE);
  if (fastl == true) fl.setTextColor(android.graphics.Color.GREEN);
    fl.setTextSize(15);
 fl.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
     fl.setGravity(android.view.Gravity.CENTER);
      fl.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
            fastl ? fastl = false : fastl = true;
     if (fastl == true) {   
			fl.setTextColor(android.graphics.Color.GREEN);
fastl = true;

							}
if(fastl == false){
   fl.setTextColor(android.graphics.Color.WHITE);     
  fastl = false;
     }
      
      }
      }));
      menuLayout.addView(fl);
      
      var spbp = new TextView(ctx);
spbp.setText("Speed Bypass");
      spbp.setTextColor(android.graphics.Color.WHITE);
  if (speedbp == true) spbp.setTextColor(android.graphics.Color.GREEN);
    spbp.setTextSize(15);
 spbp.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
     spbp.setGravity(android.view.Gravity.CENTER);
      spbp.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
            speedbp ? speedbp = false : speedbp = true;
     if (speedbp == true) {   
			spbp.setTextColor(android.graphics.Color.GREEN);
speedbp = true;

							}
if(speedbp == false){
   spbp.setTextColor(android.graphics.Color.WHITE);     
  speedbp = false;
     }
      
      }
      }));
      menuLayout.addView(spbp);
      
      var textview = new android.widget.TextView(ctx);
      textview.setTextSize(6); textview.setTextColor(android.graphics.Color.WHITE);
      textview.setText('      '); textview.setGravity(android.view.Gravity.CENTER);
      textview.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
  

      menuLayout.addView(textview); 
      
      var textview = new android.widget.TextView(ctx);
      textview.setTextSize(25); textview.setTextColor(android.graphics.Color.WHITE);
      textview.setText('      '); textview.setGravity(android.view.Gravity.CENTER);
      textview.setBackgroundDrawable(bggcolor);
  

      menuLayout.addView(textview); 
      
      menu2 = new android.widget.PopupWindow(menuLayout2, ctx.getWindowManager().getDefaultDisplay().getWidth()/3.6, RelativeLayout.LayoutParams.WRAP_CONTENT);
      menu2.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));    
menu2.setAnimationStyle(android.R.style.Animation_Toast);
menu2.getBackground().setAlpha(200);       
      menu2.showAtLocation(ctx.getWindow().getDecorView(), pos | android.view.Gravity.TOP, ver, hor);
     
 }catch(error){
      print('An error occured: ' + error);
      }
      }}));
      }  
      
      var category3Btn = new android.widget.TextView(ctx);
			category3Btn.setText("   Player");
			category3Btn.setTextColor(Color.WHITE);
			category3Btn.setTextSize(15);
	category3Btn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
		    category3Btn.setGravity(Gravity.LEFT);    
			category3Btn.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
				
                   category3Menu();
                  showMenuPBtn();
                  menu.dismiss();
                 GUIR.dismiss();
                  
                    
            
			
      }
      }));

    
row0.addView(category3Btn);
			

		
		var icon = new android.widget.ImageView(ctx);
				icon.setImageResource(android.R.drawable.ic_menu_info_details);
    icon.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
  alertToast("This is a test");
}
}));
     row0.addView(icon);


 function category3Menu(){
	ctx.runOnUiThread(new Runnable({ run: function(){
		try{
			var menuLayout = new LinearLayout(ctx);
			var menuScroll = new ScrollView(ctx);
			var menuLayout3 = new LinearLayout(ctx);
			menuLayout.setOrientation(1);
			menuLayout.setBackground(bgss);
			menuLayout3.setOrientation(1);
menuScroll.addView(menuLayout);
			menuLayout3.addView(menuScroll);
			
			var textview = new android.widget.TextView(ctx);
      textview.setTextSize(25); textview.setTextColor(android.graphics.Color.WHITE);
      textview.setText('   Dank  v1'); textview.setGravity(android.view.Gravity.LEFT);
      textview.setBackgroundDrawable(bggcolor);
      
  

      menuLayout.addView(textview);
      
      
      var textview = new android.widget.TextView(ctx);
      textview.setTextSize(6); textview.setTextColor(android.graphics.Color.WHITE);
      textview.setText('      '); textview.setGravity(android.view.Gravity.CENTER);
      textview.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
  

      menuLayout.addView(textview);
			
			var gm = new TextView(ctx);
		gm.setText("Godmode Spoof");
      gm.setTextColor(android.graphics.Color.WHITE);
  if (godmode == true) gm.setTextColor(android.graphics.Color.GREEN);
    gm.setTextSize(15);
 gm.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
     gm.setGravity(android.view.Gravity.CENTER);
      gm.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
            godmode ? godmode = false : godmode = true;
     if (godmode == true) {   
			gm.setTextColor(android.graphics.Color.GREEN);
godmode = true;

							}
if(godmode == false){
   gm.setTextColor(android.graphics.Color.WHITE);     
  godmode = false;
     }
      
      }
      }));
      menuLayout3.addView(gm);
			
			var textview = new android.widget.TextView(ctx);
      textview.setTextSize(6); textview.setTextColor(android.graphics.Color.WHITE);
      textview.setText('      '); textview.setGravity(android.view.Gravity.CENTER);
      textview.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
  

      menuLayout.addView(textview); 
      
      var textview = new android.widget.TextView(ctx);
      textview.setTextSize(25); textview.setTextColor(android.graphics.Color.WHITE);
      textview.setText('      '); textview.setGravity(android.view.Gravity.CENTER);
      textview.setBackgroundDrawable(bggcolor);
  

      menuLayout.addView(textview); 
			
			menu3 = new android.widget.PopupWindow(menuLayout3, ctx.getWindowManager().getDefaultDisplay().getWidth()/3.6, RelativeLayout.LayoutParams.WRAP_CONTENT);
      menu3.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK)); 
menu3.setAnimationStyle(android.R.style.Animation_Toast);
menu3.getBackground().setAlpha(200);       
      menu3.showAtLocation(ctx.getWindow().getDecorView(), pos | android.view.Gravity.TOP, ver, hor);
     
 }catch(error){
      print('An error occured: ' + error);
      }
      }}));
      }  
      var category6Btn = new android.widget.TextView(ctx);
			category6Btn.setText("   Esp");
			category6Btn.setTextColor(Color.WHITE);
			category6Btn.setTextSize(15);
	category6Btn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
		    category6Btn.setGravity(Gravity.LEFT);       
			category6Btn.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
				
                   category6Menu();
                  showMenuEspBtn();
                  menu.dismiss();
                 GUIR.dismiss();
                  
                    
            
			
      }
      }));

    
		row0.addView(category6Btn);
			
			
		var icon = new android.widget.ImageView(ctx);
				icon.setImageResource(android.R.drawable.ic_menu_info_details);
    icon.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
  alertToast("This is a test");
}
}));
     row0.addView(icon);
     
	
			


 function category6Menu(){
	ctx.runOnUiThread(new Runnable({ run: function(){
		try{
			var menuLayout = new LinearLayout(ctx);
			var menuScroll = new ScrollView(ctx);
			var menuLayout6 = new LinearLayout(ctx);
			menuLayout.setOrientation(1);
			menuLayout.setBackground(bgss);
			menuLayout6.setOrientation(1);
menuScroll.addView(menuLayout);
			menuLayout6.addView(menuScroll);
			
			var textview = new android.widget.TextView(ctx);
      textview.setTextSize(25); textview.setTextColor(android.graphics.Color.WHITE);
      textview.setText('   Dank  v1'); textview.setGravity(android.view.Gravity.LEFT);
      textview.setBackgroundDrawable(bggcolor);
      
  

      menuLayout.addView(textview);
      
      
      var textview = new android.widget.TextView(ctx);
      textview.setTextSize(6); textview.setTextColor(android.graphics.Color.WHITE);
      textview.setText('      '); textview.setGravity(android.view.Gravity.CENTER);
      textview.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
  

      menuLayout.addView(textview);
      
      var FFSS = new TextView(ctx);
		FFSS.setText("Player Esp");
      FFSS.setTextColor(android.graphics.Color.WHITE);
  if (playeresp == true) FFSS.setTextColor(android.graphics.Color.GREEN);
    FFSS.setTextSize(15);
 FFSS.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
     FFSS.setGravity(android.view.Gravity.CENTER);
      FFSS.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
            playeresp ? playeresp = false : playeresp = true;
     if (playeresp == true) {   
			FFSS.setTextColor(android.graphics.Color.GREEN);
playeresp = true;

							}
if(playeresp == false){
   FFSS.setTextColor(android.graphics.Color.WHITE);     
  playeresp = false;
     }
      
      }
      }));
      menuLayout.addView(FFSS);
     
var hm = new TextView(ctx);
		hm.setText("Player Tracers");
      hm.setTextColor(android.graphics.Color.WHITE);
  if (traceresp == true) hm.setTextColor(android.graphics.Color.GREEN);
    hm.setTextSize(15);
 hm.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
     hm.setGravity(android.view.Gravity.CENTER);
      hm.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
            traceresp ? traceresp = false : traceresp = true;
     if (traceresp == true) {   
			hm.setTextColor(android.graphics.Color.GREEN);
traceresp = true;

							}
if(traceresp == false){
   hm.setTextColor(android.graphics.Color.WHITE);     
  traceresp = false;
     }
      
      }
      }));
      menuLayout.addView(hm);

var hml = new TextView(ctx);
		hml.setText("Item Esp");
      hml.setTextColor(android.graphics.Color.WHITE);
  if (itemesp == true) hml.setTextColor(android.graphics.Color.GREEN);
    hml.setTextSize(15);
 hml.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
     hml.setGravity(android.view.Gravity.CENTER);
      hml.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
            itemesp ? itemesp = false : itemesp = true;
     if (itemesp == true) {   
			hml.setTextColor(android.graphics.Color.GREEN);
itemesp = true;

							}
if(itemesp == false){
   hml.setTextColor(android.graphics.Color.WHITE);     
  itemesp = false;
     }
      
      }
      }));
      menuLayout.addView(hml);
      
      var hmllll = new TextView(ctx);
		hmllll.setText("Item Tracers");
      hmllll.setTextColor(android.graphics.Color.WHITE);
  if (itemtracer == true) hmllll.setTextColor(android.graphics.Color.GREEN);
    hmllll.setTextSize(15);
 hmllll.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
     hmllll.setGravity(android.view.Gravity.CENTER);
      hmllll.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
            itemtracer ? itemtracer = false : itemtracer = true;
     if (itemtracer == true) {   
			hmllll.setTextColor(android.graphics.Color.GREEN);
itemtracer = true;

							}
if(itemtracer == false){
   hmllll.setTextColor(android.graphics.Color.WHITE);     
  itemtracer = false;
     }
      
      }
      }));
      menuLayout.addView(hmllll);
      
      var hmll = new TextView(ctx);
		hmll.setText("Mob Esp");
      hmll.setTextColor(android.graphics.Color.WHITE);
  if (mobesp == true) hmll.setTextColor(android.graphics.Color.GREEN);
    hmll.setTextSize(15);
 hmll.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
     hmll.setGravity(android.view.Gravity.CENTER);
      hmll.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
            mobesp ? mobesp = false : mobesp = true;
     if (mobesp == true) {   
			hmll.setTextColor(android.graphics.Color.GREEN);
mobesp = true;

							}
if(mobesp == false){
   hmll.setTextColor(android.graphics.Color.WHITE);     
  mobesp = false;
     }
      
      }
      }));
      menuLayout.addView(hmll);
      
      var hmlll = new TextView(ctx);
		hmlll.setText("Mob Tracers");
      hmlll.setTextColor(android.graphics.Color.WHITE);
  if (mobesp2 == true) hmlll.setTextColor(android.graphics.Color.GREEN);
    hmlll.setTextSize(15);
 hmlll.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
     hmlll.setGravity(android.view.Gravity.CENTER);
      hmlll.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
            mobesp2 ? mobesp2 = false : mobesp2 = true;
     if (mobesp2 == true) {   
			hmlll.setTextColor(android.graphics.Color.GREEN);
mobesp2 = true;

							}
if(mobesp2 == false){
   hmlll.setTextColor(android.graphics.Color.WHITE);     
  mobesp2 = false;
     }
      
      }
      }));
      menuLayout.addView(hmlll);
      
      var hmlllll = new TextView(ctx);
		hmlllll.setText("Chest Esp");
      hmlllll.setTextColor(android.graphics.Color.WHITE);
  if (chesteesp == true) hmlllll.setTextColor(android.graphics.Color.GREEN);
    hmlllll.setTextSize(15);
 hmlllll.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
     hmlllll.setGravity(android.view.Gravity.CENTER);
      hmlllll.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
            chesteesp ? chesteesp = false : chesteesp = true;
     if (chesteesp == true) {   
			hmlllll.setTextColor(android.graphics.Color.GREEN);
chesteesp = true;
var x = getPlayerX();
var y = getPlayerY();
var z = getPlayerZ();
var newX;
var newY;
var newZ;
for(var blockX = -30; blockX <= 30; blockX++) {
for(var blockY = -60; blockY <= 60; blockY++) {
for(var blockZ = -30; blockZ <= 30; blockZ++) {
newX = x + blockX;
newY = y + blockY;
newZ = z + blockZ;
if(getTile(newX, newY, newZ) == 54){
chests.push([newX,newY,newZ]);
}
}
}
}
							}
if(chesteesp == false){
   hmlllll.setTextColor(android.graphics.Color.WHITE);     
  chesteesp = false;
     }
      
      }
      }));
      menuLayout.addView(hmlllll);
      
      var hmllllll = new TextView(ctx);
		hmllllll.setText("Xray (Working)");
      hmllllll.setTextColor(android.graphics.Color.WHITE);
  if (diamondxray == true) hmllllll.setTextColor(android.graphics.Color.GREEN);
    hmllllll.setTextSize(15);
 hmllllll.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
     hmllllll.setGravity(android.view.Gravity.CENTER);
      hmllllll.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
            diamondxray ? diamondxray = false : diamondxray = true;
     if (diamondxray == true) {   
			hmllllll.setTextColor(android.graphics.Color.GREEN);
diamondxray = true;
print("Only diamonds are xrayed");
var x1 = getPlayerX();
var y1 = getPlayerY();
var z1 = getPlayerZ();
var newX1;
var newY1;
var newZ1;
for(var blockX1 = -30; blockX1 <= 30; blockX1++) {
for(var blockY1 = -60; blockY1 <= 60; blockY1++) {
for(var blockZ1 = -30; blockZ1 <= 30; blockZ1++) {
newX1 = x1 + blockX1;
newY1 = y1 + blockY1;
newZ1 = z1 + blockZ1;
if(getTile(newX1, newY1, newZ1) == 56){
dxray.push([newX1,newY1,newZ1]);
}
}
}
}
							}
if(diamondxray == false){
   hmllllll.setTextColor(android.graphics.Color.WHITE);     
  diamondxray = false;
     }
      
      }
      }));
      menuLayout.addView(hmllllll);
      
      var textview = new android.widget.TextView(ctx);
      textview.setTextSize(6); textview.setTextColor(android.graphics.Color.WHITE);
      textview.setText('      '); textview.setGravity(android.view.Gravity.CENTER);
      textview.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
  

      menuLayout.addView(textview); 
      
      var textview = new android.widget.TextView(ctx);
      textview.setTextSize(25); textview.setTextColor(android.graphics.Color.WHITE);
      textview.setText('      '); textview.setGravity(android.view.Gravity.CENTER);
      textview.setBackgroundDrawable(bggcolor);
  

      menuLayout.addView(textview); 
      
      menu6 = new android.widget.PopupWindow(menuLayout6, ctx.getWindowManager().getDefaultDisplay().getWidth()/3.6, RelativeLayout.LayoutParams.WRAP_CONTENT);
      menu6.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
menu6.setAnimationStyle(android.R.style.Animation_Toast);
menu6.getBackground().setAlpha(200);       
      menu6.showAtLocation(ctx.getWindow().getDecorView(), pos | android.view.Gravity.TOP, ver, hor);
     
 }catch(error){
      print('An error occured: ' + error);
      }
      }}));
      }  
      
      var category4Btn = debugTextView("   Settings");
category4Btn.setTextColor(Color.WHITE);
			category4Btn.setTextSize(15);
		    category4Btn.setGravity(Gravity.LEFT);
		
		category4Btn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
			category4Btn.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
								               
 category4Menu();
                                    
menu.dismiss(); 
                
showMenuSBtn();
                   GUIR.dismiss(); 
                                    
			
      }
      }));

    
			row0.addView(category4Btn);
			
			
		var icon = new android.widget.ImageView(ctx);
				icon.setImageResource(android.R.drawable.ic_menu_info_details);
    icon.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
  alertToast("This is a test");
}
}));
     row0.addView(icon);
     



 function category4Menu(){
	ctx.runOnUiThread(new Runnable({ run: function(){
		try{
			var menuLayout = new LinearLayout(ctx);
			var menuScroll = new ScrollView(ctx);
			var menuLayout4 = new LinearLayout(ctx);
			menuLayout.setOrientation(1);
			menuLayout.setBackground(bgss);
			menuLayout4.setOrientation(1);
menuScroll.addView(menuLayout);
			menuLayout4.addView(menuScroll);
			
			var textview = new android.widget.TextView(ctx);
      textview.setTextSize(25); textview.setTextColor(android.graphics.Color.WHITE);
      textview.setText('   Dank  v1'); textview.setGravity(android.view.Gravity.LEFT);
      textview.setBackgroundDrawable(bggcolor);
      
  

      menuLayout.addView(textview);
      
      
      var textview = new android.widget.TextView(ctx);
      textview.setTextSize(6); textview.setTextColor(android.graphics.Color.WHITE);
      textview.setText('      '); textview.setGravity(android.view.Gravity.CENTER);
      textview.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
  

      menuLayout.addView(textview);
      
      var FFS = new android.widget.TextView(ctx);
		FFS.setText("Remove Scrollbar");
      FFS.setTextColor(android.graphics.Color.WHITE);
      FFS.setTextSize(15);
      FFS.setGravity(android.view.Gravity.CENTER);
      
      FFS.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      sb.dismiss();
    }
      
     
      }));
      menuLayout.addView(FFS);
      
      
      
var yesBtn = new android.widget.Button(ctx);
            yesBtn.setText("Center Menu");
            yesBtn.setTextColor(android.graphics.Color.WHITE);   
			yesBtn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
  
            yesBtn.setTextSize(15);
            yesBtn.setGravity(android.view.Gravity.CENTER);
            yesBtn.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                	alolenabler();
                position = "center";
					GUIS.dismiss();
					menu4.dismiss();
					
					
              }
            }));
            menuLayout.addView(yesBtn); 

var yesBtn = new android.widget.Button(ctx);
            yesBtn.setText("Right Side Menu");
            yesBtn.setTextColor(android.graphics.Color.WHITE);   
			yesBtn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
  
            yesBtn.setTextSize(15);
            yesBtn.setGravity(android.view.Gravity.CENTER);
            yesBtn.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                position = "right";
                alolenabler();
			GUIS.dismiss();
					menu4.dismiss();
							
					
              }
            }));
            menuLayout.addView(yesBtn); 
            
            var yesBtn = new android.widget.Button(ctx);
            yesBtn.setText("Left Side Menu");
            yesBtn.setTextColor(android.graphics.Color.WHITE);   
			yesBtn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
  
            yesBtn.setTextSize(15);
            yesBtn.setGravity(android.view.Gravity.CENTER);
            yesBtn.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                position = "left";
                alolenabler();
		GUIS.dismiss();
					menu4.dismiss();
							
						
              }
            }));
            menuLayout.addView(yesBtn); 
            
            var yesBtn = new android.widget.Button(ctx);
            yesBtn.setText("Tab bar color blue");
            yesBtn.setTextColor(android.graphics.Color.WHITE);   
			yesBtn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
  
            yesBtn.setTextSize(15);
            yesBtn.setGravity(android.view.Gravity.CENTER);
            yesBtn.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                cl = "blue";
                alollenabler();
		GUIS.dismiss();
					menu4.dismiss();
							
						
              }
            }));
            menuLayout.addView(yesBtn); 
            
            var yesBtn = new android.widget.Button(ctx);
            yesBtn.setText("Tab bar color red");
            yesBtn.setTextColor(android.graphics.Color.WHITE);   
			yesBtn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
  
            yesBtn.setTextSize(15);
            yesBtn.setGravity(android.view.Gravity.CENTER);
            yesBtn.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                cl = "red";
                alollenabler();
		GUIS.dismiss();
					menu4.dismiss();
							
						
              }
            }));
            menuLayout.addView(yesBtn); 
            
            var yesBtn = new android.widget.Button(ctx);
            yesBtn.setText("Tab bar color green");
            yesBtn.setTextColor(android.graphics.Color.WHITE);   
			yesBtn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
  
            yesBtn.setTextSize(15);
            yesBtn.setGravity(android.view.Gravity.CENTER);
            yesBtn.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                cl = "green";
                alollenabler();
		GUIS.dismiss();
					menu4.dismiss();
							
						
              }
            }));
            menuLayout.addView(yesBtn); 
            
                        var yesBtn = new android.widget.Button(ctx);
            yesBtn.setText("Tab bar color white");
            yesBtn.setTextColor(android.graphics.Color.WHITE);   
			yesBtn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
  
            yesBtn.setTextSize(15);
            yesBtn.setGravity(android.view.Gravity.CENTER);
            yesBtn.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                cl = "white";
                alollenabler();
		GUIS.dismiss();
					menu4.dismiss();
							
						
              }
            }));
            menuLayout.addView(yesBtn); 
            
                        var yesBtn = new android.widget.Button(ctx);
            yesBtn.setText("Tab bar color black");
            yesBtn.setTextColor(android.graphics.Color.WHITE);   
			yesBtn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
  
            yesBtn.setTextSize(15);
            yesBtn.setGravity(android.view.Gravity.CENTER);
            yesBtn.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                cl = "black";
                alollenabler();
		GUIS.dismiss();
					menu4.dismiss();
							
						
              }
            }));
            menuLayout.addView(yesBtn); 
            
            var textview = new android.widget.TextView(ctx);
      textview.setTextSize(6); textview.setTextColor(android.graphics.Color.WHITE);
      textview.setText('      '); textview.setGravity(android.view.Gravity.CENTER);
      textview.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
  

      menuLayout.addView(textview); 
      
      var textview = new android.widget.TextView(ctx);
      textview.setTextSize(25); textview.setTextColor(android.graphics.Color.WHITE);
      textview.setText('      '); textview.setGravity(android.view.Gravity.CENTER);
      textview.setBackgroundDrawable(bggcolor);
  

      menuLayout.addView(textview); 

menu4 = new android.widget.PopupWindow(menuLayout4, ctx.getWindowManager().getDefaultDisplay().getWidth()/3.6, RelativeLayout.LayoutParams.WRAP_CONTENT);
      menu4.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK)); 
      menu4.getBackground().setAlpha(200);       
menu4.setAnimationStyle(android.R.style.Animation_Toast);
      menu4.showAtLocation(ctx.getWindow().getDecorView(), pos | android.view.Gravity.TOP, ver, hor);
     
 }catch(error){
      print('An error occured: ' + error);
      }
      }}));
      }  
      
           
     menuLayout.addView(row0);
      
      
      
            menu = new android.widget.PopupWindow(menuLayout1, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
      menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
menu.setAnimationStyle(android.R.style.Animation_Toast);
menu.getBackground().setAlpha(200);       
      menu.showAtLocation(ctx.getWindow().getDecorView(), pos | android.view.Gravity.TOP, ver, hor);
     
 }catch(error){
      print('An error occured: ' + error);
      }
      }}));
      }  
function titlee(){
      var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
      ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
      try{
      var menuLayout = new android.widget.LinearLayout(ctx);
      var menuScroll = new android.widget.ScrollView(ctx);
      var menuLayout1 = new android.widget.LinearLayout(ctx);
      var menuLayouthorr = new android.widget.LinearLayout(ctx);
      menuLayout.setOrientation(1);
      menuLayouthorr.setOrientation(1);
      menuLayout1.setOrientation(1);
      menuLayouthorr.setOrientation(0);
      menuScroll.addView(menuLayout);
      menuLayout1.addView(menuScroll);
    

  
      
var textview = new android.widget.TextView(ctx);
      textview.setTextSize(size0); textview.setTextColor(changing0);
      textview.setText('   D'); textview.setGravity(android.view.Gravity.CENTER);
  

      menuLayouthorr.addView(textview);
      
      var textview = new android.widget.TextView(ctx);
      textview.setTextSize(size1); textview.setTextColor(changing1);
      textview.setText('a'); textview.setGravity(android.view.Gravity.CENTER);
  

      menuLayouthorr.addView(textview);
      
      var textview = new android.widget.TextView(ctx);
      textview.setTextSize(size2); textview.setTextColor(changing2);
      textview.setText('n'); textview.setGravity(android.view.Gravity.CENTER);
  

      menuLayouthorr.addView(textview);
      
      var textview = new android.widget.TextView(ctx);
      textview.setTextSize(size3); textview.setTextColor(changing3);
      textview.setText('k'); textview.setGravity(android.view.Gravity.CENTER);
  

      menuLayouthorr.addView(textview);
      
            var textview = new android.widget.TextView(ctx);
      textview.setTextSize(size3); textview.setTextColor(changing4);
      textview.setText('  v'); textview.setGravity(android.view.Gravity.CENTER);
  

      menuLayouthorr.addView(textview);
      
      var textview = new android.widget.TextView(ctx);
      textview.setTextSize(size3); textview.setTextColor(changing5);
      textview.setText('1'); textview.setGravity(android.view.Gravity.CENTER);
  

      menuLayouthorr.addView(textview);
      
                  titleee = new android.widget.PopupWindow(menuLayout1 && menuLayouthorr, ctx.getWindowManager().getDefaultDisplay().getWidth()/3.9, RelativeLayout.LayoutParams.WRAP_CONTENT);
     titleee.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
      titleee.showAtLocation(ctx.getWindow().getDecorView(), pos | android.view.Gravity.TOP, ver, hor);
     
 }catch(error){
      print('An error occured: ' + error);
      }
      }}));
      }  
      
function scrolls(){
      var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
      ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
      try{
      var menuLayout = new android.widget.LinearLayout(ctx);
      var menuScroll = new android.widget.ScrollView(ctx);
     menuLayout.setBackground(bg2);
 var menuLayoutsb = new android.widget.LinearLayout(ctx);
      menuLayout.setOrientation(1);
      
     
      menuLayoutsb.setOrientation(1);
      menuScroll.addView(menuLayout);
      menuLayoutsb.addView(menuScroll);

var scrollText = new android.widget.TextView(ctx);
scrollText.setText("Thanks for using the dank base - BTW This is a scroll bar - The base is made by Stormz Modz");
scrollText.setTextSize(15);                                            
scrollText.setTextColor(android.graphics.Color.WHITE);
scrollText.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
scrollText.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);
scrollText.setMarqueeRepeatLimit(-1);
scrollText.setSingleLine();
scrollText.setHorizontallyScrolling(true);
scrollText.setSelected(true);
menuLayout.addView (scrollText);

      
      
								
      

            sb = new android.widget.PopupWindow(menuLayoutsb, ctx.getWindowManager().getDefaultDisplay().getWidth()/1 , RelativeLayout.LayoutParams.WRAP_CONTENT);
      sb.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
sb.getBackground().setAlpha(200);       
sb.setAnimationStyle(android.R.style.Animation_Toast);
      sb.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.BOTTOM, 0, 150);
     
 }catch(error){
      print('An error occured: ' + error);
      }
      }}));
      }  
      scrolls();



      
      function debugmenu(){
      var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
      ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
      try{
      var menuLayout = new android.widget.LinearLayout(ctx);
      var menuScroll = new android.widget.ScrollView(ctx);
      var menuLayoutdmm = new android.widget.LinearLayout(ctx);
      menuLayout.setOrientation(1);
     
      menuLayoutdmm.setOrientation(1);
      menuScroll.addView(menuLayout);
      menuLayoutdmm.addView(menuScroll);


	
var textview = new android.widget.TextView(ctx);
      textview.setTextSize(20); textview.setTextColor(android.graphics.Color.WHITE);
      textview.setText('Debug Settings'); textview.setGravity(android.view.Gravity.CENTER);
      textview.setBackground(bg3);
  

      menuLayout.addView(textview);
      
      var als = new android.widget.TextView(ctx);
      var content = load(path2, "clientId.txt");
		als.setText("Your clientId is: "+content+"(Press to hide ID)");
      als.setTextColor(android.graphics.Color.WHITE);
      als.setTextSize(15);
      als.setGravity(android.view.Gravity.LEFT);
      
      als.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
  menuLayout.removeView(als);
    }
      
     
      }));
      menuLayout.addView(als);    
      
      var textview = new android.widget.TextView(ctx);
      textview.setTextSize(15); textview.setTextColor(android.graphics.Color.WHITE);
      textview.setText('User Can go Online'); textview.setGravity(android.view.Gravity.CENTER);
        textview.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
alertToast("Debugging not enabled!!");


}
					}));
      menuLayout.addView(textview);
      
      var textview = new android.widget.TextView(ctx);
      textview.setTextSize(15); textview.setTextColor(android.graphics.Color.WHITE);
      textview.setText('Check Menu Status'); textview.setGravity(android.view.Gravity.CENTER);
        textview.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
alertToast("Debugging not enabled!!");
checkServer();

}
					}));
      menuLayout.addView(textview);
      
      var textview = new android.widget.TextView(ctx);
      textview.setTextSize(15); textview.setTextColor(android.graphics.Color.WHITE);
      textview.setText('Manuel Update pkg'); textview.setGravity(android.view.Gravity.CENTER);
        textview.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
alertToast("Debugging not enabled!!");
alertToast("Invalid User Id");

}
					}));
      menuLayout.addView(textview);
      
            var textview = new android.widget.TextView(ctx);
      textview.setTextSize(15); textview.setTextColor(android.graphics.Color.WHITE);
      textview.setText('Execute Code'); textview.setGravity(android.view.Gravity.CENTER);
        textview.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
alertToast("Debugging not enabled!!");
terminal();

}
					}));
      menuLayout.addView(textview);
      
      

      
      var icon = new android.widget.ImageView(ctx);
				icon.setImageResource(android.R.drawable.ic_delete);
icon.setBackground(bg3);
icon.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					dankmm.dismiss();
					titlee();
     p11();
             sjda = true;  
					
}
					}));
menuLayout.addView(icon, android.widget.LinearLayout.LayoutParams.MATCH_PARENT);
      

      
            dankmm = new android.widget.PopupWindow(menuLayoutdmm, ctx.getWindowManager().getDefaultDisplay().getWidth()/1, ctx.getWindowManager().getDefaultDisplay().getHeight()/1);
      dankmm.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));    
      dankmm.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, 0, 0);
     
 }catch(error){
      print('An error occured: ' + error);
      }
      }}));
      }    
      
//FUNCTIONS
function toDirectionalVector(vector, yaw, pitch) { 
    vector[0] = Math.cos(yaw) * Math.cos(pitch);
    vector[1] = Math.sin(pitch);
    vector[2] = Math.sin(yaw) * Math.cos(pitch);
}
	function attackHook(att, vic) {
		   if(att == Player.getEntity() && tpps && Entity.getHealth(vic) > 0) {
           setPosition(getPlayerEnt(), Entity.getX(vic),Entity.getY(vic)+1,Entity.getZ(vic));
           }
           if(att == Player.getEntity() && sethome == 1 && ragemode && Entity.getHealth(vic) > 0) {
           var player = Player.getEntity();
           setPosition(player, homeX, homeY, homeZ);          
}

		
	}

      function getNearestEntity(maxrange) {
			var mobs = Entity.getAll();
			var players = Server.getAllPlayers();
			var small = maxrange;
			var ent = null;
			for (var i = 0; i < mobs.length; i++) {
				var x = Entity.getX(mobs[i]) - getPlayerX();
				var y = Entity.getY(mobs[i]) - getPlayerY();
				var z = Entity.getZ(mobs[i]) - getPlayerZ();
				var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
				if (dist < small && dist > 0 && Entity.getEntityTypeId(mobs[i]) <= 63 && Entity.getHealth(mobs[i]) >= 1) {
					small = dist;
					ent = mobs[i];
				}
			}
			for (var i = 0; i < players.length; i++) {
				var x = Entity.getX(players[i]) - getPlayerX();
				var y = Entity.getY(players[i]) - getPlayerY();
				var z = Entity.getZ(players[i]) - getPlayerZ();
				var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
				if (dist < small && dist > 0 && Entity.getHealth(players[i]) >= 1) {
					small = dist;
					ent = players[i];
				}
			}
			return ent;
		}

function crosshairAimAt(ent, pos) {
							if(ent != null) {
				var x = Entity.getX(ent) - getPlayerX();
				var y = Entity.getY(ent) - getPlayerY();
				var z = Entity.getZ(ent) - getPlayerZ();
				if(pos != null && pos instanceof Array) {

					x = Entity.getX(ent) - pos[0];
					y = Entity.getY(ent) - pos[1];
					z = Entity.getZ(ent) - pos[2];
				}
				if(Entity.getEntityTypeId(ent) != 63)
					y += 0.5;
				var a = 0.5 + Entity.getX(ent);
				var b = Entity.getY(ent);
				var c = 0.5 + Entity.getZ(ent);
				var len = Math.sqrt(x * x + y * y + z * z);
				var y = y / len;
				var pitch = Math.asin(y);
				pitch = pitch * 180.0 / Math.PI;
				pitch = -pitch;
				var yaw = -Math.atan2(a - (Player.getX() + 0.5), c - (Player.getZ() + 0.5)) * (180 / Math.PI);
				if(pitch < 89 && pitch > -89) {
					Entity.setRot(Player.getEntity(), yaw, pitch);
				}
			}
  }
  function player14(ent, pos) {
							if(ent != null) {
				var x = Entity.getX(ent) - getPlayerX();
				var y = Entity.getY(ent) - getPlayerY();
				var z = Entity.getZ(ent) - getPlayerZ();
				if(pos != null && pos instanceof Array) {

					x = Entity.getX(ent) - pos[0];
					y = Entity.getY(ent) - pos[1];
					z = Entity.getZ(ent) - pos[2];
				}
				if(Entity.getEntityTypeId(ent) != 63)
					y += 0.6;
				var a = 0.8 + Entity.getX(ent);
				var b = Entity.getY(ent);
				var c = 0.9 + Entity.getZ(ent);
				var len = Math.sqrt(x * x + y * y + z * z);
				var y = y / len;
				var pitch = Math.asin(y);
				pitch = pitch * 90.0 / Math.PI;
				pitch = -pitch;
				var yaw = -Math.atan2(a - (Player.getX() + 5), c - (Player.getZ() + 6)) * (180 / Math.PI);
				if(pitch < 90 && pitch > -89) {
					Entity.setRot(Player.getEntity(), yaw, pitch);
				}
			}
  }
  function getRandPlayer(maxrange) {
	var players = Server.getAllPlayers();
	var small = maxrange;
	var ent = null;
	if (players != null) {
var p = players[Math.floor(Math.random() * players.length)];
			var x = Entity.getX(p) - getPlayerX();
			var y = Entity.getY(p) - getPlayerY();
			var z = Entity.getZ(p) - getPlayerZ();
			var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
			if (dist < small && dist > 0 && Entity.getHealth(p) >= 1) {
				small = dist;
				ent = p;
			}
		return ent;
	}
}

  
 var px = Player.getX();
var py = Player.getY();
var pz = Player.getZ();
var x = Player.getX();
var y = Player.getY();
var z = Player.getZ();

function rptask() {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function () {
            new android.os.Handler().postDelayed(new java.lang.Runnable({
                run: function () {
  
if(mh) {
							var ent = getNearestEntity(8)
							if(ent != null) player14(ent);
}
if(mh) {
							var ent = getNearestEntity(8)
							if(ent != null) crosshairAimAt(ent);
}
if(autosword) {
          var slotId = 0;
          var getInvSword = Player.getInventorySlot(slotId);
          if(getInvSword == 276 || getInvSword == 268 || getInvSword == 283 || getInvSword == 267 || getInvSword == 272) {
          var invSword = slotId;
          } else {
          slotId++;
          }
          if(slotId = 27) {
          slotId = 0;
          
          }
        var ent = getNearestEntity(60);
        if(ent != null && Player.getName(ent) != "" && Player.getName(ent) != " " && Player.getName(ent)) {
                   Player.setSelectedSlotId(invSword);
        }
   }   
   if(autosword) {
          var slotId = 1;
          var getInvSword = Player.getInventorySlot(slotId);
          if(getInvSword == 276 || getInvSword == 268 || getInvSword == 283 || getInvSword == 267 || getInvSword == 272) {
          var invSword = slotId;
          } else {
          slotId++;
          }
          if(slotId = 27) {
          slotId = 1;
          
          }
        var ent = getNearestEntity(60);
        if(ent != null && Player.getName(ent) != "" && Player.getName(ent) != " " && Player.getName(ent)) {
                   Player.setSelectedSlotId(invSword);
        }
   }   
   if(aimaura){
var ent = getRandPlayer(7);
if(ent != null) crosshairAimAt(ent);
}
nx = getPlayerX();
                    ny = getPlayerY();
                    nz = getPlayerZ();
                    eval(rptask())
                }
            }), 900 / 70)
        }
    }))
}
rptask();
  var aimaur = false;
    function modTick() {
						if(aimaur) {
							var ent = getNearestEntity(aarange)
							if(ent != null) crosshairAimAt(ent);

}


    if(godmode){
    Entity.addEffect(getPlayerEnt(), MobEffect.heal,   999999999, 100, false, false); 
    Player.setHealth(1337);
//suspiria sucks at coding 
    }
if(fastl) {
if(getTile(getPlayerX(), getPlayerY() +1, getPlayerZ()) == 65){
setVelY(getPlayerEnt(), ladderspeed);
Entity.setPosition(getPlayerEnt(),Player.getX(),Player.getY()+ ladderspeed,Player.getZ());
}
}		 
           
      if (glidebp == true) { 
setVelY(getPlayerEnt(), -0.004);
        var playerDir = [0, 0, 0];
        toDirectionalVector(playerDir, (getYaw() + 90) * Math['PI'] / 180, getPitch() * Math['PI'] / 180 * -1);
        setVelX(getPlayerEnt(), 0.6 * playerDir[0]);
        setVelZ(getPlayerEnt(), 0.6 * playerDir[2]);
        Entity['setCollisionSize'](Player['getEntity'](), 0, 0)
    }
    if(glidebp == false){
    	Entity['setCollisionSize'](Player['getEntity'](), 1, 2)
    
   if(killaura == true){
    
var ent = getNearestEntity(4)
if(ent != null) crosshairAimAt(ent);
	Entity.addEffect(Player.getEntity(), MobEffect.digSpeed, 99999999, 7, false, false);
}
if(killaura == false){
Entity.removeAllEffects(getPlayerEnt());
    
}
 if (hb1 == true) {
    ent = getNearestEntity(12);
    Entity.setCollisionSize(ent, 8, 8);
    }
    if(hb1 == false){
    var ent = getNearestEntity(100);
        Entity.setCollisionSize(ent, 0.6, 1.8);
        }
        
}	
	if (speedbp) { 
		if(Utils.Player.isOnGround())
        var playerDir = [0, 0, 0];
        toDirectionalVector(playerDir, (getYaw() + 90) * Math['PI'] / 180, getPitch() * Math['PI'] / 180 * -1);
        }
        
   if(ragemode) {
              homeX = Player.getX();
              homeY = Player.getY()+1;
              homeZ = Player.getZ();
              sethome = 1;
	   ent = getNearestEntity(1000);
    	if(ent != null) {
           setPosition(getPlayerEnt(), Entity.getX(ent),Entity.getY(ent)+ 1,Entity.getZ(ent));     
}}
}   
