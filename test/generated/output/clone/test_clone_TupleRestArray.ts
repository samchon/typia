import typia from "../../../src";
import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_clone } from "../internal/_test_clone";
export const test_clone_TupleRestArray = _test_clone("TupleRestArray", TupleRestArray.generate, (input) => ((input: TupleRestArray): typia.Primitive<TupleRestArray> => {
    return Array.isArray(input) && ("boolean" === typeof input[0] && "number" === typeof input[1] && (Array.isArray(input.slice(2)) && input.slice(2).every((elem: any) => Array.isArray(elem) && elem.every((elem: any) => "string" === typeof elem)))) ? [
        input[0],
        input[1],
        ...Array.isArray(input.slice(2)) ? input.slice(2).map((elem: any) => Array.isArray(elem) ? elem.map((elem: any) => elem) : elem) : input.slice(2)
    ] : input;
})(input));
