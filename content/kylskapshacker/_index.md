---
title: "Cyberangrepp mot kyl- och fryssystem – verifierad händelseförlopp"
date: 2026-11-04
description: "Faktagranskad rapport om cyberangrepp mot uppkopplade kyl- och frysanläggningar i europeiska livsmedelsbutiker under oktober och november 2026."
---

# Cyberangrepp mot kyl- och fryssystem i Europa

**Rapportversion 1.01 · 4 november 2026**

Rapporten gäller **kommersiella, internetanslutna kyl- och frysanläggningar** i dagligvaruhandeln, inte vanliga hushållskylskåp. Den sammanställer verifierbara offentliga uppgifter. Händelser i olika länder hålls isär när gemensam angreppsväg inte är fastställd. Uppgifter från myndigheter, företag och medier attribueras till respektive källa.

## Sammanfattning

Under **11–13 oktober 2026** drabbades hundratals livsmedelsbutiker i Frankrike av angrepp mot fjärrstyrda kylsystem. Temperaturer steg kraftigt och mat förstördes; enligt franska myndigheter och Reuters förekom även bränder. Franska åklagarmyndigheten beskrev den 12 oktober angreppet som storskaligt. Den 2 november rapporterades liknande incidenter i Sverige, bland annat hos ICA och Coop, samt i andra europeiska länder. **Det är inte offentligt fastställt att alla incidenterna genomförts av samma aktör eller via exakt samma sårbarhet.**

Den svenska Nationellt cybersäkerhetscenter (NCSC) bekräftade den 2 november att centret följer incidenterna, har kontakt med drabbade verksamheter och utbyter information med nordiska och europeiska motsvarigheter. NCSC framhåller riskerna med uppkopplad operativ teknik (OT).

**Okänt:** gärningspersonernas identitet och motiv; slutligt antal drabbade butiker; fullständig ekonomisk skada; verifierad gemensam teknisk intrångsväg för samtliga länder; huruvida personuppgifter stulits. Inget offentligt belägg i de granskade källorna visar att incidenten utgör ett ransomware-angrepp.

## Drabbade verksamheter och geografisk omfattning

| Land eller verksamhet | Belagda uppgifter | Källstatus |
|---|---|---|
| **Frankrike** | Angrepp i oktober mot kyl- och fryssystem i hundratals butiker. Les Mousquetaires uppgav omkring **150 Intermarché-butiker**; senare medierapportering anger över **700 butiker totalt**, med varierande avgränsningar. | Företagsuppgift via Reuters respektive senare medieuppgifter; talen är inte direkt jämförbara. |
| **Sverige – ICA** | ICA bekräftade den 2 november en incident i ett begränsat antal butiker. Namngivna drabbade butiker i rapporteringen inkluderar ICA Kvantum Sjöbo, ICA Nära Böda, ICA Nära Sundbergs i Mörlunda och ICA i Moheda. | Centralt ICA-besked återgivet av SVT samt lokala butiksuppgifter. |
| **Sverige – Coop** | Coopbutiker drabbades av liknande kyl- och frysproblem; medieuppgifter anger **sex Coopbutiker i Gävleborg/mellersta Sverige**. | Medieuppgifter och återgivna kedjebesked; slutlig omfattning okänd. |
| **Belgien** | Reuters beskriver incidenter och tomma kylhyllor hos bland annat Delhaize. | Medierapportering. |
| **Finland, Estland, Luxemburg och Irland** | Le Monde rapporterar om angrepp mot internetanslutna kylregleringssystem natten 1–2 november. | Medierapportering; inte självständigt bekräftat för varje enskild butik. |
| **Övriga europeiska länder** | Spanien, Portugal, Polen och Tyskland har nämnts i internationell teknisk rapportering. | Medieuppgifter; enskilda drabbade verksamheter och kopplingar kräver ytterligare belägg. |

Att en kedja eller ett land nämns här innebär **inte** att varje butik drabbats. Andra samtidiga IT-störningar får inte automatiskt kopplas till samma angrepp.

## Konsekvenser

