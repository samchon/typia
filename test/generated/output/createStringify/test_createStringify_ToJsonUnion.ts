import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";

export const test_createStringify_ToJsonUnion = _test_stringify(
    "ToJsonUnion",
    ToJsonUnion.generate,
    (input: ToJsonUnion): string => {
        const $string = (typia.createStringify as any).string;
        const $number = (typia.createStringify as any).number;
        const $throws = (typia.createStringify as any).throws;
        const $io0 = (input: any): boolean =>
            "number" === typeof input.id &&
            "string" === typeof input.mobile &&
            "string" === typeof input.name;
        const $io1 = (input: any): boolean =>
            "string" === typeof input.manufacturer &&
            "string" === typeof input.brand &&
            "string" === typeof input.name;
        const $iu0 = (input: any): any =>
            (() => {
                if (undefined !== input.id) return $io0(input);
                if (undefined !== input.manufacturer) return $io1(input);
                return false;
            })();
        const $so0 = (input: any): any =>
            `{"id":${$number(input.id)},"mobile":${$string(
                input.mobile,
            )},"name":${$string(input.name)}}`;
        const $so1 = (input: any): any =>
            `{"manufacturer":${$string(input.manufacturer)},"brand":${$string(
                input.brand,
            )},"name":${$string(input.name)}}`;
        const $su0 = (input: any): any =>
            (() => {
                if (undefined !== input.id) return $so0(input);
                if (undefined !== input.manufacturer) return $so1(input);
                $throws({
                    expected: "(ToJsonUnion.ICitizen | ToJsonUnion.IProduct)",
                    value: input,
                });
            })();
        return `[${input
            .map((elem: any) =>
                (() => {
                    if (
                        "object" === typeof elem &&
                        "function" === typeof elem.toJSON
                    )
                        return JSON.stringify(elem.toJSON());
                    if ("string" === typeof elem) return $string(elem);
                    if ("number" === typeof elem) return $number(elem);
                    if ("boolean" === typeof elem) return elem;
                    if ("object" === typeof elem && null !== elem)
                        return $su0(elem);
                    $throws({
                        expected:
                            "(ToJsonUnion.ICitizen | ToJsonUnion.IProduct | boolean | number | string | unknown)",
                        value: elem,
                    });
                })(),
            )
            .join(",")}]`;
    },
);
