---
title: "Universeum – dataintrång hos bokningsleverantör"
date: 2026-11-20
description: "Verifierat händelseförlopp om exponering av Universeums gästers personuppgifter via Visit Group."
---

# Dataintrång som berör Universeums gäster

**Rapportversion 1.01 · 20 november 2026**

Rapporten beskriver det offentligt belagda händelseförloppet. Uppgifter från verksamheter och medier tillskrivs respektive källa. Det som inte är belagt anges som **okänt**.

## Sammanfattning

Den 20 november 2026 rapporterade [Göteborgs-Posten](https://www.gp.se/nyheter/goteborg/universeum-utsatt-for-hackerattack.509fbf66-7d36-5f97-a089-3e0eded60c6a) att bokningsuppgifter för omkring **280 000 gäster** hos Universeum i Göteborg kan ha blivit tillgängliga för en obehörig aktör. Antalet är ett rapporterat antal gäster, inte en självständigt verifierad sammanräkning av unika personer eller en uppgift om bekräftade bedrägerioffer.

Enligt [SVT Nyheter den 20 november](https://www.svt.se/nyheter/lokalt/vast/dataintrang-hos-universeum-varnar-for-bedrageriforsok) skedde intrånget hos Universeums teknikleverantör **Visit Group International AB**. Universeum informerade berörda gäster via e-post under fredagen.

Uppgifter som enligt Universeums besked kan ha exponerats är **namn, e-postadresser, telefonnummer och födelsedatum**. Även barns uppgifter kan omfattas om årskortet tillhör ett barn, enligt [Aftonbladets återgivning](https://www.aftonbladet.se/nyheter/a/Rr77qd/aftonbladet-direkt?pinnedEntry=1506571). **Personnummer, kort- och betalningsuppgifter uppges inte omfattas.** Detta är verksamhetens och leverantörens besked, inte en publicerad oberoende forensisk granskning.

Det finns **inga offentligt bekräftade fall av missbruk** av Universeums exponerade uppgifter i de kontrollerade källorna. Att uppgifter har varit åtkomliga är inte samma sak som att samtliga har använts i bedrägerier.

## Nya verifierade uppgifter den 20 november, kväll

Enligt [TT:s rapportering återgiven av Sweden Herald](https://swedenherald.com/article/universeum-booking-system-hacked-exposing-data-of-280000-guests) beskriver Universeums försäljningschef Eric Edblad **två dataintrång** hos bokningsleverantören: ett i slutet av oktober och ett som Universeum fick kännedom om tidigare under veckan. Han skiljer också på uppgifterna: det första ska ha berört mer bokningsinformation, exempelvis ordernummer, medan det senare ska ha berört kontaktuppgifter såsom namn, telefonnummer och e-postadress, **inte vad gästerna bokat**. Detta är en viktig avgränsning: uppgifterna pekar på två angreppstillfällen, men fastställer inte att två olika angripare eller två olika tekniska sårbarheter förekom.

[Omni den 20 november kl. 19.38](https://omni.se/universeum-hackat-280000-gasters-data-lackt/a/r8Aym3) återger att leverantören har vidtagit säkerhetsåtgärder och att **personuppgiftsincidenten har anmälts till Integritetsskyddsmyndigheten (IMY)**. Det är en uppgift från Universeum återgiven i medier, inte ett självständigt publicerat IMY-beslut. Inga tecken på bedrägerimissbruk har rapporterats.

**Förtydligande om kopplingen till tidigare Visit Group-intrång:** Det första av de två rapporterade angreppen ligger tidsmässigt i linje med Visits tidigare offentliggjorda incident i oktober. Att det rör sig om exakt samma åtkomsthändelse är dock ännu inte tekniskt verifierat. Det andra angreppets exakta datum, intrångsväg och koppling till det första är **okända**.

## Händelseförlopp

### 23–27 oktober 2026 – tidigare intrång hos samma leverantör

[Skansen](https://www.skansen.se/en/data-breach/) uppger att bokningsleverantören Visit utsattes för ett dataintrång och att Skansen informerades **27 oktober**. Det berörde främst bokningar **23–26 oktober**. Skansen anger uttryckligen att de egna systemen inte komprometterats, att leverantören åtgärdat säkerhetsbristen och att någon koppling till nyligen uppmärksammade PHP-sårbarheter inte finns enligt den information museet fått.

Även Liseberg och andra Visit-kunder har rapporterat påverkan. Se [den separata Visit Group-rapporten](/handelserapporter/visit/) för det bredare händelseförloppet.

### 28 oktober–4 november – fler bokningar identifieras

[Svenska Turistföreningen, STF](https://www.swedishtouristassociation.com/about-stf/news/information-about-a-security-incident-at-our-booking-provider/), uppdaterat 4 november, uppger att Visit först identifierade **762** berörda bokningar och senare ytterligare **630**, sammanlagt **1 392 bokningar**. STF anger att vissa bokningar gjordes redan i augusti 2025 och januari 2026. Detta visar att det inte räcker att enbart undersöka bokningar från 23–26 oktober för att beskriva hela den kända exponeringen.

STF uppger att leverantören stoppade intrånget **26 oktober**, stängde de utnyttjade åtkomstvägarna och lät oberoende säkerhetsexperter granska utredningen. Det är leverantörsuppgifter återgivna av STF.

### Veckan före 20 november – Universeum får kännedom om ytterligare angrepp

Enligt Eric Edblad, återgiven av TT, fick Universeum tidigare under veckan kännedom om ett andra angrepp hos leverantören. Den exakta tidpunkten och tekniska intrångsvägen är **okända**.

### 20 november – Universeum informerar gäster

[SVT](https://www.svt.se/nyheter/lokalt/vast/dataintrang-hos-universeum-varnar-for-bedrageriforsok) rapporterar att Universeum skickade ett informationsmejl till gäster på fredagseftermiddagen och pekade ut Visit Group International AB som drabbad leverantör. [Göteborgs-Posten](https://www.gp.se/nyheter/goteborg/universeum-utsatt-for-hackerattack.509fbf66-7d36-5f97-a089-3e0eded60c6a) rapporterar omkring **280 000** berörda gäster.

Att Universeum och tidigare berörda verksamheter använder samma leverantör är belagt. **Det är däremot inte offentligt tekniskt fastställt** om Universeums exponering härrör från exakt samma angreppstillfälle, samma databas eller en senare separat åtkomst. Detta ska inte antas.

## Uppgifter och faktisk påverkan

| Fråga | Vad som är belagt |
|---|---|
| Berörd verksamhet | Universeum, Göteborg |
| Drabbad leverantör | Visit Group International AB, enligt SVT |
| Omfattning | Omkring 280 000 gäster enligt GP; metod för beräkningen okänd |
| Möjligt exponerade uppgifter | Namn, e-post, telefonnummer och födelsedatum |
| Barns personuppgifter | Kan omfattas för årskort registrerade på barn, enligt Aftonbladets återgivning |
| Personnummer | Uppges inte omfattas |
| Betalkort och betalningsuppgifter | Uppges inte omfattas |
| Bekräftat missbruk eller bedrägeri | Inga offentligt verifierade fall identifierade |
| Intrång i Universeums egna interna system | Inte belagt; den utpekade intrångspunkten är leverantören |
| Exakt teknisk intrångsväg | Okänd för Universeums exponerade uppgifter |
| Angriparens identitet, motiv och eventuell utpressning | Okänt |
| Tidpunkt för åtkomst till Universeums uppgifter | Okänd |
| Anmälan till IMY | Uppges ha gjorts enligt Universeums besked återgivet av Omni 20 november; inget IMY-beslut granskat |
| Polisanmälan | Okänt |

## Risker och råd till gäster

Kontaktuppgifter tillsammans med uppgifter om besök eller årskort kan användas för trovärdiga falska mejl, sms och telefonsamtal. Var särskilt uppmärksam på påstådda återbetalningar, kompletterande biljettbetalningar, kontoverifieringar eller uppmaningar att legitimera sig med BankID.

Öppna Universeums webbplats själv i stället för att följa oväntade länkar. Lämna inte ut lösenord, kortuppgifter eller BankID-koder till den som kontaktar dig. Om du redan lämnat betalningsuppgifter eller godkänt en obehörig BankID-åtgärd, kontakta banken omedelbart.

Detta är förebyggande råd. De innebär **inte** att sådana bedrägerier har konstaterats i denna händelse.

## Källor och verifieringsnivå

1. [Göteborgs-Posten, 20 november – Universeum utsatt för hackerattack](https://www.gp.se/nyheter/goteborg/universeum-utsatt-for-hackerattack.509fbf66-7d36-5f97-a089-3e0eded60c6a) – medieuppgift om 280 000 gäster och kundmeddelande.
2. [SVT Nyheter Väst, 20 november – Dataintrång hos Universeum](https://www.svt.se/nyheter/lokalt/vast/dataintrang-hos-universeum-varnar-for-bedrageriforsok) – identifierar leverantören och personuppgiftstyperna.
3. [Aftonbladet, 20 november – Hackerattack mot Universeum](https://www.aftonbladet.se/nyheter/a/Rr77qd/aftonbladet-direkt?pinnedEntry=1506571) – återger uppgiften om barn med årskort.
4. [Skansen – Information about a data breach](https://www.skansen.se/en/data-breach/) – primärkälla om Visits tidigare intrång och avgränsning.
5. [STF – Information about a security incident at our booking provider](https://www.swedishtouristassociation.com/about-stf/news/information-about-a-security-incident-at-our-booking-provider/) – primärkälla om tidslinje, åtgärder och berörda bokningar.

6. [TT/Sweden Herald, 20 november – två angrepp och olika uppgiftstyper](https://swedenherald.com/article/universeum-booking-system-hacked-exposing-data-of-280000-guests).
7. [Omni, 20 november kl. 19.38 – anmälan till IMY och två angrepp](https://omni.se/universeum-hackat-280000-gasters-data-lackt/a/r8Aym3).

**Senast faktagranskad: 20 november 2026, kväll.** Nästa version skapas endast när nya väsentliga uppgifter kan verifieras.
