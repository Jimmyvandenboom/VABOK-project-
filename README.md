# VABOK | Maris Bohemen

Persoonlijke, Nederlandstalige projectapp voor Jimmy van den Boom, docent Economie & Ondernemen. Gewone HTML, CSS en JavaScript; geen buildproces of externe dependencies.

## Lokaal bekijken

Open `index.html` in een browser. Voor een stabiele lokale opslagcontext raden we een lokale webserver aan:

```sh
cd /workspace/VABOK-project-
python3 -m http.server 8000 --bind 127.0.0.1
```

Open daarna het lokale serveradres in je eigen browser. Gegevens horen bij het browserprofiel en de origin; een andere poort of andere site heeft een aparte opslag.

## GitHub Pages

Commit en push de vier appbestanden naar `main`. Kies in GitHub **Settings → Pages → Build and deployment → Deploy from a branch**, selecteer **main** en **/ (root)** en klik **Save**. GitHub toont de publicatielink zodra de deployment klaar is. Alle appbestanden gebruiken relatieve paden, dus een repository-subpad werkt.

## Functies

Dashboard met taakstanden, chronologische afspraken/deadlines, verlopen datums, vastgepinde berichten en laatste notities. Taken, afspraken, logboek, nieuws/ideeën, projectinformatie, contacten en documentlinks zijn bewerkbaar. Vervolgacties uit het logboek kunnen naar een nieuwe taak worden gekopieerd. Nieuws wordt uitsluitend handmatig ingevoerd.

Startgegevens worden alleen aangemaakt wanneer de eigen localStorage-sleutel `vabok-maris-bohemen-v1` ontbreekt. Een lege verzameling blijft leeg. JSON-back-ups bevatten schemaversie 1 en alle verzamelingen. Imports worden volledig gevalideerd en vragen bevestiging voordat ze gegevens vervangen. Opslagfouten worden gemeld; ongeldige bestaande opslag wordt niet automatisch overschreven.

## Beperkingen en privacy

Deze versie bewaart gegevens in deze browser op dit apparaat. Er is nog geen synchronisatie tussen telefoon en laptop. Maak regelmatig een back-up. Browsergegevens wissen verwijdert je lokale gegevens. Back-ups zijn niet versleuteld.

GitHub Pages is op zichzelf geen privéomgeving: gepubliceerde bestanden en startgegevens zijn toegankelijk voor bezoekers. Persoonlijk ingevoerde gegevens worden door deze app niet naar een server verstuurd. Er is geen account of beveiligde toegang; echte beveiligde toegang en synchronisatie zijn latere uitbreidingen. Documenten worden via links geopend, niet geüpload. Er zijn geen automatische nieuwsfeeds of verzonnen subsidievoorwaarden, budgetten of deadlines.

## Validatie

Uitgevoerd met Playwright en Chromium: navigatie; toevoegen, bewerken en verwijderen in alle verzamelingen; taken afronden/heropenen; zoeken/statusfilter; vervolgactie naar taak; vastpinnen; veilige tekstweergave en documentlinks; bewaring na herladen; JSON-export/import; afwijzing van onvolledige back-ups en onveilige links; bewust lege verzamelingen na herladen; afhandeling van een gesimuleerde opslagfout; mobiele weergave op 375 pixels en desktop op 1280 pixels. Geen JavaScript-fouten gevonden. Ook `node --check app.js` en HTTP-verzoeken voor de appbestanden slagen. Browsercontroles gebruiken een apart testprofiel en staan buiten de repository; er zijn geen testdependencies toegevoegd. Een toekomstige wijziging kan opnieuw getest worden door de lokale server te starten en invoer, bewerking, verwijdering, statuswijzigingen, herladen en JSON-back-ups te controleren. Controleer ook op 375 pixels breed.

## Projectupdate 13 oktober 2026

De pagina **Projectupdate** bevat de samenvatting van de aangeleverde samenwerkingsovereenkomst, de startbijeenkomst op 6 november (11.30–12.30 uur), projectleiders, financieringskader, rol-/urenvragen en vervolgtaken. Klik op **Nieuwe informatie toevoegen** om de items aan je lokale gegevens toe te voegen. Bestaande gegevens worden niet overschreven; herhaald toevoegen dupliceert dezelfde update niet. Bewust lege verzamelingen blijven bij herladen leeg. Na het zelf verwijderen van een update-item kun je het via deze knop opnieuw toevoegen.

De oorspronkelijke ondertekende PDF, Teams-deelnamegegevens en het persoonlijke nieuwsbriefadres worden niet gepubliceerd. De bedragen zijn afkomstig uit de overeenkomst bij de aanvraag, niet uit een bevestigde beschikking. Automatische e-mail/nieuwsbrief is nog niet gekoppeld.
