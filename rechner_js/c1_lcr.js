

$(window).load(function() {
calc=true;






})
//masse='Metrisch';
masse=document.getElementById('sel').value;
liner_typ=document.getElementById('sel_1').value;
harz_sys=document.getElementById('sel_2').value;
duchm_dmt=document.getElementById('sel_3').value;
hausanschll_dmt=document.getElementById('sel_4').value;

reha_length=document.getElementById('sel_rl').value;
//parent.seite_aktivieren('menu_weg');

var LCR_harz_array = new Array();
berechnen_go=false;
	
	
function hauptkanal_label_u(name_b){
	
	if(name_b){
		
	document.getElementById('duchm_dm').getElementsByClassName('a_label').item(0).innerHTML=innerHTML_lang('Seitenanschluss DN');
	document.getElementById('s_a_u_b').innerHTML=innerHTML_lang('Seitenanschluss DN')+':';
		
	}else{

		document.getElementById('duchm_dm').getElementsByClassName('a_label').item(0).innerHTML=innerHTML_lang('Hauptkanal');	
		document.getElementById('s_a_u_b').innerHTML=innerHTML_lang('Hauptkanal')+':';
	}
	
	
}
	
function ergebnisse_berechnen(e){
	document.getElementById('harz_haerter_txt_a').innerHTML='';
document.getElementById('harz_haerter_txt_b').innerHTML='';
	
	if(berechnen_go){
	berechnen_go=false;



 erg_berechnet();

		
	}
	
}
Array.prototype.copy = function () {
     return ((new Array()).concat(this));
   };
  function duchm_dm_hinzufuegen (val_ ,id_) {
  NeuerEintrag = new Option(val_, val_, false, true);
  if(val_ == Bitte_wählen_str){
	
	 NeuerEintrag = new Option( val_, "Bitte wählen", false, true); 
	  
  }else{
	  
	 NeuerEintrag = new Option(val_, val_, false, true); 
  }
  document.getElementById(id_).options[document.getElementById(id_).length] = NeuerEintrag;
 
}
 function duchm_dm_loeschen (id_) {
	 
  document.getElementById(id_).options[document.getElementById(id_).length - 1] = null;
}

function ClearOptions(id)
{
	document.getElementById(id).options.length = 0;
}
function CheckAuswahl (nr_,id_) {
  if (document.getElementById(id_).selectedIndex != nr_)
    document.getElementById(id_).selectedIndex = nr_;
}
/*
duchm_dm_hinzufuegen (430);
 ClearOptions('sel_3'); 
 "Bitte wählen" 
  */
  function auw_LCR_B(){
	  
	     ClearOptions('sel_3'); 
	  if(masse=="Metrisch"){
	
	   	duchm_dm_hinzufuegen (Bitte_wählen_str,'sel_3');
	duchm_dm_hinzufuegen (50,'sel_3');  
	 duchm_dm_hinzufuegen (70,'sel_3');
	 duchm_dm_hinzufuegen (100,'sel_3');
	 duchm_dm_hinzufuegen (125,'sel_3');
	 duchm_dm_hinzufuegen (150,'sel_3');
	
	 
	 }else if(masse=="imperial"){
	duchm_dm_hinzufuegen (Bitte_wählen_str,'sel_3');
	duchm_dm_hinzufuegen (2,'sel_3');  
	 duchm_dm_hinzufuegen (3,'sel_3');
	 duchm_dm_hinzufuegen (4,'sel_3');
	 duchm_dm_hinzufuegen (5,'sel_3');
	 duchm_dm_hinzufuegen (6,'sel_3');	 
		 
	 }
	 
	  CheckAuswahl(0,'sel_3');
	   }
   function auw_LCR_S(){
	   
	   
	    ClearOptions('sel_3');
		  if(masse=="Metrisch"){
		duchm_dm_hinzufuegen (Bitte_wählen_str,'sel_3'); 
	duchm_dm_hinzufuegen (100,'sel_3');
	 duchm_dm_hinzufuegen (125,'sel_3');
	 duchm_dm_hinzufuegen (150,'sel_3');
	 duchm_dm_hinzufuegen (200,'sel_3');
	 duchm_dm_hinzufuegen (225,'sel_3');
	 	 duchm_dm_hinzufuegen (250,'sel_3');
		  	
			 }else if(masse=="imperial"){
	duchm_dm_hinzufuegen ("Bitte wählen",'sel_3'); 
	duchm_dm_hinzufuegen (4,'sel_3');
	 duchm_dm_hinzufuegen (5,'sel_3');
	 duchm_dm_hinzufuegen (6,'sel_3');
	 duchm_dm_hinzufuegen (8,'sel_3');
	 duchm_dm_hinzufuegen (9,'sel_3');
	 	 duchm_dm_hinzufuegen (10,'sel_3'); 
			 }
		 	 CheckAuswahl(0,'sel_3'); 
			 
			 
  } 
  
