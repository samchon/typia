import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { DynamicUnion } from "../../../structures/DynamicUnion";

export const test_isClone_DynamicUnion = _test_isClone(
    "DynamicUnion",
    DynamicUnion.generate,
    (input) =>
        ((input: any): typia.Primitive<DynamicUnion> | null => {
            const is: any = (input: any): input is DynamicUnion => {
                const $join: any = (typia.isClone as any).join;
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
                                "number" === typeof value &&
                                Number.isFinite(value)
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
            const clone: any = (
                input: DynamicUnion,
            ): typia.Primitive<DynamicUnion> => {
                const $join: any = (typia.isClone as any).join;
                const $co0: any = (input: any): any => {
                    const output: any = {} as any;
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
                        if (
                            RegExp(
                                /^(value_between_-?\d+\.?\d*_and_-?\d+\.?\d*)$/,
                            ).test(key)
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
            const output: any = clone(input);
            return output;
        })(input),
    DynamicUnion.SPOILERS,
);
