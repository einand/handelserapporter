---
title: "Cyberangrepp mot kyl- och fryssystem – verifierad händelseförlopp"
date: 2026-11-06
description: "Faktagranskad rapport om cyberangrepp mot uppkopplade kyl- och frysanläggningar i europeiska livsmedelsbutiker under oktober och november 2026."
---

# Cyberangrepp mot kyl- och fryssystem i Europa

**Rapportversion 1.14 · 6 november 2026**

Rapporten gäller **kommersiella, internetanslutna kyl- och frysanläggningar** i dagligvaruhandeln, inte vanliga hushållskylskåp. Den sammanställer verifierbara offentliga uppgifter. Händelser i olika länder hålls isär när gemensam angreppsväg inte är fastställd. Uppgifter från myndigheter, företag och medier attribueras till respektive källa.

## Sammanfattning

Under **11–13 oktober 2026** drabbades hundratals livsmedelsbutiker i Frankrike av angrepp mot fjärrstyrda kylsystem. Temperaturer steg kraftigt och mat förstördes; enligt franska myndigheter och Reuters förekom även bränder. Franska åklagarmyndigheten beskrev den 12 oktober angreppet som storskaligt. Den 2 november rapporterades liknande incidenter i Sverige, bland annat hos ICA och Coop, samt i andra europeiska länder. Enligt [Reuters den 3 november](https://www.reuters.com/world/europe/european-supermarkets-rush-patch-vulnerabilities-after-region-wide-fridge-hack-2026-11-03/) påverkades **23 ICA-butiker**, medan **sju Coopbutiker** hade återupptagit driften efter att kylsystemen kopplats bort från internet. **Det är inte offentligt fastställt att alla incidenterna genomförts av samma aktör eller via exakt samma sårbarhet.**

I Nederländerna uppgav Danfoss att minst **17 mindre verksamheter** fått kylstyrningen manipulerad; enligt leverantören var systemen inte säkert nätverksanslutna och använde fortfarande standardlösenord. I Italien bekräftade Coop Radenza angrepp mot minst **fyra butiker** på Sicilien, och i Portugal bekräftade Grupo Mosqueteiros påverkan i **sju Intermarché-butiker**, möjligen via en extern kylserviceleverantör. En IKEA-butik i belgiska Mons bekräftade också påverkan. Dessa företagsuppgifter fastställer inte en gemensam angripare eller intrångsväg. [NOS via DutchNews](https://www.dutchnews.nl/2026/11/albert-heijn-sister-chain-hit-as-fridge-hacks-spread-in-europe/), [ANSA](https://www.ansa.it/amp/sito/notizie/mondo/europa/2026/11/02/attacchi-hacker-a-sistemi-di-refrigerazione-dei-supermercati-della-sicilia_5e6f0b27-05c9-468a-9004-087167137119.html), [RTP](https://www.rtp.pt/noticias/pais/sete-lojas-do-intermarche-atingidas-por-ciberataque-em-portugal_n1776375), [Reuters](https://www.reuters.com/business/retail-consumer/temperature-soars-swedish-grocery-store-freezers-one-store-blames-hackers-2026-11-02/).

I Schweiz bekräftade **Lüthi's Fleischwaren** den 5 november ett angrepp mot kylstyrningen i Köniz. Enligt SRF steg temperaturen i frysrummet till 50–70 °C, varor förstördes och butiken stängde tillfälligt. **Volg** bekräftade ändrade kylinställningar i tre butiker. Teknisk intrångsväg och koppling till andra europeiska angrepp är okända. [SRF, 5 november](https://www.srf.ch/news/schweiz/kuehlanlage-manipuliert-berner-metzgerei-opfer-von-hackerangriff-auch-volg-betroffen).

Den svenska Nationellt cybersäkerhetscenter (NCSC) bekräftade den 2 november att centret följer incidenterna, har kontakt med drabbade verksamheter och utbyter information med nordiska och europeiska motsvarigheter. NCSC framhåller riskerna med uppkopplad operativ teknik (OT).

**Okänt:** gärningspersonernas identitet och motiv; slutligt antal drabbade butiker; fullständig ekonomisk skada; verifierad gemensam teknisk intrångsväg för samtliga länder; huruvida personuppgifter stulits. Inget offentligt belägg i de granskade källorna visar att incidenten utgör ett ransomware-angrepp.

[Le Grand Continent den 4 november](https://legrandcontinent.eu/fr/2026/11/04/au-moins-15-pays-europeens-ont-ete-touches-par-les-cyberattaques-visant-les-refrigerateurs-de-supermarches/) sammanställer rapporter om angrepp i **minst 15 europeiska länder** sedan 11 oktober. Detta är en mediesammanställning, inte en myndighetsverifierad totalsiffra; enskilda fall i bland annat Norge och Grekland saknar enligt artikeln myndighetsbekräftelse.

**EU:s gemensamma myndighetsbesked den 4 november:** [ENISA och Europeiska kommissionen](https://www.enisa.europa.eu/news/joint-statement-on-cyber-incidents-in-refrigeration-systems-across-the-eu) bekräftar att incidenter drabbat kommersiella kylsystem i flera EU-medlemsstater sedan 11 oktober. Efter den nya vågen 1–2 november samordnar ENISA, kommissionens DG CNECT, Europols cyberbrottscentrum EC3, EU:s CSIRT-nätverk och EU-CyCLONe informationsutbyte, lägesbild och rekommendationer. Uttalandet identifierar **inte** någon gemensam angripare, utnyttjad CVE eller forensiskt fastställd intrångsväg.

**USA:s myndighetsvarning den 5 november:** Enligt [Reuters]( https://www.reuters.com/business/retail-consumer/us-warns-ongoing-cyber-threat-industrial-refrigeration-systems-2026-11-05/ ) utfärdade FBI, CISA och andra amerikanska myndigheter en gemensam varning om ett **pågående cyberhot** mot internetåtkomliga elektroniska temperaturregulatorer och kommersiella kylstyrsystem inom livsmedelshandel och kylförvaring. Myndigheterna varnar för att angripare kan ändra temperaturinställningar och därmed orsaka förstörda varor, brandrisk och förkortad livslängd för utrustning. CISA:s Chris Butera uppmanar alla verksamheter som är beroende av kyl- och övervakningssystem att betrakta sig som möjliga mål. **Varningen innebär inte att ett intrång i USA eller en viss utnyttjad CVE har bekräftats.**

## Drabbade verksamheter och geografisk omfattning

| Land eller verksamhet | Belagda uppgifter | Källstatus |
|---|---|---|
| **Frankrike** | Angrepp i oktober mot kyl- och fryssystem i hundratals butiker. Les Mousquetaires uppgav omkring **150 Intermarché-butiker**; senare medierapportering anger över **700 butiker totalt**, med varierande avgränsningar. | Företagsuppgift via Reuters respektive senare medieuppgifter; talen är inte direkt jämförbara. |
| **Sverige – ICA** | ICA uppgav den 3 november att **23 butiker** påverkats, varav **åtta** behövt kassera kyl- och frysvaror. Enligt ICA var utrustningen i samtliga drabbade butiker ansluten utanför kedjans centralt förvaltade nätverk. En ICA-företrädare uppgav enligt AFP att de drabbade butikernas externa kylstyrsystem levererats av **Danfoss**; exakt modell och firmware är inte offentliggjorda. Namngivna drabbade butiker i rapporteringen inkluderar ICA Kvantum Sjöbo, ICA Nära Böda, ICA Nära Sundbergs i Mörlunda och ICA i Moheda. | ICA:s pressansvarige till [Supply Chain Digital](https://supplychaindigital.com/news/european-supermarket-freezers-targeted-by-major-cyber-attack), samt [Reuters](https://www.reuters.com/world/europe/european-supermarkets-rush-patch-vulnerabilities-after-region-wide-fridge-hack-2026-11-03/). |
| **Sverige – Coop** | Coopbutiker drabbades av liknande kyl- och frysproblem; [Reuters uppger den 3 november](https://www.reuters.com/world/europe/european-supermarkets-rush-patch-vulnerabilities-after-region-wide-fridge-hack-2026-11-03/) att **sju Coopbutiker** drabbats, återupptagit driften och kopplat bort kylsystemen från internet. Coop uppgav att övergång från 4G till modernare modem och 5G pågick. | Coops uppgifter återgivna av Reuters; slutlig omfattning kan förändras. |
| **Schweiz – Lüthi's Fleischwaren, Köniz** | Företaget bekräftade manipulerad elektronisk kyl- och frysstyrning, förstörda varor och tillfällig stängning. Nätverksanslutningen bröts. Återöppning planeras den 20 november. | Företagsbesked återgivet av [SRF](https://www.srf.ch/news/schweiz/kuehlanlage-manipuliert-berner-metzgerei-opfer-von-hackerangriff-auch-volg-betroffen); intrångsväg okänd. |
| **Schweiz – Volg** | Tre butiker rapporterade ändrade inställningar i kyldiskar. Volg uppgav att skyddsåtgärder vidtagits. | [Företagsuttalande till SRF](https://www.srf.ch/news/schweiz/kuehlanlage-manipuliert-berner-metzgerei-opfer-von-hackerangriff-auch-volg-betroffen); orsak och följdskador okända. |
| **Norge – Havaristen och Ullensvang Fruktlager** | Vid Havaristen den 3 november steg temperaturen i ett fryssystem och sprinkleranläggningen utlöstes. Ägaren uppgav att utrustningsleverantören såg starka indikationer på intrång; fjärranslutning via extern 4G-enhet har beskrivits, men intrångsvägen är inte forensiskt fastställd. Samma dag steg temperaturen omkring 30 grader i ett kylrum hos Ullensvang Fruktlager. Företagsledningen misstänkte intrång; endast ett kylrum var i drift och systemet kopplades bort från internet. | [NTB/Digi om Havaristen, 3 november](https://www.digi.no/sikkerhet/mulig-fryserangrep-mot-norsk-varehus/7181327), [NTB/Digi om Ullensvang, 4 november](https://www.digi.no/sikkerhet/mulig-hackingangrep-mot-fruktlager-i-hardanger/7181422). Misstänkta angrepp, inte offentliggjord forensisk bekräftelse. |
| **Belgien** | Delhaize rapporterade påverkan i flera dussin butiker, och Carrefour uppgav **15 drabbade butiker**. | Företagsuppgifter återgivna av [AP](https://apnews.com/article/a8ea5b30d67da47957769f29101fe686) och Reuters. |
| **Nederländerna** | Danfoss uppgav till NOS att kyl- och fryssystem hos minst **17 mindre verksamheter**, bland annat slakteributiker och lokala livsmedelsbutiker, manipulerats natten 1–2 november. Enligt leverantören saknade de drabbade systemen säker nätverksanslutning och använde standardlösenord. Inga större nederländska matkedjor identifierades som drabbade i detta besked. | [Danfoss via NOS/DutchNews](https://www.dutchnews.nl/2026/11/albert-heijn-sister-chain-hit-as-fridge-hacks-spread-in-europe/); leverantörsuppgift, ingen offentlig forensisk rekonstruktion för varje anläggning. |
| **Italien – Coop Radenza** | Ledningen bekräftade angrepp mot fjärrstyrningen av frysdiskar i minst **fyra butiker**, tre i Catania och en i Palermo. Temperaturinställningar ändrades och varor förstördes. Italiensk polis undersöker möjliga samband med övriga Europa. | [ANSA, 2 november](https://www.ansa.it/amp/sito/notizie/mondo/europa/2026/11/02/attacchi-hacker-a-sistemi-di-refrigerazione-dei-supermercati-della-sicilia_5e6f0b27-05c9-468a-9004-087167137119.html); bekräftelse från verksamhetsledningen. |
| **Portugal – Intermarché** | Grupo Mosqueteiros bekräftade **sju drabbade butiker** och uppgav att angreppet föreföll rikta sig mot en extern tjänsteleverantör som hanterar kylsystem. Leveranskedjan uppgavs vara opåverkad. | [Företagsuttalande till portugisiska RTP, 2 november](https://www.rtp.pt/noticias/pais/sete-lojas-do-intermarche-atingidas-por-ciberataque-em-portugal_n1776375); den tekniska intrångspunkten är inte forensiskt belagd. |
| **Belgien – IKEA Mons och Spar** | IKEA uppgav att en butik i Mons påverkats och att kylvaror tagits bort som försiktighetsåtgärd. Colruyt uppgav påverkan hos **fem fristående Spar-butiker**. Dessa tillkommer utöver Delhaize och Carrefour. | [Reuters](https://www.reuters.com/business/retail-consumer/temperature-soars-swedish-grocery-store-freezers-one-store-blames-hackers-2026-11-02/) och [DutchNews/NOS](https://www.dutchnews.nl/2026/11/albert-heijn-sister-chain-hit-as-fridge-hacks-spread-in-europe/). |
| **Finland, Estland, Luxemburg och Irland** | Le Monde rapporterar om angrepp mot internetanslutna kylregleringssystem natten 1–2 november. | Medierapportering; inte självständigt bekräftat för varje enskild butik. |
| **Rumänien** | Rumäniens cybersäkerhetsmyndighet DNSC har enligt rumänska public service-bolaget TVR och ProTV bekräftat rapporter om onormalt höga temperaturer i kylutrustning i **sex butiker inom samma, ej namngivna kedja** natten till 2 november. Händelsen utreds som misstänkt cyberangrepp; en gemensam teknisk angreppsväg med övriga länder är inte verifierad. | [TVR, 3 november](https://tvrinfo.ro/sase-magazine-din-romania-au-fost-tinta-unui-atac-cibernetic-sistemul-de-racire-a-fost-compromis-de-hackeri/); [ProTV, 3 november](https://stirileprotv.ro/stiri/actualitate/cum-au-preluat-hackerii-controlul-frigiderelor-e-ca-intr-un-scenariu-de-film.html). Myndighetsuppgift återgiven av medier. |
| **Irland – SuperValu** | Musgrave uppgav att **13 butiker** påverkades av en cyberhändelse begränsad till en kylstyrningsmodell. Tillverkaren namngavs inte. | Företagsuppgift återgiven av [The Hacker News](https://thehackernews.com/2026/11/second-wave-of-cyberattacks-hits.html); modell och intrångsväg okända. |
| **Estland – Selver** | Kylleverantören Kitman Coldtech uppgav att en butik fick temperaturinställningen höjd till 50 °C i ett äldre **Danfoss-system**. Den uppmätta temperaturen steg endast cirka 2–3 °C, felet avhjälptes på omkring tio minuter och inga varor förstördes. | Leverantörsuppgift återgiven av [The Hacker News](https://thehackernews.com/2026/11/second-wave-of-cyberattacks-hits.html). |
| **Tyskland** | Reuters rapporterar om en drabbad Edeka-butik i Reisbach. | [Reuters, 3 november](https://www.reuters.com/world/europe/european-supermarkets-rush-patch-vulnerabilities-after-region-wide-fridge-hack-2026-11-03/). |
| **Storbritannien** | Brittiska NCSC har bekräftat begränsad påverkan hos livsmedelsleverantörer. Grossisten **Langridge Organic** uppger att sex av dess tio kylsystem manipulerades den 2 november, med ändrade avfrostningsinställningar och störda larm. Företaget kopplade bort systemen och uppgav att inga varor förstördes. | [The Times, 4 november](https://www.thetimes.com/uk/technology-uk/article/uk-fridges-vulnerable-cyber-attack-hack-europe-hzbxr5mh6); [The Guardian, 3 november](https://www.theguardian.com/technology/2026/nov/03/uk-meat-processing-firms-fridges-heat-up-cyber-attacks). Företagsuppgift återgiven av medier; gemensam angreppsväg ej fastställd. |

Att en kedja eller ett land nämns här innebär **inte** att varje butik drabbats. Andra samtidiga IT-störningar får inte automatiskt kopplas till samma angrepp.

## Konsekvenser

I svenska butiker rapporterades förstörda kyl- och frysvaror och tillfälligt begränsat sortiment eller stängning. SVT rapporterar att en ICA-handlare i Böda upptäckte vatten på golvet och att en frys nått **55 °C**. ICA Kvantum Sjöbo uppgav enligt Aftonbladet att temperaturer ställts på **50 °C**. Det handlar om **rapporterade avlästa eller inställda värden**, inte en fastställd temperatur för samtliga drabbade enheter.

I Köniz uppgav Lüthi's Fleischwarens ägare att fryst kött förstördes, prislappar smälte och temperaturen nådde 50–70 °C. Anläggningarna isolerades från nätverket och butiken stängdes tillfälligt. [SRF, 5 november](https://www.srf.ch/news/schweiz/kuehlanlage-manipuliert-berner-metzgerei-opfer-von-hackerangriff-auch-volg-betroffen).

Reuters rapporterade i oktober om omfattande livsmedelssvinn och bränder i franska butiker. Exakt totalskada är inte verifierad.

## Ansvarsanspråk och attribuering

Den **4 november** rapporterade [italienska Rai Tg1 via ANSA](https://videoembed.ansa.it/sito/videogallery/italia/2026/11/04/tg1-due-gruppi-di-hacker-filorussi-rivendicano-gli-attacchi-ai-supermercati_f0623c7e-4512-4b73-8321-74543de654d1.html) att grupperna **NoName057(16)** och **Z-Pentest** i en publicerad video påstod sig ligga bakom kylangrepp i flera europeiska länder. Grupperna påstod att de manipulerat Danfoss- och Dixell Web-system utan skadlig kod. **Detta är en dokumenterad ansvarsdeklaration, inte verifierad gärningsmannaattribuering eller teknisk forensik.** [SentinelLABS analys](https://www.sentinelone.com/labs/defrost-and-disrupt-an-assessment-of-europe-s-refrigeration-attacks/) framhåller att offentlig bevisning ännu inte knyter grupperna till de aktuella intrången. Påståendet fastställer inte att samtliga europeiska händelser har samma angripare eller angreppsväg.

## Teknisk analys och säkerhetsgrad

**Norge – exponerad fjärrstyrning:** Næringslivets Sikkerhetsråd (NSR) uppgav den 4 november att organisationen funnit flera tiotal internetexponerade kylsystem i Norge, i vissa fall med fabriksinställda lösenord, och arbetat med att identifiera och varna ägarna. Detta är belagd exponering, **inte** bevis för att just dessa autentiseringsuppgifter användes vid de misstänkta angreppen mot Havaristen eller Ullensvang. Havaristens externa 4G-anslutning är en rapporterad teknisk omständighet, inte en verifierad rekonstruktion av angriparens åtkomst. [NTB via Radio Haugaland, 4 november](https://radioh.no/nsr-flere-dataangrep-mot-norske-kjoleanlegg-avverget/); [NORDSEC, 5 november](https://www.nordsec-cluster.no/en/news/have-you-secured-your-freezer).


**Nederländerna – leverantörens tekniska uppgift:** Danfoss uppgav att de drabbade nederländska installationerna använde standardlösenord och saknade säker nätverksanslutning trots en tidigare uppmaning att begränsa internetåtkomsten. Detta är en konkret leverantörsuppgift om de berörda installationernas skydd, men inte en publicerad loggbaserad rekonstruktion av inloggningen. [DutchNews/NOS](https://www.dutchnews.nl/2026/11/albert-heijn-sister-chain-hit-as-fridge-hacks-spread-in-europe/).

**Portugal – extern leverantör:** Grupo Mosqueteiros uppgav att en extern kylserviceleverantör föreföll vara målet. Leverantörens identitet, exakta åtkomstväg och eventuell kompromettering av dess egna system är okända. [RTP](https://www.rtp.pt/noticias/pais/sete-lojas-do-intermarche-atingidas-por-ciberataque-em-portugal_n1776375).

**Schweiz – teknisk avgränsning:** Företagen bekräftar ändrade kylinställningar och, hos Lüthi's Fleischwaren, manipulerad elektronisk styrning. Modell, firmware, CVE, autentiseringsmetod och forensiska loggar är okända. Gemensam angripare eller angreppsväg är inte verifierad. [SRF](https://www.srf.ch/news/schweiz/kuehlanlage-manipuliert-berner-metzgerei-opfer-von-hackerangriff-auch-volg-betroffen).

**Bekräftat på övergripande nivå:** Det är styr- och övervakningssystem för kommersiell kylteknik som påverkats. Sådan teknik kan fjärrstyras och kan ha avfrostningsfunktioner som tillför värme. NCSC behandlar händelserna som risker i **operativ teknik (OT)**.

**Produktuppgifter i rapporteringen:** Reuters och Le Monde pekar ut **Danfoss**-system i Frankrike och i den senare europeiska vågen. Ars Technica redovisar också offentlig sårbarhetsforskning om äldre styrenheter från **Danfoss, Dixell och Copeland**. Reuters uppger att Danfoss beskrivit berörda franska enheter som utrustning med föråldrad firmware. Dessa uppgifter är **inte** bevis för att varje drabbad svensk butik använde en viss produkt eller CVE.

**Franska ANSSI:s myndighetsbedömning för oktoberangreppen:** Vid en utfrågning i Frankrikes senat den **21 oktober** sade ANSSI:s generaldirektör **Vincent Strubel** att myndighetens dåvarande analys **inte** pekade på de tidigare offentliggjorda produktsårbarheter som flera externa forskare hade föreslagit. Han angav i stället **direkt internetexponering av kylutrustning, oskyddade administrationsgränssnitt och svaga lösenord** som grundläggande säkerhetsbrister bakom angreppet. Detta är en **officiell, preliminär teknisk bedömning för Frankrike**, dokumenterad i [senatens protokoll](https://www.senat.fr/compte-rendu-commissions/20261019/etran.html), inte en publicerad rekonstruktion av varje inloggning eller bevis för samma metod i Sverige och andra länder. Ingen specifik utnyttjad CVE eller firmwareversion fastställdes i uttalandet.

**Frankrike – produkt- och manipulationsuppgifter:** Danfoss-system och äldre firmware har pekats ut i medierapportering. Uppgifter om förlängda avfrostningscykler förekommer också. Dessa produktuppgifter fastställer inte vilken styrenhet eller firmware som faktiskt komprometterades i varje butik. ANSSI:s bedömning ovan ska ges företräde framför obekräftade teorier om utnyttjade produktsårbarheter.

**Sverige – avgränsad nätverks- och leverantörsinformation:** ICA har bekräftat att de 23 drabbade butikernas kylutrustning var ansluten utanför kedjans centralt förvaltade nätverk. En ICA-företrädare uppgav enligt AFP att den externa kylstyrningen levererades av **Danfoss**, återgivet i [The Hacker News den 3 november](https://thehackernews.com/2026/11/second-wave-of-cyberattacks-hits.html). Detta identifierar leverantör och nätverksavgränsning, **inte** en verifierad produktmodell, firmware, inloggningsmetod, CVE eller komplett angreppskedja.

**Sverige – intrångsväg okänd:** För ICA- och Coopincidenterna saknas en offentligt verifierad teknisk rekonstruktion. Det är inte fastställt att samma sårbarhet eller utrustning användes som i Frankrike.

**Kartläggning av exponering:** [Censys redovisade den 5 november](https://censys.com/blog/european-refrigeration-controller-exposure-sitrep/) mätningar av internetexponerade kylstyrsystem i två produktfamiljer som omfattas av franska CERT-FR:s varning. Mellan **9 oktober och 5 november** minskade antalet distinkta exponerade värdar globalt från **6 695 till 3 124 (−53 %)**. Danfoss StoreView minskade från **3 004 till 708 (−76 %)** och Copeland/Dixell XWEB från **3 708 till 2 420 (−35 %)**. Censys observerade en första kraftig minskning i Frankrike efter oktoberangreppen och en bredare minskning i flera länder efter den 2 november. **Orsaken till att värdar försvann ur mätningarna är inte fastställd**; det kan inte utläsas om de stängdes av, skyddades eller av andra skäl inte längre var synliga. En exponerad enhet är inte automatiskt komprometterad. Antalet exponerade installationer får inte likställas med antalet hackade butiker.

**Riskfaktorer, inte bevisad komplett angreppskedja:** internetexponerade styrgränssnitt, föråldrad firmware, bristande åtkomstbegränsningar och svaga eller förutsägbara autentiseringslösningar. Utan forensiska uppgifter går det inte att avgöra vilka faktorer som användes i varje enskilt fall.

**Ej belagt:** specifik CVE som förklarar samtliga angrepp, malwareprov, offentlig teknisk IOC-lista, identitet på angriparen, utpressningskrav, exfiltration eller bekräftat samband med andra cyberincidenter.

## Myndigheter och utredning

Den 5 november utfärdade amerikanska FBI, CISA och andra myndigheter en gemensam varning om pågående hot mot internetanslutna kylstyrsystem. [Reuters återger myndighetsbeskedet](https://www.reuters.com/business/retail-consumer/us-warns-ongoing-cyber-threat-industrial-refrigeration-systems-2026-11-05/). Det innehåller ingen offentlig identifiering av en gemensam angripare, någon specifik utnyttjad CVE eller en bekräftad amerikansk drabbad verksamhet.


- **EU:** I ett [gemensamt officiellt uttalande den 4 november](https://www.enisa.europa.eu/news/joint-statement-on-cyber-incidents-in-refrigeration-systems-across-the-eu) bekräftar ENISA och EU-kommissionen flera medlemsstaters kylsystemincidenter. ENISA, DG CNECT, Europol EC3, EU:s CSIRT-nätverk och EU-CyCLONe koordinerar informationsdelning och respons. De uppmanar verksamheter att omedelbart minska exponeringen hos berörda system. Uttalandet beskriver också rapporteringsskyldigheter enligt Cyber Resilience Act och NIS2 där de är tillämpliga; det bekräftar inte en specifik exploaterad sårbarhet.

- **Sverige:** NCSC publicerade den **2 november kl. 17.39** ett officiellt meddelande och uppgav att man följer händelserna, har kontakt med drabbade och samverkar internationellt. Myndigheten rekommenderar inventering av internetanslutna OT-enheter, nödvändighetsprövning av uppkoppling, uppdateringar, flera skyddslager och incidentrutiner.
- **Frankrike:** Enligt Reuters beskrev åklagarmyndigheten i Paris den 12 oktober ett storskaligt angrepp. **ANSSI:s generaldirektör redovisade den 21 oktober myndighetens preliminära bedömning** av oskyddad internetexponering och svaga lösenord, samt avfärdade då att tidigare omtalade produktsårbarheter hade utnyttjats. [Senatens officiella protokoll](https://www.senat.fr/compte-rendu-commissions/20261019/etran.html).
- **Storbritannien:** NCSC-chefen Richard Horne uppgav den **3 november** att försök mot mindre brittiska köttförädlingsföretag haft begränsad påverkan och att myndigheten har förhöjd beredskap. Det är inte belagt att brittiska livsmedelskedjor drabbats på samma sätt.

## Närliggande händelse utanför dagligvaruhandeln

Frankrikes blodtjänst **EFS** uppgav den 4 november att kylutrustning vid **tre anläggningar** påverkats den 2 november genom ett angrepp mot en leverantör. Enligt [AP den 4 november](https://apnews.com/article/12b80bcf93b8404264209e519c204919) uppgav kylleverantören **Coolworld** att en sårbarhet i en komponent från tredje part var inblandad och att åtgärder vidtogs. Komponentens identitet och någon specifik CVE är inte offentligt fastställda. Övervakningslarm upptäckte förändrade temperatur- och avfrostningsinställningar, och blodprodukter säkrades eller flyttades i tid. EFS uppgav att inget material förstördes och att blodinsamling och distribution fortsatte. **Det finns ingen offentlig bekräftelse på att detta är samma angrepp eller samma tekniska intrångsväg som i matbutikerna.**

## Tidslinje

| Datum | Verifierbar händelse |
|---|---|
| **11–12 oktober 2026** | Omfattande kyl- och frysincidenter i franska livsmedelsbutiker. |
| **12–13 oktober** | Franska myndigheter och Reuters redovisar angreppets omfattning och konsekvenser. |
| **13–17 oktober** | Ytterligare teknisk och internationell rapportering, inklusive Danfoss och Dixell/Copeland samt uppskattningar om över 700 butiker. |
| **21 oktober** | ANSSI:s generaldirektör redovisar i franska senaten myndighetens preliminära tekniska bedömning av grundläggande åtkomstbrister. |
| **Natten 1–2 november** | Ny våg av rapporterade angrepp mot kylregleringssystem i flera europeiska länder. |
| **2 november** | ICA- och Coopbutiker i Sverige rapporterar manipulerade kyl- och fryssystem; NCSC publicerar officiellt meddelande. |
| **3 november** | Havaristen och Ullensvang Fruktlager i Norge rapporterar temperaturmanipulation och misstänkta intrång i kyl- och fryssystem. |
| **2 november** | Danfoss rapporterar minst 17 drabbade mindre verksamheter i Nederländerna; Coop Radenza bekräftar fyra butiker i Italien, Grupo Mosqueteiros sju Intermarché-butiker i Portugal och IKEA en butik i Belgien. |
| **5 november** | Lüthi's Fleischwaren i Köniz bekräftar ett angrepp mot kylstyrningen; Volg uppger ändrade kylinställningar i tre schweiziska butiker. |
| **5 november** | Amerikanska myndigheter varnar för hot mot kommersiella kylstyrsystem enligt Reuters; ingen amerikansk kompromettering fastställs. |
| **4 november** | NSR redovisar upptäckta internetexponerade norska kylsystem, några med fabriksinställda lösenord. |
| **4 november** | Brittiska medier identifierar Langridge Organic som drabbad grossist: sex av tio kylsystem manipulerades enligt företaget, men inga varor förstördes. |
| **4 november** | ENISA och EU-kommissionen publicerar ett gemensamt uttalande om samordnad europeisk respons efter angreppsvågen 1–2 november. |
| **4 november** | Rai Tg1 och ANSA rapporterar en ansvarsdeklaration från NoName057(16) och Z-Pentest; oberoende teknisk bekräftelse saknas. |
| **3 november** | Reuters återger den brittiska cybersäkerhetschefens bedömning av incidenternas betydelse. |

## Bedömning

Angreppen visar en **bekräftad fysisk och ekonomisk konsekvens av komprometterade eller manipulerade styrsystem**: förstörd mat och störd butiksdrift. Den mest relevanta säkerhetsfrågan är hur fjärråtkomst till kylsystem är skyddad. Enskilda leverantörers kända sårbarheter får inte likställas med forensiskt bevisad angreppsväg. Det finns för närvarande inte tillräckligt underlag för att knyta alla europeiska händelser till samma angripare.

## Källor

- [DutchNews/NOS, 2 november: Danfoss om 17 nederländska verksamheter och standardlösenord](https://www.dutchnews.nl/2026/11/albert-heijn-sister-chain-hit-as-fridge-hacks-spread-in-europe/)
- [ANSA, 2 november: Coop Radenza bekräftar fyra drabbade butiker](https://www.ansa.it/amp/sito/notizie/mondo/europa/2026/11/02/attacchi-hacker-a-sistemi-di-refrigerazione-dei-supermercati-della-sicilia_5e6f0b27-05c9-468a-9004-087167137119.html)
- [RTP, 2 november: Grupo Mosqueteiros bekräftar sju Intermarché-butiker i Portugal](https://www.rtp.pt/noticias/pais/sete-lojas-do-intermarche-atingidas-por-ciberataque-em-portugal_n1776375)
- [Reuters, 2 november: IKEA och andra europeiska verksamheter](https://www.reuters.com/business/retail-consumer/temperature-soars-swedish-grocery-store-freezers-one-store-blames-hackers-2026-11-02/)

- [SRF, 5 november: Lüthi's Fleischwaren och Volg](https://www.srf.ch/news/schweiz/kuehlanlage-manipuliert-berner-metzgerei-opfer-von-hackerangriff-auch-volg-betroffen)
- [Keystone-SDA/Swissinfo, 5 november: företagsbesked från Köniz](https://www.swissinfo.ch/ger/erster-bekannter-cyberangriff-auf-k%C3%BChlanlage-in-der-schweiz/92333227)

- [The Times, 4 november: Langridge Organic beskriver sex manipulerade kylsystem](https://www.thetimes.com/uk/technology-uk/article/uk-fridges-vulnerable-cyber-attack-hack-europe-hzbxr5mh6)
- [The Guardian, 3 november: brittiska livsmedelsleverantörer och NCSC](https://www.theguardian.com/technology/2026/nov/03/uk-meat-processing-firms-fridges-heat-up-cyber-attacks)

- [ANSA/Rai Tg1, 4 november: publicerat ansvarsanspråk från NoName057(16) och Z-Pentest](https://videoembed.ansa.it/sito/videogallery/italia/2026/11/04/tg1-due-gruppi-di-hacker-filorussi-rivendicano-gli-attacchi-ai-supermercati_f0623c7e-4512-4b73-8321-74543de654d1.html)
- [SentinelLABS, 3 november: teknisk bedömning och otillräckligt underlag för attribuering](https://www.sentinelone.com/labs/defrost-and-disrupt-an-assessment-of-europe-s-refrigeration-attacks/)

### Myndigheter och primära uttalanden
- [Norska NSM, 4 november: säkerhetsläget för dagligvarubranschens kylsystem](https://nsm.no/aktuelt/norske-dagligvarebutikker-er-godt-sikret-mot-digitale-angrep-pa-kjoleanlegg)

- [ENISA och EU-kommissionen, 4 november: gemensamt uttalande om europeisk samordning](https://www.enisa.europa.eu/news/joint-statement-on-cyber-incidents-in-refrigeration-systems-across-the-eu)
- [Franska senaten, 21 oktober: ANSSI-chefens uttalande om internetexponering, svaga lösenord och tidigare CVE-teorier](https://www.senat.fr/compte-rendu-commissions/20261019/etran.html)
- [Nationellt cybersäkerhetscenter, 2 november: Cyberangrepp mot uppkopplade frys- och kylsystem](https://www.ncsc.se/sv/aktuellt/cyberangrepp-mot-kylsystem/)
- [Reuters, 12–13 oktober: Frankrikes åklagarmyndighet, Les Mousquetaires och Danfoss](https://www.reuters.com/business/retail-consumer/french-supermarket-chain-intermarche-hit-by-cyberattack-150-stories-targeted-2026-10-12/)

### Oberoende nyhets- och teknikkällor
- [NTB/Digi, 3 november: Havaristens misstänkta angrepp](https://www.digi.no/sikkerhet/mulig-fryserangrep-mot-norsk-varehus/7181327)
- [NTB/Digi, 4 november: Ullensvang Fruktlagers misstänkta angrepp](https://www.digi.no/sikkerhet/mulig-hackingangrep-mot-fruktlager-i-hardanger/7181422)
- [NTB, 4 november: NSR om exponerade kylsystem och fabriksinställda lösenord](https://radioh.no/nsr-flere-dataangrep-mot-norske-kjoleanlegg-avverget/)
- [NORDSEC, 5 november: Havaristens fjärrstyrning via extern 4G](https://www.nordsec-cluster.no/en/news/have-you-secured-your-freezer)


- [The Hacker News, 3 november: ICA:s Danfoss-uppgift, SuperValu och Selver](https://thehackernews.com/2026/11/second-wave-of-cyberattacks-hits.html)
- [Reuters, 5 november 2026: USA:s gemensamma myndighetsvarning om pågående hot mot kylstyrsystem](https://www.reuters.com/business/retail-consumer/us-warns-ongoing-cyber-threat-industrial-refrigeration-systems-2026-11-05/)
- [Reuters, 3 november: 23 ICA-butiker, sju Coopbutiker, Edeka, Danfoss och europeiska åtgärder](https://www.reuters.com/world/europe/european-supermarkets-rush-patch-vulnerabilities-after-region-wide-fridge-hack-2026-11-03/)
- [Supply Chain Digital, 3 november: direkt uttalande från ICA:s pressansvarige](https://supplychaindigital.com/news/european-supermarket-freezers-targeted-by-major-cyber-attack)
- [Business Insider, 4 november: EFS:s uppgifter om tre franska blodanläggningar](https://www.businessinsider.com/blood-plasma-fridge-hack-france-efs-cyberattack-2026-11)

- [SVT, 2–3 november: ICA i Böda, Moheda och Mörlunda](https://www.svt.se/nyheter/lokalt/smaland/hackerattack-mot-kylar-och-frysar-ica-i-boda-och-morlunda-drabbade)
- [SVT, 2–3 november: experter och Nationellt cybersäkerhetscenter](https://www.svt.se/nyheter/inrikes/experterna-riskerna-ar-valkanda-andra-branscher-bor-dra-lardom)
- [Aftonbladet, 2 november: ICA- och Coopbutiker](https://www.aftonbladet.se/nyheter/a/31ygzM/ica-s-frysar-hackade)
- [Le Monde, 2 november: incidenter i flera europeiska länder](https://www.lemonde.fr/international/article/2026/11/02/des-cyberattaques-contre-des-refrigerateurs-et-des-congelateurs-visent-plusieurs-supermarches-en-europe_6805296_3210.html)
- [Le Monde, 17 oktober: omfattning och risker i Frankrike](https://www.lemonde.fr/economie/article/2026/10/17/la-cyberattaque-des-frigos-de-supermarche-un-signal-d-alarme-pour-tous-les-industriels-et-un-rappel-a-la-loi-europeenne-pour-la-france_6795846_3234.html)
- [Ars Technica, 14 oktober: offentlig teknisk sårbarhetsforskning](https://arstechnica.com/security/2026/10/fridge-hack-costing-millions-and-sparking-fires-stemmed-from-poor-security/)
- [Censys: kartläggning av exponerade kylstyrsystem](https://censys.com/blog/european-refrigerator-controller-redux-a-new-wave-of-refrigeration-attacks/)
- [Censys, 5 november: mätning av internetexponerade kylstyrsystem 9 oktober–5 november](https://censys.com/blog/european-refrigeration-controller-exposure-sitrep/)
- [Truesec: Refrigeration and freezer systems breached at large scale](https://www.truesec.com/hub/blog/refrigeration-and-freezer-systems-breached-at-large-scale)
- [Industrial Cyber: Remote access and legacy refrigeration systems](https://industrialcyber.co/control-device-security/french-supermarket-cyberattack-exposes-risks-of-unsecured-remote-access-and-legacy-refrigeration-systems/)
- [Reuters, 3 november: brittiska NCSC-chefens kommentarer](https://www.reuters.com/legal/government/uk-must-expect-ai-powered-attack-critical-infrastructure-within-two-years-report-2026-11-03/)

Tidigare kompletta rapportversioner finns i [versionsarkivet](./historik/).

<!-- PDF-ARKIV-START -->

## Arkiverade källor (PDF)

- [PDF-kopia av källa](/handelserapporter/kallor/1507f57ace1d8c352445.pdf) – https://www.dutchnews.nl/2026/11/albert-heijn-sister-chain-hit-as-fridge-hacks-spread-in-europe/ (hämtad 2026-11-06)
- [PDF-kopia av källa](/handelserapporter/kallor/ec9a7068aa330888317e.pdf) – https://www.ansa.it/amp/sito/notizie/mondo/europa/2026/11/02/attacchi-hacker-a-sistemi-di-refrigerazione-dei-supermercati-della-sicilia_5e6f0b27-05c9-468a-9004-087167137119.html (hämtad 2026-11-06)
- [PDF-kopia av källa](/handelserapporter/kallor/d1cf9ecb8d38122247ac.pdf) – https://www.rtp.pt/noticias/pais/sete-lojas-do-intermarche-atingidas-por-ciberataque-em-portugal_n1776375 (hämtad 2026-11-06)
- [PDF-kopia av källa](/handelserapporter/kallor/8292f51bdf1d0ced1277.pdf) – https://www.srf.ch/news/schweiz/kuehlanlage-manipuliert-berner-metzgerei-opfer-von-hackerangriff-auch-volg-betroffen (hämtad 2026-11-06)
- [PDF-kopia av källa](/handelserapporter/kallor/aee8bf8af321d81dd778.pdf) – https://legrandcontinent.eu/fr/2026/11/04/au-moins-15-pays-europeens-ont-ete-touches-par-les-cyberattaques-visant-les-refrigerateurs-de-supermarches/ (hämtad 2026-11-04)
- [PDF-kopia av källa](/handelserapporter/kallor/68c361a3cb7545d99426.pdf) – https://www.enisa.europa.eu/news/joint-statement-on-cyber-incidents-in-refrigeration-systems-across-the-eu (hämtad 2026-11-05)
- [PDF-kopia av källa](/handelserapporter/kallor/4a5a8ed52f2623daea9a.pdf) – https://www.digi.no/sikkerhet/mulig-fryserangrep-mot-norsk-varehus/7181327 (hämtad 2026-11-06)
- [PDF-kopia av källa](/handelserapporter/kallor/76dfe1d21b765267202a.pdf) – https://www.digi.no/sikkerhet/mulig-hackingangrep-mot-fruktlager-i-hardanger/7181422 (hämtad 2026-11-06)
- [PDF-kopia av källa](/handelserapporter/kallor/35720377fb6c71b19705.pdf) – https://stirileprotv.ro/stiri/actualitate/cum-au-preluat-hackerii-controlul-frigiderelor-e-ca-intr-un-scenariu-de-film.html (hämtad 2026-11-05)
- [PDF-kopia av källa](/handelserapporter/kallor/a8dc2b16ab89a42c7863.pdf) – https://thehackernews.com/2026/11/second-wave-of-cyberattacks-hits.html (hämtad 2026-11-06)
- [PDF-kopia av källa](/handelserapporter/kallor/f66876dac5ed50b92e2d.pdf) – https://www.thetimes.com/uk/technology-uk/article/uk-fridges-vulnerable-cyber-attack-hack-europe-hzbxr5mh6 (hämtad 2026-11-04)
- [PDF-kopia av källa](/handelserapporter/kallor/e21111a5b1d5b415e35f.pdf) – https://www.theguardian.com/technology/2026/nov/03/uk-meat-processing-firms-fridges-heat-up-cyber-attacks (hämtad 2026-11-04)
- [PDF-kopia av källa](/handelserapporter/kallor/5d4e53502e47d594ded9.pdf) – https://videoembed.ansa.it/sito/videogallery/italia/2026/11/04/tg1-due-gruppi-di-hacker-filorussi-rivendicano-gli-attacchi-ai-supermercati_f0623c7e-4512-4b73-8321-74543de654d1.html (hämtad 2026-11-04)
- [PDF-kopia av källa](/handelserapporter/kallor/6c90aa9dceb32a2eac41.pdf) – https://radioh.no/nsr-flere-dataangrep-mot-norske-kjoleanlegg-avverget/ (hämtad 2026-11-06)
- [PDF-kopia av källa](/handelserapporter/kallor/ba1a81ffac3631fe2ae3.pdf) – https://www.nordsec-cluster.no/en/news/have-you-secured-your-freezer (hämtad 2026-11-06)
- [PDF-kopia av källa](/handelserapporter/kallor/8eea1e1e79887b53714f.pdf) – https://www.senat.fr/compte-rendu-commissions/20261019/etran.html (hämtad 2026-11-05)
- [PDF-kopia av källa](/handelserapporter/kallor/cb2efacf4fe078bdbe1e.pdf) – https://censys.com/blog/european-refrigeration-controller-exposure-sitrep/ (hämtad 2026-11-06)
- [PDF-kopia av källa](/handelserapporter/kallor/76c56fce46628c2c18fd.pdf) – https://www.swissinfo.ch/ger/erster-bekannter-cyberangriff-auf-k%C3%BChlanlage-in-der-schweiz/92333227 (hämtad 2026-11-06)
- [PDF-kopia av källa](/handelserapporter/kallor/a9181958de307cdcccc9.pdf) – https://nsm.no/aktuelt/norske-dagligvarebutikker-er-godt-sikret-mot-digitale-angrep-pa-kjoleanlegg (hämtad 2026-11-06)
- [PDF-kopia av källa](/handelserapporter/kallor/3994287835e164c511f0.pdf) – https://www.ncsc.se/sv/aktuellt/cyberangrepp-mot-kylsystem/ (hämtad 2026-11-04)
- [PDF-kopia av källa](/handelserapporter/kallor/a2736ba323f18c53b6fc.pdf) – https://www.businessinsider.com/blood-plasma-fridge-hack-france-efs-cyberattack-2026-11 (hämtad 2026-11-04)
- [PDF-kopia av källa](/handelserapporter/kallor/60a17f96e9ef076ed60d.pdf) – https://www.svt.se/nyheter/lokalt/smaland/hackerattack-mot-kylar-och-frysar-ica-i-boda-och-morlunda-drabbade (hämtad 2026-11-04)
- [PDF-kopia av källa](/handelserapporter/kallor/4e45f97dab79c23db856.pdf) – https://www.svt.se/nyheter/inrikes/experterna-riskerna-ar-valkanda-andra-branscher-bor-dra-lardom (hämtad 2026-11-04)
- [PDF-kopia av källa](/handelserapporter/kallor/4c7af62aa2c0134fe34f.pdf) – https://www.aftonbladet.se/nyheter/a/31ygzM/ica-s-frysar-hackade (hämtad 2026-11-04)
- [PDF-kopia av källa](/handelserapporter/kallor/1ffa9c51ef9e9ab19330.pdf) – https://www.lemonde.fr/international/article/2026/11/02/des-cyberattaques-contre-des-refrigerateurs-et-des-congelateurs-visent-plusieurs-supermarches-en-europe_6805296_3210.html (hämtad 2026-11-04)
- [PDF-kopia av källa](/handelserapporter/kallor/45cb8ce0c9ff4431c644.pdf) – https://www.lemonde.fr/economie/article/2026/10/17/la-cyberattaque-des-frigos-de-supermarche-un-signal-d-alarme-pour-tous-les-industriels-et-un-rappel-a-la-loi-europeenne-pour-la-france_6795846_3234.html (hämtad 2026-11-04)
- [PDF-kopia av källa](/handelserapporter/kallor/6be473450b1b98c3f536.pdf) – https://arstechnica.com/security/2026/10/fridge-hack-costing-millions-and-sparking-fires-stemmed-from-poor-security/ (hämtad 2026-11-04)
- [PDF-kopia av källa](/handelserapporter/kallor/a3db8e1f2b4d2576ecea.pdf) – https://censys.com/blog/european-refrigerator-controller-redux-a-new-wave-of-refrigeration-attacks/ (hämtad 2026-11-04)
- [PDF-kopia av källa](/handelserapporter/kallor/01ee4286658dd3080fe5.pdf) – https://www.truesec.com/hub/blog/refrigeration-and-freezer-systems-breached-at-large-scale (hämtad 2026-11-04)

<!-- PDF-ARKIV-SLUT -->
