# Barbershop LAB — Pamięć projektu dla Claude

## Klient
- **Nazwa:** Barbershop LAB Wrocław
- **Właściciel:** Dawid Klecha (ASS Klecha Dawid)
- **Adres:** ul. Poniatowskiego 7e, 50-326 Wrocław (Śródmieście)
- **Telefon:** +48 663 537 777
- **Strona:** barbershoplab.pl
- **Rezerwacje:** https://booksy.com/pl-pl/64196_lab-barber-shop_barber-shop_13750_wroclaw
- **Opinie:** 5,0 z 1232+ opinii Google

---

## Strona internetowa
- Statyczna strona HTML/CSS/JS
- Repo: `barbershoptalos-website` (sklonowane z barbershop-website na GitHub)
- Struktura: index.html, css/, js/, img/
- Ścieżki sitelinków w reklamach: /#services, /#gallery, /#locations

### Tracking (stan na 2026-05-19)
- **GA4:** G-K08FGF88Q9 (w `<head>`)
- **Google Ads tag:** AW-18153696875 (w `<head>`, scalony z GA4 w jeden gtag block)
- **Konwersje:** skrypt na dole `<body>` — zdarzenia `booksy_click` i `phone_click` wysyłane do GA4 i Google Ads
- Conversion action IDs były placeholderami — status weryfikacji: nieznany (do sprawdzenia przy kolejnej sesji)

---

## Google Ads — Konfiguracja konta

| Pole | Wartość |
|---|---|
| MCC | KZ Marketing (918-590-8201) |
| Sub-konto | Barbershop LAB (959-699-5699) |
| Kampania | Barbershop LAB - Wrocław - Search - Maj 2026 |
| Start kampanii | 2026-05-13 |
| Budżet | 33,33 zł/dzień |
| Strategia stawek | Maksymalizacja liczby konwersji |
| Targetowanie | Wrocław + promień 10 km |
| Języki | polski, ukraiński, rosyjski (dodane 2026-06-16) |
| Sieć | Tylko sieć wyszukiwania Google |
| Komponenty auto | Wyłączone |
| Dopasowanie przybliżone | Wyłączone |

---

## Google Ads — Wyniki (2026-05-13 → 2026-06-16)

| Metryka | Wartość |
|---|---|
| Łączny spend | 1 001,12 zł |
| Kliknięcia | 516 |
| Wyświetlenia | ~8 680 |
| CTR | 5,96% |
| Śr. CPC | 1,94 zł |
| Impression Share | 37,4% |
| Status | Ograniczona z powodu budżetu |
| Wynik optymalizacji | 65% |

### Prawdziwe konwersje (po naprawie 2026-06-16)
- booksy_click: 28 (źródło: GA4)
- phone_click: 1 (źródło: GA4)
- Calls from ads: 1
- **Łącznie prawdziwe: ~30**
- **Koszt/konwersję: ~33 zł**

### Fałszywe konwersje (usunięte z celów 2026-06-16)
Były liczone jako "Główne działanie" — teraz przeniesione do obserwacji:
- Local actions - Directions: 179
- Local actions - Other engagements: 386
- Local actions - Website visits: 28
- Local actions - Menu views: 17
- Clicks to call: 32

---

## Google Ads — Słowa kluczowe (aktywne)

| Słowo kluczowe | Kliknięcia | CTR | QS | Uwagi |
|---|---|---|---|---|
| barbershop wrocław | 167 | 6,85% | 5 | Top performer |
| barber wrocław | 107 | 4,80% | 5 | Top performer |
| barber cennik wrocław | 48 | 4,75% | 7 | Dobry |
| fryzjer męski wrocław | 41 | 4,80% | 4 | Dobry |
| barber blisko mnie | 22 | 5,47% | -- | 54,55% conv rate! |
| барбер Вроцлав | 22 | 11,22% | 5 | Ukraiński, dobry |
| барбершоп Вроцлав | 24 | 8,96% | 4 | Ukraiński |
| перукарня Вроцлав | 8 | 6,67% | 4 | Ukraiński |
| barber lab wrocław | 16 | 45,71% | 10 | Branded, najwyższy CTR |
| salon barber wrocław | 17 | 7,56% | -- | OK |
| fryzjer blisko | 26 | 5,96% | -- | OK |
| strzyżenie brody wrocław | 3 | 4,05% | 3 | Mały ruch |
| барбер Вроцлав | 22 | 11,22% | 5 | |

### Usunięte (2026-06-16) — niska jakość
- `salon fryzjerski męski wrocław` — QS 2, CPC 4,11 zł
- `strzyżenie męskie wrocław` — QS 1, 0 konwersji

