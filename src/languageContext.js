import React from "react";

export const languages = {
    spanish: {
        currentLanguage: "Español",
        main: {
            title: "Trabajos en Nueva York",
            createPost: "Crear anuncio",
            seeking: "busca",
            seeking2: "busca trabajo de",
            seeking3: "busca",
            seeking4: "ofrece servicios de",
            filterDefault: "Todo Nueva York",
            filterOtherArea: "Otra area en Nueva York",
            login: "Verificar mi cuenta",
            logout: "Salir de mi cuenta",
            welcome: "Bienvenido",
            tooltip: "El creador de este anuncio es un usuario verificado.",
            ambassador: "Embajador JobDirecto en Nueva York: El Kora Cesar",

            tooltip2:
                "Este anuncio ha sido reportado por distintos usuarios. Cuidado!",

            premium: "You are a premium user!"
        },
        premiumModal: {
            title: "Solo los usuarios premium pueden cerrar sus anuncios :)",
            deny: "Otro dia",
            buyPremium: "Comprar cuenta premium ($5)"
        },
        deleteModal: {
            title: "Desea eliminar este anuncio?",
            yes: "Si"
        },
        login: {
            title: "Porfavor ingrese a su cuenta para continuar",
            text:
                "Luego de iniciar sesion podra hacer nuevas cosas, como reportar anuncios indebidos o borrar sus anuncios cuando ya no los necesite (cuenta premium)",
            button: "Iniciar Sesión con Facebook"
        },
        postType: {
            title: "Que busca?",
            seeksJob: "Busco Trabajo",
            seeksPeople: "Busco Personal",
            offersService: "Ofrezco Servicios",
            button: "Siguiente"
        },
        jobForm: {
            question1: "Como se llama su negocio?",
            question2: "Que busca?",
            question3: "Cuanto paga?",
            question4: "Paga en cheque o cash?",
            question5: "Cual es el horario?",
            question6: "Direccion del local:",
            question7: "En que area se encuentra?",
            question8: "Numero de celular? (opcional)",
            question9: "Por quien preguntar?",
            question10: "Algo que desee agregar?",
            question11:
                "Desea que su anuncio tenga color y este por encima del resto? Esto cuesta $10.",
            jobFormButton: "Listo",
            payType1: "Cash",
            payType2: "Cheque",
            payType3: "Cash y Cheque",
            filterOtherArea: "Otra area en NY",
            title: "Encuentre al mejor personal para su negocio",
            extraArea: "Cual es el nombre del area donde esta ubicado?",
            specialAnswer: "Si, quiero que mi anuncio sea especial",
            verifyCall1:
                "Tip: Si desea cerrar sus anuncios cuando ya no los necesite, primero debe",
            verifyCall2: "crear una cuenta.",
            linkReferral: "Todos los trabajos en www.jobdirecto.com"
        },
        jobConfirm: {
            title: "Su anuncio",
            name: "Nombre:",
            position: "Puesto:",
            payment: "Salario:",
            payType: "Paga en:",
            schedule: "Horario:",
            address: "Direccion:",
            area: "Area:",
            phone: "Numero:",
            contact: "Preguntar por:",
            extraInfo: "Mas informacion:",
            button: "Publicar"
        },
        modalJob: {
            reportedAlready:
                "Usted ya ha reportado este anuncio. Si 10 personas reportan el mismo anuncio, le daremos bandera roja",
            thanksForReporting:
                "Gracias por reportar este anuncio. Si 10 personas reportan el mismo anuncio, le daremos bandera roja",
            pleaseLogin: "Para poder reportar un anuncio, primero debe",
            pleaseLogin2: "crear una cuenta JobDirecto",
            report: "Reportar",
            pleaseReport:
                "Si cree que este anuncio es indebido, porfavor reportelo."
        },
        personModal: {
            name: "Nombre:",
            status1: "Busca:",
            status2: "Servicios de:",
            experience: "Experiencia:",
            schedule: "Horario:",
            area: "Area:",
            phone: "Numero:",
            extraInfo: "Mas info:"
        },
        PrePayPerson: {
            text1:
                "Los anuncios para buscar trabajo tienen un costo de 10 dolares",
            text2: "Su anuncio no sera borrado",
            text3:
                "y se mantendra al top de la lista de anuncios por 48 horas.",
            button: "Gracias ya no deseo",
            buttonPay: "Pagar $10"
        },
        contactInfo: {
            contactInfo:
                "Si tiene preguntas, quejas o sugerencias, porfavor envie un correo a wilfredo@jobdirecto.com"
        },
        premiumSet: {
            title: "Gracias por con confiar en JobDirecto!",
            activate: "Activar cuenta premium"
        },
        serviceModal: {
            name: "Nombre:",
            serviceOffered: "Servicio que ofrece:",
            serviceNumber: "Numero:",
            serviceExtraInfo: "Mas info:"
        },
        jobPayPage: {
            title: "Usted a marcado anuncio TOP",
            text1:
                "Los anuncios TOP son de otro color y se mantienen al top de la lista por 48 horas.",
            text2:
                "Si desea encontrar al mejor personal lo mas rapido posible, esta es la mejor opcion para usted.",
            buttonNO: "Quiero un anuncio gratis y comun",
            buttonYES: "Pagar $10"
        },
        serviceConfirm: {
            title: "Su anuncio esta listo para ser publicado:",
            serviceOwner: "Nombre: ",
            serviceOffered: "Servicio que ofrece: ",
            area: "Area: ",
            serviceNumber: "Numero:",
            serviceExtraInfo: "Mas info:",
            button: "Publicar anuncio"
        },
        serviceForm: {
            serviceOwner: "Cual es su nombre o el de su compania?",
            serviceOffered: "Que servicios ofrece?",
            serviceNumber: "A que numero pueden llamarlo?",
            serviceExtraInfo: "Algo que desee agregar?",
            button: "Listo",
            placeholder:
                "Aqui puede poner cualquier informacion que le ayude a vender mejor sus servicios"
        }
    },
    english: {
        currentLanguage: "English",
        main: {
            title: "Jobs in New York",
            createPost: "New Post",
            seeking: "needs",
            seeking2: "is looking for a job as",
            seeking3: "is looking for a",
            seeking4: "offers services as",
            filterDefault: "All NY",
            filterOtherArea: "Other area in NY",
            login: "Verify my account",
            logout: "Logout",
            welcome: "Welcome",
            tooltip: "The author of this post is a verified user.",
            tooltip2:
                "This post has been reported by different users. Be careful!",

            premium: "You are a premium user!",
            ambassador: "JobDirecto ambassador in NY: El Kora Cesar"
        },
        modalJob: {
            reportedAlready: "You already reported this post.",
            thanksForReporting: "Thanks for reporting this post",
            pleaseLogin: "To report a post, first you must",
            pleaseLogin2: "create an account",
            report: "Report",
            pleaseReport:
                "If you think this ad is inadequate, please report it."
        },

        serviceForm: {
            serviceOwner: "What is the name of your business?",
            serviceOffered: "What services do you offer?",
            serviceNumber: "How can people reach out to you?",
            serviceExtraInfo: "Any other info you'd like to add?",
            button: "Finish",
            placeholder:
                "Please add here any info that helps you sell your services better"
        },
        premiumSet: {
            title: "Thanks for trusting JobDirecto!",
            activate: "Activate premium now"
        },
        premiumModal: {
            title: "Only premium users can close their posts :)",
            deny: "Nevermind",
            buyPremium: "Get premium account ($5)"
        },

        login: {
            title: "Please login to continue",
            text:
                "After logging in with you will be able to do new things, such a report posts or delete your posts when you don't need them anymore (premium account)",
            button: "Login with Facebook"
        },
        postType: {
            title: "What is your post about?",
            seeksJob: "I'm looking for a job",
            seeksPeople: "I'm looking for staff",
            offersService: "I want to promote my services",
            button: "Next"
        },
        jobForm: {
            question1: "Name of your company",
            question2: "What position are you looking to fill?",
            question3: "How much do you pay?",
            question4: "Pay in check or cash?",
            question5: "Schedule",
            question6: "Address",
            question7: "Area",
            question8: "Phone Number (optional)",
            question9: "Contact name",
            question10: "Something you'd like to add?",
            question11:
                "Would you like this post to have color and be on top of the rest? This costs $10.",
            jobFormButton: "Finish",
            payType1: "Cash",
            payType2: "Check",
            payType3: "Cash and Check",
            filterOtherArea: "Other area in NY",
            title: "Fill out the form and find staff in seconds",
            extraArea: "What''s the name of the area?",
            specialAnswer: "Yes, I want my post to be special",
            verifyCall1:
                "Tip: If you'd like to delete your posts when you don't need them anymore, please",
            verifyCall2: "sign up first",
            linkReferral: "For more jobs, please go to www.jobdirecto.com"
        },
        contactInfo: {
            contactInfo:
                "If you have questions, suggestions or complains, please send an email to wilfredo@jobdirecto.com"
        },
        jobConfirm: {
            title: "Your post",
            name: "Name:",
            position: "Looking for:",
            payment: "Salary:",
            payType: "Pays in:",
            schedule: "Schedule:",
            address: "Address:",
            area: "Area:",
            phone: "Number:",
            contact: "Ask for:",
            extraInfo: "More info:",
            button: "Publish"
        },
        deleteModal: {
            title: "Do you want to delete this post?",
            yes: "Yes"
        },

        serviceConfirm: {
            title: "Your post is ready to be published:",
            serviceOwner: "Name: ",
            serviceOffered: "Service: ",
            area: "Area: ",
            serviceNumber: "Phone Number:",
            serviceExtraInfo: "Extra Info:",
            button: "Publish Post"
        },
        PrePayPerson: {
            text1: "Posts to promote services cost $10",
            text2: "Your post will stay on top of the page for 48 hours",
            text3: "and it will have a different color.",
            button: "No thanks",
            buttonPay: "Pay $10"
        },

        personModal: {
            name: "Name:",
            status1: "Looking to work as:",
            status2: "Offers service of:",
            experience: "Experience:",
            schedule: "Schedule:",
            area: "Area:",
            phone: "Number:",
            extraInfo: "More info:"
        },
        serviceModal: {
            name: "Name:",
            serviceOffered: "Service:",
            serviceNumber: "Number:",
            serviceExtraInfo: "Extra info:"
        },
        jobPayPage: {
            title: "You chose TOP post",
            text1:
                "TOP posts are of a different color and stay on top of the list for 48 hours.",
            text2:
                "If you are looking for top staff as quickly as possible, this is what you need.",
            buttonNO: "I want a free and normal post",
            buttonYES: "Pay $10"
        }
    }
};

export const LanguageContext = React.createContext(languages.spanish);
