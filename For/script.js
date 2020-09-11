var listDesa = ('argodadi,sedayu', 'argomulyo,sedayu', 'argorejo,sedayu', 'argosari', 'bangunjiwo,kasihan', 'banguntapan,banguntapan', 'bantul,bantul', 'baturetno,banguntapan', 'bawuran,pleret', 'canden,jetis', 'caturharjo,pandak', 'cetan srigandi');
var data = 0;


document.write('<ol>')
for (i = 0; i < listDesa.length; i++) {
    document.write("</li>")
    document.write("<li>", listDesa.length[i], "</li>")
    document.write('</li>')
}
document.write("</ol>")

// document.write('<ol>')
// for (i = 0; i < santriPondok.length; i++) {
//     document.write('<li>', santriPondok[i], '</li>')
// }
// document.write('</ol>')