### Nieaktywne (0 wyświetleń / rzadko wyświetlane)
- `стрижка чоловіча Вроцлав`, `barbershop centrum wrocław`, `combo barber wrocław`
- `fryzjer dla mężczyzn wrocław`, `fade haircut wrocław`, `golenie brody wrocław`
- `strzyżenie maszynką wrocław`, `modelowanie brody wrocław`

---

## Google Ads — Reklamy

### Reklama 1 (oryginalna, od 2026-05-13)
- Skuteczność: Średnia
- Nagłówek 1 (przypięty): Barbershop Lab Wrocław
- Fokus: lokalizacja i usługi
- Ścieżka URL: wroclaw/barbershop

### Reklama 2 (dodana 2026-06-16)
- Fokus: social proof i cena
- Nagłówek 1 (przypięty): Barbershop Lab Wrocław
- Kluczowe nagłówki: "5,0 z 1232 Opinii Google", "Strzyżenie od 60 zł", "Barbershop Wrocław", "Barber Wrocław"
- Cel: A/B test vs Reklama 1

---

## Google Ads — Komponenty (Sitelinki)

| Sitelink | CTR | Koszt |
|---|---|---|
| Cennik usług (od 60 zł, broda 70 zł, studenci -10 zł) | 7,18% | 127,01 zł |
| Lokalizacja i kontakt (Poniatowskiego 7e) | 6,17% | 93,47 zł |
| Umów wizytę online (Booksy) | 5,68% | 74,59 zł |
| Galeria realizacji | 4,05% | 48,59 zł |

Objaśnienia (callouts): Strzyżenie i broda, Rezerwacja online 24/7, Hot shave we Wrocławiu, Salon przyjazny każdemu, Doświadczeni barberzy, Strzyżenie od 60 zł, Studenci -10 zł, 5,0 z 1232 opinii

---

## Google Ads — Wykluczające słowa kluczowe (75 wpisów, stan 2026-06-16)

Konkurencja/inne salony: ascent hair, stacja barbershop, warsztat fryzur, barbersky, lizard barber, barber trzebnicka, shape barbershop, chi barber, the limb, puggies, express barber, street barber, brothers barber, barberhood, barberhood tattoo, plan b barbershop, balance barbershop, blade barbershop, golden arms, rejonowy barbershop, stara szkola barber, always fresh, escobar, jacobs, alex barber, ananas barber, ananas, king barber, pan elegant, kapkan, markus, gans, corner, cut place, stylehub, blackbeard, steezy, poriadok, grip

Dzielnice poza targetem: psie pole, trzebnicka, barber leśnica, barber psie pole, legnicka, bielany, stabłowice, jagodno, borek, ołtaszyn, klecina

Style/frazy niezwiązane z usługami: low taper fade, textured crop, mullet, burst fade, trwała, golarz, herrenfriseur, friseur, wfm, babett

Ulice: barber traugutta, barber teczową

Inne: booksy (wyszukiwanie samej platformy), z dojazdem do domu, arkadiusz panek, artzcut, rejonowy, limb, express barbershop, barber stacja, [fryzjer] (exact), [barber] (exact)

---

## Demografia i zachowania (2026-05-10 → 2026-06-16)

- **Płeć:** 77% mężczyźni, 23% kobiety
- **Wiek top:** 25-34 lat (34,92%), 35-44 lat (19,14%)
- **Urządzenia:** 93,5% mobile, 6,3% desktop
- **Najlepsze dni:** Piątek, Sobota, Poniedziałek
- **Najsłabszy dzień:** Wtorek
- **Szczyt godzinowy:** 8:00–12:00, drugi szczyt 15:00

---

## Stan po naprawie celów — faza uczenia (od 2026-06-16)

### Dlaczego 16.06 = 0 zł wydanych?
Tego dnia wprowadzano duże zmiany (usunięcie Local Actions, zmiana celów konwersji, usunięcie słów kluczowych, dodanie reklamy). Przy każdej większej edycji:
- Zmienione elementy trafiają do krótkiej weryfikacji przez Google — reklamy mogą nie wyświetlać się w ogóle
- Zmiana głównego celu konwersji powoduje natychmiastowy reset Smart Biddingu

Uwaga: 2.06 również miał 0 zł (nieznana przyczyna) — obydwa dni to wtorki.

### Dlaczego 17.06 tylko 12 zł z 33 zł?
Po resecie Smart Biddingu algorytm **celowo licytuje ostrożniej** — nie zna jeszcze wartości konwersji w nowym modelu (booksy_click), więc woli wygrywać mniej aukcji, ale taniej. To całkowicie normalne zachowanie.

