import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";

export const test_createClone_ToJsonUnion = _test_clone(
    "ToJsonUnion",
    ToJsonUnion.generate,
    (input: ToJsonUnion): typia.Primitive<ToJsonUnion> => {
        const $io0: any = (input: any): boolean =>
            "number" === typeof input.id &&
            "string" === typeof input.mobile &&
            "string" === typeof input.name;
        const $io1: any = (input: any): boolean =>
            "string" === typeof input.manufacturer &&
            "string" === typeof input.brand &&
            "string" === typeof input.name;
        const $throws: any = (typia.createClone as any).throws;
        const $co0: any = (input: any): any => ({
            id: input.id as any,
            mobile: input.mobile as any,
            name: input.name as any,
        });
        const $co1: any = (input: any): any => ({
            manufacturer: input.manufacturer as any,
            brand: input.brand as any,
            name: input.name as any,
        });
        return Array.isArray(input)
            ? (() =>
                  input.map((elem: any) =>
                      "object" === typeof elem &&
                      null !== elem &&
                      "function" === typeof elem.toJSON
                          ? (elem.toJSON() as any)
                          : "object" === typeof elem && null !== elem
                          ? $cu0(elem)
                          : (elem as any),
                  ))()
            : (input as any);
    },
);
