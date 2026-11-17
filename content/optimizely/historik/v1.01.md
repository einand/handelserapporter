---
title: "Optimizely – cyberangrepp via webbskript"
date: 2026-11-17
description: "Verifierat händelseförlopp om manipulerade Optimizely-skript, berörda webbplatser och risker för besökare."
---

# Cyberangrepp via Optimizely Web Experimentation

**Rapportversion 1.01 · 17 november 2026**

Denna rapport sammanställer offentligt verifierbara uppgifter om angreppet mot Optimizelys webbskript. Ett infekterat skript på en organisations webbplats är **inte** liktydigt med att organisationens interna system har hackats eller att alla dess besökare har fått uppgifter stulna. Där uppgifter saknas anges **okänt**.

## Sammanfattning

Den 16 november 2026 identifierade säkerhetsforskaren **Scott Helme (Report URI)** skadlig JavaScript-kod som levererades genom Optimizely Web Experimentation till webbplatser kopplade till **178 organisationer**. Forskarna undersökte **1 611** Optimizely-skript och fann **188 infekterade**. Det är antal skript och organisationer, inte antal drabbade besökare. [Report URI, 16 november](https://report-uri.ghost.io/worlds-largest-brands-infected-with-malware-via-optimizely/).

**Optimizely har bekräftat** att en obehörig aktör utnyttjade en sårbarhet i Experimentation-tjänsten för att lägga till skadlig kod i kundprojekt. Enligt företagets besked har sårbarheten åtgärdats, den injicerade koden avlägsnats, berörda konton säkrats och kunder informerats. Optimizely uppgav till BleepingComputer att den utnyttjade sårbarheten låg i **registreringsflödet för Experimentation-konton**. Bolaget uppger att den sårbara vägen blockerats, att aktiva sessioner avslutats, åtkomsttoken återkallats och åtkomst för berörda konton återställts. Den exakta kodbristen är fortfarande **okänd**. [Nyheter24, 17 november](https://nyheter24.se/nyheter/teknik/1531477-besokte-du-dessa-sajter-igar-dina-uppgifter-kan-ha-stulits), [Hudson Rock, 17 november](https://www.infostealers.com/article/beyond-optimizely-malicious-scripts-traced-across-four-web-services/).

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
