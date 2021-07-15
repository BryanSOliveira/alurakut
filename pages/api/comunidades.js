// BFF
import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
    if (request.method === 'POST') {
        const TOKEN = '283494c3720fa62bdbe5d71b513c22';
        // console.log(TOKEN); está guardando no servidor, não aparece no terminal do navegador
    
        const client = new SiteClient(TOKEN);
    
        // Validar os dados, antes de sair cadastrando
        // await, esperar criar para retornar para o cliente
        const registroCriado = await client.items.create({
            itemType: "967048", // ID do Model de "Comunidades" criado pelo Dato

            // o payload vai no body
            ...request.body,

            // title: "Comunidade de Teste",
            // imageUrl: "https://github.com/BryanSOliveira.png",
            // creatorSlug: "Bryan Santos"
        })

        console.log(registroCriado);
    
        response.json({
            dados: 'Algum dado qualquer',
            registroCriado: registroCriado,
        })

        return;
    }

    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })
}