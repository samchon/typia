import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { ObjectNullable } from "../../../structures/ObjectNullable";

export const test_clone_ObjectNullable = _test_clone(
    "ObjectNullable",
    ObjectNullable.generate,
    (input) =>
        ((
            input: [
                ObjectNullable.IProduct,
                ObjectNullable.IProduct,
                ObjectNullable.IProduct,
            ],
        ): typia.Primitive<
            [
                ObjectNullable.IProduct,
                ObjectNullable.IProduct,
                ObjectNullable.IProduct,
            ]
        > => {
            const $io0: any = (input: any): boolean =>
                "string" === typeof input.name &&
                "object" === typeof input.manufacturer &&
                null !== input.manufacturer &&
                $io1(input.manufacturer) &&
                (null === input.brand ||
                    ("object" === typeof input.brand &&
                        null !== input.brand &&
                        $io2(input.brand))) &&
                (null === input.similar ||
                    ("object" === typeof input.similar &&
                        null !== input.similar &&
                        $iu0(input.similar)));
            const $io1: any = (input: any): boolean =>
                "manufacturer" === input.type && "string" === typeof input.name;
            const $io2: any = (input: any): boolean =>
                "brand" === input.type && "string" === typeof input.name;
            const $iu0: any = (input: any): any =>
                (() => {
                    if ("brand" === input.type) return $io2(input);
                    if ("manufacturer" === input.type) return $io1(input);
                    return false;
                })();
            const $throws: any = (typia.clone as any).throws;
            const $co0: any = (input: any): any => ({
                name: input.name as any,
                manufacturer:
                    "object" === typeof input.manufacturer &&
                    null !== input.manufacturer
                        ? $co1(input.manufacturer)
                        : (input.manufacturer as any),
                brand:
                    "object" === typeof input.brand && null !== input.brand
                        ? $co2(input.brand)
                        : (input.brand as any),
                similar:
                    "object" === typeof input.similar && null !== input.similar
                        ? $cu0(input.similar)
                        : (input.similar as any),
            });
            const $co1: any = (input: any): any => ({
                type: input.type as any,
                name: input.name as any,
            });
            const $co2: any = (input: any): any => ({
                type: input.type as any,
                name: input.name as any,
            });
            return Array.isArray(input) &&
                input.length === 3 &&
                "object" === typeof input[0] &&
                null !== input[0] &&
                $io0(input[0]) &&
                "object" === typeof input[1] &&
                null !== input[1] &&
                $io0(input[1]) &&
                "object" === typeof input[2] &&
                null !== input[2] &&
                $io0(input[2])
                ? ([
                      "object" === typeof input[0] && null !== input[0]
                          ? $co0(input[0])
                          : (input[0] as any),
                      "object" === typeof input[1] && null !== input[1]
                          ? $co0(input[1])
                          : (input[1] as any),
                      "object" === typeof input[2] && null !== input[2]
                          ? $co0(input[2])
                          : (input[2] as any),
                  ] as any)
                : (input as any);
        })(input),
);
