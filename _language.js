en=false;
if(window.location.href.indexOf('siteguide-en')>=0){
en=true;		
} else {
	//deutsch
url_beg='';	
}


/*
C1_drainpacker_verfahren.html
-------------------------------------------------------------------------
*/
dp_harze_index=0;

var dp_harze = {
	W1:['Trelleborg Harz Typ W','Trelleborg Resin Type W' ],
	S1:['Trelleborg Harz Typ S','Trelleborg Resin Type S' ],
	W01:['Trelleborg Harz Beschleuniger','Trelleborg Resin Accelerator' ],
	L30E1:['Trelleborg Harz Typ L30E1', 'Trelleborg Resin L30E1'],
	L30E3:['Trelleborg Harz Typ L30E3', 'Trelelborg Resin L30E3'],
	
	
	
};


       



  
/*
-------------------------------------------------------------------------
*/










	


lang_einh_metrisch='Metrisch';
lang_einh_imperial='Imperial';
z_inc_bestellformular= 'z_inc_bestellformular.html';

//Test wert-----------
//en=true;
//-----------------------
if(en){
dp_harze_index=1;	
lang_einh_metrisch='metric';
lang_einh_imperial='imperial';
z_inc_bestellformular= '../z_inc_bestellformular.html';	

}
//var en_EN = new Array();
var sprache_global = {
	'Harzmengenberechnung':'Quantity calculation',
	'für Trelleborg Epoxidharz-Systeme':'for Trelleborg Epoxy Resin systems',
	'Einheiten':'Units',
	'Einheit':'Unit',
	'Bitte wählen':'Please Select',
	'Linertyp':'Liner type',
	'Harzsystem':'Resin system',
	'Durchmesser':'Diameter',
	'Wandstärke':'Wall thickness',
	'Länge':'Length',
	'Berechnen':'calculate',
	'Metrisch':'metric',
    'Imperial':'imperial',
	'für Trelleborg MtH Liner':'for Trelleborg MtH Liner',
	'Resultierende Gesamtmenge an Harz':'Resultant total amount of resin',
	'Harzgemisch Total':'Resin mixture Total',
	'Volumen':'Volume',
	'Harz':'Resin',
	'Härter':'Hardener',
	'Komponente':'Component', 
	'WICHTIG':'IMPORTANT',
	'Bitte beachten Sie das Datenblatt des verwendeten Liners sowie des verwendeten Harzsystems':'Please read the technical data sheets for the liner and resin system in use!',
	'Zurück zur Eingabe':'Back to entry',
	'Gewicht':'Weight',
	'Ihre Eingaben':'Your entries',
	'für LCR-B / LCR-S Hutmanschetten und Liner (Vakuum)':'for LCR-B, LCR-S and LCR vacuum',
	'Hutmanschette/Reparaturlänge':'Hat Profile / length',
	'Seitenanschluss DN':'Lateral Pipe diameter',
	'Harzsystem':'Resin system',
	'für das Trelleborg Kurzliner Verfahren':'Trelleborg Sectional Pipe Repair',
	'Ihre Zuschnitte':'Calculation results',
	'Resultierendes Gesamtvolumen':'Resulting total',
	'Wasserglas':'waterglass',
	'Glasfasergewebematte CRF':'CRF Fibre glass mat types',
	'Komponenten anfragen':'Request components',

	'Bestellformular':'Order form',
	'Schematische Ansicht':'Schematic view',
	'Länge der Zusatzlagen (Optional)':'Length of additional layers (optional)',
	'Empfohlene Gesamtlagen 3 (davon min. 1 Zusatzlage)':'Required layers (total) 3 ( 1 included additional layers )',
	'Zusatzlagen':'Additional layers',
	
	'Rohrdurchmesser':'Pipe diameter',
	'Reparaturlänge':'Repair length ',
	'':'',
	'':'',
	'':'',
	'':'',
	'Vorname':'First name',
	'Nachname':'Last name',
	'Firma':'Company',
	'Haben Sie eine Kundennummer?':'Do you have a customer number?',
	'Nein':'Yes',
	'Ja':'No',
	'Kundennummer':'Customer number',
	'Straße':'Street',
	'Nr.':'No.',
	'PLZ':'ZIP',
	'Ort':'City',
	'Land':'Country',
	'Telefon':'Phone',
	'E-Mail':'Email',
	'Nachricht':'Message',
	'Absenden':'Submit',
	'Ihre Anfrage wurde erfolgreich versendet.':'Your request has been sent successfully.',
	'Vielen Dank für Ihre Anfrage.':'Thank you for your Request.',
	'Wir werden uns schnellstmöglich bei Ihnen melden.':'We will contact you as soon as possible.',
	'Es ist ein Fehler aufgetreten.':'An error has occurred.',
	'Bitte versuchen Sie es später erneut.':'Please try again later.',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':''
};

//console.log(sprache_global['Harzmengenberechnung'])


 
function uebersetzen(str){
	
	ubers=sprache_global[str];
	return ubers;
};



$(document).ready(function(e) {
if(en){
	console.log(z_inc_bestellformular);
  $.ajax({url: z_inc_bestellformular,type: 'POST',dataType: 'html',async: false, success: function(result){
  console.log(result);
   $('.dp_bestellform').html(result);
	$('#bst_script').html('<script type="text/javascript" src="../js/bestell_formular_script.js?v='+random_nr+'"></script>');
	
console.log('englisch');	
$( "bdo,.wert_select, #a_label, option, .a_wert_anz" ).each(function( index ) {

	t=$( this ).text();
	//console.log('englisch:' +t);	
	$( this ).html(uebersetzen( t ) );

	

});
 }});
}else{
  $.ajax({url: z_inc_bestellformular,type: 'POST', success: function(result){
  // console.log(result);
   $('.dp_bestellform').html(result);

		
$('#bst_script').html('<script type="text/javascript" src="js/bestell_formular_script.js?v='+random_nr+'"></script>');
  }});	
	
}
	
			
 });