import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";

export const test_createClone_ObjectUnionDouble = _test_clone(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input: ObjectUnionDouble): typia.Primitive<ObjectUnionDouble> => {
        const $io0: any = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            $io1(input.value) &&
            "object" === typeof input.child &&
            null !== input.child &&
            $iu1(input.child);
        const $io1: any = (input: any): boolean => "number" === typeof input.x;
        const $io2: any = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            $io3(input.value);
        const $io3: any = (input: any): boolean => "boolean" === typeof input.y;
        const $io4: any = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            $io5(input.value);
        const $io5: any = (input: any): boolean => "number" === typeof input.y;
        const $io6: any = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            $io7(input.value) &&
            "object" === typeof input.child &&
            null !== input.child &&
            $iu2(input.child);
        const $io7: any = (input: any): boolean => "string" === typeof input.x;
        const $io8: any = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            $io9(input.value);
        const $io9: any = (input: any): boolean => "string" === typeof input.y;
        const $io10: any = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            $io11(input.value);
        const $io11: any = (input: any): boolean =>
            Array.isArray(input.y) &&
            input.y.every((elem: any) => "number" === typeof elem);
        const $iu1: any = (input: any): any => $io4(input) || $io2(input);
        const $iu2: any = (input: any): any => $io10(input) || $io8(input);
        const $throws: any = (typia.createClone as any).throws;
        const $co0: any = (input: any): any => ({
            value:
                "object" === typeof input.value && null !== input.value
                    ? $co1(input.value)
                    : (input.value as any),
            child:
                "object" === typeof input.child && null !== input.child
                    ? $cu1(input.child)
                    : (input.child as any),
        });
        const $co1: any = (input: any): any => ({
            x: input.x as any,
        });
        const $co2: any = (input: any): any => ({
            value:
                "object" === typeof input.value && null !== input.value
                    ? $co3(input.value)
                    : (input.value as any),
        });
        const $co3: any = (input: any): any => ({
            y: input.y as any,
        });
        const $co4: any = (input: any): any => ({
            value:
                "object" === typeof input.value && null !== input.value
                    ? $co5(input.value)
                    : (input.value as any),
        });
        const $co5: any = (input: any): any => ({
            y: input.y as any,
        });
        const $co6: any = (input: any): any => ({
            value:
                "object" === typeof input.value && null !== input.value
                    ? $co7(input.value)
                    : (input.value as any),
            child:
                "object" === typeof input.child && null !== input.child
                    ? $cu2(input.child)
                    : (input.child as any),
        });
        const $co7: any = (input: any): any => ({
            x: input.x as any,
        });
        const $co8: any = (input: any): any => ({
            value:
                "object" === typeof input.value && null !== input.value
                    ? $co9(input.value)
                    : (input.value as any),
        });
        const $co9: any = (input: any): any => ({
            y: input.y as any,
        });
        const $co10: any = (input: any): any => ({
            value:
                "object" === typeof input.value && null !== input.value
                    ? $co11(input.value)
                    : (input.value as any),
        });
        const $co11: any = (input: any): any => ({
            y: Array.isArray(input.y)
                ? (() => input.y.map((elem: any) => elem as any))()
                : (input.y as any),
        });
        return Array.isArray(input)
            ? (() =>
                  input.map((elem: any) =>
                      "object" === typeof elem && null !== elem
                          ? $cu0(elem)
                          : (elem as any),
                  ))()
            : (input as any);
    },
);
