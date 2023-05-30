import typia from "../../../../src";
import { _test_isParse } from "../../../internal/_test_isParse";
import { TupleRestObject } from "../../../structures/TupleRestObject";
export const test_createIsParse_TupleRestObject = _test_isParse("TupleRestObject", TupleRestObject.generate, (input: any): typia.Primitive<TupleRestObject> => { const is = (input: any): input is TupleRestObject => {
    const $io0 = (input: any): boolean => "string" === typeof input.value;
    return Array.isArray(input) && ("boolean" === typeof input[0] && ("number" === typeof input[1] && Number.isFinite(input[1])) && (Array.isArray(input.slice(2)) && input.slice(2).every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem))));
}; input = JSON.parse(input); return is(input) ? input as any : null; }, TupleRestObject.SPOILERS);
