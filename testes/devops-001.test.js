const { validarEmail, validarMensagem } = require('../devops-001.js');

describe('Testes da função validarEmail', () => {
    it('deve retornar true para um e-mail válido', () => {
        expect(validarEmail('teste@exemplo.com')).toBe(true);
    });

    it('deve retornar false para um e-mail sem @', () => {
        expect(validarEmail('testeexemplo.com')).toBe(false);
    });

    it('deve retornar false para um e-mail muito curto', () => {
        expect(validarEmail('a@b')).toBe(false);
    });
});

describe('Testes da função validarMensagem', () => {
    it('deve retornar true para uma mensagem com 10 ou mais caracteres', () => {
        expect(validarMensagem('1234567890')).toBe(true);
    });

    it('deve retornar false para uma mensagem com menos de 10 caracteres', () => {
        expect(validarMensagem('123456789')).toBe(false);
    });
});