I svenska butiker rapporterades förstörda kyl- och frysvaror och tillfälligt begränsat sortiment eller stängning. SVT rapporterar att en ICA-handlare i Böda upptäckte vatten på golvet och att en frys nått **55 °C**. ICA Kvantum Sjöbo uppgav enligt Aftonbladet att temperaturer ställts på **50 °C**. Det handlar om **rapporterade avlästa eller inställda värden**, inte en fastställd temperatur för samtliga drabbade enheter.

Reuters rapporterade i oktober om omfattande livsmedelssvinn och bränder i franska butiker. Exakt totalskada är inte verifierad.

## Teknisk analys och säkerhetsgrad

**Bekräftat på övergripande nivå:** Det är styr- och övervakningssystem för kommersiell kylteknik som påverkats. Sådan teknik kan fjärrstyras och kan ha avfrostningsfunktioner som tillför värme. NCSC behandlar händelserna som risker i **operativ teknik (OT)**.

**Produktuppgifter i rapporteringen:** Reuters och Le Monde pekar ut **Danfoss**-system i Frankrike och i den senare europeiska vågen. Ars Technica redovisar också offentlig sårbarhetsforskning om äldre styrenheter från **Danfoss, Dixell och Copeland**. Reuters uppger att Danfoss beskrivit berörda franska enheter som utrustning med föråldrad firmware. Dessa uppgifter är **inte** bevis för att varje drabbad svensk butik använde en viss produkt eller CVE.

**Frankrike – uppgifter om angreppssätt:** Danfoss kylstyrsystem och äldre firmware har pekats ut i rapporteringen. Teknisk rapportering beskriver fjärråtkomliga gränssnitt och otillräckligt skyddade äldre installationer. Uppgifter om förlängda avfrostningscykler har också förekommit. Det förklarar hur en angripare skulle kunna påverka kylprocessen, men offentliggjort underlag räcker inte för att fastställa en komplett angreppskedja eller en specifik CVE för varje butik.

**Sverige – intrångsväg okänd:** För ICA- och Coopincidenterna saknas en offentligt verifierad teknisk rekonstruktion. Det är inte fastställt att samma sårbarhet eller utrustning användes som i Frankrike.

**Kartläggning av exponering:** Censys har kartlagt internetexponerade Danfoss StoreView-gränssnitt. En exponerad enhet är inte automatiskt komprometterad. Antalet exponerade installationer får inte likställas med antalet hackade butiker.

**Riskfaktorer, inte bevisad komplett angreppskedja:** internetexponerade styrgränssnitt, föråldrad firmware, bristande åtkomstbegränsningar och svaga eller förutsägbara autentiseringslösningar. Utan forensiska uppgifter går det inte att avgöra vilka faktorer som användes i varje enskilt fall.

**Ej belagt:** specifik CVE som förklarar samtliga angrepp, malwareprov, offentlig teknisk IOC-lista, identitet på angriparen, utpressningskrav, exfiltration eller bekräftat samband med andra cyberincidenter.

## Myndigheter och utredning

- **Sverige:** NCSC publicerade den **2 november kl. 17.39** ett officiellt meddelande och uppgav att man följer händelserna, har kontakt med drabbade och samverkar internationellt. Myndigheten rekommenderar inventering av internetanslutna OT-enheter, nödvändighetsprövning av uppkoppling, uppdateringar, flera skyddslager och incidentrutiner.
- **Frankrike:** Enligt Reuters beskrev åklagarmyndigheten i Paris den 12 oktober ett storskaligt angrepp. Den franska cybersäkerhetsmyndigheten **ANSSI** skulle undersöka incidenten enligt uppgifter från premiärministerns kansli.
- **Storbritannien:** NCSC-chefen Richard Horne kommenterade den **3 november** kylangreppen som exempel på bredare risker för uppkopplad infrastruktur. Uttalandet är en riskbedömning, inte ett påstående om att brittiska butiker säkert drabbats.

## Tidslinje

