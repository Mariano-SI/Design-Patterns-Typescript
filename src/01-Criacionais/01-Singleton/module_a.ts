import { MyDatabaseClassic } from './db/my-database-classic';

const myDatabaseClassic = MyDatabaseClassic.instance;

myDatabaseClassic.add({ name: 'Mariano', age: 24 });
myDatabaseClassic.add({ name: 'Paola', age: 27 });
myDatabaseClassic.add({ name: 'Eduardo', age: 25 });

myDatabaseClassic.remove(2);
myDatabaseClassic.show();
