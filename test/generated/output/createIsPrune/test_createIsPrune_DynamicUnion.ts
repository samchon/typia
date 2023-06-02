import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { DynamicUnion } from "../../../structures/DynamicUnion";

export const test_createIsPrune_DynamicUnion = _test_isPrune(
    "DynamicUnion",
    DynamicUnion.generate,
    (input: any): input is DynamicUnion => {
        const is: any = (input: any): input is DynamicUnion => {
            const $join: any = (typia.createIsPrune as any).join;
            const $io0: any = (input: any): boolean =>
                Object.keys(input).every((key: any) => {
                    const value: any = input[key];
                    if (undefined === value) return true;
                    if (RegExp(/^-?\d+\.?\d*$/).test(key))
                        return "string" === typeof value;
                    if (RegExp(/^(prefix_(.*))/).test(key))
                        return "string" === typeof value;
                    if (RegExp(/((.*)_postfix)$/).test(key))
                        return "string" === typeof value;
                    if (
                        RegExp(
                            /^(value_between_-?\d+\.?\d*_and_-?\d+\.?\d*)$/,
                        ).test(key)
                    )
                        return (
                            "number" === typeof value && Number.isFinite(value)
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
        const prune: any = (input: DynamicUnion): void => {
            const $join: any = (typia.createIsPrune as any).join;
            const $po0: any = (input: any): any => {
                Object.entries(input).forEach(([key, value]: any) => {
                    if (undefined === value) return;
                    if (RegExp(/^-?\d+\.?\d*$/).test(key)) {
                    }
                    if (RegExp(/^(prefix_(.*))/).test(key)) {
                    }
                    if (RegExp(/((.*)_postfix)$/).test(key)) {
                    }
                    if (
                        RegExp(
                            /^(value_between_-?\d+\.?\d*_and_-?\d+\.?\d*)$/,
                        ).test(key)
                    ) {
                    }
                });
                for (const key: any of Object.keys(input)) {
                    if (
                        RegExp(/^-?\d+\.?\d*$/).test(key) ||
                        RegExp(/^(prefix_(.*))/).test(key) ||
                        RegExp(/((.*)_postfix)$/).test(key) ||
                        RegExp(
                            /^(value_between_-?\d+\.?\d*_and_-?\d+\.?\d*)$/,
                        ).test(key)
                    )
                        continue;
                    delete input[key];
                }
            };
            if ("object" === typeof input && null !== input) $po0(input);
        };
        if (!is(input)) return false;
        prune(input);
        return true;
    },
    DynamicUnion.SPOILERS,
);
