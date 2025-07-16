// main.js
import { bayesHesapla } from './bayes.js';

window.hesapla = function() {
    document.getElementById('sonuc').textContent = '';
    document.getElementById('hata').textContent = '';
    try {
        const genel_olasilik = parseFloat(document.getElementById('olasilik').value);
        const pozitif_iken_olasilik = parseFloat(document.getElementById('pozitif_iken').value);
        const pozitif_iken_olmama_olasiligi = parseFloat(document.getElementById('pozitif_olmama').value);

        if (
            isNaN(genel_olasilik) || isNaN(pozitif_iken_olasilik) || isNaN(pozitif_iken_olmama_olasiligi) ||
            genel_olasilik < 0 || genel_olasilik > 1 ||
            pozitif_iken_olasilik < 0 || pozitif_iken_olasilik > 1 ||
            pozitif_iken_olmama_olasiligi < 0 || pozitif_iken_olmama_olasiligi > 1
        ) {
            throw new Error("Lütfen tüm değerleri 0 ile 1 arasında giriniz.");
        }

        const sonuc = bayesHesapla(genel_olasilik, pozitif_iken_olasilik, pozitif_iken_olmama_olasiligi);
        document.getElementById('sonuc').textContent =
            "Pozitif kanıt durumunda olayın gerçekleşmiş olma olasılığı yüzde " + (100*sonuc).toFixed(1);
    } catch (e) {
        document.getElementById('hata').textContent = "Hatalı giriş veya hesaplama hatası! " + e.message;
    }
}
