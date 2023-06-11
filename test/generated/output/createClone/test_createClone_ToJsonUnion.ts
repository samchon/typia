import typia from "../../../../src";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";
import { _test_clone } from "../../../internal/_test_clone";
export const test_createClone_ToJsonUnion = _test_clone("ToJsonUnion", ToJsonUnion.generate, (input: ToJsonUnion): typia.Primitive<ToJsonUnion> => {
    const $io0 = (input: any): boolean => "number" === typeof input.id && "string" === typeof input.mobile && "string" === typeof input.name;
    const $io1 = (input: any): boolean => "string" === typeof input.manufacturer && "string" === typeof input.brand && "string" === typeof input.name;
    const $throws = (typia.createClone as any).throws;
    const $cp0 = (input: any) => input.map((elem: any) => "object" === typeof elem && null !== elem && "function" === typeof elem.toJSON ? elem.toJSON() as any : "object" === typeof elem && null !== elem ? $cu0(elem) : elem as any);
    const $co0 = (input: any): any => ({
        id: input.id as any,
        mobile: input.mobile as any,
        name: input.name as any
    });
    const $co1 = (input: any): any => ({
        manufacturer: input.manufacturer as any,
        brand: input.brand as any,
        name: input.name as any
    });
    const $cu0 = (input: any): any => (() => {
        if (undefined !== input.id)
            return $co0(input);
        if (undefined !== input.manufacturer)
            return $co1(input);
        $throws({
            expected: "(ToJsonUnion.ICitizen | ToJsonUnion.IProduct)",
            value: input
        });
    })();
    return Array.isArray(input) ? $cp0(input) : input as any;
});
