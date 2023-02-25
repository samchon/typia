import typia from "../../../src";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_equals } from "../internal/_test_equals";
export const test_equals_TupleRestAtomic = _test_equals("TupleRestAtomic", TupleRestAtomic.generate, (input) => ((input: any, _exceptionable: boolean): input is TupleRestAtomic => {
    return Array.isArray(input) && ("boolean" === typeof input[0] && "number" === typeof input[1] && (Array.isArray(input.slice(2)) && input.slice(2).every((elem: any, _index1: number) => "string" === typeof elem)));
})(input));
