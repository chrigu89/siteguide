kn_auswahl=	'ja';




	function gesamtpruefung(){
		validation_kn_ja_nr=0;
		validation_kn_nein_nr=0;
	$( 'form[name="dp_bestellform"] input' ).each(function( index ) {

 data_id=$( this ).attr('data-id');
 name_i=$( this ).attr('name');
  
  // console.log( name_i + " : " + data_id );
   
   if(kn_auswahl=='ja'){
	   
	  if(validation_kn_ja.indexOf(name_i)>=0){
			  if(data_id =='ok'){
		 
		  validation_kn_ja_nr+=1;
	  }    
		  
	  }   
   }
  
     if(kn_auswahl=='nein'){
	   
	  if(validation_kn_nein.indexOf(name_i)>=0){
			  if(data_id =='ok'){
		 
		  validation_kn_nein_nr+=1;
	  }    
		  
	  }   
   }
  
});	




	  if(kn_auswahl=='nein'){



	  if(validation_kn_nein_nr == validation_kn_nein_nr_vorgabe){

$( 'form[name="dp_bestellform"] button[type="submit"]' ).addClass('active');
	  }else{
		$( 'form[name="dp_bestellform"] button[type="submit"]' ).removeClass('active');  
	
	  }
	

 }else if(kn_auswahl=='ja'){



	  if(validation_kn_ja_nr == validation_kn_ja_nr_vorgabe){

$( 'form[name="dp_bestellform"] button[type="submit"]' ).addClass('active');
	  }else{
		$( 'form[name="dp_bestellform"] button[type="submit"]' ).removeClass('active');  
		  
	  }
	
	
 }
console.log( kn_auswahl+ " validation_kn_nein_nr: " + validation_kn_nein_nr );
console.log( kn_auswahl+ " validation_kn_ja_nr: " + validation_kn_ja_nr );	
	
}











