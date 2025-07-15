// bayes.js
export function bayesHesapla(kanit_yokken_olasilik, pozitif_iken_olasilik, pozitif_iken_olmama_olasiligi) {
    const kanit_yokken_olmama_olasilik = 1 - kanit_yokken_olasilik;
    const pay = pozitif_iken_olasilik * kanit_yokken_olasilik;
    const payda = (
        pozitif_iken_olasilik * kanit_yokken_olasilik +
        pozitif_iken_olmama_olasiligi * kanit_yokken_olmama_olasilik
    );
    return pay / payda;
}
