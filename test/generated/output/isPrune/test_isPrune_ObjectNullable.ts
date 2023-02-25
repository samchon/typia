import typia from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_isPrune } from "../internal/_test_isPrune";
export const test_isPrune_ObjectNullable = _test_isPrune("ObjectNullable", ObjectNullable.generate, (input) => ((input: any): input is ObjectNullable => { const is = (input: any): input is ObjectNullable => {
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
}; const prune = (input: ObjectNullable): void => {
    const $throws = (typia.isPrune as any).throws;
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
    const $po0 = (input: any) => {
        if ("object" === typeof input.manufacturer && null !== input.manufacturer)
            $po1(input.manufacturer);
        if ("object" === typeof input.brand && null !== input.brand)
            $po2(input.brand);
        if ("object" === typeof input.similar && null !== input.similar)
            $pu0(input.similar);
        for (const key of Object.keys(input)) {
            if ("name" === key || "manufacturer" === key || "brand" === key || "similar" === key)
                continue;
            delete input[key];
        }
    };
    const $po1 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("type" === key || "name" === key)
                continue;
            delete input[key];
        }
    };
    const $po2 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("type" === key || "name" === key)
                continue;
            delete input[key];
        }
    };
    const $pu0 = (input: any) => (() => {
        if ("manufacturer" === input.type)
            return $po1(input);
        if ("brand" === input.type)
            return $po2(input);
        $throws({
            expected: "(ObjectNullable.IManufacturer | ObjectNullable.IBrand)",
            value: input
        });
    })();
    if (Array.isArray(input) && (input.length === 3 && ("object" === typeof input[0] && null !== input[0] && $io0(input[0])) && ("object" === typeof input[1] && null !== input[1] && $io0(input[1])) && ("object" === typeof input[2] && null !== input[2] && $io0(input[2])))) {
        if ("object" === typeof input[0] && null !== input[0])
            $po0(input[0]);
        if ("object" === typeof input[1] && null !== input[1])
            $po0(input[1]);
        if ("object" === typeof input[2] && null !== input[2])
            $po0(input[2]);
    }
}; if (!is(input))
    return false; prune(input); return true; })(input), ObjectNullable.SPOILERS);