function erg_berechnet(){
	
	


	document.getElementById('hasl_anz').style.visibility='hidden';
 


/*
masse=document.getElementById('sel').value;
liner_typ=document.getElementById('sel_1').value;
harz_sys=document.getElementById('sel_2').value;
duchm_dmt=document.getElementById('sel_3').value;
*/
dk_mass='mm';
ms_us='';
index_dm_arr=0;
index_dm_arr=document.getElementById('sel_3').value;
if(masse=='imperial'){	
ms_us='_us';
dk_mass='in';
index_dm_arr*=25;
}



if(liner_typ=='LCR-B (Hutmanschetten)'||liner_typ=='LCR-S (Hutmanschetten)'){




if(liner_typ=='LCR-B (Hutmanschetten)'){
	
if(harz_sys=='1'){

	if(reha_length_tst=='1200 mm / 3,94 feet') { 
	LCR_harz_array=silicateresin_array_1200.copy();
	}else if(reha_length_tst=='300 mm / 0,98 feet') { 
		LCR_harz_array=silicateresin_array_300.copy();
	
	}
	

	
		
}else if(harz_sys=='2'){
	
	

	if(reha_length_tst=='1200 mm / 3,94 feet') { 
	LCR_harz_array=EPROPOX_FC15_FC30_array_1200.copy();
	}else if(reha_length_tst=='300 mm / 0,98 feet') { 
		LCR_harz_array=EPROPOX_FC15_FC30_array_300.copy();
	
	}
	
}
}

if(liner_typ=='LCR-S (Hutmanschetten)'){
	
if(harz_sys=='2'){
	
	
		if(reha_length_tst=='600 mm / 1,97 feet') { 
	LCR_harz_array=EPROPOX_FC15_FC30_s_array_600.copy();
	}else if(reha_length_tst=='300 mm / 0,98 feet') { 
		LCR_harz_array=EPROPOX_FC15_FC30_s_array_300.copy();
	
	}
	
		
document.getElementById('harz_haerter_txt_a').innerHTML=' (Härter)';
document.getElementById('harz_haerter_txt_b').innerHTML=' (Harz)';	
}else if(harz_sys=='1'){
	
		if(reha_length_tst=='600 mm / 1,97 feet') { 
	LCR_harz_array=silicateresin_s_array_600.copy();
	}else if(reha_length_tst=='300 mm / 0,98 feet') { 
		LCR_harz_array=silicateresin_s_array_300.copy();
	
	}

		document.getElementById('harz_haerter_txt_a').innerHTML=' (Harz)';
document.getElementById('harz_haerter_txt_b').innerHTML=' (Härter)';
}
}





document.getElementById('liter').innerHTML=LCR_harz_array[index_dm_arr]['Harzsystem_Liter'+ms_us].toFixed(2);
//document.getElementById('gewicht').innerHTML=LCR_harz_array[index_dm_arr]['Harzsystem_Liter'];


document.getElementById('harz_l').innerHTML=LCR_harz_array[index_dm_arr]['Komponente_A_Liter'+ms_us].toFixed(2);
//document.getElementById('haerter_l').innerHTML=LCR_harz_array[index_dm_arr]['Harzsystem_Liter'];

document.getElementById('haerter_l').innerHTML=LCR_harz_array[index_dm_arr]['Komponente_B_Liter'+ms_us].toFixed(2);
//document.getElementById('haerter_gew').innerHTML=LCR_harz_array[index_dm_arr]['Harzsystem_Liter'];	


/*
	document.getElementById('aaw1').innerHTML='<nobr>'+ liner+' </nobr>';
	document.getElementById('aaw2').innerHTML='<nobr>'+ hartzsys+' </nobr>';
*/	
	
	document.getElementById('aa1').innerHTML='<nobr>'+ liner_typ+'</nobr>';
	document.getElementById('aa2').innerHTML='<nobr>'+document.getElementById('a_wert_2').innerHTML+'</nobr>';
	
	document.getElementById('aa3').innerHTML='<nobr>'+LCR_harz_array[index_dm_arr]['DN_'+ms_us]+' '+dk_mass+'</nobr>';	
}else if("LCR-Liner (für LCR-S und LCR-B)"){

	harz_sys_f='Trelleborg Harz Beschleuniger / Trelleborg Harz Typ W / Trelleborg Harz Typ S';
	
	document.getElementById('hasl_anz').style.visibility='visible';

	hausanschl__ =document.getElementById('a_wert_4').innerHTML;
	
	hsl_in='0';
	
	if(reha_length_tst=='600 mm / 1,97 feet') { 
	

switch (hausanschl__) {
  case "100":	
		
  hsl_in='4';
  
		LCR_harz_array=liner_hausanschlussleitung_600_dn100_array.copy();

    break;
  case "125":
   hsl_in='5';
		LCR_harz_array=liner_hausanschlussleitung_600_dn125_array.copy();	 
    break;
	case "150":
	 hsl_in='6';
		LCR_harz_array=liner_hausanschlussleitung_600_dn150_array.copy();	 
    break;
	case "200":
	 hsl_in='8';
 		LCR_harz_array=liner_hausanschlussleitung_600_dn200_array.copy();	
    break;
	case "225":
	 hsl_in='9';
    	LCR_harz_array=liner_hausanschlussleitung_600_dn225_array.copy();
    break;
	case "250":
	 hsl_in='10';
		LCR_harz_array=liner_hausanschlussleitung_600_dn250_array.copy();
    break;

  case '4':	
		
  hsl_in='4';
		LCR_harz_array=liner_hausanschlussleitung_600_dn100_array.copy();

    break;
  case '5':
   hsl_in='5';
		LCR_harz_array=liner_hausanschlussleitung_600_dn125_array.copy();	 
    break;
	case '6':
	 hsl_in='6';
		LCR_harz_array=liner_hausanschlussleitung_600_dn150_array.copy();	 
    break;
	case '8':
	 hsl_in='8';
 		LCR_harz_array=liner_hausanschlussleitung_600_dn200_array.copy();	
    break;
	case '9':
	 hsl_in='9';
    	LCR_harz_array=liner_hausanschlussleitung_600_dn225_array.copy();
    break;
	case '10':
	 hsl_in='10';
		LCR_harz_array=liner_hausanschlussleitung_600_dn225_array.copy();
    break;
  default:
 //----------------//
    break;
}
	}else if(reha_length_tst=='300 mm / 0,98 feet') { 

switch (hausanschl__) {
  case "50":

  hsl_in='2';
	LCR_harz_array=liner_hausanschlussleitung_dn50_array.copy(); 
		
		 
    break;
  case "70":
   hsl_in='3';
		LCR_harz_array=liner_hausanschlussleitung_dn70_array.copy();
    break;
  case "100":	
		
  hsl_in='4';
		LCR_harz_array=liner_hausanschlussleitung_dn100_array.copy();

    break;
  case "125":
   hsl_in='5';
		LCR_harz_array=liner_hausanschlussleitung_dn125_array.copy();	 
    break;
	case "150":
	 hsl_in='6';
		LCR_harz_array=liner_hausanschlussleitung_dn150_array.copy();	 
    break;
	case "200":
	 hsl_in='8';
 		LCR_harz_array=liner_hausanschlussleitung_dn200_array.copy();	
    break;
	case "225":
	 hsl_in='9';
    	LCR_harz_array=liner_hausanschlussleitung_dn225_array.copy();
    break;
	case "250":
	 hsl_in='10';
		LCR_harz_array=liner_hausanschlussleitung_dn250_array.copy();
    break;
	  case '2':
  hsl_in='2';
	LCR_harz_array=liner_hausanschlussleitung_dn50_array.copy(); 	
		 
    break;
  case '3':
   hsl_in='3';
		LCR_harz_array=liner_hausanschlussleitung_dn70_array.copy();
    break;
  case '4':	
		
  hsl_in='4';
		LCR_harz_array=liner_hausanschlussleitung_dn100_array.copy();

    break;
  case '5':
   hsl_in='5';
		LCR_harz_array=liner_hausanschlussleitung_dn125_array.copy();	 
    break;
	case '6':
	 hsl_in='6';
		LCR_harz_array=liner_hausanschlussleitung_dn150_array.copy();	 
    break;
	case '8':
	 hsl_in='8';
 		LCR_harz_array=liner_hausanschlussleitung_dn200_array.copy();	
    break;
	case '9':
	 hsl_in='9';
    	LCR_harz_array=liner_hausanschlussleitung_dn225_array.copy();
    break;
	case '10':
	 hsl_in='10';
		LCR_harz_array=liner_hausanschlussleitung_dn250_array.copy();
    break;
  default:
 //----------------//
    break;
}
	}



document.getElementById('liter').innerHTML=LCR_harz_array[index_dm_arr]['Harzsystem_Liter'+ms_us];
//document.getElementById('gewicht').innerHTML=LCR_harz_array[index_dm_arr]['Harzsystem_Liter'];


document.getElementById('harz_l').innerHTML=LCR_harz_array[index_dm_arr]['Komponente_A_Liter'+ms_us];
//document.getElementById('haerter_l').innerHTML=LCR_harz_array[index_dm_arr]['Harzsystem_Liter'];

document.getElementById('haerter_l').innerHTML=LCR_harz_array[index_dm_arr]['Komponente_B_Liter'+ms_us];
//document.getElementById('haerter_gew').innerHTML=LCR_harz_array[index_dm_arr]['Harzsystem_Liter'];	


/*
	document.getElementById('aaw1').innerHTML='<nobr>'+ liner+' </nobr>';
	document.getElementById('aaw2').innerHTML='<nobr>'+ hartzsys+' </nobr>';
*/	
	
	document.getElementById('aa1').innerHTML='<nobr>'+ liner_typ+'</nobr>';
	document.getElementById('aa2').innerHTML='<nobr>'+harz_sys_f+'</nobr>';
	
	  

	  
	  
	document.getElementById('aa2_h').innerHTML='<nobr>'+hausanschl__+' '+dk_mass+'</nobr>';	
	document.getElementById('aa3').innerHTML='<nobr>'+LCR_harz_array[index_dm_arr]['DN_'+ms_us]+' '+dk_mass+'</nobr>';	
	
	
	/*
liner_hausanschlussleitung_dn100_array[100] = new Array();
liner_hausanschlussleitung_dn100_array[100]['DN_']=100;
liner_hausanschlussleitung_dn100_array[100]['DN__us']=4;
liner_hausanschlussleitung_dn100_array[100]['Winkel']='45°/ 90°';
liner_hausanschlussleitung_dn100_array[100]['Harzsystem_Liter']=1.37;
liner_hausanschlussleitung_dn100_array[100]['Harzsystem_Liter_us']=46.12;
liner_hausanschlussleitung_dn100_array[100]['Komponente_A_Liter']=0.46;
liner_hausanschlussleitung_dn100_array[100]['Komponente_A_Liter_us']=15.37; 
liner_hausanschlussleitung_dn100_array[100]['Komponente_B_Liter']=0.91;
liner_hausanschlussleitung_dn100_array[100]['Komponente_B_Liter_us']=30.75; 	
	*/
	
	
}
/*
    <td>Linertyp:</td>
    <td id="aa1"><span class="w30"></span></td>
  </tr>
  <tr>
    <td>Harzsystem: </td>
    <td id="aa2"><span class="w30"></span></td>
  </tr>
  <tr>
    <td>Durchmesser: </td>
    <td id="aa3"><span class="w30"></span></td>
*/

//alert('dm_hk_val1000 '+dm_hk_val1000+' dm_sa_val1000 '+dm_sa_val1000+' snl_sa_val '+snl_sa_val);

	








 berechnen_animation();
		
	
	
}
















