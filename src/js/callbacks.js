const heroes = {
    capi: {
        nombre: 'Capitan America',
        poder: 'Aguantar inyeccones sin morir'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Mucho dinero'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'No morir a la picadura de araña'
    }
}


export const buscarHeroe = ( id , callback ) => {

    const heroe = heroes[ id ];

    if( heroe ) {
        callback( null , heroe ); // 1er argumento: Si encontro un error | 2do: objeto
    } else {
        // Un error
        callback(`No existe un heroe con id: ${ id }`);
    }

}



// Otro ejemplo de un callback ...
    function sum( num1 , num2 ) {
        return num1 + num2;
    }

    function calc( num1 , num2 , callback ) {
        return callback( num1 , num2 );
    }

    console.log( calc( 2 , 3 , sum ));
    
                                // EN resumen: Utilizamos un callback aquí para establecer que en dicha funcion, ademas de haber 2 variables como parametros, tambien recibira un ultimo parametro pero esta sera una FUNCION.
                                //              En otras palabras, la funcion calc utilizará a otra funcion como un parametro mas.