# Barbershop LAB — Pamięć projektu dla Claude

## Klient
- **Nazwa:** Barbershop LAB Wrocław
- **Właściciel:** Dawid Klecha (ASS Klecha Dawid)
- **Adres:** ul. Poniatowskiego 7e, 50-326 Wrocław (Śródmieście)
- **Telefon:** +48 663 537 777
- **Strona:** barbershoplab.pl
- **Rezerwacje:** https://booksy.com/pl-pl/64196_lab-barber-shop_barber-shop_13750_wroclaw
- **Opinie Google:** 4,9 z 251 opinii (stan 2026-10-06)
- **Opinie Booksy:** 5,0 z 1364 opinii (stan 2026-10-06)

---

## Strona internetowa
- Statyczna strona HTML/CSS/JS
- Repo: `barbershoptalos-website` (sklonowane z barbershop-website na GitHub)
- Struktura: index.html, css/, js/, img/
- Ścieżki sitelinków w reklamach: /#services, /#gallery, /#locations

### Wersje językowe (dodane 2026-11-15)
- PL (domyślna): `index.html` → barbershoplab.pl/
- ENG: `en/index.html` → barbershoplab.pl/en/ (osobny plik, ścieżki do assetów `../css`, `../img`, `../js`)
- Przełącznik `PL | ENG` w `<nav>` (`.lang-switch`): desktop — na prawo od „Lokalizacje”, mobile — na lewo od hamburgera. Brak automatycznego przekierowania po języku przeglądarki
- Linki w przełączniku prowadzą do `index.html` / `en/index.html` (żeby działały też po otwarciu pliku lokalnie); canonical i hreflang wskazują czyste URL-e (`/` i `/en/`)
- Ceny w ENG w PLN; opinie klientów przetłumaczone z adnotacją „Reviews translated from Polish"; id sekcji (#szkolenia itd.) zostają identyczne w obu wersjach
- **Każda zmiana treści/cennika w `index.html` wymaga ręcznego powtórzenia w `en/index.html`**
- `sitemap.xml` zawiera oba adresy z `xhtml:link` hreflang

### Sekcje strony (kolejność)
1. `#hero` — slider 4 slajdów: Barbershop → Szkolenia → Coworking → Atmosfera
2. `#about` — O nas
3. `#szkolenia` — Szkolenie Barberskie *(dodana 2026-06-21)*
4. `#coworking` — Coworking
5. `#services` — Usługi i Cennik
6. `#gallery` — Galeria
7. `#reviews` — Opinie klientów
8. `#locations` — Lokalizacje

### Tła sekcji (naprzemienne — tylko 2 kolory)
| Sekcja | Tło |
|---|---|
| #about | `#1a1a1a` |
| #szkolenia | `#111111` |
| #coworking | `#1a1a1a` |
| #services | `#111111` |
| #gallery | `#1a1a1a` |
| #reviews | `#111111` |
| #locations | `#1a1a1a` |

### Animacja reveal
- Klasa `.reveal` na każdej sekcji (poza hero)
- CSS: `opacity: 0; transform: translateY(50px)` → `opacity: 1; transform: translateY(0)` (0.7s ease-out)
- JS fix w `script.js`: kliknięcie linka nawigacyjnego natychmiast dodaje `.active` do docelowej sekcji zanim scroll nastąpi (zapobiega błędnej pozycji scrolla)

### Sekcja #szkolenia — szczegóły (stan 2026-06-21)
- **Layout desktop:** CSS Grid 2 kolumny — lewa (h2 + opis + CTA pod spodem), prawa (karta kursu rozciągnięta na obie wiersze)
- **Layout mobile:** flex column — tekst → karta → guzik
- **CTA:** mailto do labbarbershop88@gmail.com z tematem "Zapytanie o szkolenie barberskie"
- **Karta kursu:** `border: 1px solid rgba(197,157,95,0.35)`, `background: #0f0f0f`, złoty pionowy akcent `::before`
- **Bullet pointy w karcie:** CSS `::before` z `'—'` w kolorze `#c59d5f`, `position: absolute`, tekst z `padding-left: 32px`

