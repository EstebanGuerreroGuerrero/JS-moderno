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


    // Promesa de buscarHeroe
    const buscarHeroe = ( id ) => {

        const heroe = heroes[ id ];

        return new Promise( ( resolve , reject ) => {

            if( heroe ) {
                resolve( heroe );
            } else {
                reject(`No existe un heroe con id: ${ id }`);
            }

        } );

    }

    // Promesa buscarHeroe version async
    const buscarHeroeAsync = async ( id ) => {

        const heroe = heroes[ id ];
        
            if( heroe ) {
                return heroe; // En vez de retornar el objeto, resuelve una nueva promesa con el valor del objeto.
            } else {
                throw `No existe un Héroe con el id: ${ id }`;      // Mostrar el error de forma breve.
            // throw Error(`No existe un Héroe con el id: ${ id }`);  Mostrar el error completo.
            }

    }


    const promesaLenta = new Promise( ( resolve , reject ) => {
        setTimeout( () => resolve('Promesa Lenta') , 2000 );
    });

    const promesaMedia = new Promise( ( resolve , reject ) => {
        setTimeout( () => resolve('Promesa Media') , 1500 );
    });

    const promesaRapida = new Promise( ( resolve , reject ) => {
        setTimeout( () => resolve('Promesa Rápida') , 1000 );
    });




    // Otra explicacion de Promesas (simple) 
        // Contrucción ----
            const algoPasara = () => {
                return new Promise( (resolve , reject) => {
                    if( true ) {
                        resolve('Hey :D ');
                    } else {
                        reject('Whoops!');
                    };
                });
            };

        // Ejecución ----
            algoPasara()
                .then( response => console.log( response ) ) // Hey :D
                .catch( err => console.error( err ) );





export {
    buscarHeroe,
    buscarHeroeAsync,
    promesaLenta,
    promesaMedia,
    promesaRapida
}

