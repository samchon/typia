import typia from "../../../../src";
import { _test_isParse } from "../../../internal/_test_isParse";
import { DynamicComposite } from "../../../structures/DynamicComposite";

export const test_isParse_DynamicComposite = _test_isParse(
    "DynamicComposite",
    DynamicComposite.generate,
    (input) =>
        ((input: any): typia.Primitive<DynamicComposite> => {
            const is: any = (input: any): input is DynamicComposite => {
                const $join: any = (typia.isParse as any).join;
                const $io0: any = (input: any): boolean =>
                    "string" === typeof input.id &&
                    "string" === typeof input.name &&
                    Object.keys(input).every((key: any) => {
                        const value: any = input[key];
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
            input = JSON.parse(input);
            return is(input) ? (input as any) : null;
        })(input),
    DynamicComposite.SPOILERS,
);
