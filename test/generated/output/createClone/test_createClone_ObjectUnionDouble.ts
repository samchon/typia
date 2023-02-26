import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";

export const test_createClone_ObjectUnionDouble = _test_clone(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (
        input: Array<ObjectUnionDouble.Union>,
    ): typia.Primitive<Array<ObjectUnionDouble.Union>> => {
        const $throws = (typia.createClone as any).throws;
        const $io0 = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            $io1(input.value) &&
            "object" === typeof input.child &&
            null !== input.child &&
            $iu0(input.child);
        const $io1 = (input: any): boolean => "number" === typeof input.x;
        const $io2 = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            $io3(input.value);
        const $io3 = (input: any): boolean => "boolean" === typeof input.y;
        const $io4 = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            $io5(input.value);
        const $io5 = (input: any): boolean => "number" === typeof input.y;
        const $io6 = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            $io7(input.value) &&
            "object" === typeof input.child &&
            null !== input.child &&
            $iu1(input.child);
        const $io7 = (input: any): boolean => "string" === typeof input.x;
        const $io8 = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            $io9(input.value);
        const $io9 = (input: any): boolean => "string" === typeof input.y;
        const $io10 = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            $io11(input.value);
        const $io11 = (input: any): boolean =>
            Array.isArray(input.y) &&
            input.y.every((elem: any) => "number" === typeof elem);
        const $iu0 = (input: any): any => $io2(input) || $io4(input);
        const $iu1 = (input: any): any => $io8(input) || $io10(input);
        const $iu2 = (input: any): any => $io0(input) || $io6(input);
        const $co0 = (input: any): any => ({
            value:
                "object" === typeof input.value && null !== input.value
                    ? $co1(input.value)
                    : (input.value as any),
            child:
                "object" === typeof input.child && null !== input.child
                    ? $cu0(input.child)
                    : (input.child as any),
        });
        const $co1 = (input: any): any => ({
            x: input.x as any,
        });
        const $co2 = (input: any): any => ({
            value:
                "object" === typeof input.value && null !== input.value
                    ? $co3(input.value)
                    : (input.value as any),
        });
        const $co3 = (input: any): any => ({
            y: input.y as any,
        });
        const $co4 = (input: any): any => ({
            value:
                "object" === typeof input.value && null !== input.value
                    ? $co5(input.value)
                    : (input.value as any),
        });
        const $co5 = (input: any): any => ({
            y: input.y as any,
        });
        const $co6 = (input: any): any => ({
            value:
                "object" === typeof input.value && null !== input.value
                    ? $co7(input.value)
                    : (input.value as any),
            child:
                "object" === typeof input.child && null !== input.child
                    ? $cu1(input.child)
                    : (input.child as any),
        });
        const $co7 = (input: any): any => ({
            x: input.x as any,
        });
        const $co8 = (input: any): any => ({
            value:
                "object" === typeof input.value && null !== input.value
                    ? $co9(input.value)
                    : (input.value as any),
        });
        const $co9 = (input: any): any => ({
            y: input.y as any,
        });
        const $co10 = (input: any): any => ({
            value:
                "object" === typeof input.value && null !== input.value
                    ? $co11(input.value)
                    : (input.value as any),
        });
        const $co11 = (input: any): any => ({
            y: Array.isArray(input.y)
                ? input.y.map((elem: any) => elem as any)
                : (input.y as any),
        });
        const $cu0 = (input: any): any =>
            (() => {
                if ($io2(input)) return $co2(input);
                if ($io4(input)) return $co4(input);
                $throws({
                    expected: "(ObjectUnionDouble.IAA | ObjectUnionDouble.IAB)",
                    value: input,
                });
            })();
        const $cu1 = (input: any): any =>
            (() => {
                if ($io8(input)) return $co8(input);
                if ($io10(input)) return $co10(input);
                $throws({
                    expected: "(ObjectUnionDouble.IBA | ObjectUnionDouble.IBB)",
                    value: input,
                });
            })();
        const $cu2 = (input: any): any =>
            (() => {
                if ($io0(input)) return $co0(input);
                if ($io6(input)) return $co6(input);
                $throws({
                    expected: "(ObjectUnionDouble.IA | ObjectUnionDouble.IB)",
                    value: input,
                });
            })();
        return Array.isArray(input)
            ? input.map((elem: any) =>
                  "object" === typeof elem && null !== elem
                      ? $cu2(elem)
                      : (elem as any),
              )
            : (input as any);
    },
);
