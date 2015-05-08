var petacsv = "pertahun.csv";
var barcsv = "databar.csv";
//PETA INDONESIA
function tooltipHtml(n, d){	/* function to create html content string in tooltip div. */
	return "<h4>"+n+"</h4><table>"+
		"<tr><td>Th."+d.tahun+": </td><td>"+Math.round(d.persen*100)/100+" %</td></tr>"+
		"</table>";
}
function tooltipPie(n, d, jumlah){	/* function to create html content string in tooltip div. */
	return "<h4>"+n+"</h4><table>"+
		"<tr><td>"+d.tahun+": </td><td>"+Math.round((d.persen/jumlah)*10000)/100+" %</td></tr>"+
		"</table>";
}
function tooltipBar(d, jenjang){	/* function to create html content string in tooltip div. */
	var persen = 0;
	var level = "";
	var provinsi = "";
	if (jenjang == "SD") {
		persen = d.SD;
		level = "SD";
	} else if (jenjang == "SMP") {
		persen = d.SMP;
		level= "SMP";
	} else if (jenjang == "SMA") {
		persen = d.SMA;
		level = "SMA"
	} else {
		persen = d.Kuliah;
		level = "Kuliah"
	}
	if (d.provinsi == "Indonesia"){
		provinsi = "Indonesia";
	}
	else if (d.provinsi == "NAD"){
		provinsi = "Nanggroe Aceh Darussalam";
	}
	else if (d.provinsi == "SumUt"){
		provinsi = "Sumatera Utara";
	}
	else if (d.provinsi == "SumBar"){
		provinsi = "Sumatera Barat";
	}
	else if (d.provinsi == "Riau"){
		provinsi = "Riau";
	}
	else if (d.provinsi == "Jambi"){
		provinsi = "Jambi";
	}
	else if (d.provinsi == "SumSel"){
		provinsi = "Sumatera Selatan";
	}
	else if (d.provinsi == "Bengkulu"){
		provinsi = "Bengkulu";
	}
	else if (d.provinsi == "Lampung"){
		provinsi = "Lampung";
	}
	else if (d.provinsi == "K.BangkaBel"){
		provinsi = "Kep. Bangka Belitung";
	}
	else if (d.provinsi == "K.Riau"){
		provinsi = "Kep. Riau";
	}
	else if (d.provinsi == "Jakarta"){
		provinsi = "Jakarta";
	}
	else if (d.provinsi == "JaBar"){
		provinsi = "Jawa Barat";
	}
	else if (d.provinsi == "JaTeng"){
		provinsi = "Jawa Tengah";
	}
	else if (d.provinsi == "JaTim"){
		provinsi = "Jawa Timur";
	}
	else if (d.provinsi == "DIY"){
		provinsi = "D.I. Yogyakarta";
	}
	else if (d.provinsi == "KalBar"){
		provinsi = "Kalimantan Barat";
	}
	else if (d.provinsi == "KalTeng"){
		provinsi = "Kalimantan Tengah";
	}
	else if (d.provinsi == "KalSel"){
		provinsi = "Kalimantan Selatan";
	}
	else if (d.provinsi == "KalTim"){
		provinsi = "Kalimantan Timur";
	}
	else if (d.provinsi == "SulUt"){
		provinsi = "Sulawesi Utara";
	}
	else if (d.provinsi == "SulTeng"){
		provinsi = "Sulawesi Tengah";
	}
	else if (d.provinsi == "SulTgr"){
		provinsi = "Sulawesi Tenggara";
	}
	else if (d.provinsi == "Gorontalo"){
		provinsi = "Gorontalo";
	}
	else if (d.provinsi == "Bali"){
		provinsi = "Bali";
	}
	else if (d.provinsi == "NTB"){
		provinsi = "NTB";
	}
	else if (d.provinsi == "NTT"){
		provinsi = "NTT";
	}
	else if (d.provinsi == "SulSel"){
		provinsi = "Sulawesi Selatan";
	}
	else if (d.provinsi == "Banten"){
		provinsi = "Banten";
	}
	else if (d.provinsi == "SulBar"){
		provinsi = "Sulawesi Barat";
	}
	else if (d.provinsi == "Maluku"){
		provinsi = "Maluku";
	}
	else if (d.provinsi == "MalUt"){
		provinsi = "Maluku Utara";
	}
	else if (d.provinsi == "PapBar"){
		provinsi = "Papua Barat";
	}
	else if (d.provinsi == "Papua"){
		provinsi = "Papua";
	}
	return "<h4>"+provinsi+"</h4><table>"+
		"<tr><td>"+level+" :</td><td>"+persen+" %</td></tr>"+
		"</table>";
} 