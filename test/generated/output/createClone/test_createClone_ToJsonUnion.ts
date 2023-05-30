import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";
export const test_createClone_ToJsonUnion = _test_clone("ToJsonUnion", ToJsonUnion.generate, (input: ToJsonUnion): typia.Primitive<ToJsonUnion> => {
    const $throws = (typia.createClone as any).throws;
    const $io0 = (input: any): boolean => "number" === typeof input.id && "string" === typeof input.mobile && "string" === typeof input.name;
    const $io1 = (input: any): boolean => "string" === typeof input.manufacturer && "string" === typeof input.brand && "string" === typeof input.name;
    const $iu0 = (input: any): any => (() => {
        if (undefined !== input.id)
            return $io0(input);
        if (undefined !== input.manufacturer)
            return $io1(input);
        return false;
    })();
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
    return Array.isArray(input) ? input.map((elem: any) => "object" === typeof elem && null !== elem && "function" === typeof elem.toJSON ? elem.toJSON() as any : "object" === typeof elem && null !== elem ? $cu0(elem) : elem as any) : input as any;
});
