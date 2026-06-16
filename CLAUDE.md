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

## Zadania do wykonania

### Pilne (najbliższe 2 tygodnie — poczekaj na stabilizację algorytmu po zmianie konwersji)
- [ ] Sprawdzić czy conversion action IDs w index.html są prawdziwe czy nadal placeholder
- [ ] Monitorować koszt/konwersję po naprawie celów

### Po 2 tygodniach (ok. 2026-06-30)
- [ ] Ocenić koszt realnej konwersji (booksy_click)
- [ ] Podjąć decyzję o podniesieniu budżetu (propozycja: 50 zł/dzień)
- [ ] Ocenić która reklama (1 vs 2) ma lepszy CTR
- [ ] Sprawdzić rekomendacje Google (wynik optymalizacji 65%)

### Do omówienia z Dawidem
- [ ] Ile zł jest gotowy płacić za jednego nowego klienta z reklamy?
- [ ] Czy chce skalować kampanię agresywniej?

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