function neue_masse_ausgewaehlt(val){
	
if(val=="Metrisch"){
	
	document.getElementById('a_wert').innerHTML="Metrisch";
	
$("w30_vol").css({'width': 33 });	

 ClearOptions('sel_4'); 
  duchm_dm_hinzufuegen (Bitte_wählen_str,'sel_4');
  duchm_dm_hinzufuegen (50,'sel_4');
  duchm_dm_hinzufuegen (70,'sel_4');
  duchm_dm_hinzufuegen (100,'sel_4');
  duchm_dm_hinzufuegen (125,'sel_4');
  duchm_dm_hinzufuegen (150,'sel_4');
  duchm_dm_hinzufuegen (200,'sel_4');
  duchm_dm_hinzufuegen (225,'sel_4');
  duchm_dm_hinzufuegen (250,'sel_4');	
   CheckAuswahl(0,'sel_4'); 

 ClearOptions('sel_3'); 
  duchm_dm_hinzufuegen (Bitte_wählen_str,'sel_3');

  duchm_dm_hinzufuegen (100,'sel_3');
  duchm_dm_hinzufuegen (125,'sel_3');
  duchm_dm_hinzufuegen (150,'sel_3');
  duchm_dm_hinzufuegen (200,'sel_3');
  duchm_dm_hinzufuegen (225,'sel_3');
  duchm_dm_hinzufuegen (250,'sel_3');	
   CheckAuswahl(0,'sel_3'); 

		
		
}else if(val=="imperial"){
	

	
	
		document.getElementById('a_wert').innerHTML=lang_einh_imperial;	



$("w30_vol").css({'width': 33 });
  ClearOptions('sel_4'); 
  duchm_dm_hinzufuegen (Bitte_wählen_str,'sel_4');
  duchm_dm_hinzufuegen (2,'sel_4');
  duchm_dm_hinzufuegen (3,'sel_4');
  duchm_dm_hinzufuegen (4,'sel_4');
  duchm_dm_hinzufuegen (5,'sel_4');
  duchm_dm_hinzufuegen (6,'sel_4');
  duchm_dm_hinzufuegen (8,'sel_4');
  duchm_dm_hinzufuegen (9,'sel_4');
  duchm_dm_hinzufuegen (10,'sel_4');
   CheckAuswahl(0,'sel_4');
   
 ClearOptions('sel_3'); 
  duchm_dm_hinzufuegen (Bitte_wählen_str,'sel_3');

  duchm_dm_hinzufuegen (4,'sel_3');
  duchm_dm_hinzufuegen (5,'sel_3');
  duchm_dm_hinzufuegen (6,'sel_3');
  duchm_dm_hinzufuegen (8,'sel_3');
  duchm_dm_hinzufuegen (9,'sel_3');
  duchm_dm_hinzufuegen (10,'sel_3');	
   CheckAuswahl(0,'sel_3'); 

}

for (var i = 0; i <= 2; i++){
	//ausgabe.innerHTML =' '+i;
	if(val=="Metrisch"){
		$(".w30_vol, .w30_gew, .w30").css({"width":'33px'});	
document.getElementsByClassName('w30_vol')[i].innerHTML="Liter";
}else if(val=="imperial"){
	$(".w30_vol, .w30_gew, .w30").css({"width":'48px'});	



document.getElementsByClassName('w30_vol')[i].innerHTML="US.fl.oz."	
}


}

}



