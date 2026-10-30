---
title: "Visit Group – verifierad incidentrapport"
date: 2026-10-30
description: "Sammanställda bekräftade uppgifter om dataintrånget hos VISIT och berörda kunder."
---

# Dataintrång hos Visit Group

**Rapportversion 1.18 · 30 oktober 2026**

Rapporten redovisar **verifierade offentliga uppgifter** om incidenten och dess påverkan. Uppgifter från kunder och leverantören återges som deras egna besked. Obekräftade tekniska hypoteser, historiska bevakningsnotiser och uppgifter utan betydelse för incidenten ingår inte. Tidigare rapportversioner finns i [arkivet](./historik/).

## Sammanfattning

[VISIT har bekräftat](https://status.visitgroup.com/issues/6ae1d4a838e2f6f97a391a3e) att en obehörig aktör fått tillgång till en begränsad mängd bokningsuppgifter i **Citybreak Online**. VISIT uppger att åtkomsten blockerats, att berörda kunder och relevanta myndigheter informerats och att externa experter utreder händelsen. Enligt leverantören omfattas inte kortuppgifter eller API-nycklar.

Sex verksamheter har publicerat egna Visit-relaterade incidentbesked: **Skansen, Liseberg, Tekniska museet, Svenska Turistföreningen (STF), Junibacken och Skånes Djurpark**. Deras uppgifter har olika grad av säkerhet beträffande faktisk dataexponering. De offentliga källorna fastställer inte att alla sex omfattas av exakt samma tekniska händelse eller samma databas.

| Verksamhet | Offentligt besked | Känd omfattning |
|---|---|---|
| [Skansen](https://www.skansen.se/dataintrang/) | Intrång hos Visit och information till berörda | Cirka **4 800 personer** enligt Skansen, återgivet av SVT/TT |
| [Liseberg](https://www.liseberg.se/om-liseberg/bedrageri-och-sakerhet) | Lisebergs webbplats varnar för möjlig läcka; en presskommunikatör bekräftar i [SVT](https://www.svt.se/nyheter/inrikes/misstankt-dataintrang-mot-nojesparker) att boknings- och kontaktuppgifter har läckt | **15 000 gäster enligt SVT/TT och Göteborgs-Posten**; antalet saknas i Lisebergs eget webbmeddelande |
| [Tekniska museet](https://www.tekniskamuseet.se/dataintrang/) | Möjlig exponering efter intrång hos Visit | Antal ej publicerat |
| [STF](https://www.svenskaturistforeningen.se/om-stf/aktuellt/information-om-sakerhetsincident-hos-var-bokningsleverantor/) | Berörda bokningar hos Visit | Cirka **759 bokningar**, inte personer |
| [Junibacken](https://www.junibacken.se/uppgifter-om-dataintrang-28-oktober-2026/) | Visit-relaterat intrång och kundinformation | Antal ej publicerat |
| [Skånes Djurpark](https://www.skanesdjurpark.se/) | Besked om intrång hos Visit Group och mejl till berörda | Antal ej publicerat |

**Antalen ska inte summeras.** Personer, gäster och bokningar är inte samma mått. Det finns heller inget offentligt belägg för att de berörda grupperna är helt åtskilda.

## Vad som är känt om incidenten

### Leverantörens besked

[VISIT:s incidentinformation från den 28 oktober](https://status.visitgroup.com/issues/6ae1d4a838e2f6f97a391a3e) avser uttryckligen **Citybreak Online**. VISIT uppger att obehörig åtkomst har stoppats och att säkerhetsutredning pågår. Uppgifterna kommer från leverantören; någon fullständig offentlig teknisk incidentrapport har inte identifierats.

**Tekniskt fortfarande okänt:** intrångsväg, angripare, exakt omfattning av utlämnade uppgifter och vilka kundmiljöer som ingick i samma tekniska åtkomst. Ingen incidentspecifik offentlig lista över IP-adresser, hashvärden eller andra indikatorer har verifierats. **Skansen uppger uttryckligen i sin [incident-FAQ](https://www.skansen.se/dataintrang/) att det, enligt den information verksamheten fått, inte finns någon koppling till de nyligen uppmärksammade PHP-sårbarheterna.** Detta är Skansens återgivning av leverantörsinformation, inte en publicerad forensisk rotorsaksanalys.

### Produkter och teknisk avgränsning

VISIT tillhandahåller bland annat **Citybreak, iTicket, BookVisit och VisBook**. En kundrelation till en av produkterna visar inte att kunden haft uppgifter i den berörda Citybreak-miljön. Att Skansen och Liseberg har dokumenterade iTicket-relationer fastställer inte gemensam databas, tenant eller teknisk rotorsak. Leverantörens produktavgränsning ska därför inte utvidgas utan ytterligare belägg.

## Påverkan hos namngivna verksamheter

### Skansen

[Skansens information](https://www.skansen.se/dataintrang/) beskriver intrång hos biljettleverantören Visit. [SVT/TT](https://www.svt.se/nyheter/inrikes/misstankt-dataintrang-mot-nojesparker) återger uppgiften att omkring **4 800 personer** berörts av biljettbokningar den **23–26 oktober 2026**. Enligt Skansen kan namn, telefonnummer, e-postadresser och biljettköp ha omfattats, men inte personnummer eller kortuppgifter. Skansen uppger att berörda informerats, att en säkerhetsutredning pågår och att leverantören meddelat att bristen åtgärdats. En polisanmälan uppgavs vara planerad; genomförandet är inte verifierat. I sin [frågor-och-svar-text](https://www.skansen.se/dataintrang/) anger Skansen dessutom att **de egna systemen inte har utsatts för intrång** och att **biljettförsäljningen fungerar normalt**.

### Liseberg

[Lisebergs offentliga säkerhetsmeddelande, senast uppdaterat 27 oktober](https://www.liseberg.se/om-liseberg/bedrageri-och-sakerhet), beskriver en **möjlig personuppgiftsläcka** hos bokningsleverantören och uppger att inga kort- eller betalningsuppgifter omfattas. I en [SVT/TT-artikel uppdaterad 29 oktober](https://www.svt.se/nyheter/inrikes/misstankt-dataintrang-mot-nojesparker) säger däremot **Sofia Wikstedt, presskommunikatör på Liseberg**, att namn, kontaktuppgifter och viss information om köp eller bokningar **har läckt**. Detta är ett uttalande från Lisebergs representant återgivet av SVT, inte en offentlig forensisk analys. **15 000 gäster** anges av [SVT/TT](https://www.svt.se/nyheter/inrikes/misstankt-dataintrang-mot-nojesparker) och [Göteborgs-Posten](https://www.gp.se/nyheter/goteborg/15-000-lisebergsgaster-drabbade-av-datalacka.eebf20c2-0085-53f5-a9ef-a85bb1000e4e); antalet står inte i Lisebergs eget webbmeddelande. Kopplingen till Visit som leverantör rapporteras av medierna, medan ett gemensamt tekniskt angreppsförlopp med andra kunder inte är fastställt.

### Tekniska museet

[Tekniska museet](https://www.tekniskamuseet.se/dataintrang/) uppger att det den **27 oktober** informerades om ett intrång hos Visit. Bokningar under **23–26 oktober**, och eventuellt tidigare bokningar, kan ha omfattats. Identifierade berörda besökare informerades den **28 oktober**. Enligt museet omfattas inte betal- och kortuppgifter.

### Svenska Turistföreningen (STF)

[STF](https://www.svenskaturistforeningen.se/om-stf/aktuellt/information-om-sakerhetsincident-hos-var-bokningsleverantor/) uppger att cirka **759 bokningar** berörts, huvudsakligen från **23–26 oktober**. Det exakta innehållet i eventuellt uthämtade uppgifter är inte fastställt. Kortbetalningar hanteras enligt STF separat från bokningssystemet.

### Junibacken

[Junibacken](https://www.junibacken.se/uppgifter-om-dataintrang-28-oktober-2026/) har bekräftat ett incidentbesked kopplat till bokningsleverantören Visit och uppger att berörda informerats. Enligt Junibacken har incidenten **anmälts till IMY och polisen**. Kunden uppger att inga kort- eller betalningsuppgifter omfattas. Antal berörda är inte publicerat.

### Skånes Djurpark

[Skånes Djurparks officiella webbplats](https://www.skanesdjurpark.se/) visar ett incidentmeddelande om att parken den **27 oktober** informerades om intrång hos biljettleverantören Visit Group och att berörda gäster kontaktats via mejl. Exakt antal berörda och teknisk produktkoppling är inte fastställda.

## Personuppgifter och praktiska risker

Offentliga kundbesked nämner främst **namn, kontaktuppgifter och bokningsinformation**. VISIT och flera kunder uppger att **kortuppgifter inte ingår**. Uppgifterna innebär ändå risk för exempelvis riktade falska meddelanden som hänvisar till en verklig bokning. Någon faktisk bedrägerikampanj kopplad till just dessa uppgifter är inte verifierad i underlaget.

## Separata driftstörningar

[VISIT:s statussida](https://status.visitgroup.com/issues/6ae0be26cf60a849e36da5b4) redovisar en driftstörning den **27 oktober** som berörde **Citybreak Web, BookVisit Web och Stays** under säkerhetsförbättringar. VISIT har beskrivit problem med delad lagring och markerade händelsen löst den **28 oktober**. Liseberg informerade också om tillfälliga problem med onlinebokning. **Det finns inget publicerat tekniskt belägg för att dessa driftstörningar orsakade dataintrånget.**

## Tidslinje för bekräftade händelser

| Datum | Händelse och källa |
|---|---|
| **23–26 oktober 2026** | Bokningsperiod som flera kundbesked särskilt pekar ut; hos Tekniska museet kan även äldre bokningar omfattas. |
| **27 oktober** | Flera kunder får besked om incidenten. Skansen och Liseberg informerar om möjlig eller konstaterad påverkan. VISIT rapporterar separat driftstörning. |
| **28 oktober** | VISIT publicerar sitt [Citybreak-besked](https://status.visitgroup.com/issues/6ae1d4a838e2f6f97a391a3e). Fler verksamheter publicerar egna incidentmeddelanden. |
| **29 oktober** | Skånes Djurparks tidigare incidentbesked identifieras i offentlig sökindexering. |

## Metod och källvärdering

Rapporten bygger på **leverantörens och kundernas offentliga meddelanden**, kompletterat med namngiven nyhetsrapportering där källan uttryckligen anges. Kundens uppgift om påverkan skiljs från teknisk verifiering av intrång och från journalistiska uppgifter om omfattning.

Ingen aktiv sårbarhetsskanning, exploatering eller åtkomst till interna system har utförts. **Frånvaro av offentlig bekräftelse är inte bevis för att en verksamhet är opåverkad.** Rapporten innehåller därför ingen lista som påstår att övriga VISIT-kunder drabbats.

## Versionshistorik

[Tidigare rapporter](./historik/) innehåller äldre kartläggningar, tekniska observationer, hypoteser och förändringar som inte längre hör hemma i den aktuella lägesrapporten. Se även [GitHub-historiken](https://github.com/einand/handelserapporter/commits/main/visit/index.md).