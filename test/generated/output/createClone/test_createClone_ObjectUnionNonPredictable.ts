import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";

export const test_createClone_ObjectUnionNonPredictable = _test_clone(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    (
        input: ObjectUnionNonPredictable,
    ): typia.Primitive<ObjectUnionNonPredictable> => {
        const $io1: any = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            $iu0(input.value);
        const $io2: any = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            $io3(input.value);
        const $io3: any = (input: any): boolean =>
            "boolean" === typeof input.value;
        const $io4: any = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            $io5(input.value);
        const $io5: any = (input: any): boolean =>
            "number" === typeof input.value;
        const $io6: any = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            $io7(input.value);
        const $io7: any = (input: any): boolean =>
            "string" === typeof input.value;
        const $iu0: any = (input: any): any =>
            $io6(input) || $io4(input) || $io2(input);
        const $throws: any = (typia.createClone as any).throws;
        const $co0: any = (input: any): any => ({
            value:
                "object" === typeof input.value && null !== input.value
                    ? $co1(input.value)
                    : (input.value as any),
        });
        const $co1: any = (input: any): any => ({
            value:
                "object" === typeof input.value && null !== input.value
                    ? $cu0(input.value)
                    : (input.value as any),
        });
        const $co2: any = (input: any): any => ({
            value:
                "object" === typeof input.value && null !== input.value
                    ? $co3(input.value)
                    : (input.value as any),
        });
        const $co3: any = (input: any): any => ({
            value: input.value as any,
        });
        const $co4: any = (input: any): any => ({
            value:
                "object" === typeof input.value && null !== input.value
                    ? $co5(input.value)
                    : (input.value as any),
        });
        const $co5: any = (input: any): any => ({
            value: input.value as any,
        });
        const $co6: any = (input: any): any => ({
            value:
                "object" === typeof input.value && null !== input.value
                    ? $co7(input.value)
                    : (input.value as any),
        });
        const $co7: any = (input: any): any => ({
            value: input.value as any,
        });
        return Array.isArray(input)
            ? (() =>
                  input.map((elem: any) =>
                      "object" === typeof elem && null !== elem
                          ? $co0(elem)
                          : (elem as any),
                  ))()
            : (input as any);
    },
);
