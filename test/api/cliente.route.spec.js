const request = require('supertest');
const mongoose = require('mongoose')
const app = require('../../app');
const Cliente = require('../../models/cliente.model')

describe('Pruebas sobre la api clientes', () => {

    beforeAll(async () => {
        await mongoose.connect('mongodb://127.0.0.1/Llatan');
    });

    afterAll(async () => {
        await mongoose.disconnect();
    })

    describe('GET /api/clientes', () => {

        let response;

        beforeEach(async () => {

            response = await request(app).get('/api/clientes').send();

        })

        it('La ruta funciona', async () => {

            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');

        });

        it('La peticion nos devuelve un array de clientes', async () => {

            expect(response.body).toBeInstanceOf(Array);

        });

    });

    describe('POST /api/clientes', () => {

        const newCliente = {

            nombre: 'Erika',
            apellido: 'Aguilar',
            edad: 38,
            fechaNacimiento: '1987-02-17'

        };

        const errorCliente = {

            nombres: 'Erika',
            apellidos: 'Aguilar',
            edad: 38,
            fechaNacimiento: '1987-02-17'

        };

        afterAll(async () => {
            await Cliente.deleteMany({ nombre: 'Erika'});
        });

        it('La ruta funciona', async () => {

            const response = await request(app).post('/api/clientes').send(newCliente);

            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');

        });

        it('Se inserta correctamente', async () => {

            const response = await request(app).post('/api/clientes').send(newCliente);

            expect(response.body._id).toBeDefined();
            expect(response.body.nombre).toBe(newCliente.nombre);
        });

        it('Error en la insercion', async () => {

            const response = await request(app).post('/api/clientes').send(errorCliente);

            expect(response.status).toBe(500);
            expect(response.body.error).toBeDefined();
        });
        
    })
    
});
