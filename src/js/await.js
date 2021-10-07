import { buscarHeroeAsync } from './promesas';


const heroesIds = [ 'capi' , 'iron' , 'spider' ];




export const obtenerHeroesArr = async () => {

    const heroesArr = [];

    // Separa cada uno de los elementos del arreglo
    for ( const id of heroesIds ) {
        const heroe = await buscarHeroeAsync( id ); // Espera a que la promesa buscarHeroesAsync termine para darle el valor a la variable heroe.
        heroesArr.push( heroe );
    }


    return heroesArr;

}



    // Otra forma de ver el async y el await ----------------------------------
        // Construccion funcion que retorne promesa
            const doSomethingAsync = () => {
                return new Promise( (resolve , reject) => {
                    ( true )
                    ? setTimeout( () => resolve('Do Somethig Async!') , 3000 )
                    : reject( new Error('Test error inside') );
                });
            }

        // Funcion async que llama a la funcion anterior y espera a que su promesa se resuelva
            const doSomething = async () => {
                const something = await doSomethingAsync();
                console.log( something );
            }

        doSomething(); // Se ejecuta
        console.log('Después de doSomething()'); // El console.log se ejecutará antes que termine doSomething() ya que ésta está destinada
                                                 // a demorar 3 segundos y JS funciona asincrono.
                                                 // IMPORTANTE : Await NO BLOQUEA el programa completo. Solo hace que el proceso deseado ESPERE   
                                                 //       que se resuelva antes de continuar, pero SOLO dentro de la función.
                                                 //       Fuera de la funcion todo sigue siendo asincrono.
                                                 //       Por esta razón es que el console.log se ejecuta antes de doSomething() :)  