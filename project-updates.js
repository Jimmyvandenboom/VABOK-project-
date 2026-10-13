'use strict';
// Handmatig vastgelegde informatie uit de aangeleverde overeenkomst en uitnodiging.
const PROJECT_UPDATES = [
  {
    "type": "tasks",
    "values": {
      "title": "Online startbijeenkomst VABOK 4",
      "kind": "Afspraak",
      "date": "2026-11-06",
      "time": "11:30",
      "location": "Microsoft Teams",
      "description": "Vrijdag 6 november 2026, 11.30–12.30 uur (Nederlandse tijd). Agenda volgt de week ervoor. Projectleiders: Yvonne van Santen en Eveline Hofman, mede namens Marie-Claire Gambon. Gebruik de oorspronkelijke uitnodiging voor de deelnamelink. Dit is een andere afspraak dan de inspiratiesessie van 19 november.",
      "priority": "Normaal"
    }
  },
  {
    "type": "important",
    "values": {
      "title": "VABOK 4 — projectdoelen en partners",
      "category": "Projectkader",
      "text": "Volgens de samenwerkingsovereenkomst bij de aanvraag: betere aansluiting en minder uitval/switch in de commerciële beroepskolom in Haaglanden. Route: vo E&O → mbo Commercie → commerciële hbo-opleidingen. Partners: Maris, Esloo, Atlas, YES en Dalton, ROC Mondriaan (penvoerder) en De Haagse Hogeschool. Looptijd volgens plan: september 2026–augustus 2029. Eerste jaar: organisatie, analyse en visie. Denkrichtingen: doorlopende LOB, warme overdracht, gezamenlijke praktijkopdrachten en afstemming keuzevakken/keuzedelen. Concrete pilots zijn nog uit te werken. Bron: overeenkomst, p. 2–12; volledige aanvraag en beschikking nog niet ingezien."
    }
  },
  {
    "type": "important",
    "values": {
      "title": "Financiering volgens aanvraag — toekenning controleren",
      "category": "Subsidie",
      "text": "De overeenkomst noemt €420.000 per jaar gedurende drie jaar voor het hele samenwerkingsverband. Startfee vo: €5.000 per school/scholengroep voor de voorbereidende fase; geen persoonlijk budget en niet uitsluitend voor Bohemen. Betaling volgens overeenkomst binnen 30 dagen na ontvangst van de subsidie door Mondriaan, na positieve beoordeling. Vervolgverdeling via begroting vastgesteld door stuurgroep. Begroting voorbereidende fase uiterlijk oktober 2026; begroting 2027 uiterlijk december 2026. Toekenning, ontvangst en Maris/Bohemen-budget zijn niet bevestigd. Bron: p. 9 en 13–15."
    }
  },
  {
    "type": "important",
    "values": {
      "title": "Mijn rol en uren: stuurgroep of projectgroep?",
      "category": "Open vraag",
      "text": "Jimmy vermoedt dat hij namens Maris wordt afgevaardigd; rol nog te bevestigen. Overeenkomst: stuurgroep doorgaans directeur/schoolleider/rector/opleidingsmanager, stelt begroting en jaarplan vast. Projectgroep bestaat uit docenten, ontwikkelt en voert deelprojecten uit en koppelt terug naar eigen team. Bijlage noemt 0,2 fte voor projectgroeplid: circa 8 klokuren/week bij 40 uur of circa 332 uur/jaar bij een vo-jaartaak van 1.659 uur. Dit omvat voorbereiding, overleg, ontwikkeling en rapportage; zes lesuren zijn niet automatisch hetzelfde. Hoofdtekst noemt in startfase circa vier uur ontwikkelsessie per maand. Vraag directie naar rol, mandaat, opdracht en totale vrijroostering. Bron: p. 13 en 19–22."
    }
  },
  {
    "type": "important",
    "values": {
      "title": "Verantwoording en aandachtspunten overeenkomst",
      "category": "Projectkader",
      "text": "Maris moet deelname, activiteiten, resultaten en rechtmatige/doelmatige besteding kunnen aantonen. Kwartaalrapportages, jaarlijkse korte rapportage in januari en eindrapportage uiterlijk juni 2029 worden genoemd. Meld vertragingen of problemen tijdig; participatie en financiering zijn gekoppeld. Terugvordering kan instellingen raken; dit legt niet automatisch persoonlijke aansprakelijkheid bij Jimmy. Vraag actuele formats en deadlines. Onhelderheden: looptijd t/m augustus 2029 versus laatste begrotingsperiode januari–juli; bijlage noemt verouderde datum mei 2024 en moet verder worden vastgesteld. Deze kopie toont Maris-ondertekening op 13 mei 2026; tekst dateert 21 mei. Niet vastgesteld of alle partners tekenden. Bron: p. 14–22 en ondertekeningsrapport."
    }
  },
  {
    "type": "tasks",
    "values": {
      "title": "Opdracht, rol en vrijroostering bevestigen bij directie",
      "description": "Vraag of je stuurgroep- of projectgroeplid wordt; leg mandaat, doelgroep, resultaten en uren vast. Bespreek verhouding tussen zes lesuren en 0,2 fte. Bij voorkeur vóór de startbijeenkomst afstemmen; geen formele deadline bevestigd.",
      "priority": "Hoog"
    }
  },
  {
    "type": "tasks",
    "values": {
      "title": "Actuele begroting, werkafspraken en jaarplan opvragen",
      "description": "Vraag beschikking/toekenning, budget Maris en Bohemen, actuele werkafspraken en rapportageformats, jaarplan 2026–2027, contactpersoon Mondriaan Commercie en bestaande materialen/pilots op.",
      "priority": "Normaal"
    }
  },
  {
    "type": "contacts",
    "values": {
      "name": "Yvonne van Santen",
      "organization": "VABOK / ROC Mondriaan",
      "role": "Projectleider VABOK",
      "notes": "Genoemd als projectleider in de uitnodiging voor 6 november."
    }
  },
  {
    "type": "contacts",
    "values": {
      "name": "Eveline Hofman",
      "organization": "VABOK / ROC Mondriaan",
      "role": "Projectleider VABOK",
      "notes": "Genoemd als projectleider in de uitnodiging voor 6 november."
    }
  },
  {
    "type": "contacts",
    "values": {
      "name": "Marie-Claire Gambon",
      "organization": "ROC Mondriaan",
      "role": "Programmadirecteur",
      "notes": "Contactpersoon genoemd in de samenwerkingsovereenkomst; startuitnodiging mede namens haar."
    }
  },
  {
    "type": "important",
    "values": {
      "title": "Dagelijkse VABOK-mail / toekomstige nieuwsbrief",
      "category": "Open vraag",
      "text": "Gewenst: dagelijks om 08.00 uur Nederlandse tijd VABOK-updates per e-mail, later uitbreiden tot nieuwsbrief. Power Automate met Outlook/Microsoft 365 is gekozen als mogelijke route. Een geplande cloudstroom is besproken, maar bronnen, detectie van nieuwe berichten, mailactie en volledige werking zijn nog niet bevestigd. Er is nog geen werkende automatische nieuws- of mailkoppeling in deze app. Gebruik Europe/Amsterdam of de overeenkomstige Power Automate-tijdzone voor zomer-/wintertijd."
    }
  }
];