### Cennik na stronie — Poniatowskiego (stan 2026-07-17)
| Usługa | Cena |
|---|---|
| Strzyżenie męskie / Men's haircut | 100 zł |
| Strzyżenie męskie ze zniżką STUDENT/UCZEŃ | 90 zł |
| Buzz Cut | 90 zł |
| Strzyżenie maszynką na jedną długość | 70 zł |
| Strzyżenie długich włosów | 120 zł |
| Strzyżenie męskie z tonowaniem siwizny | 160 zł |
| Strzyżenie brody | 70 zł |
| Broda HOT SHAVE | 130 zł |
| Broda + tonowanie | 130 zł |
| Golenie HOT SHAVE (głowa lub twarz) | 130 zł |
| Tonowanie siwizny (włosy lub broda) | 60 zł |
| Tonowanie siwizny COMBO (włosy i broda) | 130 zł |
| COMBO 1 (strzyżenie męskie + broda) | 150 zł |
| COMBO 1 + tonowanie siwizny | 210 zł |
| COMBO 2 (strzyżenie + Broda HOT SHAVE) | 210 zł |
| COMBO 3 (strzyżenie + Broda HOT SHAVE + tonowanie) | 260 zł |
| Modelowanie włosów | 30 zł |

**UWAGA:** Cennik Cybulskiego jest inny — strona www ma jeden wspólny cennik (Poniatowskiego). Nie aktualizować bez osobnego cennika Cybulskiego.

### Promocja -50% — ZAKOŃCZONA 2026-10-21 (usunięta ze strony i z Google Ads; poniżej opis historyczny)
- Pierwsze strzyżenie -50% — obowiązuje w **obu lokalach**
- Warunek: tylko rezerwacja **telefoniczna lub osobista** w salonie
- NIE dotyczy rezerwacji przez Booksy
- Na stronie: baner w `#services` + pasek w `#locations` pod danymi kontaktowymi każdego lokalu
- W Google Ads: nagłówek dodany do obu kampanii (zastąpił "Strzyżenie od 60 zł")

### Tracking (stan na 2026-07-02)
- **GA4:** G-K08FGF88Q9 (w `<head>`)
- **Google Ads tag:** AW-18153696875 (w `<head>`, scalony z GA4 w jeden gtag block)
- **Konwersje:** skrypt na dole `<body>` — zdarzenia `booksy_click`, `phone_click`, `booksy_click_2`, `phone_click_2`
- `booksy_click_2` — rozróżnia po numerze Booksy 348343 (Cybulskiego)
- `phone_click_2` — rozróżnia po numerze 538470249 (Cybulskiego)