| Data | Kliknięcia | CPC | Koszt | Uwagi |
|---|---|---|---|---|
| 15.06 (pon) | 23 | 1,47 zł | 33,82 zł | ostatni dzień przed zmianami |
| 16.06 (wt) | 0 | — | 0,00 zł | dzień zmian — reset algorytmu |
| 17.06 (śr) | 9 | 1,34 zł | 12,07 zł | faza uczenia — 36% budżetu |

Szacowany powrót do normalnego wydawania budżetu: **ok. 23–30 czerwca 2026** (7–14 dni od resetu).

### Co obserwować w fazie uczenia
- Czy koszt/dzień stopniowo rośnie w kierunku 33 zł
- Czy pojawiają się realne konwersje booksy_click
- Jeśli po 30.06 algorytm nadal nie wydaje pełnego budżetu — rozważyć tymczasowe obniżenie budżetu lub ręczną zmianę strategii

---

## Zadania do wykonania

### Pilne (najbliższe 2 tygodnie — poczekaj na stabilizację algorytmu po zmianie konwersji)
- [ ] Sprawdzić czy conversion action IDs w index.html są prawdziwe czy nadal placeholder
- [ ] Monitorować koszt/dzień — powinien rosnąć stopniowo do 33 zł przez tydzień
- [ ] Sprawdzić czy pojawiają się konwersje booksy_click

### Po 2 tygodniach (ok. 2026-06-30)
- [ ] Ocenić koszt realnej konwersji (booksy_click)
- [ ] Podjąć decyzję o podniesieniu budżetu (propozycja: 50 zł/dzień)
- [ ] Ocenić która reklama (1 vs 2) ma lepszy CTR
- [ ] Sprawdzić rekomendacje Google (wynik optymalizacji 65%)
- [ ] Jeśli algorytm nadal nie wydaje pełnego budżetu — rozważyć zmianę strategii

### Do omówienia z Dawidem
- [ ] Ile zł jest gotowy płacić za jednego nowego klienta z reklamy?
- [ ] Czy chce skalować kampanię agresywniej?
- [ ] Decyzja o budżecie i uruchomieniu Kampanii 2 (Cybulskiego)

---

## Historia zmian kampanii

| Data | Zmiana |
|---|---|
| 2026-05-13 | Start kampanii, budżet 25 zł/dzień |
| 2026-05-17-18 | Przypadkowe usunięcie celu konwersji — prawie zero ruchu |
| 2026-05-19 | Naprawa: przywrócono cele, dodano 60+ wykluczeń, 4 ukraińskie słowa kluczowe, tag Google Ads dodany do index.html |
| 2026-06-01 | Budżet podniesiony do 33,33 zł/dzień |
| 2026-06-02 | Zero wydatków — przyczyna nieznana (do zbadania) |
| 2026-06-16 | **Duża naprawa:** usunięto Local Actions z celów konwersji, dodano języki UA+RU, usunięto 2 słowa kluczowe niskiej jakości, dodano Reklamę 2 |
| 2026-06-16 | Zaimportowano booksy_click_2 z GA4 do Google Ads |
| 2026-06-16 | Kampania 2 (Cybulskiego) utworzona i skonfigurowana — wstrzymana, czeka na budżet od Dawida |

---

## Lokal 2 — Cybulskiego 3

- **Adres:** ul. Wojciecha Cybulskiego 3, 52-007 Wrocław
- **Telefon:** +48 548 470 249
- **Booksy:** https://booksy.com/pl-pl/348343_lab-barber-shop-2_barber-shop_13750_wroclaw
- **Team:** MAKS, DIMA (junior barber), SVETLANA
- **Godziny:** 10:00–20:00, 7 dni w tygodniu
- **Opinie:** 5,0 (5 recenzji — nowy lokal)

### Cennik Lokal 2 vs Lokal 1

| Usługa | Lok. 1 (Poniatowskiego) | Lok. 2 (Cybulskiego) |
|---|---|---|
| Strzyżenie | 90-100 zł | **70 zł** |
| Studenci | 80-90 zł | **60 zł** |
| Buzz cut | 80-90 zł | **60 zł** |
| Broda | 70-80 zł | **40 zł** |
| Combo włosy+broda | 140-150 zł | **90 zł** |
| Hot Shave | 130 zł | ❌ brak |

### Tracking Lokal 2
- Zdarzenie: `booksy_click_2` (w index.html — rozróżnia po numerze Booksy 348343)
- Zaimportowane do Google Ads: ✅ (2026-06-16)
- Status: Brak konwersji w ostatnim czasie (nowy lokal)

---

## Kampania 2 — Pełna konfiguracja

