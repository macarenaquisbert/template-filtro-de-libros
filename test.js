const { filtrarAutor, libros } = require('./js/index');

test('filtra libros de Julio Verne', () => {
    const resultado = filtrarAutor(libros, "Julio Verne");

    expect(resultado.length).toBe(2);
    expect(resultado[0].titulo).toBe("Viaje al centro de la tierra");
});

test('devuelve vacio si el autor no existe', () => {
    const resultado = filtrarAutor(libros, "Stephen King");

    expect(resultado.length).toBe(0);
});

test('todos los resultados son del autor correcto', () => {
    const resultado = filtrarAutor(libros, "Julio Verne");

for (let i = 0; i < resultado.length; i++) {
    expect(resultado[i].autor).toBe("Julio Verne");
}
});