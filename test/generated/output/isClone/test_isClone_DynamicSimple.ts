import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { DynamicSimple } from "../../../structures/DynamicSimple";

export const test_isClone_DynamicSimple = _test_isClone(
    "DynamicSimple",
    DynamicSimple.generate,
    (input) =>
        ((input: any): typia.Primitive<DynamicSimple> | null => {
            const is: any = (input: any): input is DynamicSimple => {
                const $join: any = (typia.isClone as any).join;
                const $io0: any = (input: any): boolean =>
                    Object.keys(input).every((key: any) => {
                        const value: any = input[key];
                        if (undefined === value) return true;
                        if (RegExp(/(.*)/).test(key))
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
                input: DynamicSimple,
            ): typia.Primitive<DynamicSimple> => {
                const $join: any = (typia.isClone as any).join;
                const $co0: any = (input: any): any => {
                    const output: any = {} as any;
                    for (const [key, value] of Object.entries(input)) {
                        if (RegExp(/(.*)/).test(key)) {
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
    DynamicSimple.SPOILERS,
);
