import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { TupleRestObject } from "../../../structures/TupleRestObject";
export const test_clone_TupleRestObject = _test_clone("TupleRestObject", TupleRestObject.generate, (input) => ((input: [boolean, number, ...TupleRestObject.IObject[]]): typia.Primitive<[boolean, number, ...TupleRestObject.IObject[]]> => {
    const $io0 = (input: any): boolean => "string" === typeof input.value;
    const $co0 = (input: any): any => ({
        value: input.value as any
    });
    return Array.isArray(input) && ("boolean" === typeof input[0] && "number" === typeof input[1] && (Array.isArray(input.slice(2)) && input.slice(2).every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem)))) ? [
        input[0] as any,
        input[1] as any,
        ...Array.isArray(input.slice(2)) ? input.slice(2).map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem as any) : input.slice(2) as any
    ] as any : input as any;
})(input));
