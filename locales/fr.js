export default (context) => {
  return new Promise(function(resolve) {
    resolve({
      name: 'Univerweb',
      dir: 'ltr',

      links: {
        home: 'Accueil',
        works: 'Réalisations',
        prestations: 'Prestations',
        agency: "L'agence",
        contact: 'Contact',
        ariaLabel: 'Ouvrir le menu'
      },

      home: {
        title: 'Création de sites web',
        description: 'Contenu à venir…',
        create: {
          title: 'Nous créons des sites web.',
          text:
            'Nous concevons des sites web qui répondent précisément à vos attentes et qui respectent intégralement votre image de marque.'
        }
      },

      works: {
        title: 'Réalisations',
        description: 'Contenu à venir…',
        work: [
          {
            id: '1',
            name: 'Acodim',
            content: 'Contenu à venir…',
            thumbnail: 'https://picsum.photos/750/800?random=1',
            slug: 'acodim'
          },
          {
            id: '2',
            name: 'Botanique Algérie',
            content: 'Contenu à venir…',
            thumbnail: 'https://picsum.photos/750/800?random=2',
            slug: 'botanique-algerie'
          },
          {
            id: '3',
            name: 'TPBL',
            content: 'Contenu à venir…',
            thumbnail: 'https://picsum.photos/750/800?random=3',
            slug: 'tpbl'
          },
          {
            id: '4',
            name: 'infoElec',
            content: 'Contenu à venir…',
            thumbnail: 'https://picsum.photos/750/800?random=4',
            slug: 'infoelec'
          },
          {
            id: '5',
            name: 'Soprofort',
            content: 'Contenu à venir…',
            thumbnail: 'https://picsum.photos/750/800?random=5',
            slug: 'soprofort'
          },
          {
            id: '6',
            name: 'Corim',
            content: 'Contenu à venir…',
            thumbnail: 'https://picsum.photos/750/800?random=6',
            slug: 'Corim'
          }
        ]
      },

      prestations: {
        title: 'Prestations',
        description: 'Contenu à venir…'
      },

      agency: {
        title: "L'agence",
        description: 'Contenu à venir…',
        webAgency: {
          title:
            'Nous sommes une agence web spécialisée dans la création, l’hébergement et le référencement de sites web.',
          text_1:
            'Installée depuis 2011 à Alger, nous avons une équipe créative, dynamique et passionnée par son travail.',
          text_2:
            'Notre métier consiste à concevoir des sites web qui répondent à vos attentes et qui respectent votre image de marque.'
        },
        methode: {
          title: 'Notre méthode de travail',
          ecoute: {
            title: 'Écoute',
            text:
              'Afin de mieux vous connaitre, nous essaierons de comprendre des éléments essentiels tels que votre activité, votre philosophie, vos objectifs et vos contraintes.'
          },
          recherche: {
            title: 'Écoute',
            text:
              'Après avoir mieux fait connaissance et cerner votre projet, nous trouverons des solutions adaptées à vos besoins tout en respectant votre image de marque.'
          },
          creation: {
            title: 'Écoute',
            text:
              'En vous consultant et informant étape par étape, votre projet commence à avoir un visage, le votre tout simplement.'
          },
          suivi: {
            title: 'Écoute',
            text:
              "Après la publication du site web, nous vous accompagnerons dans la maintenance et mise à jour du site, dans la formation et le référencement et dans l'analyse du trafic."
          }
        }
      },

      contact: {
        title: 'Contact',
        description:
          'Parlez-nous de vos besoins, nous serions ravis de collaborer avec vous.',
        text:
          "Créer des sites web professionnels, c'est ce que nous faisons. Parlez-nous de vos besoins, nous serions ravis de collaborer avec vous.",
        form: {
          fullname: 'Votre nom',
          company: 'Votre entreprise',
          email: 'Votre e-mail',
          message: 'Décrivez-nous votre projet',
          submit: 'Soumettre'
        },
        other: {
          title: 'Autres moyens de nous contacter',
          direction: {
            title: 'Direction générale',
            email: 'h.nedjar@univerweb.dz'
          },
          technique: {
            title: 'Service technique',
            email: 'webmaster@univerweb.dz'
          }
        }
      },

      error: {
        message_1: 'Oups… pas de bol.',
        message_2: "Une erreur s'est produite",
        btn: "Retour à l'accueil"
      },

      footer: {
        address: {
          name: 'Univerweb Eurl',
          streetAddress: '62, coopérative El Mebniya',
          addressLocality: 'Birkhadem',
          postalCode: '16 330',
          addressCity: 'Alger'
        },
        maps: 'Obtenir un itinéraire',
        phone: {
          label: 'Téléphone / fax :',
          number: '021 44 08 11'
        },
        mobile: {
          label: 'Mobile :',
          number: '0551 90 46 22'
        },
        email: {
          label: 'E-mail :',
          mailto: 'contact@univerweb.dz'
        },
        social: {
          twitter: 'Rejoignez-nous sur Twitter',
          facebook: 'Rejoignez-nous sur Facebook',
          github: 'Rejoignez-nous sur GitHub'
        },
        copy: 'Copyright 2020 Univerweb. Tous droits réservés.'
      }
    })
  })
}