| Datum | Verifierbar händelse |
|---|---|
| **11–12 oktober 2026** | Omfattande kyl- och frysincidenter i franska livsmedelsbutiker. |
| **12–13 oktober** | Franska myndigheter och Reuters redovisar angreppets omfattning och konsekvenser. |
| **13–17 oktober** | Ytterligare teknisk och internationell rapportering, inklusive Danfoss och Dixell/Copeland samt uppskattningar om över 700 butiker. |
| **Natten 1–2 november** | Ny våg av rapporterade angrepp mot kylregleringssystem i flera europeiska länder. |
| **2 november** | ICA- och Coopbutiker i Sverige rapporterar manipulerade kyl- och fryssystem; NCSC publicerar officiellt meddelande. |
| **3 november** | Reuters återger den brittiska cybersäkerhetschefens bedömning av incidenternas betydelse. |

## Bedömning

Angreppen visar en **bekräftad fysisk och ekonomisk konsekvens av komprometterade eller manipulerade styrsystem**: förstörd mat och störd butiksdrift. Den mest relevanta säkerhetsfrågan är hur fjärråtkomst till kylsystem är skyddad. Enskilda leverantörers kända sårbarheter får inte likställas med forensiskt bevisad angreppsväg. Det finns för närvarande inte tillräckligt underlag för att knyta alla europeiska händelser till samma angripare.

## Källor

### Myndigheter och primära uttalanden
- [Nationellt cybersäkerhetscenter, 2 november: Cyberangrepp mot uppkopplade frys- och kylsystem](https://www.ncsc.se/sv/aktuellt/cyberangrepp-mot-kylsystem/)
- [Reuters, 12–13 oktober: Frankrikes åklagarmyndighet, Les Mousquetaires och Danfoss](https://www.reuters.com/business/retail-consumer/french-supermarket-chain-intermarche-hit-by-cyberattack-150-stories-targeted-2026-10-12/)

### Oberoende nyhets- och teknikkällor
- [SVT, 2–3 november: ICA i Böda, Moheda och Mörlunda](https://www.svt.se/nyheter/lokalt/smaland/hackerattack-mot-kylar-och-frysar-ica-i-boda-och-morlunda-drabbade)
- [SVT, 2–3 november: experter och Nationellt cybersäkerhetscenter](https://www.svt.se/nyheter/inrikes/experterna-riskerna-ar-valkanda-andra-branscher-bor-dra-lardom)
- [Aftonbladet, 2 november: ICA- och Coopbutiker](https://www.aftonbladet.se/nyheter/a/31ygzM/ica-s-frysar-hackade)
- [Le Monde, 2 november: incidenter i flera europeiska länder](https://www.lemonde.fr/international/article/2026/11/02/des-cyberattaques-contre-des-refrigerateurs-et-des-congelateurs-visent-plusieurs-supermarches-en-europe_6805296_3210.html)
- [Le Monde, 17 oktober: omfattning och risker i Frankrike](https://www.lemonde.fr/economie/article/2026/10/17/la-cyberattaque-des-frigos-de-supermarche-un-signal-d-alarme-pour-tous-les-industriels-et-un-rappel-a-la-loi-europeenne-pour-la-france_6795846_3234.html)
- [Ars Technica, 14 oktober: offentlig teknisk sårbarhetsforskning](https://arstechnica.com/security/2026/10/fridge-hack-costing-millions-and-sparking-fires-stemmed-from-poor-security/)
- [Censys: kartläggning av exponerade kylstyrsystem](https://censys.com/blog/european-refrigerator-controller-redux-a-new-wave-of-refrigeration-attacks/)
- [Truesec: Refrigeration and freezer systems breached at large scale](https://www.truesec.com/hub/blog/refrigeration-and-freezer-systems-breached-at-large-scale)
- [Industrial Cyber: Remote access and legacy refrigeration systems](https://industrialcyber.co/control-device-security/french-supermarket-cyberattack-exposes-risks-of-unsecured-remote-access-and-legacy-refrigeration-systems/)
- [Reuters, 3 november: brittiska NCSC-chefens kommentarer](https://www.reuters.com/legal/government/uk-must-expect-ai-powered-attack-critical-infrastructure-within-two-years-report-2026-11-03/)

Tidigare kompletta rapportversioner finns i [versionsarkivet](./historik/).
