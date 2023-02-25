import typia from "../../../src";
import { ToJsonUnion } from "../../structures/ToJsonUnion";
import { _test_clone } from "../internal/_test_clone";
export const test_clone_ToJsonUnion = _test_clone("ToJsonUnion", ToJsonUnion.generate, (input) => ((input: ToJsonUnion): typia.Primitive<ToJsonUnion> => {
    const $throws = (typia.clone as any).throws;
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
})(input));