masssystem=lang_einh_metrisch;




//listener-------------------------------------------------
i=0;
masse=document.getElementById('sel').value;
liner_typ=document.getElementById('sel_1').value;
harz_sys=document.getElementById('sel_2').value;
duchm_dmt=document.getElementById('sel_3').value;
hausanschll_dmt=document.getElementById('sel_4').value;

//hartzsys=document.getElementById('sel1').value;
/*
----------------------------------
selekt_change
-----------------------------------
*/
function selekt_change() {

hausanschll_dmt_tst=document.getElementById('sel_4').value;
if(hausanschll_dmt!=hausanschll_dmt_tst){

	hausanschll_dmt=hausanschll_dmt_tst;
		document.getElementById('a_wert_4').innerHTML=hausanschll_dmt_tst;
		var hausanschl =document.getElementById('a_wert_4').innerHTML;
	
	

	
	
				
if(liner_typ_tst=="LCR-Liner (für LCR-S und LCR-B)"){
	
				ClearOptions('sel_3');
	duchm_dm_hinzufuegen (Bitte_wählen_str,'sel_3');
		hausanschl =document.getElementById('a_wert_4').innerHTML; 
	
switch (hausanschl) {
  case "50":
		
	 duchm_dm_hinzufuegen (100,'sel_3');
	 duchm_dm_hinzufuegen (125,'sel_3');
	 duchm_dm_hinzufuegen (150,'sel_3');
	 duchm_dm_hinzufuegen (200,'sel_3');
	
		 	 
    break;
  case "70":
	
	 duchm_dm_hinzufuegen (100,'sel_3');
	 duchm_dm_hinzufuegen (125,'sel_3');
	 duchm_dm_hinzufuegen (150,'sel_3');
	 duchm_dm_hinzufuegen (200,'sel_3');
	
    break;
  case "100":
	
	 duchm_dm_hinzufuegen (100,'sel_3');
	 duchm_dm_hinzufuegen (125,'sel_3');
	 duchm_dm_hinzufuegen (150,'sel_3');
	 duchm_dm_hinzufuegen (200,'sel_3');
	 duchm_dm_hinzufuegen (225,'sel_3');
	 duchm_dm_hinzufuegen (250,'sel_3');
	 duchm_dm_hinzufuegen (300,'sel_3');
	 duchm_dm_hinzufuegen (350,'sel_3');
	 duchm_dm_hinzufuegen (400,'sel_3');
	 duchm_dm_hinzufuegen (450,'sel_3');
	 duchm_dm_hinzufuegen (500,'sel_3');
	 duchm_dm_hinzufuegen (550,'sel_3');
	 duchm_dm_hinzufuegen (600,'sel_3'); 
    break;
  case "125":
	
	 duchm_dm_hinzufuegen (125,'sel_3');
	 duchm_dm_hinzufuegen (150,'sel_3');
	 duchm_dm_hinzufuegen (200,'sel_3');
	 duchm_dm_hinzufuegen (225,'sel_3');
	 duchm_dm_hinzufuegen (250,'sel_3');
	 duchm_dm_hinzufuegen (300,'sel_3');
	 duchm_dm_hinzufuegen (350,'sel_3');
	 duchm_dm_hinzufuegen (400,'sel_3');
	 duchm_dm_hinzufuegen (450,'sel_3');
	 duchm_dm_hinzufuegen (500,'sel_3');
	 duchm_dm_hinzufuegen (550,'sel_3');
	 duchm_dm_hinzufuegen (600,'sel_3'); 
    break;
	case "150":
		
	
	 duchm_dm_hinzufuegen (150,'sel_3');
	 duchm_dm_hinzufuegen (200,'sel_3');
	 duchm_dm_hinzufuegen (225,'sel_3');
	 duchm_dm_hinzufuegen (250,'sel_3');
	 duchm_dm_hinzufuegen (300,'sel_3');
	 duchm_dm_hinzufuegen (350,'sel_3');
	 duchm_dm_hinzufuegen (400,'sel_3');
	 duchm_dm_hinzufuegen (450,'sel_3');
	 duchm_dm_hinzufuegen (500,'sel_3');
	 duchm_dm_hinzufuegen (550,'sel_3');
	 duchm_dm_hinzufuegen (600,'sel_3'); 
    break;
	case "200":

	
	 duchm_dm_hinzufuegen (200,'sel_3');
	 duchm_dm_hinzufuegen (225,'sel_3');
	 duchm_dm_hinzufuegen (250,'sel_3');
	 duchm_dm_hinzufuegen (300,'sel_3');
	 duchm_dm_hinzufuegen (350,'sel_3');
	 duchm_dm_hinzufuegen (400,'sel_3');
	 duchm_dm_hinzufuegen (450,'sel_3');
	 duchm_dm_hinzufuegen (500,'sel_3');
	 duchm_dm_hinzufuegen (550,'sel_3');
	 duchm_dm_hinzufuegen (600,'sel_3'); 
    break;
	case "225":
	

	 duchm_dm_hinzufuegen (225,'sel_3');
	 duchm_dm_hinzufuegen (250,'sel_3');
	 duchm_dm_hinzufuegen (300,'sel_3');
	 duchm_dm_hinzufuegen (350,'sel_3');
	 duchm_dm_hinzufuegen (400,'sel_3');
	 duchm_dm_hinzufuegen (450,'sel_3');
	 duchm_dm_hinzufuegen (500,'sel_3');
	 duchm_dm_hinzufuegen (550,'sel_3');
	 duchm_dm_hinzufuegen (600,'sel_3'); 
    break;
	case "250":
	
	 duchm_dm_hinzufuegen (250,'sel_3');
	 duchm_dm_hinzufuegen (300,'sel_3');
	 duchm_dm_hinzufuegen (350,'sel_3');
	 duchm_dm_hinzufuegen (400,'sel_3');
	 duchm_dm_hinzufuegen (450,'sel_3');
	 duchm_dm_hinzufuegen (500,'sel_3');
	 duchm_dm_hinzufuegen (550,'sel_3');
	 duchm_dm_hinzufuegen (600,'sel_3'); 
    break;
	  case "2":
		
	 duchm_dm_hinzufuegen (4,'sel_3');
	 duchm_dm_hinzufuegen (5,'sel_3');
	 duchm_dm_hinzufuegen (6,'sel_3');
	 duchm_dm_hinzufuegen (8,'sel_3');
	
		 	 
    break;
  case "3":
	
		 duchm_dm_hinzufuegen (4,'sel_3');
	 duchm_dm_hinzufuegen (5,'sel_3');
	 duchm_dm_hinzufuegen (6,'sel_3');
	 duchm_dm_hinzufuegen (8,'sel_3');
	
    break;
  case "4":
	
	 duchm_dm_hinzufuegen (4,'sel_3');
	 duchm_dm_hinzufuegen (5,'sel_3');
	 duchm_dm_hinzufuegen (6,'sel_3');
	 duchm_dm_hinzufuegen (8,'sel_3');
	 duchm_dm_hinzufuegen (9,'sel_3');
	 duchm_dm_hinzufuegen (10,'sel_3');
	 duchm_dm_hinzufuegen (12,'sel_3');
	 duchm_dm_hinzufuegen (14,'sel_3');
	 duchm_dm_hinzufuegen (16,'sel_3');
	 duchm_dm_hinzufuegen (18,'sel_3');
	 duchm_dm_hinzufuegen (20,'sel_3');
	 duchm_dm_hinzufuegen (22,'sel_3');
	 duchm_dm_hinzufuegen (24,'sel_3'); 
    break;
  case "5":
	
	 duchm_dm_hinzufuegen (5,'sel_3');
	 duchm_dm_hinzufuegen (6,'sel_3');
	 duchm_dm_hinzufuegen (8,'sel_3');
	 duchm_dm_hinzufuegen (9,'sel_3');
	 duchm_dm_hinzufuegen (10,'sel_3');
	 duchm_dm_hinzufuegen (12,'sel_3');
	 duchm_dm_hinzufuegen (14,'sel_3');
	 duchm_dm_hinzufuegen (16,'sel_3');
	 duchm_dm_hinzufuegen (18,'sel_3');
	 duchm_dm_hinzufuegen (20,'sel_3');
	 duchm_dm_hinzufuegen (22,'sel_3');
	 duchm_dm_hinzufuegen (24,'sel_3'); 
    break;
	case "6":
		
	

	 duchm_dm_hinzufuegen (6,'sel_3');
	 duchm_dm_hinzufuegen (8,'sel_3');
	 duchm_dm_hinzufuegen (9,'sel_3');
	 duchm_dm_hinzufuegen (10,'sel_3');
	 duchm_dm_hinzufuegen (12,'sel_3');
	 duchm_dm_hinzufuegen (14,'sel_3');
	 duchm_dm_hinzufuegen (16,'sel_3');
	 duchm_dm_hinzufuegen (18,'sel_3');
	 duchm_dm_hinzufuegen (20,'sel_3');
	 duchm_dm_hinzufuegen (22,'sel_3');
	 duchm_dm_hinzufuegen (24,'sel_3');  
    break;
	case "8":

	

	 duchm_dm_hinzufuegen (8,'sel_3');
	 duchm_dm_hinzufuegen (9,'sel_3');
	 duchm_dm_hinzufuegen (10,'sel_3');
	 duchm_dm_hinzufuegen (12,'sel_3');
	 duchm_dm_hinzufuegen (14,'sel_3');
	 duchm_dm_hinzufuegen (16,'sel_3');
	 duchm_dm_hinzufuegen (18,'sel_3');
	 duchm_dm_hinzufuegen (20,'sel_3');
	 duchm_dm_hinzufuegen (22,'sel_3');
	 duchm_dm_hinzufuegen (24,'sel_3'); 
    break;
	case "9":
	


	 duchm_dm_hinzufuegen (9,'sel_3');
	 duchm_dm_hinzufuegen (10,'sel_3');
	 duchm_dm_hinzufuegen (12,'sel_3');
	 duchm_dm_hinzufuegen (14,'sel_3');
	 duchm_dm_hinzufuegen (16,'sel_3');
	 duchm_dm_hinzufuegen (18,'sel_3');
	 duchm_dm_hinzufuegen (20,'sel_3');
	 duchm_dm_hinzufuegen (22,'sel_3');
	 duchm_dm_hinzufuegen (24,'sel_3'); 
    break;
	case "10":
	

	 duchm_dm_hinzufuegen (10,'sel_3');
	 duchm_dm_hinzufuegen (12,'sel_3');
	 duchm_dm_hinzufuegen (14,'sel_3');
	 duchm_dm_hinzufuegen (16,'sel_3');
	 duchm_dm_hinzufuegen (18,'sel_3');
	 duchm_dm_hinzufuegen (20,'sel_3');
	 duchm_dm_hinzufuegen (22,'sel_3');
	 duchm_dm_hinzufuegen (24,'sel_3'); 
    break;
  default:
 //----------------//
    break;
}
	CheckAuswahl(0,'sel_3');
	}


		
		
	
}	

reha_length_tst=document.getElementById('sel_rl').value;
if(reha_length!=reha_length_tst){


	reha_length=reha_length_tst;
	
document.getElementById('a_wert_rl').innerHTML=reha_length_tst;
document.getElementById('aa_rl').innerHTML=reha_length_tst;
}









masse_tst=document.getElementById('sel').value;
if(masse!=masse_tst){

	masse=masse_tst;
neue_masse_ausgewaehlt(masse_tst);	
}
liner_typ_tst=document.getElementById('sel_1').value;
if(liner_typ!=liner_typ_tst){
		if(liner_typ_tst=="LCR-B (Hutmanschetten)"){
		
	 ClearOptions('sel_rl');
	duchm_dm_hinzufuegen (Bitte_wählen_str,'sel_rl');
	duchm_dm_hinzufuegen ('300 mm / 0,98 feet','sel_rl');  
	 duchm_dm_hinzufuegen ('1200 mm / 3,94 feet','sel_rl'); 
	  CheckAuswahl(0,'sel_rl');	
	}
	 if(liner_typ_tst=="LCR-S (Hutmanschetten)"){
		 	
		  ClearOptions('sel_rl');
				duchm_dm_hinzufuegen (Bitte_wählen_str,'sel_rl');
	duchm_dm_hinzufuegen ('300 mm / 0,98 feet','sel_rl');  
	 duchm_dm_hinzufuegen ('600 mm / 1,97 feet','sel_rl'); 
	  CheckAuswahl(0,'sel_rl');	
	
	}
	
	if(liner_typ_tst=="LCR-Liner (für LCR-S und LCR-B)"){
		  ClearOptions('sel_rl');
				duchm_dm_hinzufuegen (Bitte_wählen_str,'sel_rl');
	duchm_dm_hinzufuegen ('300 mm / 0,98 feet','sel_rl');  
	 duchm_dm_hinzufuegen ('600 mm / 1,97 feet','sel_rl'); 
	  CheckAuswahl(0,'sel_rl');					
	}
	
	
	if(liner_typ_tst=="LCR-B (Hutmanschetten)"){
	
		
		
		
		document.getElementById('alert_sel_3').setAttribute("rel", innerHTML_lang('Wählen Sie den Durchmesser des Seitenanschluss aus.'));
document.getElementById('duchm_dm').getElementsByClassName('a_label').item(0).innerHTML=innerHTML_lang('Seitenanschluss DN');
document.getElementById('s_a_u_b').innerHTML=innerHTML_lang('Seitenanschluss DN')+':';

			alert_sel_3_modus="DrainLCR-B_S";
		document.getElementById('harz_sys').style.display='block';
				document.getElementById('harz_sys_fest').style.display='none';
		 $('#hausleitung_durchm').slideUp(300, 'easeInQuart', function () {});
auw_LCR_B();
	}else if(liner_typ_tst=="LCR-S (Hutmanschetten)"){
	
		document.getElementById('alert_sel_3').setAttribute("rel",innerHTML_lang('Wählen Sie den Durchmesser des Seitenanschluss aus.'));
		document.getElementById('duchm_dm').getElementsByClassName('a_label').item(0).innerHTML=innerHTML_lang('Seitenanschluss DN');
		document.getElementById('s_a_u_b').innerHTML=innerHTML_lang('Seitenanschluss DN')+':';
			alert_sel_3_modus="DrainLCR-B_S";
				document.getElementById('harz_sys').style.display='block';
					document.getElementById('harz_sys_fest').style.display='none';
				 $('#hausleitung_durchm').slideUp(300, 'easeInQuart', function () {});
	auw_LCR_S();	
	} else if(liner_typ_tst=="LCR-Liner (für LCR-S und LCR-B)"){
				
			  document.getElementById('alert_sel_3').setAttribute("rel", 'Wählen Sie den Durchmesser der Hausanschlussleitung aus.');
			  document.getElementById('duchm_dm').getElementsByClassName('a_label').item(0).innerHTML=innerHTML_lang('Hauptrohr');
			  document.getElementById('s_a_u_b').innerHTML=innerHTML_lang('Hauptrohr')+':';
			  
			  
			alert_sel_3_modus="LCR-Liner";
		document.getElementById('harz_sys').style.display='none';
		document.getElementById('harz_sys_fest').style.display='block';
		
			 $('#hausleitung_durchm').slideDown(300, 'easeInQuart', function () {});
		
	}
	liner_typ=liner_typ_tst;
	document.getElementById('a_wert_1').innerHTML=liner_typ_tst;
}
harz_sys_tst=document.getElementById('sel_2').value;
if(harz_sys!=harz_sys_tst){

	harz_sys=harz_sys_tst;
	if(harz_sys==1){
		document.getElementById('a_wert_2').innerHTML='Trelleborg Harz Beschleuniger / Trelleborg Harz Typ W / Trelleborg Harz Typ S';
		
	}else if(harz_sys==2){
		document.getElementById('a_wert_2').innerHTML='Trelleborg Epoxy FC15 / Trelleborg Epoxy FC30';
		
	}else if(harz_sys=="Bitte wählen"){
		document.getElementById('a_wert_2').innerHTML="Bitte wählen";
		
	}
}
duchm_dm_tst=document.getElementById('sel_3').value;
if(duchm_dm!=duchm_dm_tst){

	duchm_dm=duchm_dm_tst;
	document.getElementById('a_wert_3').innerHTML=duchm_dm_tst;
		
		
	

}
/*
hartzsys_tst=document.getElementById('sel1').value;
if(hartzsys!=hartzsys_tst){

	hartzsys=hartzsys_tst;
neues_harzsystem(hartzsys_tst);	
}

*/
i=i+1;
	


if(liner_typ_tst=="LCR-B (Hutmanschetten)"||liner_typ_tst=="LCR-S (Hutmanschetten)"){

if(harz_sys_tst!="Bitte wählen" && liner_typ_tst!="Bitte wählen" && duchm_dm_tst!="Bitte wählen" && reha_length!="Bitte wählen"){
	berechnen_go=true;
	$("#berechnen").css({"color":'#ffffff'});	
}else{
	berechnen_go=false;

	$("#berechnen").css({"color":'#999999'});
}

}else if(liner_typ_tst=="LCR-Liner (für LCR-S und LCR-B)"){
	
	if(hausanschll_dmt_tst!="Bitte wählen" && liner_typ_tst!="Bitte wählen" && duchm_dm_tst!="Bitte wählen"){
	berechnen_go=true;
	$("#berechnen").css({"color":'#ffffff'});	
}else{
	berechnen_go=false;

	$("#berechnen").css({"color":'#999999'});
}
	
}else{
	berechnen_go=false;

	$("#berechnen").css({"color":'#999999'});
}

//$( "#topbar_unters" ).html('uuuuuuuu'+i);

aktiv=window.setTimeout("selekt_change()", 100);

}


