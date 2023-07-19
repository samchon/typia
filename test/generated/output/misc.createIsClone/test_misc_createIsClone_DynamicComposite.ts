import typia from "../../../../src";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { DynamicComposite } from "../../../structures/DynamicComposite";

export const test_misc_isClone_DynamicComposite =
    _test_misc_isClone<DynamicComposite>(DynamicComposite)(
        (input: any): typia.Primitive<DynamicComposite> | null => {
            const is = (input: any): input is DynamicComposite => {
                const $join = (typia.misc.createIsClone as any).join;
                const $io0 = (input: any): boolean =>
                    "string" === typeof input.id &&
                    "string" === typeof input.name &&
                    Object.keys(input).every((key: any) => {
                        const value = input[key];
                        if (undefined === value) return true;
                        if (RegExp(/^-?\d+\.?\d*$/).test(key))
                            return (
                                "number" === typeof value &&
                                Number.isFinite(value)
                            );
                        if (RegExp(/^(prefix_(.*))/).test(key))
                            return "string" === typeof value;
                        if (RegExp(/((.*)_postfix)$/).test(key))
                            return "string" === typeof value;
                        if (RegExp(/^(value_-?\d+\.?\d*)$/).test(key))
                            return (
                                "string" === typeof value ||
                                ("number" === typeof value &&
                                    Number.isFinite(value)) ||
                                "boolean" === typeof value
                            );
                        if (
                            RegExp(/^(between_(.*)_and_-?\d+\.?\d*)$/).test(key)
                        )
                            return "boolean" === typeof value;
                        return true;
                    });
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            const clone = (
                input: DynamicComposite,
            ): typia.Primitive<DynamicComposite> => {
                const $join = (typia.misc.createIsClone as any).join;
                const $co0 = (input: any): any => {
                    const output = {
                        id: input.id as any,
                        name: input.name as any,
                    } as any;
                    for (const [key, value] of Object.entries(input)) {
                        if (RegExp(/^-?\d+\.?\d*$/).test(key)) {
                            output[key] = value as any;
                            continue;
                        }
                        if (RegExp(/^(prefix_(.*))/).test(key)) {
                            output[key] = value as any;
                            continue;
                        }
                        if (RegExp(/((.*)_postfix)$/).test(key)) {
                            output[key] = value as any;
                            continue;
                        }
                        if (RegExp(/^(value_-?\d+\.?\d*)$/).test(key)) {
                            output[key] = value as any;
                            continue;
                        }
                        if (
                            RegExp(/^(between_(.*)_and_-?\d+\.?\d*)$/).test(key)
                        ) {
                            output[key] = value as any;
                            continue;
                        }
                    }
                    return output;
                };
                return "object" === typeof input && null !== input
                    ? $co0(input)
                    : (input as any);
            };
            if (!is(input)) return null;
            const output = clone(input);
            return output;
        },
    );
