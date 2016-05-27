
var overallTitle = null; //"Consolidated";

// var xxxSubSectors = [
//     {
//         code: "",
//         name: overallTitle
//     },
//     {
//         code: "",
//         name: ""
//     },
// ];

var artsSubSectors = [
    {
        code: "1",
        name: overallTitle
    },
    {
        code: "1.1",
        name: "Arts"
    },
    {
        code: "1.2",
        name: "Museums and libraries"
    },
    {
        code: "1.3",
        name: "Heritage and visitor attractions"
    },
    {
        code: "1.4",
        name: "Media, Film"
    },
];

var sportsSubSectors = [
    {
        code: "2",
        name: overallTitle
    },
    {
        code: "2.1",
        name: "Recreational clubs, societies",
        baseAmount: 10
    },
    {
        code: "2.2",
        name: "Agricultural fairs"
    },
    {
        code: "2.3",
        name: "Sports organisations"
    },
];

var educationSubSectors = [
    {
        code: "3",
        name: overallTitle
    },
    {
        code: "3.1",
        name: "Pre-Primary education"
    },
    {
        code: "3.2",
        name: "Primary education"
    },
    {
        code: "3.3",
        name: "Secondary education"
    },
    {
        code: "3.4",
        name: "Vocational and technical education"
    },
    {
        code: "3.5",
        name: "Third-level education"
    },
    {
        code: "3.6",
        name: "Research"
    },
    {
        code: "3.7",
        name: "Education support"
    },
    {
        code: "3.8",
        name: "Adult and continuing education"
    }
];

var healthSubSectors = [
    {
        code: "4",
        name: overallTitle,
    },
    {
        code: "4.1",
        name: "Hospitals and hospices"
    },
    {
        code: "4.2",
        name: "Residential care centres"
    },
    {
        code: "4.3",
        name: "Residential mental health services"
    },
    {
        code: "4.4",
        name: "Health services and health promotion"
    },
    {
        code: "4.5",
        name: "Mental health services"
    },
    {
        code: "4.6",
        name: "Addiction Support"
    }
];

var socialServicesSubSectors = [
    {
        code: "5",
        name: overallTitle,
    },
    {
        code: "5.1",
        name: "Pre-school childcare"
    },
    {
        code: "5.2",
        name: "Family support services"
    },
    {
        code: "5.3",
        name: "Youth services"
    },
    {
        code: "5.4",
        name: "Services for older people"
    },
    {
        code: "5.5",
        name: "Services for people with disabilities"
    },
    {
        code: "5.6",
        name: "Services for Travellers and ethnic minorities"
    },
    {
        code: "5.7",
        name: "Homeless and emergency relief"
    }

];

var developmentSubSectors = [
    {
        code: "6",
        name: overallTitle
    },
    {
        code: "6.1",
        name: "Local development"
    },
    {
        code: "6.Job creation",
        name: ""
    },
    {
        code: "6.3",
        name: "Social enterprise"
    },
    {
        code: "6.4",
        name: "Sheltered Housing"
    },
    {
        code: "6.5",
        name: "Social housing"
    },
];

var environmentSubSectors = [
    {
        code: "7",
        name: overallTitle
    },
    {
        code: "7.1",
        name: "Animal welfare"
    },
    {
        code: "7.2",
        name: "Group water schemes"
    },
    {
        code: "7.3",
        name: "Environmental enhancement"
    },
    {
        code: "7.4",
        name: "Environmental sustainability"
    },
];

var lawSubSectors = [
    {
        code: "8",
        name: overallTitle
    },
    {
        code: "8.1",
        name: "Politics"
    },
    {
        code: "8.2",
        name: "Advocacy"
    },
    {
        code: "8.3",
        name: "Civil and human rights"
    },
    {
        code: "8.4",
        name: "Legal services"
    }
];

var philanthropySubSectors = [
    {
        code: "9",
        name: overallTitle
    },
    {
        code: "9.1",
        name: "Philanthropy"
    },
    {
        code: "9.2",
        name: "Fund-raising"
    },
    {
        code: "9.3",
        name: "Voluntarism"
    },
];

var internationalSubSectors = [
    {
        code: "10",
        name: overallTitle
    },
    {
        code: "10.1",
        name: "International development"
    },
    {
        code: "10.2",
        name: "International affiliation"
    }
];

var religionSubSectors = [
    {
        code: "11",
        name: overallTitle
    },
    {
        code: "11.1",
        name: "Places of worship"
    },
    {
        code: "11.2",
        name: "Religious associations"
    },
    {
        code: "11.3",
        name: "Diocesan, parishes"
    }
];

var professionalSubSectors = [
    {
        code: "12",
        name: overallTitle
    },
    {
        code: "12.1",
        name: "Trade unions, employer organisations"
    },
    {
        code: "12.2",
        name: "Chambers of commerce"
    },
    {
        code: "12.3",
        name: "Professional or sector representative bodies"
    },

]

exports.sectors = [

    {
        code: 1,
        name: "Arts, Culture, Media",
        url: "arts",
        baseAmount: 500000,
        subSectors : artsSubSectors
    },
    {
        code: 2,
        name: "Recreation, Sports",
        url: "sport",
        baseAmount: 1000,
        subSectors : sportsSubSectors
    },
    {
        code: 3,
        name: "Education, Research",
        url: "education",
        baseAmount: 10000,
        subSectors : educationSubSectors
    },
    {
        code: 4,
        name: "Health",
        url: "health",
        baseAmount: 500000,
        subSectors : healthSubSectors
    },
    {
        code: 5,
        name: "Social Services",
        url: "social",
        baseAmount: 500000,
        subSectors : socialServicesSubSectors
    },
    {
        code: 6,
        name: "Development, Housing",
        url: "housing",
        baseAmount: 500000,
        subSectors : developmentSubSectors
    },
    {
        code: 7,
        name: "Environment",
        url: "environment",
        baseAmount: 50000,
        subSectors : environmentSubSectors
    },
    {
        code: 8,
        name: "Advocacy, Law, Politics",
        url: "law",
        baseAmount: 50000,
        subSectors : lawSubSectors
    },
    {
        code: 9,
        name: "Philanthropy, Voluntarism",
        url: "philanthropy",
        baseAmount: 1000000,
        subSectors : philanthropySubSectors
    },
    {
        code: 10,
        name: "International",
        url: "international",
        baseAmount: 500000,
        subSectors : internationalSubSectors
    },
    {
        code: 11,
        name: "Religion",
        url: "religion",
        baseAmount: 500000,
        subSectors : religionSubSectors
    },
    {
        code: 12,
        name: "Professional, Vocational",
        url: "professional",
        baseAmount: 500000,
        subSectors : professionalSubSectors
    }

];