selekt_change();

//listener-------------------------------------------------
	

			

	

	var inputFocus = {

	elements : ['input'],
	setup : function(){
	for(j=0;j<inputFocus.elements.length+1;j++){	
	
	
	for(i=0;i<document.getElementsByTagName(inputFocus.elements[j]).length;i++){
	
	var el = document.getElementsByTagName(inputFocus.elements[j])[i];
	
	if(navigator.userAgent.indexOf("Firefox") != -1){
	el.onfocus = inputFocus._focus;
	el.onblur = inputFocus._blur; 
	el.onmousemove = inputFocus.touchmove;	
	}else{
		/*
	el.ontouchstart = inputFocus.touchstart;
	el.ontouchend = inputFocus.touchend; 
	el.ontouchmove = inputFocus.touchmove;
	*/
	}
	}
	}
	},

	_focus : function(){
		
$( this ).parent( ".eing_mth" ).addClass( "input_focus" );	

	
	},
	_blur :function(event){
		//event.preventDefault();
$( this ).parent( ".eing_mth" ).removeClass( "input_focus" );
	
},
	touchend : function(){

		
	}
	}
	inputFocus.setup();



/*
	$('#harz_volumen').click(function() {
		$('html,body').animate({
          scrollTop:0
        }, 40);
 });
*/	






 

$(document).ready(function(e) {


//$(".content").css({"min-height":700});
//$(".werte_ergebnisse").css({"borrom":0});
//$(".werte_eingaben").css({"borrom":0});	
	
			
 });
 