import typia from "../../../src";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_is } from "../internal/_test_is";
export const test_is_TupleRestAtomic = _test_is("TupleRestAtomic", TupleRestAtomic.generate, (input) => ((input: any): input is TupleRestAtomic => {
    return Array.isArray(input) && ("boolean" === typeof input[0] && "number" === typeof input[1] && (Array.isArray(input.slice(2)) && input.slice(2).every((elem: any) => "string" === typeof elem)));
})(input), TupleRestAtomic.SPOILERS);
