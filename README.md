# Bayes Teoremi ile Olasılık Hesabı

Bayes Teoremi, yeni bir kanıt (veri) ortaya çıktığında bir hipotezin olasılığını güncelleyebilmek için kullanılan temel bir olasılık kuralıdır. Basitçe söylersek, bir olayın/hipotezin başlangıçtaki (önsel) olasılığını, yeni gelen kanıtı dikkate alarak düzeltir.

Temel formül şudur:
P(A|B) = [P(B|A) × P(A)] / P(B)

Burada:

    P(A): Hipotezin kanıt yokken gerçekleşme olasılığıdır (Prior).

    P(B|A): Hipotez doğruysa kanıtın gözlemlenme olasılığıdır (Likelihood).

    P(A|B): Kanıt görüldüğünde hipotezin güncellenmiş olasılığıdır (Posterior).

    P(B): Kanıtın her türlü yoldan ortaya çıkma olasılığıdır.

Örnek 1 - Sağlık Testi

Bir hastalık toplumda %0.5 oranında görülüyor. Bir test %99 doğrulukta:

    Hasta biri için testin pozitif çıkma olasılığı: 0.99

    Sağlıklı biri için yanlış pozitif çıkma olasılığı: 0.01

Pozitif test sonucu gördüğümüzde gerçekten hasta olma olasılığı:
P(A) = 0.005
P(B|A) = 0.99
P(B|¬A) = 0.01
P(B) = (0.99 × 0.005) + (0.01 × 0.995) = 0.0149

Sonuç:
P(A|B) = (0.99 × 0.005) / 0.0149 ≈ 0.33
Yani test %99 doğru olsa bile, nadir bir hastalık olduğu için pozitif sonuçtan sonra gerçekten hasta olma olasılığı %33 civarında kalır.

Örnek 2 - Mahkeme / DNA Kanıtı

Bir şehirde 1 milyon kişi var. DNA testi %99 özgün:

    Gerçek suçlu için eşleşme garantili: P(B|A) = 1

    Masum biri için yanlış eşleşme olasılığı: P(B|¬A) = 0.0001

P(A) = 1 / 1.000.000 = 0.000001
P(B) = (1 × 0.000001) + (0.0001 × 0.999999) ≈ 0.000101

P(A|B) = 0.000001 / 0.000101 ≈ %1
Yani tek başına bir DNA eşleşmesi, suçluluğu %1 olasılıkla doğrular. Ölçümdeki hata payı küçük görünse de, suçlu olma ihtimali baştan çok düşük olduğunda bu hata payı sonucu belirgin şekilde etkiler.
