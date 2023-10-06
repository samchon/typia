import typia from "../../../../src";
import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { ObjectNullable } from "../../../structures/ObjectNullable";

export const test_json_isParse_ObjectNullable = _test_json_isParse(
    "ObjectNullable",
)<ObjectNullable>(ObjectNullable)((input) =>
    ((input: any): typia.Primitive<ObjectNullable> => {
        const is = (input: any): input is ObjectNullable => {
            const $io0 = (input: any): boolean =>
                Array.isArray(input.value) &&
                input.value.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io1(elem),
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
                "manufacturer" === input.type && "string" === typeof input.name;
            const $io3 = (input: any): boolean =>
                "brand" === input.type && "string" === typeof input.name;
            const $iu0 = (input: any): any =>
                (() => {
                    if ("brand" === input.type) return $io3(input);
                    else if ("manufacturer" === input.type) return $io2(input);
                    else return false;
                })();
            return "object" === typeof input && null !== input && $io0(input);
        };
        input = JSON.parse(input);
        return is(input) ? (input as any) : null;
    })(input),
);
