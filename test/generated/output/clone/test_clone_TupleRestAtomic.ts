import typia from "../../../src";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_clone } from "../internal/_test_clone";
export const test_clone_TupleRestAtomic = _test_clone("TupleRestAtomic", TupleRestAtomic.generate, (input) => ((input: TupleRestAtomic): typia.Primitive<TupleRestAtomic> => {
    return Array.isArray(input) && ("boolean" === typeof input[0] && "number" === typeof input[1] && (Array.isArray(input.slice(2)) && input.slice(2).every((elem: any) => "string" === typeof elem))) ? [
        input[0],
        input[1],
        ...Array.isArray(input.slice(2)) ? input.slice(2).map((elem: any) => elem) : input.slice(2)
    ] : input;
})(input));
