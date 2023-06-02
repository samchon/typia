import typia from "../../../../src";
import { _test_isParse } from "../../../internal/_test_isParse";
import { ObjectNullable } from "../../../structures/ObjectNullable";

export const test_isParse_ObjectNullable = _test_isParse(
    "ObjectNullable",
    ObjectNullable.generate,
    (input) =>
        ((input: any): typia.Primitive<ObjectNullable> => {
            const is: any = (input: any): input is ObjectNullable => {
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
                    "manufacturer" === input.type &&
                    "string" === typeof input.name;
                const $io2: any = (input: any): boolean =>
                    "brand" === input.type && "string" === typeof input.name;
                const $iu0: any = (input: any): any =>
                    (() => {
                        if ("brand" === input.type) return $io2(input);
                        if ("manufacturer" === input.type) return $io1(input);
                        return false;
                    })();
                return (
                    Array.isArray(input) &&
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
                );
            };
            input = JSON.parse(input);
            return is(input) ? (input as any) : null;
        })(input),
    ObjectNullable.SPOILERS,
);
