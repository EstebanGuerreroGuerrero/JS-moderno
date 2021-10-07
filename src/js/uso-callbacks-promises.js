import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe } from './js/promesas';
import './styles.css';

const heroeId1 = 'capi';
const heroeId2 = 'spider';



// CALLBACKS -----------------------------

    // ESTANDAR CALLBACK CON MANEJO DE ERROR
    buscarHeroeCallback( heroeId , ( err , heroe ) => { // 1er Argumento: id --- 2do Argumento: callback 
                                                        // Siempre el primer argumento de un callback es err para manejar SIEMPRE EL ERROR
    
        if ( err ) {
            console.error( err );
        } else {
            console.info( heroe );
        }
        
    } );




// PROMESAS -----------------------------

    // buscarHeroe( heroeId1 ).then( heroe1 => {
    //     // console.log(`Enviando a ${ heroe1.nombre } a la mision`);
    //     buscarHeroe( heroeId2 ).then( heroe2 => {
    //         console.log(`Enviando a ${ heroe1.nombre } y a ${ heroe2.nombre } a la mision`);
    //     })
    // })


    // promesaLenta.then( console.log );
    // promesaMedia.then( console.log );
    // promesaRapida.then( console.log );


    // Promise.all ---> Enlaza Promesas para que las ejecute todas 
    Promise.all([ buscarHeroe( heroeId1 ) , buscarHeroe( heroeId2 ) ])
            .then(( [heroe1 , heroe2] ) => { // Desestructuración del arreglo 
                console.log(`Enviando a ${ heroe1.nombre } y a ${ heroe2.nombre } a la mision`);

    }).catch( err => {
        alert(err);
    }).finally( () => {
        console.log('Se termino el promise.all');
    });


    // Promise.race ---> Ejecuta solo la promesa que se resolvio PRIMERO
    Promise.race([ promesaLenta , promesaMedia , promesaRapida ])
            .then( console.log )
            .catch( console.warn );


    // Promise normal vs PromiseAsync
    buscarHeroe( 'capi' )
            .then( heroe => console.log( heroe ) )
            .catch( console.warn );

    buscarHeroeAsync( 'iron' )
            .then( heroe => console.log( heroe ) )
            .catch( console.warn );





console.log('Fin del programa');