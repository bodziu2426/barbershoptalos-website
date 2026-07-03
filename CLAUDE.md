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

### Tracking (stan na 2026-07-02)
- **GA4:** G-K08FGF88Q9 (w `<head>`)
- **Google Ads tag:** AW-18153696875 (w `<head>`, scalony z GA4 w jeden gtag block)
- **Konwersje:** skrypt na dole `<body>` — zdarzenia `booksy_click`, `phone_click`, `booksy_click_2`, `phone_click_2`
- `booksy_click_2` — rozróżnia po numerze Booksy 348343 (Cybulskiego)
- `phone_click_2` — rozróżnia po numerze 548470249 (Cybulskiego)

### Do zrobienia na stronie
- [ ] Dodać informację o promocji -50% na pierwsze strzyżenie dla Cybulskiego (tylko tel/osobista, nie Booksy) — do hero slajdu 1 lub sekcji #locations

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

### Wyniki — po optymalizacji 16.06 (okres 16.06–02.07.2026)
| Metryka | Wartość |
|---|---|
| Kliknięcia | 271 |
| Wyświetlenia | 4 726 |
| CTR | 5,73% |
| Śr. CPC | 1,78 zł |
| Koszt | 483,60 zł |
| Konwersje | 50 |
| Koszt/konwersja | 9,67 zł |
| Wsp. konwersji | 18,45% |
| Wynik optymalizacji | 57,45% (niski bo kampania ograniczona budżetem) |

### Konwersje (stan 02.07.2026)
- booksy_click: 36 | booksy_click_2: 17 (kampania Poniatowskiego napędza Cybulskiego!)
- phone_click: 3 | Calls from ads: 1
- Local actions - Directions: 42 | Other engagements: 159

### Reklamy
- **Reklama A** ("Fryzjer Wrocław"): CTR 4,56%, wsp. konw. 16,54% — słabsza
- **Reklama B** ("Oceny i ceny", social proof): CTR 6,28%, wsp. konw. 19,09% — **wygrywająca**
  - Kluczowe elementy: "5,0 z 1232 Opinii Google", "Strzyżenie od 60 zł", "Studenci i Uczniowie -10 zł"

### Słowa kluczowe — aktywne
| Słowo | CTR | Koszt/konw. | WJ |
|---|---|---|---|
| barbershop wrocław | 6,50% | 9,28 zł | 5 |
| barber wrocław | 5,17% | 9,12 zł | 5 |
| barber lab wrocław | 27,87% | 8,14 zł | 6 |
| барбершоп Вроцлав | 6,15% | **2,93 zł** | 4 — najniższy CPA! |
| барбер Вроцлав | 5,80% | 8,08 zł | 4 |
| fryzjer męski wrocław | 5,36% | **46,68 zł** | 2 — do naprawy/wstrzymania |

### Komponenty — sitelinki
| Sitelink | Kliknięcia | CTR |
|---|---|---|
| Telefon 663 537 777 | **108** | 6,26% — lider! |
| Cennik usług | 76 | 6,98% |
| Lokalizacja i kontakt | 42 | 5,12% |
| Umów wizytę (Booksy) | 42 | 5,36% |
| Galeria realizacji | 19 | 2,65% — najsłabszy |

### Wnioski i rekomendacje
- Zwiększyć budżet do 50–60 zł/dzień (kampania ograniczona)
- Wstrzymać/naprawić "fryzjer męski wrocław" (WJ=2, koszt 46 zł/konw.)
- Rozbudować segment cyryliczny (najniższy CPA 2,93 zł)
- Złoty slot: Czwartek 14:00–16:00
- Mobile: 82,7% ruchu | Mężczyźni 25–34: 40,85% wyświetleń

### Analiza aukcji — konkurencja
- gentlemenbarber.pl: wygrywa w 86,55% aukcji — najgroźniejszy
- booksy.com: wygrywa w 69,75% aukcji
- warsztatfryzurmeskich.pl: 34,32% udziału w wyświetleniach

---

## KAMPANIA 2 — Cybulskiego (785-993-8647)

### Konfiguracja
| Pole | Wartość |
|---|---|
| Nazwa | Barbershop LAB - Cybulskiego |
| Start | 02.07.2026 |
| Budżet | 34 zł/dzień |
| Strategia | Maksymalizuj kliknięcia (zmienić na Maks. konwersje ok. 16.07!) |
| Targetowanie | Wrocław + 10 km |
| Języki | polski, ukraiński, rosyjski |
| Sieć | Tylko wyszukiwarka |
| Status reklamy | W trakcie weryfikacji |

