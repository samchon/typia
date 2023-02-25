import typia from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_isClone } from "../internal/_test_isClone";
export const test_isClone_ObjectNullable = _test_isClone("ObjectNullable", ObjectNullable.generate, (input) => ((input: any): typia.Primitive<ObjectNullable> | null => { const is = (input: any): input is ObjectNullable => {
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
}; const clone = (input: ObjectNullable): typia.Primitive<ObjectNullable> => {
    const $throws = (typia.isClone as any).throws;
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
    const $co0 = (input: any) => ({
        name: input.name,
        manufacturer: "object" === typeof input.manufacturer && null !== input.manufacturer ? $co1(input.manufacturer) : input.manufacturer,
        brand: "object" === typeof input.brand && null !== input.brand ? $co2(input.brand) : input.brand,
        similar: "object" === typeof input.similar && null !== input.similar ? $cu0(input.similar) : input.similar
    });
    const $co1 = (input: any) => ({
        type: input.type,
        name: input.name
    });
    const $co2 = (input: any) => ({
        type: input.type,
        name: input.name
    });
    const $cu0 = (input: any) => (() => {
        if ("manufacturer" === input.type)
            return $co1(input);
        if ("brand" === input.type)
            return $co2(input);
        $throws({
            expected: "(ObjectNullable.IManufacturer | ObjectNullable.IBrand)",
            value: input
        });
    })();
    return Array.isArray(input) && (input.length === 3 && ("object" === typeof input[0] && null !== input[0] && $io0(input[0])) && ("object" === typeof input[1] && null !== input[1] && $io0(input[1])) && ("object" === typeof input[2] && null !== input[2] && $io0(input[2]))) ? [
        "object" === typeof input[0] && null !== input[0] ? $co0(input[0]) : input[0],
        "object" === typeof input[1] && null !== input[1] ? $co0(input[1]) : input[1],
        "object" === typeof input[2] && null !== input[2] ? $co0(input[2]) : input[2]
    ] : input;
}; if (!is(input))
    return null; const output = clone(input); return output; })(input), ObjectNullable.SPOILERS);
