import { MyDatabaseClassic } from './db/my-database-classic';
import './module_a';

const myDatabaseClassic = MyDatabaseClassic.instance;

myDatabaseClassic.add({ name: 'Roberto', age: 12 });
myDatabaseClassic.add({ name: 'Joana', age: 50 });
myDatabaseClassic.add({ name: 'Luiza', age: 44 });

myDatabaseClassic.remove(2);
myDatabaseClassic.show();
