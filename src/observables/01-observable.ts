import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]:', value),
    error: error => console.warn('error [obs]:', error),
    complete: () => console.info('Completado [obs]')
}

// const obs$ = Observable.create()

const obs$ = new Observable<string>( subs => {

    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

    //forzar error
    // const a = undefined;
    // a.nombre = 'Jorge';

    subs.complete();

    subs.next('Hola');
    subs.next('Mundo');

});

obs$.subscribe( observer )
