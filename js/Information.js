class Information{
    user_id = '';
    obrazovanje = '';
    zanimanje = '';
    hobi = '';
    api_url = 'https://636a3d3fb10125b78fd4d1ca.mockapi.io';


    async create(){
        let session = new Session();
        session_id = session.getSession();

        let data = {
            user_id: session_id,
            obrazovanje: this.obrazovanje,
            zanimanje: this.zanimanje,
            hobi: this.hobi
        }

        data = JSON.stringify(data);

        let response = await fetch(this.api_url + '/informations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data

        });

        data = await response.json();

        return data;


    }

}