import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";

export const test_isStringify_ObjectDynamic = _test_isStringify(
    "ObjectDynamic",
    ObjectDynamic.generate,
    (input) =>
        ((input: ObjectDynamic): string | null => {
            const is = (input: any): input is ObjectDynamic => {
                const $join = (typia.isStringify as any).join;
                const $io0 = (input: any): boolean =>
                    Object.keys(input).every((key: any) => {
                        const value = input[key];
                        if (undefined === value) return true;
                        if (RegExp(/(.*)/).test(key))
                            return (
                                "string" === typeof value ||
                                ("number" === typeof value &&
                                    Number.isFinite(value)) ||
                                "boolean" === typeof value
                            );
                        return true;
                    });
                return (
                    "object" === typeof input &&
                    null !== input &&
                    false === Array.isArray(input) &&
                    $io0(input)
                );
            };
            const stringify = (input: ObjectDynamic): string => {
                const $join = (typia.isStringify as any).join;
                const $string = (typia.isStringify as any).string;
                const $number = (typia.isStringify as any).number;
                const $throws = (typia.isStringify as any).throws;
                const $so0 = (input: any): any =>
                    `{${Object.entries(input)
                        .map(([key, value]: [string, any]) => {
                            if (undefined === value) return "";
                            return `${JSON.stringify(key)}:${(() => {
                                if ("string" === typeof value)
                                    return $string(value);
                                if ("number" === typeof value)
                                    return $number(value);
                                if ("boolean" === typeof value) return value;
                                $throws({
                                    expected: "(boolean | number | string)",
                                    value: value,
                                });
                            })()}`;
                        })
                        .filter((str: any) => "" !== str)
                        .join(",")}}`;
                return $so0(input);
            };
            return is(input) ? stringify(input) : null;
        })(input),
    ObjectDynamic.SPOILERS,
);
