---
layout: cours
title:  "Internet : le réseau des réseaux"
date:   2020-08-31 17:09:00 +0200
categories: Mathématiques
description: Depuis son lancement, en 1983, Internet s'est imposé (en moins de quarante ans !) comme le mode principal de communication entre les humains à l'échelle mondiale. À l'heure actuelle, on estime qu'environ la moitié de la population mondiale dispose d'un accès à Internet, et ce chiffre est en constante augmentation.
---

<p class="lead drop-cap">Dans ce premier cours, nous allons nous intéresser à Internet. Internet est le réseau informatique mondial grand public, celui que nous utilisons, en ce moment même, pour communiquer et travailler ce cours ensemble. Nous allons nous pencher sur son histoire et les principes de son fonctionnement. Mais, d'abord, il nous faut répondre à une question plus compliquée qu'il n'y paraît : qu'est-ce que c'est, Internet ?</p>

## 1. La naissance d'un réseau universel

Depuis son lancement, en 1983, Internet s'est imposé (en moins de quarante ans !) comme le mode principal de communication entre les humains à l'échelle mondiale. À l'heure actuelle, on estime qu'environ la moitié de la population mondiale dispose d'un accès à Internet, et ce chiffre est en constante augmentation.

-> Ce succès s'explique par les caractéristiques techniques d'Internet, mais aussi par la philosophie qui est à l'origine de sa conception et de sa gouvernance.

### a. Une communication décentralisée

Après l'apparition des premiers ordinateurs électroniques, dans les années 1950, les premiers **réseaux de communication** entre ordinateurs sont développés dans les années 1960 et 1970, en Europe et aux États-Unis. Ces réseaux sont d'abord de taille très modeste, reliant quelques poignées d'appareils dans quelques universités et laboratoires de recherche grâce à des lignes téléphoniques.

Ce qui fait la force de ces réseaux c'est qu'ils sont décentralisés : contrairement aux réseaux du téléphone, de la radiotélégraphie ou de la télévision, il n'existe pas de centre unique d'émission/réception par lequel transitent toutes les télécommunications. L'enjeu est militaire autant que scientifique : dans le contexte de la guerre froide, les systèmes de communication centralisés ont le défaut d'être trop vulnérables à une possible attaque armée.

-> Ainsi, c'est pour le réseau de missiles de défense antiaérienne de l'armée de l'air américaine que l'ingénieur de la *RAND Corporation*, Paul Baran, conçoit un modèle de fonctionnement de réseau de communication décentralisé.