- **Nazwa:** Barbershop LAB - Wrocław 2 - Search
- **Status:** Utworzona 2026-06-16, wstrzymana (budżet do ustalenia z Dawidem)
- **Typ:** Sieć wyszukiwania
- **Strategia:** Maksymalizacja konwersji (bez docelowego CPA na start)
- **Budżet:** 25 zł/dzień (tymczasowy — do zmiany przed uruchomieniem)
- **Cel konwersji:** booksy_click_2
- **Lokalizacja:** Wrocław + 10 km
- **Języki:** polski, ukraiński, rosyjski
- **Sieci:** tylko wyszukiwarka (Display i partnerzy wyłączone)
- **AI Max:** wyłączone
- **URL końcowy:** https://barbershoplab.pl/
- **Ścieżka URL:** wroclaw / barbershop
- **Nazwa firmy:** Barbershop LAB
- **Telefon:** +48 548 470 249
- **Główny wyróżnik:** Niższe ceny (strzyżenie od 70 zł, broda od 40 zł)

### Słowa kluczowe (17)
```
barbershop wrocław
barber wrocław
fryzjer męski wrocław
barber cennik wrocław
barber blisko mnie
fryzjer blisko
tani barber wrocław
niedrogi barber wrocław
barber śródmieście wrocław
barber student wrocław
barber cybulskiego wrocław
lab barber wrocław
golenie brody wrocław
барбер Вроцлав
барбершоп Вроцлав
перукарня Вроцлав
strzyżenie męskie wrocław
```

### Reklama 1 — Oferta cenowa

**Nagłówki (Nagłówek 1 przypięty do pozycji 1):**
1. Barbershop Lab Wrocław *(przypięty poz. 1)*
2. Strzyżenie od 70 zł
3. Broda już od 40 zł
4. Combo włosy+broda 90 zł
5. Studenci: 60 zł
6. Tańszy barber w centrum
7. ul. Cybulskiego 3
8. Otwarte 7 dni do 20:00
9. Umów się na Booksy
10. Junior barber dostępny
11. Barber blisko centrum
12. Najlepsza cena w centrum
13. Buzz cut od 60 zł
14. Rezerwacja online
15. Barbershop LAB Lok. 2

**Opisy:**
1. Strzyżenie od 70 zł, broda od 40 zł. Tańszy barber w centrum Wrocławia – zarezerwuj!
2. Combo włosy + broda tylko 90 zł. Otwarte 7 dni w tygodniu do 20:00. Ul. Cybulskiego 3.
3. Studenci płacą 60 zł za strzyżenie. Junior barber w zespole. Umów się dziś na Booksy!
4. Barbershop LAB – ta sama jakość, niższa cena. Druga lokalizacja w centrum Wrocławia.

### Sitelinki (4)

| Tekst | URL | Linia 1 | Linia 2 |
|---|---|---|---|
| Zarezerwuj online | booksy.com/../348343 | Szybka rezerwacja przez Booksy | Wybierz termin 24/7 bez czekania |
| Sprawdź ceny | booksy.com/../348343 | Strzyżenie od 70 zł, broda od 40 zł | Studenci i uczniowie 60 zł |
| Dojazd – Cybulskiego 3 | barbershoplab.pl/#locations | Śródmieście Wrocławia | Łatwy dojazd i parking |
| Galeria realizacji | barbershoplab.pl/#gallery | Zobacz prace naszych barberów | Fade, strzyżenie i pielęgnacja |
| Nasze usługi | barbershoplab.pl/#services | Strzyżenie, broda, hot shave | Junior barber w zespole |

*Uwaga: Google nie pozwolił na duplikat URL — Sprawdź ceny i Zarezerwuj online mają ten sam URL Booksy. Może wymagać korekty.*

### Objaśnienia (callouts)

Z kampanii 1 (zachowane): Rezerwacja online 24/7, 5,0 z 1232 opinii

Nowe dla kampanii 2:
- Strzyżenie od 70 zł
- Broda od 40 zł
- Studenci 60 zł
- Combo od 90 zł
- Otwarte 7 dni
- Czynne do 20:00
- Junior barber

### Wykluczające słowa kluczowe

Pełna lista z kampanii 1 (75 fraz) **plus dodatkowe:**
- poniatowskiego
- barber lab poniatowskiego
- barber kobiet
- fryzjer damski
- fryzjer dla kobiet
- fryzjer dziecięcy
- fryzjer dla dzieci
- salon fryzjerski

### Do zrobienia przed uruchomieniem
- [ ] Ustalić budżet dzienny z Dawidem i zmienić z 25 zł na właściwy
- [x] Dodać wykluczające słowa kluczowe (lista powyżej) — dodane 2026-06-16
- [ ] Dodać drugą reklamę RSA (lokalizacja + jakość) — nagłówki w planie kampanii 2
- [ ] Sprawdzić czy sitelink "Sprawdź ceny" z duplikatem URL został zaakceptowany przez Google
- [ ] Aktywować kampanię
