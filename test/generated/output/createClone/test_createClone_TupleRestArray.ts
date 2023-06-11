import typia from "../../../../src";
import { TupleRestArray } from "../../../structures/TupleRestArray";
import { _test_clone } from "../../../internal/_test_clone";
export const test_createClone_TupleRestArray = _test_clone("TupleRestArray", TupleRestArray.generate, (input: TupleRestArray): typia.Primitive<TupleRestArray> => {
    const $cp0 = (input: any) => input.map((elem: any) => elem as any);
    const $cp1 = (input: any) => input.map((elem: any) => Array.isArray(elem) ? $cp0(elem) : elem as any);
    return Array.isArray(input) && ("boolean" === typeof input[0] && "number" === typeof input[1] && (Array.isArray(input.slice(2)) && input.slice(2).every((elem: any) => Array.isArray(elem) && elem.every((elem: any) => "string" === typeof elem)))) ? [
        input[0] as any,
        input[1] as any,
        ...Array.isArray(input.slice(2)) ? $cp1(input.slice(2)) : input.slice(2) as any
    ] as any : input as any;
});
