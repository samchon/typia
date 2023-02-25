import typia from "../../../src";
import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_is } from "../internal/_test_is";
export const test_is_TupleRestObject = _test_is("TupleRestObject", TupleRestObject.generate, (input) => ((input: any): input is TupleRestObject => {
    const $io0 = (input: any) => "string" === typeof input.value;
    return Array.isArray(input) && ("boolean" === typeof input[0] && "number" === typeof input[1] && (Array.isArray(input.slice(2)) && input.slice(2).every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem))));
})(input), TupleRestObject.SPOILERS);
