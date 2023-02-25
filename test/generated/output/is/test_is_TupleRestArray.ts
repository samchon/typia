import typia from "../../../src";
import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_is } from "../internal/_test_is";
export const test_is_TupleRestArray = _test_is("TupleRestArray", TupleRestArray.generate, (input) => ((input: any): input is TupleRestArray => {
    return Array.isArray(input) && ("boolean" === typeof input[0] && "number" === typeof input[1] && (Array.isArray(input.slice(2)) && input.slice(2).every((elem: any) => Array.isArray(elem) && elem.every((elem: any) => "string" === typeof elem))));
})(input), TupleRestArray.SPOILERS);
