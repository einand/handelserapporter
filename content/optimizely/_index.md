---
title: "Optimizely – cyberangrepp via webbskript"
date: 2026-11-17
description: "Verifierat händelseförlopp om manipulerade Optimizely-skript, berörda webbplatser och risker för besökare."
---

# Cyberangrepp via Optimizely Web Experimentation

**Rapportversion 1.03 · 17 november 2026**

Denna rapport sammanställer offentligt verifierbara uppgifter om angreppet mot Optimizelys webbskript. Ett infekterat skript på en organisations webbplats är **inte** liktydigt med att organisationens interna system har hackats eller att alla dess besökare har fått uppgifter stulna. Där uppgifter saknas anges **okänt**.

## Sammanfattning

Den 16 november 2026 identifierade säkerhetsforskaren **Scott Helme (Report URI)** skadlig JavaScript-kod som levererades genom Optimizely Web Experimentation till webbplatser kopplade till **178 organisationer**. Forskarna undersökte **1 611** Optimizely-skript och fann **188 infekterade**. Det är antal skript och organisationer, inte antal drabbade besökare. [Report URI, 16 november](https://report-uri.ghost.io/worlds-largest-brands-infected-with-malware-via-optimizely/).

**Optimizely har bekräftat** att en obehörig aktör utnyttjade en sårbarhet i Experimentation-tjänsten för att lägga till skadlig kod i kundprojekt. Enligt företagets besked har sårbarheten åtgärdats, den injicerade koden avlägsnats, berörda konton säkrats och kunder informerats. Optimizely uppgav till BleepingComputer att den utnyttjade sårbarheten låg i **registreringsflödet för Experimentation-konton**. Bolaget uppger att den sårbara vägen blockerats, att aktiva sessioner avslutats, åtkomsttoken återkallats och åtkomst för berörda konton återställts. Den exakta kodbristen är fortfarande **okänd**. [Nyheter24, 17 november](https://nyheter24.se/nyheter/teknik/1531477-besokte-du-dessa-sajter-igar-dina-uppgifter-kan-ha-stulits), [Hudson Rock, 17 november](https://www.infostealers.com/article/beyond-optimizely-malicious-scripts-traced-across-four-web-services/).


## Kartläggning av 178 rapporterade poster

Tabellen återger den sekundära [Minuto60-sammanställningen](https://www.minuto60.com/vida-moderna/las-178-organizaciones-afectadas-ciberataque-hoy-optimizely-javascript-hacker/19066) och ska **inte** tolkas som 178 unika verifierade domäner eller intrång. Regionala varumärken och vissa dubbletter förekommer. Exakta domäner saknas för de flesta posterna i denna sammanställning; dessa markeras därför som ej verifierade. En enskild domän som nämns i den tekniska primärkällan är `client.home-design.ikea.com`, men tabellen anger inte domän för andra poster utan separat källverifiering.

| Nr | Organisation eller webbplatsgrupp | Verifierad exakt domän |
|---:|---|---|
| 1 | Paychex | Ej verifierad |
| 2 | HSBC USA | Ej verifierad |
| 3 | Equifax | Ej verifierad |
| 4 | SmartAsset | Ej verifierad |
| 5 | HSBC Hongkong | Ej verifierad |
| 6 | ABN AMRO | Ej verifierad |
| 7 | TaxAct | Ej verifierad |
| 8 | HSBC Mexiko | Ej verifierad |
| 9 | HSBC Singapore | Ej verifierad |
| 10 | NetCredit | Ej verifierad |
| 11 | Associated Bank | Ej verifierad |
| 12 | S-Pankki | Ej verifierad |
| 13 | Equifax Kanada | Ej verifierad |
| 14 | Equifax Storbritannien | Ej verifierad |
| 15 | The Work Number (Equifax) | Ej verifierad |
| 16 | Funding Circle | Ej verifierad |
| 17 | HSBC Australien | Ej verifierad |
| 18 | CashNetUSA | Ej verifierad |
| 19 | OnDeck | Ej verifierad |
| 20 | ICS Cards | Ej verifierad |
| 21 | HSBC Förenade Arabemiraten | Ej verifierad |
| 22 | HSBC Malaysia | Ej verifierad |
| 23 | Rest Super | Ej verifierad |
| 24 | HSBC Taiwan | Ej verifierad |
| 25 | HSBC Vietnam | Ej verifierad |
| 26 | HSBC Egypten | Ej verifierad |
| 27 | HSBC Filippinerna | Ej verifierad |
| 28 | SmartAdvisor Match (SmartAsset) | Ej verifierad |
| 29 | Compare Club | Ej verifierad |
| 30 | ABN AMRO Lease | Ej verifierad |
| 31 | Energy Scout | Ej verifierad |
| 32 | Hang Seng Investment | Ej verifierad |
| 33 | Zoom | Ej verifierad |
| 34 | Bitly | Ej verifierad |
| 35 | Salesforce | Ej verifierad |
| 36 | GitLab | Ej verifierad |
| 37 | Optimizely | Ej verifierad |
| 38 | Mixpanel | Ej verifierad |
| 39 | Typeform | Ej verifierad |
| 40 | InMotion Hosting | Ej verifierad |
| 41 | Wasabi | Ej verifierad |
| 42 | Perforce / Zend / Puppet | Ej verifierad |
| 43 | Tableau | Ej verifierad |
| 44 | Hootsuite | Ej verifierad |
| 45 | Smartsheet | Ej verifierad |
| 46 | MuleSoft | Ej verifierad |
| 47 | Thales / Imperva | Ej verifierad |
| 48 | Tricentis | Ej verifierad |
| 49 | Web Hosting Hub | Ej verifierad |
| 50 | QR Code Generator | Ej verifierad |
| 51 | ServiceChannel | Ej verifierad |
| 52 | Brandfolder | Ej verifierad |
| 53 | Intelex | Ej verifierad |
| 54 | Enverus | Ej verifierad |
| 55 | Accruent | Ej verifierad |
| 56 | IKEA | Ej verifierad |
| 57 | ASOS | Ej verifierad |
| 58 | Mattel | Ej verifierad |
| 59 | American Eagle | Ej verifierad |
| 60 | Scheels | Ej verifierad |
| 61 | Ariat | Ej verifierad |
| 62 | American Girl | Ej verifierad |
| 63 | StackSocial | Ej verifierad |
| 64 | Crocs Indien | Ej verifierad |
| 65 | Levi's Japan | Ej verifierad |
| 66 | Todd Snyder | Ej verifierad |
| 67 | Levi's Indonesien | Ej verifierad |
| 68 | Just Russel | Ej verifierad |
| 69 | Loloi Rugs | Ej verifierad |
| 70 | Levi's Australien | Ej verifierad |
| 71 | Levi's Malaysia | Ej verifierad |
| 72 | Levi's Filippinerna | Ej verifierad |
| 73 | Levi's Singapore | Ej verifierad |
| 74 | Levi's Sydkorea | Ej verifierad |
| 75 | Levi's Nya Zeeland | Ej verifierad |
| 76 | Peacock | Ej verifierad |
| 77 | D&D Beyond | Ej verifierad |
| 78 | Wizards of the Coast | Ej verifierad |
| 79 | NOW TV | Ej verifierad |
| 80 | Zattoo | Ej verifierad |
| 81 | Crave | Ej verifierad |
| 82 | Starz | Ej verifierad |
| 83 | SkyShowtime | Ej verifierad |
| 84 | Bravo | Ej verifierad |
| 85 | SeaWorld | Ej verifierad |
| 86 | WOW (Sky Deutschland) | Ej verifierad |
| 87 | NOW Italien | Ej verifierad |
| 88 | CNN | Ej verifierad |
| 89 | BBC | Ej verifierad |
| 90 | Fox News | Ej verifierad |
| 91 | NPR | Ej verifierad |
| 92 | CTV News | Ej verifierad |
| 93 | Fox Sports | Ej verifierad |
| 94 | BNN Bloomberg / CP24 | Ej verifierad |
| 95 | TSN | Ej verifierad |
| 96 | Top Gear | Ej verifierad |
| 97 | BBC Earth | Ej verifierad |
| 98 | Alaska Airlines / Hawaiian Airlines | Ej verifierad |
| 99 | Transavia | Ej verifierad |
| 100 | Air France-KLM | Ej verifierad |
| 101 | KLM Nederländerna | Ej verifierad |
| 102 | Trafalgar | Ej verifierad |
| 103 | Contiki | Ej verifierad |
| 104 | Insight Vacations | Ej verifierad |
| 105 | The Travel Corporation | Ej verifierad |
| 106 | Costsaver | Ej verifierad |
| 107 | Invisalign | Ej verifierad |
| 108 | Takeda | Ej verifierad |
| 109 | Covetrus | Ej verifierad |
| 110 | iTero (Align) | Ej verifierad |
| 111 | Covetrus Pharmacy | Ej verifierad |
| 112 | myCovetrus | Ej verifierad |
| 113 | RaySafe (Fluke) | Ej verifierad |
| 114 | Takeda Oncology | Ej verifierad |
| 115 | Fluke | Ej verifierad |
| 116 | eMaint (Fluke) | Ej verifierad |
| 117 | Fluke Networks | Ej verifierad |
| 118 | Vaillant Tyskland | Ej verifierad |
| 119 | Fluke Process Instruments | Ej verifierad |
| 120 | Fluke Biomedical | Ej verifierad |
| 121 | Landauer | Ej verifierad |
| 122 | Vaillant Spanien | Ej verifierad |
| 123 | Virgin Media | Ej verifierad |
| 124 | Virgin Media O2 | Ej verifierad |
| 125 | Vodafone Australien | Ej verifierad |
| 126 | O2 | Ej verifierad |
| 127 | TPG Telecom | Ej verifierad |
| 128 | Mint Mobile | Ej verifierad |
| 129 | TalkTalk | Ej verifierad |
| 130 | Ledger | Ej verifierad |
| 131 | IG | Ej verifierad |
| 132 | OANDA / Coinpass | Ej verifierad |
| 133 | Interactive Investor | Ej verifierad |
| 134 | TMS Brokers | Ej verifierad |
| 135 | Betashares | Ej verifierad |
| 136 | Asurion / uBreakiFix | Ej verifierad |
| 137 | Mutual of Omaha | Ej verifierad |
| 138 | Admiral | Ej verifierad |
| 139 | Securian Financial | Ej verifierad |
| 140 | eRenterPlan | Ej verifierad |
| 141 | AKA (dansk arbetslöshetskassa) | Ej verifierad |
| 142 | Buildium | Ej verifierad |
| 143 | Loft Living Apartments | Ej verifierad |
| 144 | Buildium | Ej verifierad |
| 145 | HireAHelper | Ej verifierad |
| 146 | Flytte och associerade jämförelsesidor | Ej verifierad |
| 147 | MovingPlace | Ej verifierad |
| 148 | Ospecificerade restaurangbeställningssidor | Ej verifierad |
| 149 | Heineken | Ej verifierad |
| 150 | Home Chef | Ej verifierad |
| 151 | Starbucks Kanada | Ej verifierad |
| 152 | Cinnabon | Ej verifierad |
| 153 | Resideo | Ej verifierad |
| 154 | Honeywell Home | Ej verifierad |
| 155 | myQ (Chamberlain) | Ej verifierad |
| 156 | Chamberlain | Ej verifierad |
| 157 | First Alert | Ej verifierad |
| 158 | Change | Ej verifierad |
| 159 | ASPCA | Ej verifierad |
| 160 | UNICEF USA | Ej verifierad |
| 161 | DonorsChoose | Ej verifierad |
| 162 | Betsson | Ej verifierad |
| 163 | PokerStars | Ej verifierad |
| 164 | Tombola | Ej verifierad |
| 165 | Betfred | Ej verifierad |
| 166 | Freshfields | Ej verifierad |
| 167 | CohnReznick | Ej verifierad |
| 168 | Baringa | Ej verifierad |
| 169 | Cro Metrics | Ej verifierad |
| 170 | ShipStation / ShipEngine | Ej verifierad |
| 171 | Stamps.com | Ej verifierad |
| 172 | ShipEngine | Ej verifierad |
| 173 | Lucid Motors | Ej verifierad |
| 174 | O'Brien Glass | Ej verifierad |
| 175 | Chevrolet-återförsäljarnätverk (Bill Rapp med flera) | Ej verifierad |
| 176 | Walden University | Ej verifierad |
| 177 | Perlego | Ej verifierad |
| 178 | Chamberlain University | Ej verifierad |

## Omfattning och berörda webbplatser

Report URI:s fynd omfattar bland annat webbskript associerade med **BBC, CNN, Zoom, Salesforce, GitLab, HSBC, Equifax, Ledger, Air France-KLM och IKEA**. För IKEA gäller den dokumenterade domänen `client.home-design.ikea.com`, inte generellt hela IKEA:s svenska webbutik. En fullständig domänlista finns i [Report URI:s ursprungliga genomgång](https://report-uri.ghost.io/worlds-largest-brands-infected-with-malware-via-optimizely/).

**Kundernas egna besked:** Salesforce har bekräftat att bolaget undersöker otillåtna ändringar i Optimizely-skript och har inaktiverat dem i förhandsvisnings- och produktionsmiljöer som försiktighetsåtgärd. Equifax uppgav till Reuters att man slutat använda Optimizely och inte funnit belägg för intrång i egna system. HSBC uppgav att obehöriga skript inte var aktiva på dess webbplatser. IKEA undersöker eventuell påverkan. Dessa besked är inte bekräftelser på datastöld från respektive kund. [Reuters, 17 november](https://www.reuters.com/legal/government/popular-websites-subverted-bid-steal-crypto-target-iphone-users-2026-11-17/), [BleepingComputer, 16 november](https://www.bleepingcomputer.com/news/security/optimizely-supply-chain-attack-delivers-malware-to-cnn-fox-news-bbc-salesforce-sites/).

**Bekräftat:** skadlig kod återfanns i undersökta skript. **Inte generellt bekräftat:** intrång i varje namngivet företags egna system, faktisk exfiltration av kunduppgifter från varje webbplats eller infektion av samtliga besökare. Antal exponerade personer och antal stulna kortuppgifter är **okänt**.

## Teknisk analys

Webbplatserna laddade normalt JavaScript från Optimizelys betrodda leveransdomän `cdn.optimizely.com`. Angriparen lade till kod i kundprojektens **Project JavaScript**, som kunde ladda ytterligare kod från angriparkontrollerad infrastruktur. Detta gjorde att den skadliga koden kunde köras i besökarens webbläsare som en del av den ordinarie sidan. Report URI beskriver detta som en kompromettering av en tredjepartsberoende kodkedja, inte som bevis för ett separat intrång på varje kunds webbserver.

Forskarna observerade funktioner för att:
- byta ut adresser till kryptoplånböcker och omdirigera betalningar;
- läsa kortnummer, giltighetstid och säkerhetskod från vissa formulär som hanterades direkt av sidan, men inte från isolerade betalningsiframes;
- samla in åtkomliga cookies och skärmbilder;
- försöka ladda exploateringskedjorna **Coruna** och **DarkSword** mot vissa iPhone- och iPad-versioner.

Att kod för en exploateringskedja levererades är **inte** bevis för lyckad kompromettering av en viss enhet. Angriparens identitet, fullständiga åtkomstomfattning och antalet lyckade enhetsintrång är **okänt**.

**Observerade indikatorer** enligt Report URI: `1688360.cc/track.js` (kodleverans), `1688360.cc/card.php` (kortuppgiftsmottagare), `1688360.cc/hit.php` (ytterligare data), samt iOS-relaterade domäner `5vobauua3ojpklx.icu` och `eil786npto9u5bq.icu`. Dessa är historiska indikatorer, inte adresser som ska besökas.

## Observerade konsekvenser och åtgärder

Report URI redovisade cirka **7 040 USD** i mottagna kryptotransaktioner till identifierade plånböcker fram till 16 november kl. 19.25 UTC. Detta är en observerad transaktionssumma, **inte en verifierad förlustsumma för just Optimizely-angreppet**: vissa plånböcker användes redan före den 16 november. Reuters har inte kunnat fastställa hur många besökare som faktiskt drabbades eller hur många försök som lyckades. Omfattningen av eventuell kortdatastöld, cookieexfiltration och lyckad iOS-exploatering är **okänd**.

Enligt Report URI hade antalet fortfarande infekterade skript i deras urval sjunkit från **169 kl. 20.56 UTC** till **ett kl. 21.52 UTC** den 16 november. Det bevisar inte att alla risker eller följdskador upphört. Optimizely uppger att sårbarheten åtgärdats och berörda konton säkrats.

## Svensk påverkan

IKEA finns i forskarnas lista genom den specifika domänen `client.home-design.ikea.com`. Det visar inte att `ikea.com/se` eller IKEA:s svenska betalflöden infekterades. Någon verifierad totalsiffra för svenska webbplatser, svenska besökare eller svenska personuppgiftsförluster finns **inte** i de granskade källorna.

## Närliggande observationer – separat bevisläge

[Hudson Rock, 17 november](https://www.infostealers.com/article/beyond-optimizely-malicious-scripts-traced-across-four-web-services/) rapporterar om manipulerade skript även via **Kissmetrics, StorifyMe och minute-ly** samt tidigare aktivitet från 13 november. Dessa fynd bör inte räknas in i Optimizelys 178 organisationer utan separat underlag. Intrångsvägarna hos de andra leverantörerna är **okända**. Gemensam angripare är inte slutligt fastställd.

## Tidslinje (UTC)

- **13–16 november:** Forskare dokumenterar en tidigare våg av manipulerade tredjepartsskript hos andra leverantörer; kopplingen till Optimizely-angreppet är ännu inte slutligt fastställd.
- **16 november 04.21:** Tidigaste identifierade Optimizely-injektion i Report URI:s tidslinje, kopplad till BBC-skript.
- **16 november 13.43:** Kortuppgiftsskimming tillkommer i den observerade koden.
- **16 november 17.13–17.57:** Ytterligare iOS-relaterad exploateringskod observeras.
- **16 november 20.40–21.52:** Omfattande rensning observeras i forskarnas skripturval.
- **17 november:** Optimizelys åtgärder och forskarnas fortsatta analyser rapporteras offentligt.

## Råd till potentiellt berörda

Den som besökte en berörd webbplats bör uppdatera operativsystem och webbläsare. Den som skrev in kortuppgifter i ett formulär på en berörd sida bör granska kontoutdrag och kontakta banken vid misstänkta transaktioner. Kryptobetalningar bör kontrolleras mot avsedd mottagaradress. Ett besök på en listad webbplats innebär **inte automatiskt** att uppgifter stulits.

## Källor

1. [Scott Helme / Report URI, primär teknisk undersökning, 16 november 2026](https://report-uri.ghost.io/worlds-largest-brands-infected-with-malware-via-optimizely/)
2. [Hudson Rock, analys av flera skriptleverantörer, 17 november 2026](https://www.infostealers.com/article/beyond-optimizely-malicious-scripts-traced-across-four-web-services/)
3. [Optimizelys offentliga drift- och säkerhetsmeddelanden](https://status.optimizely.com/)
4. [BleepingComputer, leverantörsbekräftelse och kundreaktioner, 16 november 2026](https://www.bleepingcomputer.com/news/security/optimizely-supply-chain-attack-delivers-malware-to-cnn-fox-news-bbc-salesforce-sites/)
5. [Reuters, kunduttalanden och osäker påverkan, 17 november 2026](https://www.reuters.com/legal/government/popular-websites-subverted-bid-steal-crypto-target-iphone-users-2026-11-17/)
6. [Nyheter24, svensk nyhetsrapportering, 17 november 2026](https://nyheter24.se/nyheter/teknik/1531477-besokte-du-dessa-sajter-igar-dina-uppgifter-kan-ha-stulits)
