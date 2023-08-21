import typia from "../../../../src";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";

export const test_json_isStringify_ArrayRepeatedRequired =
    _test_json_isStringify("ArrayRepeatedRequired")<ArrayRepeatedRequired>(
        ArrayRepeatedRequired,
    )((input: ArrayRepeatedRequired): string | null => {
        const is = (input: any): input is ArrayRepeatedRequired => {
            const $ia0 = (input: any): any =>
                input.every(
                    (elem: any) =>
                        null !== elem &&
                        undefined !== elem &&
                        ("string" === typeof elem ||
                            ("number" === typeof elem &&
                                Number.isFinite(elem)) ||
                            (Array.isArray(elem) && ($ia0(elem) || false))),
                );
            return (
                null !== input &&
                undefined !== input &&
                ("string" === typeof input ||
                    ("number" === typeof input && Number.isFinite(input)) ||
                    (Array.isArray(input) && ($ia0(input) || false)))
            );
        };
        const stringify = (input: ArrayRepeatedRequired): string => {
            const $ia0 = (input: any): any =>
                input.every(
                    (elem: any) =>
                        null !== elem &&
                        undefined !== elem &&
                        ("string" === typeof elem ||
                            "number" === typeof elem ||
                            (Array.isArray(elem) && ($ia0(elem) || false))),
                );
            const $string = (typia.json.createIsStringify as any).string;
            const $number = (typia.json.createIsStringify as any).number;
            const $throws = (typia.json.createIsStringify as any).throws;
            const $sa0 = (input: any): any =>
                `[${input
                    .map((elem: any) =>
                        (() => {
                            if ("string" === typeof elem) return $string(elem);
                            if ("number" === typeof elem) return $number(elem);
                            if (Array.isArray(elem)) return $sa0(elem);
                            $throws({
                                expected:
                                    "(Array<ArrayRepeatedRequired> | number | string)",
                                value: elem,
                            });
                        })(),
                    )
                    .join(",")}]`;
            return (() => {
                if ("string" === typeof input) return $string(input);
                if ("number" === typeof input) return $number(input).toString();
                if (Array.isArray(input)) return $sa0(input);
                $throws({
                    expected:
                        "(Array<ArrayRepeatedRequired> | number | string)",
                    value: input,
                });
            })();
        };
        return is(input) ? stringify(input) : null;
    });