### Słowa kluczowe (Grupa 1: Barbershop_Barber) — dopasowanie do wyrażenia
```
"barbershop wrocław"
"barber wrocław"
[barber lab wrocław]
"salon barber wrocław"
"barber cennik wrocław"
[barbershop cybulskiego]
"barber śródmieście wrocław"
"барбершоп Вроцлав"
"барбер Вроцлав"
```

### Reklama RSA — nagłówki (bazowane na wygrywającej Reklamie B z Poniatowskiego)
1. Barbershop LAB Wrocław | 2. Barbershop Wrocław | 3. Barber Wrocław
4. 5,0 z 1232 Opinii Google | 5. Strzyżenie od 60 zł | 6. Studenci i Uczniowie -10 zł
7. Umów się w 2 Minuty | 8. Dostępny Dziś — Umów Online | 9. Fade i Strzyżenie Wrocław
10. Broda i Strzyżenie w 1 Miejscu | 11. Rezerwacja 24/7 przez Booksy | 12. Hot Shave Wrocław
13. Najlepszy Barber Wrocław | 14. Barber Blisko Centrum | 15. Barbershop Cybulskiego Wrocław

URL końcowy: https://barbershoplab.pl/

### Komponenty
- Sitelinki: Umów wizytę online (Booksy Cybulskiego), Lokalizacja i kontakt, Galeria realizacji
- **Brak sitelinku do cennika** — ceny Cybulskiego niezweryfikowane vs Poniatowskiego
- Telefon: +48 548 470 249
- Objaśnienia: Hot shave we Wrocławiu, Strzyżenie i broda, Doświadczeni barberzy, Studenci -10 zł

### Konwersje
- phone_click_2: ✅ aktywne (kategoria: Połączenie telefoniczne, źródło GA4)
- booksy_click_2: ✅ aktywne (kategoria: Zakupy, źródło GA4, utworzone 30.06.2026, pierwsza konwersja 03.07.2026)

### Wykluczające słowa kluczowe
Pełna lista z Poniatowskiego (75 fraz) + dodatkowo:
- damski, kobieta, kobiety, dziecko, dzieci, szkolenie, kurs barberski, coworking, wynajem fotela
- poniatowskiego, barber lab poniatowskiego, praca, zatrudnienie, tatuaż, fryzjer damski, salon damski
- gentleman, gentlemen barber, rudy was, barber bus

### Do zrobienia dla Cybulskiego
- [x] Dodać booksy_click_2 jako konwersję — ✅ aktywne od 30.06.2026
- [ ] Zmienić strategię na Maks. konwersje ok. 16.07 (po ~2 tygodniach zbierania danych)
- [ ] Zmiana nazwy płatnika na E.B. Barber Edik Babayan — czekamy na weryfikację CEIDG
- [ ] Nie dodawać drugiej reklamy RSA dopóki Cybulskiego nie zbierze własnych opinii Google

---

## Lokal 2 — Cybulskiego 3

- **Adres:** ul. Wojciecha Cybulskiego 3, Wrocław
- **Telefon:** +48 548 470 249
- **Email:** labbarbershop88@gmail.com
- **Booksy:** https://booksy.com/pl-pl/348343_lab-barber-shop-2_barber-shop_13750_wroclaw
- **Opinie:** 5,0 (nowy lokal, mała liczba opinii)
- **Promocja:** -50% na pierwsze strzyżenie — tylko rejestracja telefoniczna lub osobista (NIE przez Booksy)

### Cennik Lokal 2 — NIEZWERYFIKOWANY
Cennik na stronie (/#services) może różnić się od rzeczywistego cennika Cybulskiego i Booksy. Nie używać sitelinku do cennika w kampanii Cybulskiego dopóki nie potwierdzone.

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

---

## Zasady pracy z Google Ads
- **Zawsze podawaj ID subkonta** przed każdą instrukcją nawigacji, np. "Na subkoncie Cybulskiego (785-993-8647) → ...". Użytkownik zarządza wieloma subkontami i bez wskazania może wykonać akcję w złym miejscu.

---

## Faktura za czerwiec 2026 (Poniatowskiego)
- Numer: 5622848219 | Kwota: 978,98 zł | Okres: 1–30 czerwca 2026
- Barbershop LAB Search: 531 kliknięć, 940,54 zł
- Barbershop LAB 2 Search: 21 kliknięć, 38,44 zł
- NIP (8942804688) nie pojawił się na fakturze mimo że był w systemie od 12.05 — rozważyć korektę faktury
