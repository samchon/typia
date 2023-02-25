import typia from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_isParse } from "../internal/_test_isParse";
export const test_createIsParse_ObjectNullable = _test_isParse("ObjectNullable", ObjectNullable.generate, (input: any): typia.Primitive<ObjectNullable> => { const is = (input: any): input is ObjectNullable => {
    const $io0 = (input: any) => "string" === typeof input.name && ("object" === typeof input.manufacturer && null !== input.manufacturer && $io1(input.manufacturer)) && ("object" === typeof input.brand && null !== input.brand && $io2(input.brand)) && ("object" === typeof input.similar && null !== input.similar && $iu0(input.similar));
    const $io1 = (input: any) => "manufacturer" === input.type && "string" === typeof input.name;
    const $io2 = (input: any) => "brand" === input.type && "string" === typeof input.name;
    const $iu0 = (input: any) => (() => {
        if ("manufacturer" === input.type)
            return $io1(input);
        if ("brand" === input.type)
            return $io2(input);
        return false;
    })();
    return Array.isArray(input) && (input.length === 3 && ("object" === typeof input[0] && null !== input[0] && $io0(input[0])) && ("object" === typeof input[1] && null !== input[1] && $io0(input[1])) && ("object" === typeof input[2] && null !== input[2] && $io0(input[2])));
}; input = JSON.parse(input); return is(input) ? input as any : null; }, ObjectNullable.SPOILERS);
