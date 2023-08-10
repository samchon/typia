import typia from "../../../../src";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { ObjectNullable } from "../../../structures/ObjectNullable";

export const test_misc_isClone_ObjectNullable =
    _test_misc_isClone<ObjectNullable>(ObjectNullable)((input) =>
        ((input: any): typia.Primitive<ObjectNullable> | null => {
            const is = (input: any): input is ObjectNullable => {
                const $io0 = (input: any): boolean =>
                    Array.isArray(input.value) &&
                    input.value.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io1(elem),
                    );
                const $io1 = (input: any): boolean =>
                    "string" === typeof input.name &&
                    "object" === typeof input.manufacturer &&
                    null !== input.manufacturer &&
                    $io2(input.manufacturer) &&
                    (null === input.brand ||
                        ("object" === typeof input.brand &&
                            null !== input.brand &&
                            $io3(input.brand))) &&
                    (null === input.similar ||
                        ("object" === typeof input.similar &&
                            null !== input.similar &&
                            $iu0(input.similar)));
                const $io2 = (input: any): boolean =>
                    "manufacturer" === input.type &&
                    "string" === typeof input.name;
                const $io3 = (input: any): boolean =>
                    "brand" === input.type && "string" === typeof input.name;
                const $iu0 = (input: any): any =>
                    (() => {
                        if ("brand" === input.type) return $io3(input);
                        if ("manufacturer" === input.type) return $io2(input);
                        return false;
                    })();
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            const clone = (
                input: ObjectNullable,
            ): typia.Primitive<ObjectNullable> => {
                const $io1 = (input: any): boolean =>
                    "string" === typeof input.name &&
                    "object" === typeof input.manufacturer &&
                    null !== input.manufacturer &&
                    $io2(input.manufacturer) &&
                    (null === input.brand ||
                        ("object" === typeof input.brand &&
                            null !== input.brand &&
                            $io3(input.brand))) &&
                    (null === input.similar ||
                        ("object" === typeof input.similar &&
                            null !== input.similar &&
                            $iu0(input.similar)));
                const $io2 = (input: any): boolean =>
                    "manufacturer" === input.type &&
                    "string" === typeof input.name;
                const $io3 = (input: any): boolean =>
                    "brand" === input.type && "string" === typeof input.name;
                const $iu0 = (input: any): any =>
                    (() => {
                        if ("brand" === input.type) return $io3(input);
                        if ("manufacturer" === input.type) return $io2(input);
                        return false;
                    })();
                const $throws = (typia.misc.isClone as any).throws;
                const $cp0 = (input: any) =>
                    input.map((elem: any) =>
                        "object" === typeof elem && null !== elem
                            ? $co1(elem)
                            : (elem as any),
                    );
                const $co0 = (input: any): any => ({
                    value: Array.isArray(input.value)
                        ? $cp0(input.value)
                        : (input.value as any),
                });
                const $co1 = (input: any): any => ({
                    name: input.name as any,
                    manufacturer:
                        "object" === typeof input.manufacturer &&
                        null !== input.manufacturer
                            ? $co2(input.manufacturer)
                            : (input.manufacturer as any),
                    brand:
                        "object" === typeof input.brand && null !== input.brand
                            ? $co3(input.brand)
                            : (input.brand as any),
                    similar:
                        "object" === typeof input.similar &&
                        null !== input.similar
                            ? $cu0(input.similar)
                            : (input.similar as any),
                });
                const $co2 = (input: any): any => ({
                    type: input.type as any,
                    name: input.name as any,
                });
                const $co3 = (input: any): any => ({
                    type: input.type as any,
                    name: input.name as any,
                });
                const $cu0 = (input: any): any =>
                    (() => {
                        if ("brand" === input.type) return $co3(input);
                        if ("manufacturer" === input.type) return $co2(input);
                        $throws({
                            expected:
                                "(ObjectNullable.IBrand | ObjectNullable.IManufacturer)",
                            value: input,
                        });
                    })();
                return "object" === typeof input && null !== input
                    ? $co0(input)
                    : (input as any);
            };
            if (!is(input)) return null;
            const output = clone(input);
            return output;
        })(input),
    );
