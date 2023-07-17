let libro_1 = {
    // Attributes
    title: 'El libro 1',
    year: 2000,
    summary: 'Este es el texto del sumario 1',

    // Methods
    getAge: function () {
        let fecha_actual = new Date();
        let anyo_actual = fecha_actual.getFullYear(); // 2023
        return anyo_actual - this.year;
    }
}

let libro_2 = {
    // Attributes
    title: 'El libro 2',
    year: 2020,
    summary: 'Este es el texto del sumario del libro 2',

    // Methods
    getAge: function () {
        let fecha_actual = new Date();
        let anyo_actual = fecha_actual.getFullYear(); // 2023
        return anyo_actual - this.year;
    }
}


