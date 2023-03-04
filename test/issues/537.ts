import typia from "typia";

interface Foo {
    foo: string;
}

class Foo {
    public foo!: string;
    public get bar(): string {
        return this.foo;
    }
}

console.log(typia.createIs<Foo>().toString());
