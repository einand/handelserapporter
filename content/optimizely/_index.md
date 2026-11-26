---
title: "Optimizely – cyberangrepp via webbskript"
date: 2026-11-17
description: "Verifierat händelseförlopp om manipulerade Optimizely-skript, berörda webbplatser och risker för besökare."
---

# Cyberangrepp via Optimizely Web Experimentation

**Rapportversion 1.14 · 26 november 2026**

Denna rapport sammanställer offentligt verifierbara uppgifter om angreppet mot Optimizelys webbskript. Ett infekterat skript på en organisations webbplats är **inte** liktydigt med att organisationens interna system har hackats eller att alla dess besökare har fått uppgifter stulna. Där uppgifter saknas anges **okänt**.

[**Visa tabellen med samtliga 178 poster**](#organisationstabell)

## 24–25 november 2026: CVE, myndighetsklassning och nytt leverantörsbesked

Sårbarheten har fått beteckningen **CVE-2026-132224** (publicerad 18 november, CWE-642). Den amerikanska cybersäkerhetsmyndigheten CISA lade till den i sin katalog över faktiskt utnyttjade sårbarheter (KEV) den **24 november**, med åtgärdsfrist 27 november för berörda amerikanska federala myndigheter. Detta avser den redan dokumenterade sårbarheten i registreringsflödet, inte ett nytt bekräftat angrepp efter rensningen. Kunder behöver följa leverantörens åtgärdsråd och utreda historisk exponering; själva molntjänstens brist uppges redan vara åtgärdad. CISA:s klassning bekräftar inte lyckad iOS-exploatering eller faktisk stöld av besökares uppgifter. [NVD](https://nvd.nist.gov/vuln/detail/CVE-2026-132224), [CISA KEV](https://www.cisa.gov/known-exploited-vulnerabilities-catalog), [RadioCSIRT:s återgivning av KEV-posten](https://cve.radiocsirt.org/vuln/CVE-2026-132224).

Den **25 november** publicerade Optimizelys Shafqat Islam ett utförligt [leverantörsbesked](https://www.optimizely.com/field-notes/articles/web-experimentation-security-incident-update), nu tillgängligt i sin helhet och granskat den 26 november. Följande nya uppgifter är leverantörens egna forensiska fynd, inte en färdig oberoende granskning.

- Den äldre registreringen för gratis provkonton och funktionen för användarimitation har stängts permanent. Angriparen återöppnade även arkiverade projekt; kvarvarande skript på gamla sidor kunde därför åter börja leverera kod. Försök att ändra Feature Experimentation stoppades.
- Reviderad tidslinje (UTC): testkonton skapades 13 november 18.40; tidig testkod infördes 16 november 01.20, i produktion 03.54; huvudangreppet började 07.51. En kund slog larm 13.34. Detta förklarar varför den tidigare angivna huvudattackens start inte var första möjliga exponering. Första kundmeddelandet skickades 17 november 00.01.
- Optimizelys egen inloggningssida levererade koden eftersom CSP endast rapporterade överträdelser. Besökarpåverkan utreds; huvudsidan blockerade koden.
- Inga bekräftade kort- eller kryptoförluster hos kunder, inga rapporterade infekterade enheter och inga belägg för exfiltration av data lagrade hos Optimizely enligt företaget. Faktisk besökarpåverkan är fortfarande okänd. Mandiants slutrapport väntas inom några veckor.
- Uppdaterade indikatorer: `webshell[.]lol`, `1688360[.]cc`, `5vobauua3ojpklx[.]icu`, `eil786npto9u5bq[.]icu`, oväntade användarinbjudningar från `fldubai[.]com`, plusadresser som efterliknar kollegor samt okända webhooks. Kontrollera även historiska projekt och tidigare loggsökningar. Leverantören planerar tvåpersonsgodkännande för kodändringar och inbyggda förändringslarm; funktionerna är ännu inte bekräftat införda.

Antalet infekterade skript i Report URI:s tidigare kartläggning är fortsatt 188 hos 178 organisationer. Faktisk kortdatastöld, lyckad iOS-exploatering, svensk besökarpåverkan och slutlig kryptostöldsumma är fortsatt **okända**. Det separata angreppet mot Configured Commerce anges av Optimizely vara orelaterat. [Status](https://status.optimizely.com/).

## 19–20 november 2026: D&D Beyond bekräftar påverkan och skyddade betalningar

Den 19 november bekräftade **Brian Perry, ansvarig producent för D&D Beyond**, i ett offentligt svar att webbplatsen berördes av säkerhetshändelsen hos en tredjepartsleverantör. D&D Beyond tog snabbt bort leverantörstjänsten från webbplatsen och fortsätter sin granskning. Företaget uppger uttryckligen att **betalningar inte påverkades**, eftersom de hanteras av en separat säker betalningsleverantör. Om granskningen visar att användare behöver agera kommer de att kontaktas direkt. Detta är en **kundspecifik bekräftelse**, inte ett bevis för att samtliga besökare var exponerade eller att någon faktisk datastöld skett. Antalet besökare som körde den skadliga koden, eventuell annan dataexponering och intrång i interna system är **okänt**. [Brian Perrys uttalande i r/DnD, 19 november](https://www.reddit.com/r/DnD/comments/1xz4bxh/dd_beyond_hit_with_massive_malware_attack/); [GamesRadar, 19 november](https://www.gamesradar.com/tabletop-gaming/d-and-d-beyond-was-hit-with-a-major-malware-attack-but-dont-worry-your-payment-details-are-safe/).

Den 20 november rapporterades också att **Wizards of the Coast** hade granskat **Magic: The Gathering Secret Lair** och uppgav att inga kunduppgifter påverkades där. Uppgiften är ett återgivet företagsbesked; någon självständig teknisk verifiering av samtliga kunduppgifter finns inte i de granskade källorna. [GodisaGeek, 20 november](https://godisageek.com/2026/11/dnd-beyond-optimizely-breach/).

## Sammanfattning

Den 16 november 2026 identifierade säkerhetsforskaren **Scott Helme (Report URI)** skadlig JavaScript-kod som levererades genom Optimizely Web Experimentation till webbplatser kopplade till **178 organisationer**. Forskarna undersökte **1 611** Optimizely-skript och fann **188 infekterade**. Det är antal skript och organisationer, inte antal drabbade besökare. [Report URI, 16 november](https://report-uri.ghost.io/worlds-largest-brands-infected-with-malware-via-optimizely/).

**Optimizely har bekräftat** att en obehörig aktör utnyttjade en sårbarhet i Experimentation-tjänsten för att lägga till skadlig kod i kundprojekt. Enligt företagets besked har sårbarheten åtgärdats, den injicerade koden avlägsnats, berörda konton säkrats och kunder informerats. Optimizely uppgav till BleepingComputer att den utnyttjade sårbarheten låg i **registreringsflödet för Experimentation-konton**. Bolaget uppger att den sårbara vägen blockerats, att aktiva sessioner avslutats, åtkomsttoken återkallats och åtkomst för berörda konton återställts. Den exakta kodbristen är fortfarande **okänd**. [Nyheter24, 17 november](https://nyheter24.se/nyheter/teknik/1531477-besokte-du-dessa-sajter-igar-dina-uppgifter-kan-ha-stulits), [Hudson Rock, 17 november](https://www.infostealers.com/article/beyond-optimizely-malicious-scripts-traced-across-four-web-services/).


## Nytt besked 18 november kl. 14.49 UTC – Optimizely anger andel drabbade kunder

Optimizely publicerade den **18 november 2026 kl. 14.49 UTC (15.49 svensk tid)** en ny offentlig uppdatering. Bolaget uppger för första gången att **färre än 5 procent av dess kunder påverkades**, att **samtliga Web Experimentation-kunder har kontaktats individuellt** med besked om de berörts och att **inga andra Optimizely-produkter påverkades**. Procentsiffrans exakta nämnare och antalet berörda kunder är **okänt**. Uppgiften ska **inte** räknas om till ett antal organisationer eller likställas med Report URI:s 178 observerade organisationer och 188 infekterade skript. Den säger inte heller hur många besökare som faktiskt fick kod körd i sin webbläsare.

Optimizely upprepar att en brist i registreringsflödet tillät användarimitation och ändringar av kunders Project JavaScript, att sårbarheten stängdes och koden togs bort samma dag samt att det **inte rörde sig om ett lösenordsintrång**. Enligt bolaget finns ingen skadlig kod kvar i dess system. Händelsen visas fortfarande under **Monitoring** på statussidan. Uppdateringen redovisar **inte** antal verifierade datastölder, lyckade iOS-komprometteringar eller intrång i kundernas egna system; dessa förblir **okända**. Inte heller någon särskild svensk besökarskada har bekräftats. [Optimizelys statusuppdatering, 18 november 2026](https://status.optimizely.com/).

## Nytt verifierat: Optimizelys tekniska kundrapport (17 november, granskad 18 november)

Optimizely har publicerat en nio sidor lång [preliminär teknisk kundrapport](https://pages.optimizely.com/rs/947-RKE-048/images/Security%20Incident%20Report%20-%20Optimizely%20Web%20Experimentation%20-%20Nov%2017%202026.pdf), med betydligt mer konkreta uppgifter än statusmeddelandet. **Mandiant** har anlitats för en oberoende forensisk granskning. Slutlig rotorsaksanalys och fullständiga indikatorer återstår.

**Intrångsväg:** En brist i **registreringsflödet för Web Experimentation-konton** gjorde det möjligt att skapa konton och sedan utge sig för att vara befintliga administratörer genom offentligt tillgängliga konto-/projekt-ID:n och upprepade gissningar av användarnas e-postadresser. Angriparen gjorde upp till tusentals försök per kund. Åtkomst till en kund gav inte automatiskt åtkomst till en annan. Angriparen ändrade kundernas **Project JavaScript**, i vissa fall genom att ersätta tidigare anpassad kod. Det var **inte** ett intrång i Optimizelys administratörskonto och enligt Optimizely **inte** en lösenordsstöld. En angripare kunde se sådana experiment- och projektuppgifter som den imiterade användarens behörighet medgav; faktisk läsning eller exfiltration av sådana uppgifter är **okänd**. Detta ska skiljas från intrång i kundernas egna nätverk, som inte har belagts.

**Optimizelys tidslinje, 16 november (UTC):**

| Tid | Leverantörens verifierade åtgärd eller observation |
|---|---|
| 00.37 | Första angriparkontot för användarimitation skapas |
| 07.51 | Första skadliga kodändringen i ett kundprojekt enligt Optimizelys loggar |
| 13.34 | Optimizely upptäcker aktiviteten |
| 16.06 | Cloudflare-blockering av skadlig utgående kod/trafik enligt Optimizely |
| 16.10 | Sårbarheten i registreringsflödet åtgärdas |
| 16.53 | Angriparens aktiva sessioner avslutas och token återkallas |
| 22.24 | All injicerad kod borttagen från berörda projekt enligt Optimizely |

**Viktig tidsavvikelse:** Report URI:s tidigare observation kl. **04.21 UTC** (BBC-relaterat skript) ligger före Optimizelys angivna första skadliga projektändring **07.51 UTC**. Båda tidsuppgifterna bevaras med källangivelse; den senare leverantörstidslinjen från 25 november anger tidig testkod före huvudangreppet och förklarar därmed den tidigare skenbara tidskonflikten; exakt koppling till BBC-observationen är fortfarande okänd. Report URI:s verifiering av rensning i sitt urval kl. 23.11 UTC avser en annan mätning än Optimizelys interna uppgift om borttagning kl. 22.24 UTC.

**Indikatorer från Optimizely/Mandiants preliminära analys:**

- `pay-relay.wordpressadmin001.workers.dev` – utpekad exfiltrationsadress för kortskimmern. Webbläsarförfrågningar dit är en stark indikator på att skimmern kördes, inte i sig bevis för att uppgifter faktiskt togs emot.
- `pay-cloud.online` och `pay.pay-cloud.online` – angriparkontrollerad infrastruktur och värd för skimmerkod.
- `193.176.211.170` och `193.176.211.203` – observerade VPN-utgångsadresser, **inte tillförlitliga indikatorer för blockering eller attribution**.

Mandiants preliminära koppling av `pay-cloud.online` till **ADAPTAGENT** och **CUPCAKE C2** sedan åtminstone september 2026 visar äldre infrastrukturaktivitet, men identifierar **inte** angriparen. Denna infrastruktur ska hållas åtskild från Report URI:s tidigare identifierade `1688360.cc` tills samband har belagts.

**Vad skriptet kunde göra:** Enligt Optimizely kördes skimmern direkt vid laddning, bevakade sidan via 50-millisekunders polling, DOM-observatörer och urklippshändelser samt försökte fånga kortfält och manipulera kryptoadresser. Vid adressbyte kunde läsbara cookies, sidans URL och skärmbild skickas. Betalfält i separat hostade iframes skyddades av webbläsarens same-origin-regler. Optimizely bekräftar en iOS/iPadOS-inriktad andra fas men **inte** att en fysisk enhet komprometterats. Optimizely uppger att de **inte har bevis för att personuppgifter exfiltrerats**; hur många kort, sessioner eller besökare som faktiskt drabbades är **okänt**. Report URI:s plånbokstransaktioner kvarstår som observerade överföringar, inte entydigt verifierad stöld orsakad av just detta angrepp.

**Produktavgränsning:** Endast **Web Experimentation** är bekräftat berörd. **Feature Experimentation, SDK:er och äldre Full Stack** uppges inte vara drabbade; inga belägg för påverkan på övriga produkter. Optimizely uppger också att mekanismen kunde kringgå skydd för den särskilda `cdn-pci.optimizely.com`-leveransen. Antal ytterligare drabbade kunder utöver Report URI:s 178 är **okänt**. Leverantören kontaktar kunder individuellt och kan lämna kundspecifika exponeringsintervall.

**Reviderade åtgärder:** Optimizely uppger att det nu är säkert att återaktivera Web Experimentation och att generellt byte av kundlösenord/API-token **inte krävs för denna autentiseringsbrist**. Detta ersätter tidigare generella rotationsråd; eventuella faktiskt exponerade sessionstoken i läsbara cookies behöver däremot bedömas separat. Kunder bör bevara loggar från 16 november, granska CSP och utgående förfrågningar, kontrollera kort- och kryptoflöden, begära kundspecifika tider från Optimizely och överväga informationsskyldighet. Optimizelys statuswebbplats visar fortfarande **Monitoring** även efter uppdateringen den 18 november trots att den preliminära rapporten säger att angreppsvägen är stängd och koden borttagen.

## Kartläggning av 178 rapporterade poster

Tabellen är nu avstämd mot **[Report URI:s ursprungliga domänförteckning, 16 november 2026](https://report-uri.ghost.io/worlds-largest-brands-infected-with-malware-via-optimizely/)**. Samtliga 178 poster har en eller flera identifierade domäner i primärkällan. För ett fåtal poster visar primärkällan bara de första domänerna följt av ”+ fler”; de återstående namnen är inte publicerade i den synliga tabellen. Vissa poster avser test- och stagingmiljöer, varumärken i samma koncern eller dubbletter. **Verifierad här betyder att domänen finns i forskarnas dokumenterade fynd från 16 november, inte att den är infekterad i dag eller att företagets interna system har hackats.**

<div id="organisationstabell" style="overflow-x:auto;max-width:100%">
<table>
<thead><tr><th>Nr</th><th>Organisation eller webbplatsgrupp</th><th>Domäner i Report URI:s fynd</th></tr></thead>
<tbody>
<tr><td>1</td><td>Paychex</td><td><code>www.paychex.com</code></td></tr>
<tr><td>2</td><td>HSBC USA</td><td><code>www.us.hsbc.com</code></td></tr>
<tr><td>3</td><td>Equifax</td><td><code>equifax.com, my.equifax.com, signin.my.equifax.com, www.equifax.com</code></td></tr>
<tr><td>4</td><td>SmartAsset</td><td><code>smartasset.com</code></td></tr>
<tr><td>5</td><td>HSBC Hongkong</td><td><code>www.hsbc.com.hk</code></td></tr>
<tr><td>6</td><td>ABN AMRO</td><td><code>www.abnamro.de, www.abnamro.nl, www.abnamromeespierson.be</code></td></tr>
<tr><td>7</td><td>TaxAct</td><td><code>www.taxact.com</code></td></tr>
<tr><td>8</td><td>HSBC Mexiko</td><td><code>www.hsbc.com.mx</code></td></tr>
<tr><td>9</td><td>HSBC Singapore</td><td><code>www.insurance.hsbc.com.sg</code></td></tr>
<tr><td>10</td><td>NetCredit</td><td><code>www.netcredit.com</code></td></tr>
<tr><td>11</td><td>Associated Bank</td><td><code>www.associatedbank.com</code></td></tr>
<tr><td>12</td><td>S-Pankki</td><td><code>www.s-pankki.fi</code></td></tr>
<tr><td>13</td><td>Equifax Kanada</td><td><code>my.equifax.ca, www.equifax.ca</code></td></tr>
<tr><td>14</td><td>Equifax Storbritannien</td><td><code>equifax.co.uk</code></td></tr>
<tr><td>15</td><td>The Work Number (Equifax)</td><td><code>theworknumber.com</code></td></tr>
<tr><td>16</td><td>Funding Circle</td><td><code>fundingcircle.com, www.fundingcircle.com</code></td></tr>
<tr><td>17</td><td>HSBC Australien</td><td><code>www.hsbc.com.au</code></td></tr>
<tr><td>18</td><td>CashNetUSA</td><td><code>www.cashnetusa.com</code></td></tr>
<tr><td>19</td><td>OnDeck</td><td><code>www.ondeck.com</code></td></tr>
<tr><td>20</td><td>ICS Cards</td><td><code>www.icscards.nl</code></td></tr>
<tr><td>21</td><td>HSBC Förenade Arabemiraten</td><td><code>www.hsbc.ae</code></td></tr>
<tr><td>22</td><td>HSBC Malaysia</td><td><code>www.hsbc.com.my, www.hsbcamanah.com.my</code></td></tr>
<tr><td>23</td><td>Rest Super</td><td><code>rest.com.au</code></td></tr>
<tr><td>24</td><td>HSBC Taiwan</td><td><code>www.hsbc.com.tw</code></td></tr>
<tr><td>25</td><td>HSBC Vietnam</td><td><code>www.hsbc.com.vn</code></td></tr>
<tr><td>26</td><td>HSBC Egypten</td><td><code>www.hsbc.com.eg</code></td></tr>
<tr><td>27</td><td>HSBC Filippinerna</td><td><code>www.hsbc.com.ph</code></td></tr>
<tr><td>28</td><td>SmartAdvisor Match (SmartAsset)</td><td><code>smartadvisormatch.com</code></td></tr>
<tr><td>29</td><td>Compare Club</td><td><code>compareclub.com.au</code></td></tr>
<tr><td>30</td><td>ABN AMRO Lease</td><td><code>abnamrolease.com</code></td></tr>
<tr><td>31</td><td>Energy Scout</td><td><code>energyscout.com.au</code></td></tr>
<tr><td>32</td><td>Hang Seng Investment</td><td><code>www.hangsenginvestment.com</code></td></tr>
<tr><td>33</td><td>Zoom</td><td><code>www.zoom.com, zoom.com, zoom.us</code></td></tr>
<tr><td>34</td><td>Bitly</td><td><code>arcg.is, bit.ly, bitly.com</code></td></tr>
<tr><td>35</td><td>Salesforce</td><td><code>evergage.com, exacttarget.com, pardot.com, salesforce-scrt.com (+4 ej utskrivna)</code></td></tr>
<tr><td>36</td><td>GitLab</td><td><code>about.gitlab.com, gitlab.com</code></td></tr>
<tr><td>37</td><td>Optimizely</td><td><code>home.optimizely.com, login.optimizely.com, optimizely.com, prep.login.optimizely.com (+1 ej utskriven)</code></td></tr>
<tr><td>38</td><td>Mixpanel</td><td><code>mixpanel.com</code></td></tr>
<tr><td>39</td><td>Typeform</td><td><code>typeform.com, www.typeform.com</code></td></tr>
<tr><td>40</td><td>InMotion Hosting</td><td><code>www.inmotionhosting.com</code></td></tr>
<tr><td>41</td><td>Wasabi</td><td><code>wasabi.com, wasabisys.com</code></td></tr>
<tr><td>42</td><td>Perforce / Zend / Puppet</td><td><code>www.perforce.com, www.puppet.com, zend.com</code></td></tr>
<tr><td>43</td><td>Tableau</td><td><code>www.tableau.com</code></td></tr>
<tr><td>44</td><td>Hootsuite</td><td><code>hootsuite.com, www.hootsuite.com</code></td></tr>
<tr><td>45</td><td>Smartsheet</td><td><code>de.smartsheet.com, es.smartsheet.com, fr.smartsheet.com, help.smartsheet.com (+2 ej utskrivna)</code></td></tr>
<tr><td>46</td><td>MuleSoft</td><td><code>mulesoft.com, www.mulesoft.com</code></td></tr>
<tr><td>47</td><td>Thales / Imperva</td><td><code>community-cybersec.thalesgroup.com, imperva.com</code></td></tr>
<tr><td>48</td><td>Tricentis</td><td><code>www.tricentis.com</code></td></tr>
<tr><td>49</td><td>Web Hosting Hub</td><td><code>www.webhostinghub.com</code></td></tr>
<tr><td>50</td><td>QR Code Generator</td><td><code>login.qr-code-generator.com, www.qr-code-generator.com</code></td></tr>
<tr><td>51</td><td>ServiceChannel</td><td><code>preview.servicechannel.com, servicechannel.com, servicechannel.us</code></td></tr>
<tr><td>52</td><td>Brandfolder</td><td><code>brandfolder.com</code></td></tr>
<tr><td>53</td><td>Intelex</td><td><code>www.intelex.com</code></td></tr>
<tr><td>54</td><td>Enverus</td><td><code>www.enverus.com</code></td></tr>
<tr><td>55</td><td>Accruent</td><td><code>www.accruent.com</code></td></tr>
<tr><td>56</td><td>IKEA</td><td><code>client.home-design.ikea.com</code></td></tr>
<tr><td>57</td><td>ASOS</td><td><code>asos.com</code></td></tr>
<tr><td>58</td><td>Mattel</td><td><code>creations.mattel.com</code></td></tr>
<tr><td>59</td><td>American Eagle</td><td><code>www.ae.com</code></td></tr>
<tr><td>60</td><td>Scheels</td><td><code>scheels.com, www.scheels.com</code></td></tr>
<tr><td>61</td><td>Ariat</td><td><code>www.ariat.com</code></td></tr>
<tr><td>62</td><td>American Girl</td><td><code>www.americangirl.com</code></td></tr>
<tr><td>63</td><td>StackSocial</td><td><code>www.stacksocial.com</code></td></tr>
<tr><td>64</td><td>Crocs Indien</td><td><code>www.crocs.in</code></td></tr>
<tr><td>65</td><td>Levi's Japan</td><td><code>levi.jp</code></td></tr>
<tr><td>66</td><td>Todd Snyder</td><td><code>www.toddsnyder.com</code></td></tr>
<tr><td>67</td><td>Levi's Indonesien</td><td><code>levi.co.id</code></td></tr>
<tr><td>68</td><td>Just Russel</td><td><code>app.brt-4076-credits-in-order-summary.justrussel.de, app.rph-487-customer-can-switch-their-pet-to.justrussel.be, app.rph-487-customer-can-switch-their-pet-to.justrussel.com, app.rph-487-customer-can-switch-their-pet-to.justrussel.fr (+1 ej utskriven)</code></td></tr>
<tr><td>69</td><td>Loloi Rugs</td><td><code>www.loloirugs.com</code></td></tr>
<tr><td>70</td><td>Levi's Australien</td><td><code>levis.com.au</code></td></tr>
<tr><td>71</td><td>Levi's Malaysia</td><td><code>levi.com.my</code></td></tr>
<tr><td>72</td><td>Levi's Filippinerna</td><td><code>levi.com.ph</code></td></tr>
<tr><td>73</td><td>Levi's Singapore</td><td><code>levi.com.sg</code></td></tr>
<tr><td>74</td><td>Levi's Sydkorea</td><td><code>levi.co.kr</code></td></tr>
<tr><td>75</td><td>Levi's Nya Zeeland</td><td><code>levis.co.nz</code></td></tr>
<tr><td>76</td><td>Peacock</td><td><code>peacocktv.com, www.peacocktv.com</code></td></tr>
<tr><td>77</td><td>D&amp;D Beyond</td><td><code>dndbeyond.com, www.dndbeyond.com</code></td></tr>
<tr><td>78</td><td>Wizards of the Coast</td><td><code>secretlair.wizards.com</code></td></tr>
<tr><td>79</td><td>NOW TV</td><td><code>nowtv.com, www.nowtv.com</code></td></tr>
<tr><td>80</td><td>Zattoo</td><td><code>zattoo.com</code></td></tr>
<tr><td>81</td><td>Crave</td><td><code>www.crave.ca</code></td></tr>
<tr><td>82</td><td>Starz</td><td><code>www.starz.com</code></td></tr>
<tr><td>83</td><td>SkyShowtime</td><td><code>www.skyshowtime.com</code></td></tr>
<tr><td>84</td><td>Bravo</td><td><code>www.bravotv.com</code></td></tr>
<tr><td>85</td><td>SeaWorld</td><td><code>buschgardens.com, seaworld.com</code></td></tr>
<tr><td>86</td><td>WOW (Sky Deutschland)</td><td><code>www.wowtv.de</code></td></tr>
<tr><td>87</td><td>NOW Italien</td><td><code>www.nowtv.it</code></td></tr>
<tr><td>88</td><td>CNN</td><td><code>cnn.com, edition.cnn.com, us.cnn.com, www.cnn.com</code></td></tr>
<tr><td>89</td><td>BBC</td><td><code>www.bbc.co.uk, www.bbc.com</code></td></tr>
<tr><td>90</td><td>Fox News</td><td><code>www.foxnews.com</code></td></tr>
<tr><td>91</td><td>NPR</td><td><code>legacy-s1.npr.org, legacy.stage.npr.org, media.stage.npr.org, s-s1-origin.npr.org</code></td></tr>
<tr><td>92</td><td>CTV News</td><td><code>www.ctvnews.ca</code></td></tr>
<tr><td>93</td><td>Fox Sports</td><td><code>foxsports.com</code></td></tr>
<tr><td>94</td><td>BNN Bloomberg / CP24</td><td><code>www.bnnbloomberg.ca, www.cp24.com</code></td></tr>
<tr><td>95</td><td>TSN</td><td><code>www.tsn.ca</code></td></tr>
<tr><td>96</td><td>Top Gear</td><td><code>www.topgear.com</code></td></tr>
<tr><td>97</td><td>BBC Earth</td><td><code>www.bbcearth.com</code></td></tr>
<tr><td>98</td><td>Alaska Airlines / Hawaiian Airlines</td><td><code>www.alaskaair.com, www.hawaiianairlines.com</code></td></tr>
<tr><td>99</td><td>Transavia</td><td><code>www.transavia.com</code></td></tr>
<tr><td>100</td><td>Air France-KLM</td><td><code>liberia.klm.com, russia.airfrance.com, www.klm.be, wwws.airfrance.fr</code></td></tr>
<tr><td>101</td><td>KLM Nederländerna</td><td><code>deal.klm.nl</code></td></tr>
<tr><td>102</td><td>Trafalgar</td><td><code>www.trafalgar.com</code></td></tr>
<tr><td>103</td><td>Contiki</td><td><code>www.contiki.com</code></td></tr>
<tr><td>104</td><td>Insight Vacations</td><td><code>www.insightvacations.com</code></td></tr>
<tr><td>105</td><td>The Travel Corporation</td><td><code>uat.costco.ttc.com</code></td></tr>
<tr><td>106</td><td>Costsaver</td><td><code>www.costsavertour.com</code></td></tr>
<tr><td>107</td><td>Invisalign</td><td><code>invisalign.com, www.invisalign.com</code></td></tr>
<tr><td>108</td><td>Takeda</td><td><code>www.takeda.com</code></td></tr>
<tr><td>109</td><td>Covetrus</td><td><code>covetrus.com</code></td></tr>
<tr><td>110</td><td>iTero (Align)</td><td><code>itero.com</code></td></tr>
<tr><td>111</td><td>Covetrus Pharmacy</td><td><code>eastfieldveterinary.covetruspharmacy.com</code></td></tr>
<tr><td>112</td><td>myCovetrus</td><td><code>www.mycovetrus.com</code></td></tr>
<tr><td>113</td><td>RaySafe (Fluke)</td><td><code>www.raysafe.com</code></td></tr>
<tr><td>114</td><td>Takeda Oncology</td><td><code>www.takedaoncology.com</code></td></tr>
<tr><td>115</td><td>Fluke</td><td><code>fluke.com</code></td></tr>
<tr><td>116</td><td>eMaint (Fluke)</td><td><code>www.emaint.com</code></td></tr>
<tr><td>117</td><td>Fluke Networks</td><td><code>www.flukenetworks.com</code></td></tr>
<tr><td>118</td><td>Vaillant Tyskland</td><td><code>www.vaillant.de</code></td></tr>
<tr><td>119</td><td>Fluke Process Instruments</td><td><code>www.flukeprocessinstruments.com</code></td></tr>
<tr><td>120</td><td>Fluke Biomedical</td><td><code>www.flukebiomedical.com</code></td></tr>
<tr><td>121</td><td>Landauer</td><td><code>www.landauer.com</code></td></tr>
<tr><td>122</td><td>Vaillant Spanien</td><td><code>www.vaillant.es</code></td></tr>
<tr><td>123</td><td>Virgin Media</td><td><code>virginmedia.com, www.virginmedia.com</code></td></tr>
<tr><td>124</td><td>Virgin Media O2</td><td><code>virginmediao2.co.uk, www.virginmediao2.co.uk</code></td></tr>
<tr><td>125</td><td>Vodafone Australien</td><td><code>www.vodafone.com.au</code></td></tr>
<tr><td>126</td><td>O2</td><td><code>o2.co.uk, www.o2.co.uk</code></td></tr>
<tr><td>127</td><td>TPG Telecom</td><td><code>www.tpg.com.au</code></td></tr>
<tr><td>128</td><td>Mint Mobile</td><td><code>www.mintmobile.com</code></td></tr>
<tr><td>129</td><td>TalkTalk</td><td><code>talktalk.co.uk, www.talktalk.co.uk</code></td></tr>
<tr><td>130</td><td>Ledger</td><td><code>ledger.com, www.ledger.com</code></td></tr>
<tr><td>131</td><td>IG</td><td><code>www.ig.com</code></td></tr>
<tr><td>132</td><td>OANDA / Coinpass</td><td><code>oanda.com, www.oanda.com</code></td></tr>
<tr><td>133</td><td>Interactive Investor</td><td><code>www.ii.co.uk</code></td></tr>
<tr><td>134</td><td>TMS Brokers</td><td><code>www.tms.pl</code></td></tr>
<tr><td>135</td><td>Betashares</td><td><code>www.betashares.com.au</code></td></tr>
<tr><td>136</td><td>Asurion / uBreakiFix</td><td><code>www.asurion.com, www.ubreakifix.com</code></td></tr>
<tr><td>137</td><td>Mutual of Omaha</td><td><code>moocat.mutualofomaha.com, www.mutualofomaha.com</code></td></tr>
<tr><td>138</td><td>Admiral</td><td><code>www.admiral.com</code></td></tr>
<tr><td>139</td><td>Securian Financial</td><td><code>www.securian.com</code></td></tr>
<tr><td>140</td><td>eRenterPlan</td><td><code>erenterplan.com</code></td></tr>
<tr><td>141</td><td>AKA (dansk arbetslöshetskassa)</td><td><code>www.aka.dk</code></td></tr>
<tr><td>142</td><td>Buildium</td><td><code>headwayassetsllc.managebuilding.com</code></td></tr>
<tr><td>143</td><td>Loft Living Apartments</td><td><code>theapartmentsatkeltonstation.loftliving.com</code></td></tr>
<tr><td>144</td><td>Buildium</td><td><code>www.buildium.com</code></td></tr>
<tr><td>145</td><td>HireAHelper</td><td><code>qa2.hireahelper.com</code></td></tr>
<tr><td>146</td><td>Flytte och associerade jämförelsesidor</td><td><code>flytte.no</code></td></tr>
<tr><td>147</td><td>MovingPlace</td><td><code>unionplus-qa4.movingplace.com</code></td></tr>
<tr><td>148</td><td>Ospecificerade restaurangbeställningssidor</td><td><code>order.online</code></td></tr>
<tr><td>149</td><td>Heineken</td><td><code>www.heineken.com</code></td></tr>
<tr><td>150</td><td>Home Chef</td><td><code>www.homechef.com</code></td></tr>
<tr><td>151</td><td>Starbucks Kanada</td><td><code>www.starbucks.ca</code></td></tr>
<tr><td>152</td><td>Cinnabon</td><td><code>www.cinnabon.com</code></td></tr>
<tr><td>153</td><td>Resideo</td><td><code>resideo.com, www.resideo.com</code></td></tr>
<tr><td>154</td><td>Honeywell Home</td><td><code>www.honeywellhome.com</code></td></tr>
<tr><td>155</td><td>myQ (Chamberlain)</td><td><code>www.myq.com</code></td></tr>
<tr><td>156</td><td>Chamberlain</td><td><code>www.chamberlain.com</code></td></tr>
<tr><td>157</td><td>First Alert</td><td><code>www.firstalert.com</code></td></tr>
<tr><td>158</td><td>Change</td><td><code>www.change.org</code></td></tr>
<tr><td>159</td><td>ASPCA</td><td><code>aspca.org, dev-cloudflare.aspca.org, secure.aspca.org, www.aspca.org</code></td></tr>
<tr><td>160</td><td>UNICEF USA</td><td><code>www.unicefusa.org</code></td></tr>
<tr><td>161</td><td>DonorsChoose</td><td><code>www.donorschoose.org</code></td></tr>
<tr><td>162</td><td>Betsson</td><td><code>betsson.bet.ar, www.betsson.co, www.betsson.com, www.betsson1002.com</code></td></tr>
<tr><td>163</td><td>PokerStars</td><td><code>www.pokerstars.com, www.pokerstars.de, www.pokerstars.fr, www.pokerstars.pt (+1 ej utskriven)</code></td></tr>
<tr><td>164</td><td>Tombola</td><td><code>tombola.co.uk, tombolaarcade.co.uk, www.tombola.co.uk, www.tombola.it (+1 ej utskriven)</code></td></tr>
<tr><td>165</td><td>Betfred</td><td><code>www.betfred.com</code></td></tr>
<tr><td>166</td><td>Freshfields</td><td><code>www.freshfields.com</code></td></tr>
<tr><td>167</td><td>CohnReznick</td><td><code>www.cohnreznick.com</code></td></tr>
<tr><td>168</td><td>Baringa</td><td><code>www.baringa.com</code></td></tr>
<tr><td>169</td><td>Cro Metrics</td><td><code>crometrics.com</code></td></tr>
<tr><td>170</td><td>ShipStation / ShipEngine</td><td><code>shipstation.com, www.shipstation.com</code></td></tr>
<tr><td>171</td><td>Stamps.com</td><td><code>www.stamps.com</code></td></tr>
<tr><td>172</td><td>ShipEngine</td><td><code>www.shipengine.com</code></td></tr>
<tr><td>173</td><td>Lucid Motors</td><td><code>lucidmotors.com</code></td></tr>
<tr><td>174</td><td>O'Brien Glass</td><td><code>www.obrien.com.au</code></td></tr>
<tr><td>175</td><td>Chevrolet-återförsäljarnätverk (Bill Rapp med flera)</td><td><code>www.billrappchevy.com</code></td></tr>
<tr><td>176</td><td>Walden University</td><td><code>www.waldenu.edu</code></td></tr>
<tr><td>177</td><td>Perlego</td><td><code>www.perlego.com</code></td></tr>
<tr><td>178</td><td>Chamberlain University</td><td><code>www.chamberlain.edu</code></td></tr>
</tbody></table>
</div>

## Omfattning och berörda webbplatser

Report URI:s fynd omfattar bland annat webbskript associerade med **BBC, CNN, Zoom, Salesforce, GitLab, HSBC, Equifax, Ledger, Air France-KLM och IKEA**. För IKEA gäller den dokumenterade domänen `client.home-design.ikea.com`, inte generellt hela IKEA:s svenska webbutik. En fullständig domänlista finns i [Report URI:s ursprungliga genomgång](https://report-uri.ghost.io/worlds-largest-brands-infected-with-malware-via-optimizely/).

**Kundernas egna besked:** Salesforce har bekräftat att bolaget undersöker otillåtna ändringar i Optimizely-skript och har inaktiverat dem i förhandsvisnings- och produktionsmiljöer som försiktighetsåtgärd. Equifax uppgav till Reuters att man slutat använda Optimizely och inte funnit belägg för intrång i egna system. HSBC uppgav att obehöriga skript inte var aktiva på dess webbplatser. IKEA undersöker eventuell påverkan. Dessa besked är inte bekräftelser på datastöld från respektive kund. [Reuters, 17 november](https://www.reuters.com/legal/government/popular-websites-subverted-bid-steal-crypto-target-iphone-users-2026-11-17/), [BleepingComputer, 16 november](https://www.bleepingcomputer.com/news/security/optimizely-supply-chain-attack-delivers-malware-to-cnn-fox-news-bbc-salesforce-sites/).

**Bekräftat:** skadlig kod återfanns i undersökta skript. **Inte generellt bekräftat:** intrång i varje namngivet företags egna system, faktisk exfiltration av kunduppgifter från varje webbplats eller infektion av samtliga besökare. Antal exponerade personer och antal stulna kortuppgifter är **okänt**.

## Ny verifierad teknisk kartläggning – Zscaler ThreatLabz, 18 november

Den 18 november publicerade **Zscaler ThreatLabz** en separat teknisk undersökning av Optimizely-angreppet. Forskarna identifierade **över 450 unika domäner och över 3 000 URL:er som levererade det skadliga skriptet**. Detta är **inte** en verifierad siffra över 450 drabbade organisationer, 3 000 infekterade kundprojekt eller lyckade datastölder: domäner, URL:er, skript och organisationer är olika mått. Report URI:s dokumenterade **188 infekterade Optimizely-skript hos 178 organisationer** kvarstår som en separat kartläggning. Hur många unika organisationer Zscalers observationer motsvarar är **okänt**.

Zscalers kodanalys preciserar att den vanliga webbkoden kunde påverka den aktuella sidans innehåll, formulär, anrop och JavaScript-åtkomliga cookies, **inte** andra flikar, andra webbplatsers cookies eller användarens lokala filer. En separat iOS-exploateringskedja kunde i teorin nå längre om den lyckades; **bekräftade lyckade iOS-intrång är fortfarande okända**.

Zscaler beskriver också en mer avgränsad utlösare för vissa datainsamlingsfunktioner: skärmbildstagning och cookieinsamling i den analyserade koden skedde när en kryptoadress hade bytts ut och det berörda elementet var synligt. Då kunde information skickas till `1688360[.]cc/hit.php`. Betalkortsuppgifter från vanliga sidformulär kunde skickas till `1688360[.]cc/card.php`, medan skyddade betalningsfält i externa iframe-fönster, exempelvis Stripe eller Adyen, inte var direkt läsbara för skriptet.

**Ytterligare tekniska indikatorer enligt Zscaler:** `ios-hack[.]icu` (huvuddomän för iOS-laddare), `q1ls1ho9x7wsxlu[.]icu` (sekundär styrserver), `eil786npto9u5bq[.]icu/JIUJIU888/weifile.html` (dold iframe), `5vobauua3ojpklx[.]icu/boot.js` (iOS-laddare) och `1688360[.]cc/card.php` (betalningsskimmer). Domänerna är indikatorer för kontroll av historiska loggar, inte belägg för att ett visst system blivit infekterat.

Zscaler uppger att de har infört detektioner för kampanjens indikatorer. Ingen ny bekräftelse har framkommit om antalet faktiskt drabbade besökare, lyckade iOS-intrång, stulna kortuppgifter, intrång i kundernas interna system eller svensk påverkan.

[Källa: Zscaler ThreatLabz, 18 november 2026](https://www.zscaler.com/blogs/security-research/attackers-exploit-optimizely-flaw-inject-malicious-javascript) ([publicerad kopia med tekniska detaljer](https://securityboulevard.com/2026/11/attackers-exploit-optimizely-flaw-to-inject-malicious-javascript/)).

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

Enligt Report URI hade antalet fortfarande infekterade skript i deras urval sjunkit från **169 kl. 20.56 UTC** till **ett kl. 21.52 UTC** den 16 november. **Uppdatering 17 november:** Report URI uppger att samtliga infekterade Optimizely-filer i deras övervakade urval var rensade **16 november kl. 23.11 UTC** och därefter förblev rena vid forskarnas kontroller. Angriparens huvuddomän `1688360.cc` sattes i `clientHold` **17 november kl. 00.37 UTC** och upphörde att slå upp i DNS. Det innebär inte att redan stulna uppgifter kan återtas eller att alla eventuella följdskador upphört. Optimizelys [statusmeddelande](https://status.optimizely.com/) stod fortfarande på **Monitoring** vid kontroll den 17 november, utan ett nytt slutligt besked.

**Uppdaterad betalningsspårning 17 november:** Report URI:s senare sammanställning visar omkring **7 150 USD** i mottagna transaktioner över flera kryptokedjor. Plånböcker tömdes tidigt den 17 november. Beloppet är fortfarande **inte** en verifierad förlustsumma från enbart besökare på Optimizely-kunders webbplatser, eftersom plånboks- och uttagsadresser också kopplats till tidigare aktivitet. Kortstölder och lyckade iOS-intrång saknar verifierade totalsiffror. [Report URI, uppdatering 17 november](https://report-uri.ghost.io/worlds-largest-brands-infected-with-malware-via-optimizely/), [Help Net Security, 17 november](https://www.helpnetsecurity.com/2026/11/17/optimizely-vulnerability-malicious-javascript/).

## Fördjupad analys 17 november – iOS och betalningsspår

**iOS-kedjor:** Hudson Rock redovisar en senare analys av Kirk/Ohey som beskriver ytterligare DarkSword D11-steg, bland annat `post_exploit.js`, med kod för registrering av enheter och uppladdning av `keychain-2.db` och andra databaser. Panelkod uppges även vara avsedd att samla in återställningsfraser och privata nycklar. Detta är **analys av återfunnen kod**, inte bevis för att sådana uppgifter faktiskt stulits från en besökare. Hudson Rock har inte oberoende återskapat ett lyckat intrång i en fysisk iPhone. [Hudson Rock, 17 november](https://www.infostealers.com/article/beyond-optimizely-malicious-scripts-traced-across-four-web-services/).

**iOS 26:** Ohey har observerat en kodväg till `C10/b.html` och `rce_worker_26.x.js` vid en iOS 26.3-märkt förfrågan, men kedjans egen logg anger `usable_grade=DEAD weaponized=false`. Detta är **inte** belägg för ett fungerande iOS 26-exploit eller en komprometterad enhet. [Hudson Rock, 17 november](https://www.infostealers.com/article/beyond-optimizely-malicious-scripts-traced-across-four-web-services/).

**Kryptobelopp – viktig precisering:** De omkring 7 150 USD som tidigare nämnts är observerade **mottagna plånbokstransaktioner**, inte en fastställd stöldsumma. StepSecurity redovisar att Galaxy Digitals Alex Thorn uppskattat möjliga offeröverföringar till cirka **2 300 USD**, eftersom en del Bitcoin-transaktioner kan ha varit angriparens egna medel. Även denna lägre siffra är en **extern uppskattning**, inte en verifierad totalsumma. StepSecurity noterar också att en av TRON-plånböckerna användes redan i mars 2026. [StepSecurity, uppdaterad 17 november](https://www.stepsecurity.io/blog/optimjack-optimizely-hosted-scripts-crypto-clipper-card-skimmer).

**Kvarstående osäkerhet:** Inga nya belägg har framkommit för antal stulna betalkort, lyckade iOS-komprometteringar eller en svensk besökarskada. Optimizelys officiella status står fortsatt på **Monitoring** vid kontroll den 17 november. [Optimizelys status](https://status.optimizely.com/).

## Hur CSP påverkade angreppet

**Ny dokumenterad teknisk analys (Report URI, 16–17 november):** Forskarna utvärderade Content Security Policy (CSP) på **256 värdar** kopplade till de berörda organisationerna. Resultaten som redovisas omfattar **68 utan CSP**, **50 där CSP tillät både skadlig kod och datatrafik**, **17 där koden kunde köras men `connect-src` blockerade utgående datatrafik**, och **24 där CSP blockerade den skadliga koden helt**. Dessa kategorier summerar till **159**, inte 256: för återstående **97 värdar är kategorisering okänd i den publicerade sammanställningen**. Andelen 24 av 159 är cirka 15 %, men detta får inte beskrivas som 15 % av samtliga 256 värdar. Analysen visar vad CSP-konfigurationerna tillät eller blockerade, inte hur många besökare som faktiskt fick data stulna.

Att tillåta `cdn.optimizely.com` räckte inte eftersom den skadliga koden levererades från den betrodda domänen. En strikt `script-src` kunde blockera den externa laddningen. `strict-dynamic` kunde däremot ge ett betrott skript rätt att ladda nästa skript. `unsafe-eval` kunde låta den inbäddade reservvarianten köras trots blockering av angriparens domän. En restriktiv `connect-src` kunde hindra kort-, cookie- och skärmbildsdata från att skickas till angriparens server, men inte hindra lokal manipulation av kryptoadresser. Report URI nämner HSBC som exempel på att en inbäddad variant kunde köras samtidigt som utgående stöldtrafik blockerades. Detta ska inte tolkas som verifierad datastöld hos HSBC.

**Åtgärder för webbplatsägare:** granska `Project JavaScript` och experimentkod, kontrollera användare och API-token med skrivåtkomst, rotera autentiseringsuppgifter vid konkret exponering (inte generellt på grund av registreringsbristen), se över `script-src` och `connect-src`, undvik `unsafe-eval` där möjligt och aktivera CSP-rapportering. [Report URI:s CSP-granskning och indikatorer](https://report-uri.ghost.io/worlds-largest-brands-infected-with-malware-via-optimizely/).

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
- **16 november 23.11:** Alla infekterade Optimizely-skript i Report URI:s övervakade urval rapporteras rensade.
- **17 november 00.37:** Angriparens huvuddomän `1688360.cc` spärras med `clientHold`.
- **17 november:** Optimizelys åtgärder och forskarnas fortsatta analyser rapporteras offentligt; status kvarstår som Monitoring.

## Råd till potentiellt berörda

Den som besökte en berörd webbplats bör uppdatera operativsystem och webbläsare. Den som skrev in kortuppgifter i ett formulär på en berörd sida bör granska kontoutdrag och kontakta banken vid misstänkta transaktioner. Kryptobetalningar bör kontrolleras mot avsedd mottagaradress. Ett besök på en listad webbplats innebär **inte automatiskt** att uppgifter stulits.

## Källor

- [Optimizely, statusuppdatering 18 november kl. 14.49 UTC](https://status.optimizely.com/)
- [Optimizely, preliminär teknisk kundrapport 17 november 2026 (PDF)](https://pages.optimizely.com/rs/947-RKE-048/images/Security%20Incident%20Report%20-%20Optimizely%20Web%20Experimentation%20-%20Nov%2017%202026.pdf)

1. [Scott Helme / Report URI, primär teknisk undersökning, 16 november 2026](https://report-uri.ghost.io/worlds-largest-brands-infected-with-malware-via-optimizely/)
2. [Hudson Rock, analys av flera skriptleverantörer, 17 november 2026](https://www.infostealers.com/article/beyond-optimizely-malicious-scripts-traced-across-four-web-services/)
3. [Optimizelys offentliga drift- och säkerhetsmeddelanden](https://status.optimizely.com/)
4. [BleepingComputer, leverantörsbekräftelse och kundreaktioner, 16 november 2026](https://www.bleepingcomputer.com/news/security/optimizely-supply-chain-attack-delivers-malware-to-cnn-fox-news-bbc-salesforce-sites/)
5. [Reuters, kunduttalanden och osäker påverkan, 17 november 2026](https://www.reuters.com/legal/government/popular-websites-subverted-bid-steal-crypto-target-iphone-users-2026-11-17/)
7. [Help Net Security, rensning och kryptotransaktioner, 17 november 2026](https://www.helpnetsecurity.com/2026/11/17/optimizely-vulnerability-malicious-javascript/)
8. [StepSecurity, separat blockkedjeanalys, 17 november 2026](https://www.stepsecurity.io/blog/optimjack-optimizely-hosted-scripts-crypto-clipper-card-skimmer)
6. [Nyheter24, svensk nyhetsrapportering, 17 november 2026](https://nyheter24.se/nyheter/teknik/1531477-besokte-du-dessa-sajter-igar-dina-uppgifter-kan-ha-stulits)

9. [Zscaler ThreatLabz, egen teknisk analys och indikatorer, 18 november 2026](https://www.zscaler.com/blogs/security-research/attackers-exploit-optimizely-flaw-inject-malicious-javascript)