$(document).ready(function() {
f_change=false;


validation_kn_ja = 'land,v_name,n_name,knr,telefon,email';
validation_kn_ja_nr_vorgabe=6;
validation_kn_ja_nr=0;
validation_kn_nein = 'land,v_name,n_name,telefon,email,strasse,hnr,plz,ort';
validation_kn_nein_nr_vorgabe=9;
validation_kn_nein_nr=0;




	
	
	


	
	
function ValidateStr_length(str){
if(str.length>=2 && str.indexOf('$')==-1 && str.indexOf('%')==-1 && str.indexOf('}')==-1)
{return true;}else{return false;}
}
function ValidatePLZ(plz){
if(plz.length==5 && plz == parseFloat(plz))
{return true;}else{return false;}
}	
function ValidateHNR(nr){
if(nr.length>=1 && !isNaN(parseFloat(nr)))
{return true;}else{return false;}
}	
function ValidateEmail(mail){
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(mail.match(mailformat)){return true;}else{return false;}
}	
function error_act(name, tf){
	if(tf){
	$( 'form[name="dp_bestellform"] .'+name+' .alert_.e_error' ).hide();
	$( 'form[name="dp_bestellform"] .'+name+' .validation_ok' ).show();	
$( 'form[name="dp_bestellform"] input[name="'+name+'"]' ).attr('data-id', 'ok');
	}else{
		$( 'form[name="dp_bestellform"] .'+name+' .validation_ok' ).hide();
		$( 'form[name="dp_bestellform"] input[name="'+name+'"]' ).attr('data-id', '');
		if(f_change){
			$( 'form[name="dp_bestellform"] .'+name+' .alert_.e_error' ).show();	
		}
		
	}
	
}
	
	
function feldpruefung(name){
	
kn_auswahl=	$( '#kn_auswahl .feed.f_active' ).attr('id') 
	
	
	 
	//console.log( $( '#kn_auswahl .feed.f_active' ).attr('id') );
	
	
	if(name=='email'){
		  console.log("email")
	error_act(name,ValidateEmail( $( 'form[name="dp_bestellform"] input[name="'+name+'"]' ).val() ));
		
	}
	if(name=='plz'){
			error_act(name,ValidatePLZ( $( 'form[name="dp_bestellform"] input[name="'+name+'"]' ).val() ));
		
	}
	
		if(name=='n_name' || name=='v_name'  || name=='telefon' || name=='land'){

	
			error_act(name,ValidateStr_length( $( 'form[name="dp_bestellform"] input[name="'+name+'"]' ).val() ));
	
	}
	
	if(kn_auswahl=='ja'){
		
		if( name=='knr'){
			
error_act(name,ValidateStr_length( $( 'form[name="dp_bestellform"] input[name="'+name+'"]' ).val() ));
		}
		
	}else if(kn_auswahl=='nein'){
		
		if( name=='ort' || name=='strasse'){
			
	error_act(name,ValidateStr_length( $( 'form[name="dp_bestellform"] input[name="'+name+'"]' ).val() ));
	
	}
	
		
	if( name=='hnr'){
			
	error_act(name,ValidateHNR( $( 'form[name="dp_bestellform"] input[name="'+name+'"]' ).val() ));
	
	}
		
		
	}
gesamtpruefung();	
f_change=false;	
}	

	

$( 'form[name="dp_bestellform"] input, form[name="dp_bestellform"] textarea' ).keyup(function() {
	
//$( 'form[name="dp_bestellform"] textarea' ).val($( this ).attr('name')+' input keyup');

name_class=$( this ).attr('name');
feldpruefung(name_class);

});




	
$( 'form[name="dp_bestellform"] input, form[name="dp_bestellform"] textarea' ).change(function() {
f_change=true;		
//$( 'form[name="dp_bestellform"] textarea' ).val($( this ).attr('name')+' input change');

name_class=$( this ).attr('name');
feldpruefung(name_class);
});

$( 'form[name="dp_bestellform"] input, form[name="dp_bestellform"] textarea' ).blur(function() {
f_change=true;		
//$( 'form[name="dp_bestellform"] textarea' ).val($( this ).attr('name')+' input blur');

name_class=$( this ).attr('name');
feldpruefung(name_class);
});



function form_alert(id){
	$( '#load_' ).addClass( "overlay" );
	$( '#load_' ).addClass( "alr" );
	
	 $( "#alert_txt" ).html( $( "#"+id ).html());

	
	 toprt=xHeight/2;
	 toprt=toprt-($( "#alert_fens" ).height()/2);
	 $( "#alert_fens" ).css({'top':toprt+'px'});
	
	 $( "#load_" ).fadeIn( 170, 'easeInQuart', function() {

});
	
		 $( "#alert_fens" ).delay(70).fadeIn( 170, 'easeInQuart', function() {

});	
	}









$( 'form[name="dp_bestellform"]' ).submit(function( event ) {
event.preventDefault();	
		
if($( 'form[name="dp_bestellform"] button[type="submit"]' ).hasClass('active')){
	
console.log('ist absendebereit');
eingabe_sendung=''
+'<div class="eingaben_user">'
+$( 'div#header h1' ).html()
+$( '#eingaben_anz' ).html()
+$( '#lagen_anz' ).html()
+$( '#harz_total' ).html()
+$( '#harz_volumen' ).html()
+$( '#harz_gewicht' ).html()
+$( '#produkte_verwenden' ).html()
+'</div>';


$( 'input[name="eingabe_berechnung"]' ).val(eingabe_sendung);
var form=$('form[name="dp_bestellform"]');
 
    $('#load_').addClass("overlay");
	 $( "#load_" ).fadeIn( 170, 'easeInQuart', function() {

});
		$.ajax({
			type: 'POST',
			url: form.prop('action'),
			data : form.serialize(),
			crossDomain: true,
    cache: false,
			dataType: 'html',
			encode: true
		}).done(function(data) {
			// Aktionen bei Erfolg
			
			console.log(data);
			if(data.indexOf('erfolg')>=0){
			$( 'form[name="dp_bestellform"] button[type="submit"]' ).hide();
			$( '#erf_versendet' ).show();
			form_alert("dp_bestellform_erfolg_meld");
			}else{
			form_alert("dp_bestellform_fehler_meld");	
			}
			
			
		}).fail(function(data) {
			// Aktionen bei einem Fehler
				form_alert("dp_bestellform_fehler_meld");
			console.log('fail: '+data);			
		});
	



	
	
}

	
	



});

})