![représentation d'un réseau centralisé et décentralisé]({{site.url}}/images/cours/snt/2-fnx-snt-c01-img01.png)

NPL Network est la première démonstration d'un réseau fonctionnant selon le modèle de Paul Baran. Réalisé par le britannique Donald Davies, il nommera ce modèle « **commutation par paquets** ». Dans un tel réseau, les informations à envoyer sont d'abord découpées en **paquets** de taille réduite. Chaque ordinateurs sur le trajet sert de relais, recevant et émettant les paquets selon un protocole donné.

|Nom du réseau|Zone géographique|Organisation opératrice|Création|Principaux concepteurs|
|---|---|---|---|---|
|NPL Network|Angleterre|National Physical Laboratory|1967|Donald Davies|
|Arpanet|États-Unis|Département de la Défense (armée américaine)|1969|Bob Kahn et Vin Cerf|
|Cyclades|France|Institut de recherche en informatique et automatique (aujourd'hui INRIA)|1971|Louis Pouzin|
|Merit Network|Michigan|Universités publiques du Michigan|1972|/|
|Telenet|États-Unis|BBN Technologies (entreprise privée)|1974|/|

### b. Des paquets qui circulent

Au fur et à mesure que ces réseaux se développent indépendamment, la question commence à se poser de leur interconnexion : ne pourrions-nous pas relier ces différents réseaux entre eux en un **réseau de réseaux** ?

La difficulté que cela pose est que ces différents réseaux, bien que s'inspirant fortement les uns des autres, n'ont pas les mêmes règles de fonctionnement : ils n'utilisent pas le même **protocole de communication**.

#### ***Définition***

**Protocole de communication** :  
En informatique, on parle de protocole de communication pour la spécification de règles de communication entre deux appareils informatiques, permettant l'échange d'une information entre ces deux appareils.

#### ***À retenir***

Lorsqu'un appareil informatique envoie une donnée **X** sur un réseau de communication, il **encapsule** la donnée selon un protocole **P** : il transforme **X** en une donnée **P(X)** qui sera envoyé sur le réseau. À la réception, **P(X)** sera décapsulée par le destinataire : il lui appliquera la transformation inverse pour récupérer la donnée **X**.

#### ***Exemple***

On peut utiliser l'image du courrier postal pour comprendre ce processus. Lorsque nous envoyons une lettre par courrier, nous la mettons dans une enveloppe (encapsulation) avant de la confier au service postal. Sur l'enveloppe sont indiquées, selon un protocole précis, les informations permettant de remettre l'enveloppe au destinataire, celui-ci n'aura qu'à l'ouvrir (décapsulation) pour en extraire la lettre.

Dans les protocoles par commutation de paquets, les paquets sont constitués :  
- d'un en-tête (header) contenant les informations nécessaires pour gérer le parcours de l'information,
- du fragment d'information que nous voulons transmettre.

L'empilement des protocoles correspond donc à l'ajout de plusieurs en-têtes les uns avant les autres.

-> Une donnée encapsulé **P(X)** peut être **à nouveau encapsulée** selon un autre protocole **Q** : le résultat est **Q(P(X))**. Pour obtenir la donnée d'origine, il faudra décapsuler **Q(P(X))** suivant, dans l'ordre, les protocoles **Q** et **P**.

#### ***Définition***

**Pile de protocoles** :  
On appelle une pile de protocoles l'ensemble des protocoles successifs utilisés pour transmettre une même donnée.

### c. Un protocole pour les unifier tous

Ce sont les américains Bob Khan et Vint Cerf, travaillant au développement d'Arpanet, le plus grand réseau de l'époque, qui vont s'inspirer des travaux de l'équipe française de Cycaldes pour proposer, en 1982, un protocole permettant **l'interconnexion de réseau** (*internetworking*) : le **protocole TCP/IP**.

-> Il s'agit en réalité de deux protocoles, empilés l'un sur l'autre : le ***Transmission Control Protcol*** (protocole réseau).

#### ***À retenir***

On définit aujourd'hui Internet comme le réseau de communication utilisant le protocole IP (la plupart du temps, utilisé en conjonction avec TCP).

Le **1er janvier 1983,**  TCP/IP devient le seul protocole officiellement approuvé sur le réseau Arpanet.

-> Cette date peut être considérée comme celle de la **naissance d'Internet**.

Petit à petit, de plus en plus de réseaux américains s'interconnectent. L'usage de TCP/IP se répand en Europe et en Asie vers la fin des années 1980, quand les premiers **fournisseurs d'accès à Internet** (FAI) apparaissent et proposent au grand public d'accéder au réseau. Arpanet, en tant qu'entité, cesse d'exister en 1990.

Une communication sur Internet peut être représentée par ce que l'on appelle le **modèle TCP/IP** : la donnée souvent déjà encapsulée par le logiciel qu'utilise l'ordinateur émetteur (on parle des protocoles **couches hautes**), reçoit un en-tête TCP puis IP. Le datagramme (ou paquet de données) obtenu est envoyé sur le réseau, quel qu'il soit, sur lequel s'appuie la communication. Ce réseau encapsule de nouveau le datagramme avant de le transformer sous forme de signal physique. Ceci sera répété plusieurs fois, de proche en proche, jusqu'à ce que le paquet atteigne sa destination finale où il sera complètement décapsulé.

![schéma du protocole tcp/ip]({{site.url}}/images/cours/snt/2-fnx-snt-c01-img02.png)

## 2. Un succès mondial

Internet est aujourd'hui composé de millions de réseaux de natures très différentes, tant au niveau de leur **statut juridique** (certains appartiennent à des États, d'autres à des entreprises, à des particuliers...) que de la **technologie** utilisée et du **support physique** de cette technologie.

### a. Un réseau de plus en plus performant

#### À retenir

La qualité d'une connexion entre deux appareils se mesure avec trois grandeurs :

1. le **débit descendant** mesure la quantité d'informations que l'on peut recevoir en une seconde;
2. le **débit ascendant** mesure la quantité d'informations que l'on peut envoyer en une seconde;
3. le **temps de latence** est le temps entre l'envoi d'un message et sa réception.

Les débits descendant et ascendant se mesurent souvent en bits par seconde (bps) - on parle parfois de **bande passante** pour le débit maximal d'une ligne, bien que ce soit un abus de langage. Le temps de latence se mesure secondes. Avoir un faible temps de latence est important pour les usages d'Internet en temps réel (conversation vocale, vidéo, jeux vidéo en ligne...).

Les performances des technologies servant de support à Internet ont augmentés très rapidement depuis les années 1960. Pour donner un ordre de grandeur, voici une évolution des performances des modems en fonction du temps.

|1972|1977|1986|1998|2014|
|---|---|---|---|---|
|Coupleurs acoustiques|Coupleurs acoustiques|Modem ISDN|ADSL|Gfast|
|300 bps|1200 bps|144 kbps|10 Mbps|1 Gbps|

Avec l'amélioration des performances et la massification de l'usage d'Internet, de plus en plus de modes de communication sont abordés, entièrement ou en partie, par Internet : le télégramme, le télex... L'accès à la télévision passe de plus en plus par Internet; le courrier postal s'est grandement réduit (bien que le volume du colis postal soit en constante augmentation avec la généralisation de l'achat par correspondance sur Internet). Avec la **VoIP** (Vox on IP), c'est le téléphone qui risque d'être absorbé par Internet. On estime qu'en 2021, le trafic total sur Internet atteindra 3300 milliards de milliards d'octets (3,3 x 10²1 octets).

#### ***Rappel***
Un octet correspond à 8 bits.

### b. Un réseau multisupport

Les protocoles TCP/IP sont indépendants du support matériel et de nombreuses technologies peuvent être utilisées pour communiquer des informations selon ces protocoles. Les premiers réseaux utilisaient des lignes téléphoniques et donc transformaient les paquets en signal électrique. Aujourd'hui, les technologies sans fil ou laser utilisent des ondes électromagnétiques ou des signaux lasers.

-> C'est cette **indépendance vis-à-vis des supports physiques** qui donne à Internet sa flexibilité et son caractère universel.

Quelques technologies courantes sont données dans le tableau suivant.

|Technologie|Support physique|Propriétés|
|---|---|---|
|ADSL|Filaire (réseau téléphonique)|Le principal moyen d'accès haut-débit à Internet en France. Fort débit descendant mais faible débit ascendant.|
|Réseau commuté|Filaire (réseau téléphonique)|Utilisé en France jusque dans les années 2000. Bas débit et peu pratique, car on ne pouvait pas utiliser en même temps Internet et le téléphone.|
|FTTx|Laser (fibre optique)|Débit bien plus important que l'ADSL, mais demande de nouvelles infrastructures. La France investit massivement pour installer la fibre, petit à petit, sur tout le territoire.|
|Ethernet|Filaire|Utilisé pour connecter différents appareils d'un réseau local|
