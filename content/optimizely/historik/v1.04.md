---
title: "Optimizely – cyberangrepp via webbskript"
date: 2026-11-17
description: "Verifierat händelseförlopp om manipulerade Optimizely-skript, berörda webbplatser och risker för besökare."
---

# Cyberangrepp via Optimizely Web Experimentation

**Rapportversion 1.04 · 17 november 2026**

Denna rapport sammanställer offentligt verifierbara uppgifter om angreppet mot Optimizelys webbskript. Ett infekterat skript på en organisations webbplats är **inte** liktydigt med att organisationens interna system har hackats eller att alla dess besökare har fått uppgifter stulna. Där uppgifter saknas anges **okänt**.

[**Visa tabellen med samtliga 178 poster**](#organisationstabell)

## Sammanfattning

Den 16 november 2026 identifierade säkerhetsforskaren **Scott Helme (Report URI)** skadlig JavaScript-kod som levererades genom Optimizely Web Experimentation till webbplatser kopplade till **178 organisationer**. Forskarna undersökte **1 611** Optimizely-skript och fann **188 infekterade**. Det är antal skript och organisationer, inte antal drabbade besökare. [Report URI, 16 november](https://report-uri.ghost.io/worlds-largest-brands-infected-with-malware-via-optimizely/).

**Optimizely har bekräftat** att en obehörig aktör utnyttjade en sårbarhet i Experimentation-tjänsten för att lägga till skadlig kod i kundprojekt. Enligt företagets besked har sårbarheten åtgärdats, den injicerade koden avlägsnats, berörda konton säkrats och kunder informerats. Optimizely uppgav till BleepingComputer att den utnyttjade sårbarheten låg i **registreringsflödet för Experimentation-konton**. Bolaget uppger att den sårbara vägen blockerats, att aktiva sessioner avslutats, åtkomsttoken återkallats och åtkomst för berörda konton återställts. Den exakta kodbristen är fortfarande **okänd**. [Nyheter24, 17 november](https://nyheter24.se/nyheter/teknik/1531477-besokte-du-dessa-sajter-igar-dina-uppgifter-kan-ha-stulits), [Hudson Rock, 17 november](https://www.infostealers.com/article/beyond-optimizely-malicious-scripts-traced-across-four-web-services/).


## Kartläggning av 178 rapporterade poster

Tabellen återger den sekundära [Minuto60-sammanställningen](https://www.minuto60.com/vida-moderna/las-178-organizaciones-afectadas-ciberataque-hoy-optimizely-javascript-hacker/19066) och ska **inte** tolkas som 178 unika verifierade domäner eller intrång. Regionala varumärken och vissa dubbletter förekommer. Exakta domäner saknas för de flesta posterna i denna sammanställning; dessa markeras därför som ej verifierade. En enskild domän som nämns i den tekniska primärkällan är `client.home-design.ikea.com`, men tabellen anger inte domän för andra poster utan separat källverifiering.

<div id="organisationstabell" style="overflow-x:auto;max-width:100%">
<table>
<thead><tr><th>Nr</th><th>Organisation eller webbplatsgrupp</th><th>Verifierad exakt domän</th></tr></thead>
<tbody>
<tr><td>1</td><td>Paychex</td><td>Ej verifierad</td></tr>
<tr><td>2</td><td>HSBC USA</td><td>Ej verifierad</td></tr>
<tr><td>3</td><td>Equifax</td><td>Ej verifierad</td></tr>
<tr><td>4</td><td>SmartAsset</td><td>Ej verifierad</td></tr>
<tr><td>5</td><td>HSBC Hongkong</td><td>Ej verifierad</td></tr>
<tr><td>6</td><td>ABN AMRO</td><td>Ej verifierad</td></tr>
<tr><td>7</td><td>TaxAct</td><td>Ej verifierad</td></tr>
<tr><td>8</td><td>HSBC Mexiko</td><td>Ej verifierad</td></tr>
<tr><td>9</td><td>HSBC Singapore</td><td>Ej verifierad</td></tr>
<tr><td>10</td><td>NetCredit</td><td>Ej verifierad</td></tr>
<tr><td>11</td><td>Associated Bank</td><td>Ej verifierad</td></tr>
<tr><td>12</td><td>S-Pankki</td><td>Ej verifierad</td></tr>
<tr><td>13</td><td>Equifax Kanada</td><td>Ej verifierad</td></tr>
<tr><td>14</td><td>Equifax Storbritannien</td><td>Ej verifierad</td></tr>
<tr><td>15</td><td>The Work Number (Equifax)</td><td>Ej verifierad</td></tr>
<tr><td>16</td><td>Funding Circle</td><td>Ej verifierad</td></tr>
<tr><td>17</td><td>HSBC Australien</td><td>Ej verifierad</td></tr>
<tr><td>18</td><td>CashNetUSA</td><td>Ej verifierad</td></tr>
<tr><td>19</td><td>OnDeck</td><td>Ej verifierad</td></tr>
<tr><td>20</td><td>ICS Cards</td><td>Ej verifierad</td></tr>
<tr><td>21</td><td>HSBC Förenade Arabemiraten</td><td>Ej verifierad</td></tr>
<tr><td>22</td><td>HSBC Malaysia</td><td>Ej verifierad</td></tr>
<tr><td>23</td><td>Rest Super</td><td>Ej verifierad</td></tr>
<tr><td>24</td><td>HSBC Taiwan</td><td>Ej verifierad</td></tr>
<tr><td>25</td><td>HSBC Vietnam</td><td>Ej verifierad</td></tr>
<tr><td>26</td><td>HSBC Egypten</td><td>Ej verifierad</td></tr>
<tr><td>27</td><td>HSBC Filippinerna</td><td>Ej verifierad</td></tr>
<tr><td>28</td><td>SmartAdvisor Match (SmartAsset)</td><td>Ej verifierad</td></tr>
<tr><td>29</td><td>Compare Club</td><td>Ej verifierad</td></tr>
<tr><td>30</td><td>ABN AMRO Lease</td><td>Ej verifierad</td></tr>
<tr><td>31</td><td>Energy Scout</td><td>Ej verifierad</td></tr>
<tr><td>32</td><td>Hang Seng Investment</td><td>Ej verifierad</td></tr>
<tr><td>33</td><td>Zoom</td><td>Ej verifierad</td></tr>
<tr><td>34</td><td>Bitly</td><td>Ej verifierad</td></tr>
<tr><td>35</td><td>Salesforce</td><td>Ej verifierad</td></tr>
<tr><td>36</td><td>GitLab</td><td>Ej verifierad</td></tr>
<tr><td>37</td><td>Optimizely</td><td>Ej verifierad</td></tr>
<tr><td>38</td><td>Mixpanel</td><td>Ej verifierad</td></tr>
<tr><td>39</td><td>Typeform</td><td>Ej verifierad</td></tr>
<tr><td>40</td><td>InMotion Hosting</td><td>Ej verifierad</td></tr>
<tr><td>41</td><td>Wasabi</td><td>Ej verifierad</td></tr>
<tr><td>42</td><td>Perforce / Zend / Puppet</td><td>Ej verifierad</td></tr>
<tr><td>43</td><td>Tableau</td><td>Ej verifierad</td></tr>
<tr><td>44</td><td>Hootsuite</td><td>Ej verifierad</td></tr>
<tr><td>45</td><td>Smartsheet</td><td>Ej verifierad</td></tr>
<tr><td>46</td><td>MuleSoft</td><td>Ej verifierad</td></tr>
<tr><td>47</td><td>Thales / Imperva</td><td>Ej verifierad</td></tr>
<tr><td>48</td><td>Tricentis</td><td>Ej verifierad</td></tr>
<tr><td>49</td><td>Web Hosting Hub</td><td>Ej verifierad</td></tr>
<tr><td>50</td><td>QR Code Generator</td><td>Ej verifierad</td></tr>
<tr><td>51</td><td>ServiceChannel</td><td>Ej verifierad</td></tr>
<tr><td>52</td><td>Brandfolder</td><td>Ej verifierad</td></tr>
<tr><td>53</td><td>Intelex</td><td>Ej verifierad</td></tr>
<tr><td>54</td><td>Enverus</td><td>Ej verifierad</td></tr>
<tr><td>55</td><td>Accruent</td><td>Ej verifierad</td></tr>
<tr><td>56</td><td>IKEA</td><td>Ej verifierad</td></tr>
<tr><td>57</td><td>ASOS</td><td>Ej verifierad</td></tr>
<tr><td>58</td><td>Mattel</td><td>Ej verifierad</td></tr>
<tr><td>59</td><td>American Eagle</td><td>Ej verifierad</td></tr>
<tr><td>60</td><td>Scheels</td><td>Ej verifierad</td></tr>
<tr><td>61</td><td>Ariat</td><td>Ej verifierad</td></tr>
<tr><td>62</td><td>American Girl</td><td>Ej verifierad</td></tr>
<tr><td>63</td><td>StackSocial</td><td>Ej verifierad</td></tr>
<tr><td>64</td><td>Crocs Indien</td><td>Ej verifierad</td></tr>
<tr><td>65</td><td>Levi's Japan</td><td>Ej verifierad</td></tr>
<tr><td>66</td><td>Todd Snyder</td><td>Ej verifierad</td></tr>
<tr><td>67</td><td>Levi's Indonesien</td><td>Ej verifierad</td></tr>
<tr><td>68</td><td>Just Russel</td><td>Ej verifierad</td></tr>
<tr><td>69</td><td>Loloi Rugs</td><td>Ej verifierad</td></tr>
<tr><td>70</td><td>Levi's Australien</td><td>Ej verifierad</td></tr>
<tr><td>71</td><td>Levi's Malaysia</td><td>Ej verifierad</td></tr>
<tr><td>72</td><td>Levi's Filippinerna</td><td>Ej verifierad</td></tr>
<tr><td>73</td><td>Levi's Singapore</td><td>Ej verifierad</td></tr>
<tr><td>74</td><td>Levi's Sydkorea</td><td>Ej verifierad</td></tr>
<tr><td>75</td><td>Levi's Nya Zeeland</td><td>Ej verifierad</td></tr>
<tr><td>76</td><td>Peacock</td><td>Ej verifierad</td></tr>
<tr><td>77</td><td>D&amp;D Beyond</td><td>Ej verifierad</td></tr>
<tr><td>78</td><td>Wizards of the Coast</td><td>Ej verifierad</td></tr>
<tr><td>79</td><td>NOW TV</td><td>Ej verifierad</td></tr>
<tr><td>80</td><td>Zattoo</td><td>Ej verifierad</td></tr>
<tr><td>81</td><td>Crave</td><td>Ej verifierad</td></tr>
<tr><td>82</td><td>Starz</td><td>Ej verifierad</td></tr>
<tr><td>83</td><td>SkyShowtime</td><td>Ej verifierad</td></tr>
<tr><td>84</td><td>Bravo</td><td>Ej verifierad</td></tr>
<tr><td>85</td><td>SeaWorld</td><td>Ej verifierad</td></tr>
<tr><td>86</td><td>WOW (Sky Deutschland)</td><td>Ej verifierad</td></tr>
<tr><td>87</td><td>NOW Italien</td><td>Ej verifierad</td></tr>
<tr><td>88</td><td>CNN</td><td>Ej verifierad</td></tr>
<tr><td>89</td><td>BBC</td><td>Ej verifierad</td></tr>
<tr><td>90</td><td>Fox News</td><td>Ej verifierad</td></tr>
<tr><td>91</td><td>NPR</td><td>Ej verifierad</td></tr>
<tr><td>92</td><td>CTV News</td><td>Ej verifierad</td></tr>
<tr><td>93</td><td>Fox Sports</td><td>Ej verifierad</td></tr>
<tr><td>94</td><td>BNN Bloomberg / CP24</td><td>Ej verifierad</td></tr>
<tr><td>95</td><td>TSN</td><td>Ej verifierad</td></tr>
<tr><td>96</td><td>Top Gear</td><td>Ej verifierad</td></tr>
<tr><td>97</td><td>BBC Earth</td><td>Ej verifierad</td></tr>
<tr><td>98</td><td>Alaska Airlines / Hawaiian Airlines</td><td>Ej verifierad</td></tr>
<tr><td>99</td><td>Transavia</td><td>Ej verifierad</td></tr>
<tr><td>100</td><td>Air France-KLM</td><td>Ej verifierad</td></tr>
<tr><td>101</td><td>KLM Nederländerna</td><td>Ej verifierad</td></tr>
<tr><td>102</td><td>Trafalgar</td><td>Ej verifierad</td></tr>
<tr><td>103</td><td>Contiki</td><td>Ej verifierad</td></tr>
<tr><td>104</td><td>Insight Vacations</td><td>Ej verifierad</td></tr>
<tr><td>105</td><td>The Travel Corporation</td><td>Ej verifierad</td></tr>
<tr><td>106</td><td>Costsaver</td><td>Ej verifierad</td></tr>
<tr><td>107</td><td>Invisalign</td><td>Ej verifierad</td></tr>
<tr><td>108</td><td>Takeda</td><td>Ej verifierad</td></tr>
<tr><td>109</td><td>Covetrus</td><td>Ej verifierad</td></tr>
<tr><td>110</td><td>iTero (Align)</td><td>Ej verifierad</td></tr>
<tr><td>111</td><td>Covetrus Pharmacy</td><td>Ej verifierad</td></tr>
<tr><td>112</td><td>myCovetrus</td><td>Ej verifierad</td></tr>
<tr><td>113</td><td>RaySafe (Fluke)</td><td>Ej verifierad</td></tr>
<tr><td>114</td><td>Takeda Oncology</td><td>Ej verifierad</td></tr>
<tr><td>115</td><td>Fluke</td><td>Ej verifierad</td></tr>
<tr><td>116</td><td>eMaint (Fluke)</td><td>Ej verifierad</td></tr>
<tr><td>117</td><td>Fluke Networks</td><td>Ej verifierad</td></tr>
<tr><td>118</td><td>Vaillant Tyskland</td><td>Ej verifierad</td></tr>
<tr><td>119</td><td>Fluke Process Instruments</td><td>Ej verifierad</td></tr>
<tr><td>120</td><td>Fluke Biomedical</td><td>Ej verifierad</td></tr>
<tr><td>121</td><td>Landauer</td><td>Ej verifierad</td></tr>
<tr><td>122</td><td>Vaillant Spanien</td><td>Ej verifierad</td></tr>
<tr><td>123</td><td>Virgin Media</td><td>Ej verifierad</td></tr>
<tr><td>124</td><td>Virgin Media O2</td><td>Ej verifierad</td></tr>
<tr><td>125</td><td>Vodafone Australien</td><td>Ej verifierad</td></tr>
<tr><td>126</td><td>O2</td><td>Ej verifierad</td></tr>
<tr><td>127</td><td>TPG Telecom</td><td>Ej verifierad</td></tr>
<tr><td>128</td><td>Mint Mobile</td><td>Ej verifierad</td></tr>
<tr><td>129</td><td>TalkTalk</td><td>Ej verifierad</td></tr>
<tr><td>130</td><td>Ledger</td><td>Ej verifierad</td></tr>
<tr><td>131</td><td>IG</td><td>Ej verifierad</td></tr>
<tr><td>132</td><td>OANDA / Coinpass</td><td>Ej verifierad</td></tr>
<tr><td>133</td><td>Interactive Investor</td><td>Ej verifierad</td></tr>
<tr><td>134</td><td>TMS Brokers</td><td>Ej verifierad</td></tr>
<tr><td>135</td><td>Betashares</td><td>Ej verifierad</td></tr>
<tr><td>136</td><td>Asurion / uBreakiFix</td><td>Ej verifierad</td></tr>
<tr><td>137</td><td>Mutual of Omaha</td><td>Ej verifierad</td></tr>
<tr><td>138</td><td>Admiral</td><td>Ej verifierad</td></tr>
<tr><td>139</td><td>Securian Financial</td><td>Ej verifierad</td></tr>
<tr><td>140</td><td>eRenterPlan</td><td>Ej verifierad</td></tr>
<tr><td>141</td><td>AKA (dansk arbetslöshetskassa)</td><td>Ej verifierad</td></tr>
<tr><td>142</td><td>Buildium</td><td>Ej verifierad</td></tr>
<tr><td>143</td><td>Loft Living Apartments</td><td>Ej verifierad</td></tr>
<tr><td>144</td><td>Buildium</td><td>Ej verifierad</td></tr>
<tr><td>145</td><td>HireAHelper</td><td>Ej verifierad</td></tr>
<tr><td>146</td><td>Flytte och associerade jämförelsesidor</td><td>Ej verifierad</td></tr>
<tr><td>147</td><td>MovingPlace</td><td>Ej verifierad</td></tr>
<tr><td>148</td><td>Ospecificerade restaurangbeställningssidor</td><td>Ej verifierad</td></tr>
<tr><td>149</td><td>Heineken</td><td>Ej verifierad</td></tr>
<tr><td>150</td><td>Home Chef</td><td>Ej verifierad</td></tr>
<tr><td>151</td><td>Starbucks Kanada</td><td>Ej verifierad</td></tr>
<tr><td>152</td><td>Cinnabon</td><td>Ej verifierad</td></tr>
<tr><td>153</td><td>Resideo</td><td>Ej verifierad</td></tr>
<tr><td>154</td><td>Honeywell Home</td><td>Ej verifierad</td></tr>
<tr><td>155</td><td>myQ (Chamberlain)</td><td>Ej verifierad</td></tr>
<tr><td>156</td><td>Chamberlain</td><td>Ej verifierad</td></tr>
<tr><td>157</td><td>First Alert</td><td>Ej verifierad</td></tr>
<tr><td>158</td><td>Change</td><td>Ej verifierad</td></tr>
<tr><td>159</td><td>ASPCA</td><td>Ej verifierad</td></tr>
<tr><td>160</td><td>UNICEF USA</td><td>Ej verifierad</td></tr>
<tr><td>161</td><td>DonorsChoose</td><td>Ej verifierad</td></tr>
<tr><td>162</td><td>Betsson</td><td>Ej verifierad</td></tr>
<tr><td>163</td><td>PokerStars</td><td>Ej verifierad</td></tr>
<tr><td>164</td><td>Tombola</td><td>Ej verifierad</td></tr>
<tr><td>165</td><td>Betfred</td><td>Ej verifierad</td></tr>
<tr><td>166</td><td>Freshfields</td><td>Ej verifierad</td></tr>
<tr><td>167</td><td>CohnReznick</td><td>Ej verifierad</td></tr>
<tr><td>168</td><td>Baringa</td><td>Ej verifierad</td></tr>
<tr><td>169</td><td>Cro Metrics</td><td>Ej verifierad</td></tr>
<tr><td>170</td><td>ShipStation / ShipEngine</td><td>Ej verifierad</td></tr>
<tr><td>171</td><td>Stamps.com</td><td>Ej verifierad</td></tr>
<tr><td>172</td><td>ShipEngine</td><td>Ej verifierad</td></tr>
<tr><td>173</td><td>Lucid Motors</td><td>Ej verifierad</td></tr>
<tr><td>174</td><td>O'Brien Glass</td><td>Ej verifierad</td></tr>
<tr><td>175</td><td>Chevrolet-återförsäljarnätverk (Bill Rapp med flera)</td><td>Ej verifierad</td></tr>
<tr><td>176</td><td>Walden University</td><td>Ej verifierad</td></tr>
<tr><td>177</td><td>Perlego</td><td>Ej verifierad</td></tr>
<tr><td>178</td><td>Chamberlain University</td><td>Ej verifierad</td></tr>
</tbody></table>
</div>

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
