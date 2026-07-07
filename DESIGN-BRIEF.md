# Brief de design — Site vitrine ALCONSULTIC

Ce document est le **prompt de référence** utilisé pour générer le template du site
ALCONSULTIC avec le skill de design UX/UI (`frontend-design`). Il peut être réutilisé
tel quel pour régénérer, faire évoluer ou déléguer le design à une autre session.

## 1. Contexte de la marque

- **Nom** : ALCONSULTIC — Cabinet de consulting en IT & TIC (Technologies de
  l'Information et de la Communication), basé à Boumerdès, Algérie, rayonnement MENA.
- **Positionnement** : conseil en transformation digitale, ERP/CRM (Odoo, SAGE X3),
  cybersécurité, agents IA & gouvernance IA (HITL/HOTL), formation, marketing digital.
- **Ton de marque** : expert, moderne, rassurant, "tech" sans être froid — cf. les
  contenus LinkedIn de l'entreprise sur la sécurité des agents IA.
- **Dirigeante** : Lydia Azzi, CEO & Senior IT & Digital Strategy Consultant, 14+ ans
  d'expérience, 400+ entreprises accompagnées (World Bank/WEFI, Deloitte, GIZ, UNDP,
  ANGEM).

## 2. Identité visuelle (kit fourni par la cliente)

Logo : monogramme "A/L" en deux triangles entrelacés (dégradé violet → cyan) suivi du
mot "CONSULTIC" (violet + cyan), sur fond blanc. Un post de marque de référence
confirme un habillage sombre "tech" pour les supports de communication.

Palette extraite du logo et du kit (valeurs exactes, mesurées sur les fichiers
fournis) :

| Rôle | Couleur | Hex |
|---|---|---|
| Violet profond (marque) | primaire | `#4A2167` |
| Cyan/azur (marque) | primaire | `#00AAEF` |
| Cyan clair (dégradé) | secondaire | `#4ABEF7` |
| Lavande (accent, glow, highlights) | accent | `#A793FF` |
| Fond sombre haut (dégradé hero) | fond | `#1F1A2B` |
| Fond sombre bas (quasi noir) | fond | `#101010` |
| Texte clair | texte | `#F5F0FF` / blanc |

Typographie : sans-serif géométrique bold pour les titres (type Poppins/Sora/Space
Grotesk), sans-serif neutre pour le corps de texte (type Inter). Grandes majuscules
bold pour les accroches, écho du style des posts LinkedIn de la marque.

Style général : **dark UI moderne et tech** — fonds sombres dégradés violet→noir,
accents lumineux cyan/lavande façon "glow", lignes fines, formes géométriques
(triangles en écho au logo), animations discrètes mais présentes (fade/slide au
scroll, effets de lumière).

## 3. Concept de la page d'accueil

### Hero — ouverture d'un PC portable
1. Au chargement, un **laptop stylisé (CSS/SVG)** apparaît fermé, centré, sur fond
   dégradé violet → noir.
2. L'écran du laptop **s'ouvre par animation** (rotation 3D de l'écran sur son axe).
3. Une fois ouvert, l'écran s'allume avec un effet de glow cyan/violet et **révèle le
   slogan de l'entreprise** ainsi qu'un CTA ("Discutons de votre projet").
4. Le monogramme du logo apparaît en filigrane/reflet sur l'écran ou en clavier.
5. Doit rester léger (CSS transforms + un peu de JS), accessible (respecte
   `prefers-reduced-motion`), et fonctionner sans dépendance externe lourde.

### Sections suivantes (ordre)
1. **Hero** (ouverture laptop + slogan + CTA)
2. **À propos** — présentation ALCONSULTIC + stats clés (14+ ans, 400+ entreprises,
   présence MENA)
3. **Services** — grille de services (Conseil IT, Développement logiciel, Gestion de
   projets, Transformation numérique, Support technique, Cybersécurité & IA)
4. **Pourquoi ALCONSULTIC** — 4 points forts (expertise technique, solutions sur
   mesure, engagement client, optimisation des process)
5. **Méthodologie** — 4 étapes (Analyse, Planification, Exécution agile, Suivi)
6. **Témoignages clients**
7. **Contact / footer** — coordonnées, réseaux sociaux, CTA final

## 4. Contenu réel à utiliser (issu des documents de la cliente)

- Slogan hero : « Transformez votre entreprise » — « Expertise en transformation
  digitale et technologique »
- Texte hero : « ALCONSULTIC vous accompagne dans la modernisation de vos processus
  internes pour une performance augmentée et une compétitivité renforcée sur le
  marché. »
- À propos : « ALCONSULTIC est une entreprise de conseil dynamique spécialisée dans
  l'accompagnement des entreprises dans leur transformation digitale, offrant des
  solutions sur mesure adaptées à chaque client. »
- Services : Conseil en IT · Développement de logiciels · Gestion de projets ·
  Transformation numérique · Support technique · (+ Cybersécurité & Agents IA, en
  cohérence avec le positionnement 2026 de la marque)
- Pourquoi nous choisir : Expertise technique · Solutions personnalisées ·
  Engagement client · Optimisation des processus
- Méthodologie : 01 Analyse approfondie · 02 Planification stratégique · 03 Exécution
  agile · 04 Suivi et optimisation
- Témoignages : David Martin, Sophie Lefèvre, Alexandre Perrin (citations client)
- Contact : azzilydia@alconsultic.com · +213 656 630 633 · Cité EPLF, Boumerdès,
  Algérie · alconsultic.digital · Facebook / Instagram / YouTube / LinkedIn
  `@alconsultic`

## 5. Exigences techniques

- Livrable : maquette front-end haute-fidélité **HTML/CSS/JS statique**, pensée pour
  être ensuite intégrée comme thème/template WordPress (sections découpables en
  template-parts, classes BEM claires, pas de framework lourd).
- 100% responsive (mobile-first), accessible (contrastes AA, `alt`, focus visibles,
  `prefers-reduced-motion`).
- Aucune dépendance externe bloquante (polices via Google Fonts en fallback système
  acceptable, pas de CDN JS lourd).
- Performance : animations en CSS transform/opacity, JS minimal (IntersectionObserver
  pour les reveals au scroll).

## 6. Utilisation de ce prompt

Donner ce document tel quel au skill `frontend-design` (ou à toute session Claude)
avec l'instruction : *"Construis la page d'accueil ALCONSULTIC en suivant ce brief à
la lettre : palette, contenu et structure de section sont figés ; libre à toi sur le
détail d'implémentation CSS/JS de l'animation laptop et des micro-interactions."*
