import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { DynamicTree } from "../../../structures/DynamicTree";

export const test_isStringify_DynamicTree = _test_isStringify(
    "DynamicTree",
    DynamicTree.generate,
    (input) =>
        ((input: DynamicTree): string | null => {
            const is: any = (input: any): input is DynamicTree => {
                const $join: any = (typia.isStringify as any).join;
                const $io0: any = (input: any): boolean =>
                    "string" === typeof input.id &&
                    "number" === typeof input.sequence &&
                    Number.isFinite(input.sequence) &&
                    "object" === typeof input.children &&
                    null !== input.children &&
                    false === Array.isArray(input.children) &&
                    $io1(input.children);
                const $io1: any = (input: any): boolean =>
                    Object.keys(input).every((key: any) => {
                        const value: any = input[key];
                        if (undefined === value) return true;
                        if (RegExp(/(.*)/).test(key))
                            return (
                                "object" === typeof value &&
                                null !== value &&
                                $io0(value)
                            );
                        return true;
                    });
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            const stringify: any = (input: DynamicTree): string => {
                const $io0: any = (input: any): boolean =>
                    "string" === typeof input.id &&
                    "number" === typeof input.sequence &&
                    "object" === typeof input.children &&
                    null !== input.children &&
                    false === Array.isArray(input.children) &&
                    $io1(input.children);
                const $io1: any = (input: any): boolean =>
                    Object.keys(input).every((key: any) => {
                        const value: any = input[key];
                        if (undefined === value) return true;
                        if (RegExp(/(.*)/).test(key))
                            return (
                                "object" === typeof value &&
                                null !== value &&
                                $io0(value)
                            );
                        return true;
                    });
                const $string: any = (typia.isStringify as any).string;
                const $number: any = (typia.isStringify as any).number;
                const $join: any = (typia.isStringify as any).join;
                const $so0: any = (input: any): any =>
                    `{"id":${$string(input.id)},"sequence":${$number(
                        input.sequence,
                    )},"children":${$so1(input.children)}}`;
                const $so1: any = (input: any): any =>
                    `{${Object.entries(input)
                        .map(([key, value]: [string, any]) => {
                            if (undefined === value) return "";
                            return `${JSON.stringify(key)}:${$so0(value)}`;
                        })
                        .filter((str: any) => "" !== str)
                        .join(",")}}`;
                return $so0(input);
            };
            return is(input) ? stringify(input) : null;
        })(input),
    DynamicTree.SPOILERS,
);
