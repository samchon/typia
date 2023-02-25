import typia from "../../../src";
import { ToJsonUnion } from "../../structures/ToJsonUnion";
import { _test_isClone } from "../internal/_test_isClone";
export const test_isClone_ToJsonUnion = _test_isClone("ToJsonUnion", ToJsonUnion.generate, (input) => ((input: any): typia.Primitive<ToJsonUnion> | null => { const is = (input: any): input is ToJsonUnion => {
    const $io0 = (input: any) => "number" === typeof input.id && "string" === typeof input.mobile && "string" === typeof input.name;
    const $io1 = (input: any) => true;
    const $io2 = (input: any) => true;
    const $io3 = (input: any) => true;
    const $iu0 = (input: any) => (() => {
        if (undefined !== input.id)
            return $io0(input);
        return (() => {
            if ($io1(input))
                return $io1(input);
            if ($io2(input))
                return $io2(input);
            if ($io3(input))
                return $io3(input);
            return false;
        })();
    })();
    return Array.isArray(input) && input.every((elem: any) => null !== elem && undefined !== elem && ("string" === typeof elem || "number" === typeof elem || "object" === typeof elem && null !== elem && $iu0(elem)));
}; const clone = (input: ToJsonUnion): typia.Primitive<ToJsonUnion> => {
    const $throws = (typia.isClone as any).throws;
    const $io0 = (input: any) => "number" === typeof input.id && "string" === typeof input.mobile && "string" === typeof input.name;
    const $io1 = (input: any) => "string" === typeof input.manufacturer && "string" === typeof input.brand && "string" === typeof input.name;
    const $iu0 = (input: any) => (() => {
        if (undefined !== input.id)
            return $io0(input);
        if (undefined !== input.manufacturer)
            return $io1(input);
        return false;
    })();
    const $co0 = (input: any) => ({
        id: input.id,
        mobile: input.mobile,
        name: input.name
    });
    const $co1 = (input: any) => ({
        manufacturer: input.manufacturer,
        brand: input.brand,
        name: input.name
    });
    const $cu0 = (input: any) => (() => {
        if (undefined !== input.id)
            return $co0(input);
        if (undefined !== input.manufacturer)
            return $co1(input);
        $throws({
            expected: "(ToJsonUnion.ICitizen | ToJsonUnion.IProduct)",
            value: input
        });
    })();
    return Array.isArray(input) ? input.map((elem: any) => "object" === typeof elem && null !== elem && "function" === typeof elem.toJSON ? elem.toJSON() : "object" === typeof elem && null !== elem ? $cu0(elem) : elem) : input;
}; if (!is(input))
    return null; const output = clone(input); return output; })(input));
