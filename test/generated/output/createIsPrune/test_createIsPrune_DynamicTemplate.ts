import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";

export const test_createIsPrune_DynamicTemplate = _test_isPrune(
    "DynamicTemplate",
    DynamicTemplate.generate,
    (input: any): input is DynamicTemplate => {
        const is: any = (input: any): input is DynamicTemplate => {
            const $join: any = (typia.createIsPrune as any).join;
            const $io0: any = (input: any): boolean =>
                Object.keys(input).every((key: any) => {
                    const value: any = input[key];
                    if (undefined === value) return true;
                    if (RegExp(/^(prefix_(.*))/).test(key))
                        return "string" === typeof value;
                    if (RegExp(/((.*)_postfix)$/).test(key))
                        return "string" === typeof value;
                    if (RegExp(/^(value_-?\d+\.?\d*)$/).test(key))
                        return (
                            "number" === typeof value && Number.isFinite(value)
                        );
                    if (RegExp(/^(between_(.*)_and_-?\d+\.?\d*)$/).test(key))
                        return "boolean" === typeof value;
                    return true;
                });
            return (
                "object" === typeof input &&
                null !== input &&
                false === Array.isArray(input) &&
                $io0(input)
            );
        };
        const prune: any = (input: DynamicTemplate): void => {
            const $join: any = (typia.createIsPrune as any).join;
            const $po0: any = (input: any): any => {
                Object.entries(input).forEach(([key, value]: any) => {
                    if (undefined === value) return;
                    if (RegExp(/^(prefix_(.*))/).test(key)) {
                    }
                    if (RegExp(/((.*)_postfix)$/).test(key)) {
                    }
                    if (RegExp(/^(value_-?\d+\.?\d*)$/).test(key)) {
                    }
                    if (RegExp(/^(between_(.*)_and_-?\d+\.?\d*)$/).test(key)) {
                    }
                });
                for (const key: any of Object.keys(input)) {
                    if (
                        RegExp(/^(prefix_(.*))/).test(key) ||
                        RegExp(/((.*)_postfix)$/).test(key) ||
                        RegExp(/^(value_-?\d+\.?\d*)$/).test(key) ||
                        RegExp(/^(between_(.*)_and_-?\d+\.?\d*)$/).test(key)
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
    DynamicTemplate.SPOILERS,
);
