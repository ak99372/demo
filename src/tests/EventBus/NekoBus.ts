import * as nbus from 'nekobasu';

let neko = nbus.builtin.event<number>();

neko.immediate.sub((n) => console.log(`immediate ${n}`));
neko.last.sub((n) => console.log(`last ${n}`));
neko.list.sub((n) => console.log(`list ${n}`));

neko.send(1); // prints "immediate 1"
neko.send(2); // prints "immediate 2"
neko.send(3); // prints "immediate 3"

neko.flush(); // prints "last 3" and "list [ 1, 2, 3 ]", in undefined order


neko.send(1); // prints "immediate 1"
neko.send(1); // prints "immediate 1"

//neko.flush(); // prints "last 3" and "list [ 1, 2, 3 ]", in undefined order