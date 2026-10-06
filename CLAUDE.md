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

### Promocja -50% (stan 2026-07-17)
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
- `phone_click_2` — rozróżnia po numerze 548470249 (Cybulskiego)

### Do zrobienia na stronie
- [x] Dodać informację o promocji -50% — ✅ zrobione 2026-07-17 (baner w #services + pasek w #locations)
- [ ] Osobny cennik dla Cybulskiego — strona ma jeden wspólny cennik (Poniatowskiego)

---

## Google Ads — Struktura kont

| Poziom | Nazwa | ID |
|---|---|---|
| MCC | KZ Marketing | 918-590-8201 |
| Subkonto 1 | Barbershop LAB - Poniatowskiego | 959-699-5699 |
| Subkonto 2 | Barbershop LAB - Cybulskiego | 785-993-8647 |

**Profil płatności:** 3968-6733-2528 (ASS Klecha Dawid) — **współdzielony przez oba subkonta!**
- Karta Dawida (Mastercard ****4313) — podstawowa na subkoncie Poniatowskiego
- Karta Edka (Mastercard ****4653) — podstawowa na subkoncie Cybulskiego
- NIP Dawida: 8942804688 (w systemie od 12.05.2026, status: Przyjęta)
- Zmiana nazwy na E.B. Barber Edik Babayan: w trakcie weryfikacji (CEIDG przesłane 02.07.2026)

---

## KAMPANIA 1 — Poniatowskiego (959-699-5699)

### Konfiguracja
| Pole | Wartość |
|---|---|
| Nazwa | Barbershop LAB Search |
| Start | 2026-05-13 |
| Budżet | 33 zł/dzień (ograniczona budżetem — wymaga zwiększenia do 50–60 zł) |
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

### Reklamy (stan 22.09.2026)
- **Reklama 1** (social proof + ceny): 1432 kliknięcia, 184,58 konw, **13,12 zł/konw** — wygrywająca
- **Reklama 2** (styl/klimat → przepisana 22.09.2026): 491 kliknięć, 38,42 konw, 18,95 zł/konw przed przepisaniem
  - Przepisana 22.09: wymieniono 6 słabych nagłówków na konkretne liczby (ceny, opinie, oferty), opisy 3 i 4 zastąpione

### Słowa kluczowe — aktywne (stan 22.09.2026)
| Słowo | Kliknięcia | Konw. | Koszt/konw. | QS | Uwagi |
|---|---|---|---|---|---|
| barber wrocław | 765 | 111,75 | 12,97 zł | 7 | główna fraza |
| barbershop wrocław | 386 | 44,08 | 14,49 zł | 3 | |
| fryzjer męski wrocław | 187 | 16,00 | 18,42 zł | 2 | niska jakość, monitorować |
| salon barber wrocław | 118 | 4,67 | 24,66 zł | — | drogo |
| барбершоп Вроцлав | 91 | 21,50 | **7,83 zł** | 4 | ZŁOTO — najniższy CPA |
| barber cennik wrocław | 83 | 3,00 | 34,98 zł | — | drogo |
| barber blisko mnie | 94 | 4,00 | 26,12 zł | 1 | niska jakość |
| barber lab wrocław | 66 | 6,00 | 12,28 zł | 9 | brand |
| barber blisko | 23 | 5,00 | **5,33 zł** | 1 | QS=1 ale konwertuje! nie ruszać |
| барбер Вроцлав | 35 | 4,00 | 17,40 zł | 4 | |
| strzyżenie brody wrocław | 12 | 2,00 | 10,30 zł | 3 | |
| golenie brody wrocław | 12 | 0 | — | — | **WSTRZYMANE 22.09.2026** |
| перукарня Вроцлав | 51 | 1,00 | 74,23 zł | 2 | **WSTRZYMANE 22.09.2026** |

### Komponenty — sitelinki
| Sitelink | Kliknięcia | CTR |
|---|---|---|
| Telefon 663 537 777 | **108** | 6,26% — lider! |
| Cennik usług | 76 | 6,98% |
| Lokalizacja i kontakt | 42 | 5,12% |
| Umów wizytę (Booksy) | 42 | 5,36% |
| Galeria realizacji | 19 | 2,65% — najsłabszy |

### Wnioski i rekomendacje (stan 22.09.2026)
- Budżet 33 zł/dzień nadal ogranicza kampanię — kampania wydaje ~32 zł/dzień (limit). Dawid nie ma środków na zwiększenie na razie
- барбершоп Вроцлав = złota fraza (7,83 zł/konw) — rozważyć wyższy priorytet
- fryzjer blisko (QS=1) konwertuje za 5,33 zł/konw — nie ruszać mimo niskiego QS
- "fryzjer wrocław" — świadomie NIE dodane jako słowo kluczowe (zbyt ogólne, już łapane przez broad match, ryzyko ruchu damskiego, ograniczony budżet)
- Reklama 2 przepisana 22.09 — sprawdzić za 2-3 tygodnie czy zbliżyła się do Reklamy 1
- Wynik optymalizacji 49,95% z alertem "brak trafnych słów kluczowych" — Google sugeruje rozszerzenie, nie spieszyć się bez analizy

### Analiza aukcji — konkurencja (stan 22.09.2026)
| Konkurent | IS | Trend vs czerwiec |
|---|---|---|
| **Ty** | **43,47%** | ↑ (było 40,10%) — LIDER |
| warsztatfryzurmeskich.pl | 32,06% | ↓ (było 36,33%) |
| booksy.com | 21,16% | ↓ (było 25,73%) |
| rudywasbarber.pl | 20,73% | ↓ (było 23,60%) |
| gentlemenbarber.pl | 11,57% | ↓ (było 14,13%) — wyraźnie słabnie |
| barberbus.pl | <10% | nowy gracz |

---

## KAMPANIA 2 — Cybulskiego (785-993-8647)

### Konfiguracja
| Pole | Wartość |
|---|---|
| Nazwa | Barbershop LAB - Cybulskiego |
| Start | 02.07.2026 |
| Budżet | 35 zł/dzień (ograniczona budżetem) |
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

### Słowa kluczowe — wstrzymane (22.09.2026)
- барбешоп Вроцлав (32 klik, 0 konw, QS=niska jakość, 97 zł przepalone)
- барбер Вроцлав (10 klik, 0 konw)
- salon barber wrocław (26 klik, 1 konw, 80 zł/konw)
- [barber lab wrocław] (12 klik, 0,5 konw, 88 zł/konw — brand, trafią organicznie)

### Reklama RSA (stan 22.09.2026)
- Skuteczność: **Średnia**
- Nagłówek 14 zmieniony z "Barber Blisko Centrum" → **"Barber Wrocław – Cybulskiego 3"** (22.09.2026)
- Nie dodawać drugiej reklamy RSA dopóki lokal nie zbierze więcej opinii Google

### Komponenty (stan 22.09.2026)
**Sitelinki (6):**
- Lokalizacja i kontakt → `/#locations` | CTR 4,97% | 473 kliknięcia — lider
- Cennik usług → `/#services` | CTR 5,79% | 538 kliknięć — **najlepszy CTR**
- Galeria realizacji → `/#gallery` | CTR 4,31%
- Umów wizytę online → Booksy Cybulskiego | CTR 4,79%
- Pierwsze strzyżenie -50% → `/#locations` | **dodany 22.09.2026**
- Hot Shave Wrocław → `/#services` | **dodany 22.09.2026**

**Telefon:** +48 548 470 249 (123 kliknięcia, CTR 2,56%)

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

### Analiza aukcji (22.09.2026)
| Konkurent | IS |
|---|---|
| **Ty** | **32,22%** |
| warsztatfryzurmeskich.pl | 30,09% — bardzo blisko! |
| booksy.com | 18,15% |
| rudywasbarber.pl | 13,23% |
| gentlemenbarber.pl | <10% |
| barberbus.pl | <10% |

### Do zrobienia dla Cybulskiego
- [x] Dodać booksy_click_2 jako konwersję — ✅
- [x] Zmienić strategię na Maks. konwersje — ✅
- [x] Wstrzymać słabe słowa kluczowe (22.09.2026) — ✅
- [x] Dodać wykluczające słowa kluczowe (22.09.2026) — ✅
- [x] Dodać 2 sitelinki (22.09.2026) — ✅
- [x] Poprawić nagłówek reklamy (22.09.2026) — ✅
- [ ] Zmiana nazwy płatnika na E.B. Barber Edik Babayan — czekamy na weryfikację CEIDG
- [ ] Dodać drugą reklamę RSA gdy lokal zbierze więcej opinii Google

---

## Lokal 2 — Cybulskiego 3

- **Adres:** ul. Wojciecha Cybulskiego 3, Wrocław
- **Telefon:** +48 548 470 249
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

---

## Zasady pracy z Google Ads
- **Zawsze podawaj ID subkonta** przed każdą instrukcją nawigacji, np. "Na subkoncie Cybulskiego (785-993-8647) → ...". Użytkownik zarządza wieloma subkontami i bez wskazania może wykonać akcję w złym miejscu.

---

## Faktura za czerwiec 2026 (Poniatowskiego)
- Numer: 5622848219 | Kwota: 978,98 zł | Okres: 1–30 czerwca 2026
- Barbershop LAB Search: 531 kliknięć, 940,54 zł
- Barbershop LAB 2 Search: 21 kliknięć, 38,44 zł
- NIP (8942804688) nie pojawił się na fakturze mimo że był w systemie od 12.05 — rozważyć korektę faktury
