import typia from "../../../src";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_isParse } from "../internal/_test_isParse";
export const test_createIsParse_TupleRestAtomic = _test_isParse("TupleRestAtomic", TupleRestAtomic.generate, (input: any): typia.Primitive<TupleRestAtomic> => { const is = (input: any): input is TupleRestAtomic => {
    return Array.isArray(input) && ("boolean" === typeof input[0] && "number" === typeof input[1] && (Array.isArray(input.slice(2)) && input.slice(2).every((elem: any) => "string" === typeof elem)));
}; input = JSON.parse(input); return is(input) ? input as any : null; }, TupleRestAtomic.SPOILERS);