### Do zrobienia na stronie
- [x] Dodać informację o promocji -50% — ✅ zrobione 2026-07-17 (baner w #services + pasek w #locations)
- [ ] Osobny cennik dla Cybulskiego — strona ma jeden wspólny cennik (Poniatowskiego)

---

## Google Ads — Struktura kont

| Poziom | Nazwa | ID |
|---|---|---|
| MCC | KZ Marketing | 918-590-8201 |
| Subkonto 1 | Barbershop LAB - Poniatowskiego | 959-699-5699 |
| Konto Cybulskiego (osobne, poza KZ Marketing) — **potwierdzone 2026-10-21: kampania „Cybulskiego” jest na tym koncie** | Barbershop LAB | 159-169-5743 |
| Wcześniej wpisane jako konto Cybulskiego — **nieaktualne/do wyjaśnienia** | Barbershop LAB - Cybulskiego | 785-993-8647 |

Oba konta główne są dostępne z jednego loginu Google (krzysztofzaraza@gmail.com).

**Profil płatności:** 3968-6733-2528 (ASS Klecha Dawid) — profil Dawida, używany przez Poniatowskiego (Cybulskiego ma osobny profil — potwierdzone 2026-10-06)
- Karta Dawida (Mastercard ****4313) — podstawowa na subkoncie Poniatowskiego
- Karta Edka (Mastercard ****4653) — podstawowa na subkoncie Cybulskiego
- NIP Dawida: 8942804688 (w systemie od 12.05.2026, status: Przyjęta)
- Konto Cybulskiego było założone na Edika (własny profil płatności: E.B. BARBER EDIK BABAYAN, ID 6252-5767-3132; pod tym samym loginem jest też prywatny profil Krzysztof Zaraza 5783-3610-3154). Edik zmienił działalność i faktury z Cybulskiego mają przychodzić na firmę Dawida
- Próba zmiany nazwy na profilu: **ODRZUCONA** przez Google ("Account transfers are not allowed", stan 2026-10-06) — nazwy profilu nie da się zmienić na inny podmiot; rozwiązanie: przepiąć konto Cybulskiego na profil płatności Dawida

---

## KAMPANIA 1 — Poniatowskiego (959-699-5699)

### Konfiguracja
| Pole | Wartość |
|---|---|
| Nazwa | Barbershop LAB Search |
| Start | 2026-05-13 |
| Budżet | **16,70 zł/dzień** (zmieniono 23.11.2026 z 33 zł — test przesunięcia budżetu na Cybulskiego) |
| Strategia | Maksymalizuj konwersje |
| Targetowanie | Wrocław + 10 km |
| Języki | polski, ukraiński, rosyjski |
| Sieć | Tylko wyszukiwarka |

### Wyniki — pełny okres po optymalizacji (16.06–22.09.2026, 98 dni)
| Metryka | Wartość |
|---|---|
| Kliknięcia | 1 923 |
| Wyświetlenia | 32 137 |
| CTR | 5,98% |
| Śr. CPC | 1,64 zł |
| Koszt | 3 150,02 zł |
| Konwersje | 223 |
| Koszt/konwersja | 14,13 zł |
| Wsp. konwersji | 11,60% |
| Impression Share | 43,47% — LIDER rynku |
| Wynik optymalizacji | 49,95% (alert: brak wystarczającej liczby trafnych słów kluczowych) |

### Wyniki — 22.09–23.11.2026 (63 dni)
| Metryka | Wartość | Zmiana vs poprzedni okres |
|---|---|---|
| Kliknięcia | 1 347 | — |
| Wyświetlenia | 17 353 | — |
| CTR | 7,76% | — |
| Śr. CPC | 1,52 zł | ✅ -7% |
| Koszt | 2 046,31 zł | — |
| Konwersje | 214,97 | — |
| Koszt/konwersja | **9,52 zł** | ✅ -33% (najlepszy w historii) |
| Wsp. konwersji | 15,96% | ✅ +38% |
| Impression Share | 32,69% | ⚠️ -11 pp (budżet) |
| Wynik optymalizacji | 47,58% | — |

### Reklamy (stan 23.11.2026)
- **Reklama 1** (social proof + ceny): 850 kliknięć, 159,97 konw, **9,22 zł/konw**, conv rate 18,82% — wygrywająca
- **Reklama 2** (przepisana 22.09): 497 kliknięć, 55,00 konw, **10,40 zł/konw**, conv rate 11,07% — poprawa z 18,95 zł po przepisaniu

### Słowa kluczowe — aktywne (stan 23.11.2026)
| Słowo | Kliknięcia | Konw. | Koszt/konw. | QS | Uwagi |
|---|---|---|---|---|---|
| barber wrocław | 1 126 | 183,47 | 9,37 zł | 5 | główna fraza |
| fryzjer męski wrocław | 107 | 24,50 | **7,60 zł** | 4 | REWELACJA — QS wzrósł z 2, efekt SEO strony |
| барбершоп Вроцлав | 49 | 6,00 | 13,35 zł | 4 | było 7,83 zł — pogorszyło się, monitorować |
| salon barber wrocław | 8 | 1,00 | 9,63 zł | — | |
| барбер Вроцлав | 9 | 0 | — | 6 | mało danych |
| barbershop wrocław | 8 | 0 | — | 3 | mało danych |
| barber cennik wrocław | 2 | 0 | — | — | mało danych |
| golenie brody wrocław | 0 | 0 | — | — | WSTRZYMANE 22.09.2026 |
| перукарня Вроцлав | 0 | 0 | — | 2 | WSTRZYMANE 22.09.2026 |
| barber blisko mnie | 0 | 0 | — | — | **WSTRZYMANE 23.11.2026** (23 klik, 0 konw, 19,86 zł przepalone) |
| fryzjer blisko | 0 | 0 | — | — | **WSTRZYMANE 23.11.2026** (0 konw) |

### Nowe słowa kluczowe (dodane 23.11.2026)
4 nowe frazy dodane po analizie alertu "brak trafnych słów kluczowych" — do weryfikacji po 4 tygodniach.

### Analiza aukcji (stan 23.11.2026)
| Konkurent | IS | Zmiana vs 22.09 |
|---|---|---|
| **Ty** | **32,69%** | ⚠️ -11 pp (budżet) — wciąż LIDER |
| warsztatfryzurmeskich.pl | <10% | ✅ zniknęli z 32% |
| booksy.com | 24,00% | ⚠️ rośnie |
| gentlemenbarber.pl | 13,79% | ➡️ stabilni |
| barberbus.pl | <10% | ➡️ |
| barberzz.pl | <10% | 🆕 nowy gracz |

---

## KAMPANIA 2 — Cybulskiego (785-993-8647)

### Konfiguracja
| Pole | Wartość |
|---|---|
| Nazwa | Barbershop LAB - Cybulskiego |
| Start | 02.07.2026 |
| Budżet | **50,00 zł/dzień** (zmieniono 23.11.2026 z 35 zł — test przesunięcia budżetu z Poniatowskiego) |
| Strategia | Maksymalizuj konwersje |
| Targetowanie | Wrocław + 10 km |
| Języki | polski, ukraiński, rosyjski |
| Sieć | Tylko wyszukiwarka |
| Skuteczność reklamy | Średnia (cel: Dobra) |

### Wyniki (maks. zakres dat — od startu do 22.09.2026)
| Metryka | Wartość | vs Poniatowskiego |
|---|---|---|
| Kliknięcia | 878 | — |
| CTR | 5,60% | 5,98% Poni |
| Śr. CPC | **3,17 zł** | 1,64 zł Poni — 2× drożej |
| Koszt | 2 786,65 zł | — |
| Konwersje | 59 | — |
| Koszt/konw. | **47,23 zł** | 14,13 zł Poni — 3,3× drożej |
| Wsp. konw. | 6,72% | 11,60% Poni |
| IS | 32,22% | 43,47% Poni |

**Główny problem:** wyższy CPC wynika z niższego QS — lokal nowy, mniej historii. Poprawi się z czasem.

### Słowa kluczowe — aktywne (stan 22.09.2026)
| Słowo | Kliknięcia | Konw. | Koszt/konw | Uwagi |
|---|---|---|---|---|
| barber wrocław | 497 | 34,5 | 47,00 zł | główna fraza |
| barbershop wrocław | 192 | 14 | 38,54 zł | |
| barber cennik wrocław | 33 | 4 | **25,38 zł** | najlepszy CPA |
| barber śródmieście wrocław | 4 | 1 | 13,46 zł | obiecujące, mało danych |
| [barbershop cybulskiego] | 0 | 0 | — | rzadko wyświetla |
| fryzjer blisko | — | — | — | **dodane 22.09.2026** |

### Słowa kluczowe — aktywne (stan 23.11.2026)
| Słowo | Kliknięcia | Konw. | Koszt/konw. | Uwagi |
|---|---|---|---|---|
| barber wrocław | 885 | 91,55 | 22,41 zł | **96% całego ruchu — ryzyko** |
| barbershop wrocław | 30 | 3,25 | 20,09 zł | OK |
| fryzjer blisko | 3 | 0 | — | WSTRZYMANE 23.11.2026 (niska jakość) |
| barber śródmieście wrocław | 0 | 0 | — | WSTRZYMANE 23.11.2026 (niska jakość, 0 wyśw.) |
| barber cennik wrocław | 0 | 0 | — | 0 wyświetleń |
| barbershop cybulskiego | 0 | 0 | — | nikt tego nie szuka |

### Nowe słowa kluczowe (dodane 23.11.2026)
4 nowe frazy dodane w celu dywersyfikacji (96% ruchu z jednej frazy to ryzyko) — do weryfikacji po 4 tygodniach.

### Wyniki kampanii (22.09–23.11.2026, 63 dni)
| Metryka | Wartość | Zmiana vs poprzedni |
|---|---|---|
| CPC | 2,32 zł | ✅ -27% (było 3,17) |
| Wsp. konwersji | 10,33% | ✅ +54% (było 6,72%) |
| Koszt/konw. | **22,44 zł** | ✅ -53% (było 47,23) |
| IS | 26,17% | ⚠️ -6 pp |
| Wynik optymalizacji | 65,62% | ✅ dobry |

### Słowa kluczowe — wstrzymane
- барбешоп Вроцлав (32 klik, 0 konw, QS=niska jakość, 97 zł przepalone) — 22.09.2026
- барбер Вроцлав (10 klik, 0 konw) — 22.09.2026
- salon barber wrocław (26 klik, 1 konw, 80 zł/konw) — 22.09.2026
- [barber lab wrocław] (12 klik, 0,5 konw, 88 zł/konw — brand, trafią organicznie) — 22.09.2026
- barber śródmieście wrocław (niska jakość, 0 wyświetleń) — 23.11.2026
- fryzjer blisko (niska jakość, 0 konwersji) — 23.11.2026

### Reklamy RSA (stan 23.11.2026)

**Reklama 1** (aktywna od 02.07.2026)
- Skuteczność: **Średnia**
- Fokus: cena, szybkość rezerwacji, ogólny branding
- Nagłówek 14: "Barber Wrocław – Cybulskiego 3" (zmieniony 22.09.2026)

**Reklama 2** (dodana 23.11.2026)
- Skuteczność: **Świetna**
- Fokus: lokalizacja, opinie Google, hot shave
- Nagłówki (15): Barbershop LAB Wrocław, Barber Wrocław – Cybulskiego 3, Barbershop Wrocław Centrum, Barber Blisko Centrum, Hot Shave Wrocław, Golenie Brody Wrocław, Strzyżenie Brody Wrocław, Fade i Broda Wrocław, Barber Śródmieście Wrocław, Wolny Termin Dziś, Umów Wizytę 24/7, Sprawdź Cennik Online, Precyzyjne Strzyżenie, Barber od 70 zł, 5,0 z [X] Opinii Google
- Opisy (4): social proof z opiniami Google | lokalizacja Cybulskiego 3 + cena | hot shave/fade/broda | godziny otwarcia 7 dni do 20:00
- Ścieżka: barbershoplab.pl / barber-wroclaw / cybulskiego

### Komponenty (stan 22.09.2026)
**Sitelinki (6):**
- Lokalizacja i kontakt → `/#locations` | CTR 4,97% | 473 kliknięcia — lider
- Cennik usług → `/#services` | CTR 5,79% | 538 kliknięć — **najlepszy CTR**
- Galeria realizacji → `/#gallery` | CTR 4,31%
- Umów wizytę online → Booksy Cybulskiego | CTR 4,79%
- ~~Pierwsze strzyżenie -50% → `/#locations`~~ | dodany 22.09.2026, **usunięty 2026-10-21**
- Hot Shave Wrocław → `/#services` | **dodany 22.09.2026**

**Telefon:** +48 538 470 249 (123 kliknięcia, CTR 2,56%) — uwaga: komponent telefonu w Google Ads miał błędny numer 548 470 249 (stan 2026-10-21: Nieodpowiednia / odrzucona, niezweryfikowany numer) — poprawić na 538

### Konwersje
- phone_click_2: ✅ aktywne
- booksy_click_2: ✅ aktywne (pierwsza konwersja 03.07.2026)

### Wykluczające słowa kluczowe (stan 22.09.2026)
Pełna lista z Poniatowskiego + dodatkowo:
- damski, kobieta, kobiety, dziecko, dzieci, szkolenie, kurs barberski, coworking, wynajem fotela
- poniatowskiego, barber lab poniatowskiego, praca, zatrudnienie, tatuaż, fryzjer damski, salon damski
- gentleman, gentlemen barber, rudy was, barber bus
- warsztat fryzur męskich, gentlemen barber shop, barberbus, stylehub, black beard, hope barber
- french cut, the court barber, plan b barbershop, cousins barber, express barbershop
- barber psie pole, barber gaj, barber legnicka, barber racławicka, barber olimpia port, barber osobowice
- poriadok barbershop, puggies barbershop

### Analiza aukcji (stan 23.11.2026)
| Konkurent | IS (22.09) | IS (23.11) |
|---|---|---|
| **Ty** | 32,22% | **26,17%** ⚠️ |
| warsztatfryzurmeskich.pl | 30,09% | <10% ✅ zniknęli |
| booksy.com | 18,15% | 20,82% ⚠️ rośnie |
| gentlemenbarber.pl | <10% | <10% |
| barberbus.pl | <10% | <10% |

### Do zrobienia dla Cybulskiego
- [x] Dodać booksy_click_2 jako konwersję — ✅
- [x] Zmienić strategię na Maks. konwersje — ✅
- [x] Wstrzymać słabe słowa kluczowe (22.09.2026) — ✅
- [x] Dodać wykluczające słowa kluczowe (22.09.2026) — ✅
- [x] Dodać 2 sitelinki (22.09.2026) — ✅
- [x] Poprawić nagłówek reklamy (22.09.2026) — ✅
- [ ] Faktury z Cybulskiego na firmę Dawida — zmiana nazwy odrzucona (2026-10-06), trzeba przepiąć konto Cybulskiego na profil płatności Dawida (3968-6733-2528)
- [ ] Dodać drugą reklamę RSA gdy lokal zbierze więcej opinii Google

---

## Lokal 2 — Cybulskiego 3

- **Adres:** ul. Wojciecha Cybulskiego 3, Wrocław
- **Telefon:** +48 538 470 249
- **Email:** labbarbershop88@gmail.com
- **Booksy:** https://booksy.com/pl-pl/348343_lab-barber-shop-2_barber-shop_13750_wroclaw
- **Opinie Google:** 5,0 z 95 opinii (stan 2026-10-06)
- **Opinie Booksy:** 5,0 z 60 opinii (stan 2026-10-06)
- **Promocja:** -50% na pierwsze strzyżenie — tylko rejestracja telefoniczna lub osobista (NIE przez Booksy)

### Cennik Lokal 2 — ZWERYFIKOWANY (03.07.2026)
Cennik na stronie (/#services) jest aktualny i poprawny dla lokalu Cybulskiego. Sitelink do cennika można używać w kampanii.

---

## Historia zmian kampanii

| Data | Zmiana |
|---|---|
| 2026-05-13 | Start kampanii Poniatowskiego, budżet 25 zł/dzień |
| 2026-05-17-18 | Przypadkowe usunięcie celu konwersji — prawie zero ruchu |
| 2026-05-19 | Naprawa: przywrócono cele, dodano wykluczenia, ukraińskie słowa kluczowe, tag Google Ads |
| 2026-06-01 | Budżet podniesiony do 33,33 zł/dzień |
| 2026-06-16 | Duża optymalizacja: usunięto Local Actions z celów, dodano języki UA+RU, usunięto słabe słowa, dodano Reklamę B |
| 2026-07-02 | Uruchomienie kampanii Cybulskiego (785-993-8647), budżet 34 zł/dzień |
| 2026-07-02 | Skonfigurowano phone_click_2 jako konwersję w Cybulskiego |
| 2026-07-02 | Wykluczające słowa kluczowe dodane do kampanii Cybulskiego |
| 2026-07-17 | Aktualizacja cennika Poniatowskiego (+10 zł większość usług, nowe nazwy) |
| 2026-07-17 | Dodano baner promocyjny -50% na stronie (#services + #locations) |
| 2026-07-17 | Usunięto "Strzyżenie od 60 zł" z obu kampanii, dodano nagłówek -50% |
| 2026-07-17 | Fix nakładania kropek hero slidera na przycisk (desktop + mobile) |
| 2026-09-22 | Wstrzymano: перукарня Вроцлав (74 zł/konw), golenie brody wrocław (0 konw) |
| 2026-09-22 | Dodano 26 wykluczających słów kluczowych — marki konkurencji (brux, mario mayer, gentlemen barber, klasyk barber, barber pereca, turkish barber, barber jurand, ortego, kingstyle, the crew barbershop, pablo barber, piana barbershop, twarowski barber, bro barbershop, ricky barber, barberzz, octopus barber, level barbers, vip barbershop, barber chachaja, barbershop cartel, street barbershop, stara szkoła barber, mens club barbershop, barber kiełczów, barber smolec) |
| 2026-09-22 | Cybulskiego: wstrzymano барбешоп Вроцлав, барбер Вроцлав, salon barber wrocław, barber lab wrocław — łącznie ~240 zł przy 1,5 konwersji |
| 2026-09-22 | Cybulskiego: dodano wykluczające (warsztat fryzur męskich, gentlemen barber shop, barberbus, stylehub, black beard, hope barber, french cut, the court barber, plan b barbershop, cousins barber, express barbershop, barber psie pole, barber gaj, barber legnicka, barber racławicka, barber olimpia port, barber osobowice, poriadok barbershop, puggies barbershop) |
| 2026-09-22 | Cybulskiego: dodano 2 sitelinki (Pierwsze strzyżenie -50%, Hot Shave Wrocław) |
| 2026-09-22 | Cybulskiego: nagłówek 14 zmieniony na "Barber Wrocław – Cybulskiego 3" (poprawa QS) |
| 2026-09-22 | Cybulskiego: dodano słowo kluczowe "fryzjer blisko" (na Poniatowskim konwertuje za 5,33 zł) |
| 2026-09-22 | Reklama 2 przepisana — wymieniono 6 słabych nagłówków (Twój styl nasz fach, Klimatyczny barbershop, Strzyżenie maszynką, Golenie brody u barbera, Barber Blisko Ciebie, Męski salon fryzjerski Wrocław) na konkretne (Ocena 5,0 z 1262 Opinii, Pierwsze Strzyżenie -50%, Wolny Termin Już Dziś, Strzyżenie od 70 zł, Studenci -10 zł na Wizytę, Umów w 2 Minuty Online). Opisy 3 i 4 zastąpione konkretnymi z liczbami |
| 2026-10-21 | Usunięto promocję -50% ze strony (baner w #services, paski w #locations, style CSS) i z Google Ads (nagłówki i opisy w obu reklamach Poniatowskiego i RSA Cybulskiego, sitelink Cybulskiego). Zniżka studencka -10 zł (hero, cennik) zostaje |
| 2026-10-21 | Cybulskiego (konto 159-169-5743): poprawiono numer telefonu w Google Ads na +48 538 470 249 (wcześniej błędny 548 470 249 — odrzucony, brak przycisku zadzwoń od 05.07); dodano 6 objaśnień; dodano komponent Lokalizacja (Profil Firmy, status do sprawdzenia); rozszerzenie informacji jeszcze niedodane |
| 2026-11-23 | Poniatowskiego: wstrzymano "barber blisko mnie" (23 klik, 0 konw, 19,86 zł przepalone) i "fryzjer blisko" (0 konw) |
| 2026-11-23 | Poniatowskiego: dodano nowe słowa kluczowe (4 szt.) |
| 2026-11-23 | Cybulskiego: usunięto błędny numer telefonu 663 537 777 (Poniatowskiego) z konta Cybulskiego |
| 2026-11-23 | Cybulskiego: wstrzymano "barber śródmieście wrocław" i "fryzjer blisko" (niska jakość, 0 konwersji) |
| 2026-11-23 | Cybulskiego: dodano Reklamę 2 RSA (skuteczność Świetna) — fokus: lokalizacja, opinie, hot shave |
| 2026-11-23 | Cybulskiego: dodano nowe słowa kluczowe (4 szt.) |
| 2026-11-23 | Budżet: Poniatowskiego 33→**16,70 zł/dzień**, Cybulskiego 35→**50,00 zł/dzień** — test na prośbę Dawida (łączny budżet ~2000 zł/mies. bez zmian) |
| 2026-11-23 | Search Console (barbershoplab.pl + www) podpięty do Google Ads na obu kontach — oczekiwany efekt: pojawienie się favicon w reklamach w ciągu 2 tygodni |
| 2026-11-23 | Wykryto sklonowaną stronę barbershoplab.live — domena zarejestrowana 2026-08-27, właściciel ukryty (Dynadot privacy), Cloudflare CDN; identyczna treść + linki Booksy; zgłoszenie DMCA do Cloudflare (abuse@cloudflare.com) do zrobienia z prywatnego komputera |

---

## Zasady pracy z Google Ads
- **Zawsze podawaj ID subkonta** przed każdą instrukcją nawigacji, np. "Na subkoncie Cybulskiego (785-993-8647) → ...". Użytkownik zarządza wieloma subkontami i bez wskazania może wykonać akcję w złym miejscu.

---

## Faktura za czerwiec 2026 (Poniatowskiego)
- Numer: 5622848219 | Kwota: 978,98 zł | Okres: 1–30 czerwca 2026
- Barbershop LAB Search: 531 kliknięć, 940,54 zł
- Barbershop LAB 2 Search: 21 kliknięć, 38,44 zł
- NIP (8942804688) nie pojawił się na fakturze mimo że był w systemie od 12.05 — rozważyć korektę faktury

---

## Sklonowana strona — barbershoplab.live

**Wykryto: 2026-11-23**

Ktoś skopiował całą stronę barbershoplab.pl i wystawił ją pod domeną `barbershoplab.live`. Treść identyczna, linki Booksy wskazują na prawdziwe profile Dawida.

**Dane domeny (WHOIS ICANN):**
- Zarejestrowana: **2026-08-27** (3 miesiące po starcie kampanii)
- Wygasa: 2027-08-27
- Rejestrator: **Dynadot LLC** (USA)
- Właściciel: ukryty za Dynadot Privacy Service
- DNS: **Cloudflare** (dara.ns.cloudflare.com)

**Do zrobienia:**
- [ ] Zgłoszenie DMCA abuse do Cloudflare: `cloudflare.com/abuse/form` → Copyright → `barbershoplab.live` — z prywatnego komputera
- [ ] Po zdjęciu strony: zgłoszenie do Google Search Console o usunięcie z indeksu
