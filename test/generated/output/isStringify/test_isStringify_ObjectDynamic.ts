import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";

export const test_isStringify_ObjectDynamic = _test_isStringify(
    "ObjectDynamic",
    ObjectDynamic.generate,
    (input) =>
        ((input: ObjectDynamic): string | null => {
            const is: any = (input: any): input is ObjectDynamic => {
                const $join: any = (typia.isStringify as any).join;
                const $io0: any = (input: any): boolean =>
                    Object.keys(input).every((key: any) => {
                        const value: any = input[key];
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
            const stringify: any = (input: ObjectDynamic): string => {
                const $join: any = (typia.isStringify as any).join;
                const $string: any = (typia.isStringify as any).string;
                const $number: any = (typia.isStringify as any).number;
                const $throws: any = (typia.isStringify as any).throws;
                const $so0: any = (input: any): any =>
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
