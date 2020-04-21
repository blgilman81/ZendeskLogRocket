let email = '';
const emailTxt = document.querySelector('.emailTxt');
const reactButton = document.querySelector('.react');
const monolithButton = document.querySelector('.monolith');
const client = ZAFClient.init();
client.invoke('resize', { width: '100%', height: '200px' });

const generateReactURL = email => {
        const reactURL = `https://app.logrocket.com/gqqpcf/wheniwork-js?filters=`;
        const searchParams = `[{"type":"email","operator":{"name":"is","type":"IS","hasStrings":true,"autocompleteEnabled":true},"strings":["${email}"]}]`;
        const searchParamsEncodedOnce = encodeURIComponent(searchParams);
        const searchParamsEncodedTwice = encodeURIComponent(searchParamsEncodedOnce);
        const finalReactURL = `${reactURL}${searchParamsEncodedTwice}`;
        return finalReactURL;
};

const generateMonolithURL = email => {
        const reactURL = `https://app.logrocket.com/gqqpcf/wheniwork-app?filters=`;
        const searchParams = `[{"type":"email","operator":{"name":"is","type":"IS","hasStrings":true,"autocompleteEnabled":true},"strings":["${email}"]}]`;
        const searchParamsEncodedOnce = encodeURIComponent(searchParams);
        const searchParamsEncodedTwice = encodeURIComponent(searchParamsEncodedOnce);
        const finalReactURL = `${reactURL}${searchParamsEncodedTwice}`;
        return finalReactURL;
};

client.get('ticket.requester.email')
        .then(data => {
                email = data['ticket.requester.email'];
                reactButton.addEventListener('click', e => {
                        window.open(generateReactURL(email));
                });
                monolithButton.addEventListener('click', e => {
                        window.open(generateMonolithURL(email));
                });

                emailTxt.textContent = data['ticket.requester.email'];
        })
        .catch(err => {
                console.log(err);
        });
