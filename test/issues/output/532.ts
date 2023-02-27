import typia from "../../../src";
interface A {
    a: string;
}
interface B {
    b: string;
}
type Union = A | B;
export const check = (input: any): input is Union => {
    const $io0 = (input: any): boolean => "string" === typeof input.a;
    const $io1 = (input: any): boolean => "string" === typeof input.b;
    const $iu0 = (input: any): any => (() => {
        if (undefined !== input.a)
            return $io0(input);
        if (undefined !== input.b)
            return $io1(input);
        return false;
    })();
    return "object" === typeof input && null !== input && $iu0(input);
};
