export default (context) => {
  return new Promise(function(resolve) {
    resolve({
      name: 'يونيفارواب',
      dir: 'rtl',

      links: {
        home: 'الصفحة الرئيسية',
        works: 'اخر الاعمال',
        prestations: 'الخدمات',
        agency: 'الوكالة',
        contact: 'اتصل',
        ariaLabel: 'افتح القائمة'
      },

      home: {
        title: 'تصميم مواقع الويب',
        description: 'محتوى قادم ...',
        create: {
          title: 'نقوم بإنشاء مواقع الويب.',
          text:
            'نقوم بتصميم مواقع الويب التي تلبي توقعاتك بدقة وتحترم تمامًا صورة علامتك التجارية.'
        }
      },

      works: {
        title: 'اخر الاعمال',
        description: 'محتوى قادم ...',
        work: [
          {
            id: '1',
            name: 'أكوديم',
            content: 'محتوى قادم ...',
            thumbnail: 'https://picsum.photos/750/800?random=1',
            slug: 'acodim'
          },
          {
            id: '2',
            name: 'بوتانيك الجزائر',
            content: 'محتوى قادم ...',
            thumbnail: 'https://picsum.photos/750/800?random=2',
            slug: 'botanique-algerie'
          },
          {
            id: '3',
            name: 'تي بي بي أل',
            content: 'محتوى قادم ...',
            thumbnail: 'https://picsum.photos/750/800?random=3',
            slug: 'tpbl'
          },
          {
            id: '4',
            name: 'إنفو إيليك',
            content: 'محتوى قادم ...',
            thumbnail: 'https://picsum.photos/750/800?random=4',
            slug: 'infoelec'
          },
          {
            id: '5',
            name: 'صوبروفور',
            content: 'محتوى قادم ...',
            thumbnail: 'https://picsum.photos/750/800?random=5',
            slug: 'soprofort'
          },
          {
            id: '6',
            name: 'كوريم',
            content: 'محتوى قادم ...',
            thumbnail: 'https://picsum.photos/750/800?random=6',
            slug: 'corim'
          }
        ]
      },

      prestations: {
        title: 'الخدمات',
        description: 'محتوى قادم ...'
      },

      agency: {
        title: 'الوكالة',
        description: 'محتوى قادم ...',
        webAgency: {
          title: 'نحن وكالة ويب متخصصة في إنشاء واستضافة ومراجع مواقع الويب.',
          text_1:
            'تأسست منذ 2011 في الجزائر العاصمة ، لدينا فريق مبدع وديناميكي وعاطفي لعملهم.',
          text_2:
            'مهمتنا هي تصميم مواقع الويب التي تلبي توقعاتك وتحترم صورة علامتك التجارية.'
        },
        methode: {
          title: 'طريقة عملنا',
          ecoute: {
            title: 'استمع',
            text:
              'للتعرف عليك بشكل أفضل ، سنحاول فهم العناصر الأساسية مثل نشاطك وفلسفتك وأهدافك وقيودك.'
          },
          recherche: {
            title: 'البحث',
            text:
              'بعد التعرف على بعضهم البعض بشكل أفضل وفهم مشروعك ، سنجد حلولًا تتناسب مع احتياجاتك مع احترام صورة علامتك التجارية.'
          },
          creation: {
            title: 'تأسيس',
            text:
              'من خلال التشاور وإعلامك خطوة بخطوة ، يبدأ مشروعك في أن يكون له وجه ، ببساطة هو وجهك.'
          },
          suivi: {
            title: 'المراقبة والصيانة',
            text:
              'بعد نشر الموقع ، سنرافقك في صيانة وتحديث الموقع ، في التدريب والمراجع وتحليل حركة المرور.'
          }
        }
      },

      contact: {
        title: 'اتصل',
        description: 'أخبرنا عن احتياجاتك ، ونود العمل معك.',
        text:
          'إنشاء مواقع احترافية هو ما نقوم به. أخبرنا عن احتياجاتك ، ونود العمل معك.',
        form: {
          fullname: 'اسمك',
          company: 'اسم الشركة',
          email: 'البريد الإلكتروني',
          message: 'صف المشروع',
          submit: 'إرسال'
        },
        other: {
          title: 'طرق أخرى للاتصال بنا',
          direction: {
            title: 'إدارة عامة',
            email: 'h.nedjar@univerweb.dz'
          },
          technique: {
            title: 'خدمة تقنية',
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
          name: 'يونيفارواب',
          streetAddress: '62 ، تعاونية المبنية',
          addressLocality: 'بئر خادم',
          postalCode: '330 16',
          addressCity: 'الجزائر العاصمة '
        },
        maps: 'احصل على الاتجاهات',
        phone: {
          label: 'الهاتف / الفاكس:',
          number: '021 44 08 11'
        },
        mobile: {
          label: 'جوال:',
          number: '0551 90 46 22'
        },
        email: {
          label: 'البريد الإلكتروني:',
          mailto: 'contact@univerweb.dz'
        },
        social: {
          twitter: 'انضم إلينا على تويتر',
          facebook: 'انضم إلينا على فيسبوك',
          github: 'انضم إلينا على جيث هوب'
        },
        copy: 'حقوق النشر 2020 يونيفارواب. جميع الحقوق محفوظة. '
      }
    })
  })
}