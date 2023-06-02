import typia from "../../../../src";
import { _test_isParse } from "../../../internal/_test_isParse";
import { DynamicSimple } from "../../../structures/DynamicSimple";

export const test_isParse_DynamicSimple = _test_isParse(
    "DynamicSimple",
    DynamicSimple.generate,
    (input) =>
        ((input: any): typia.Primitive<DynamicSimple> => {
            const is: any = (input: any): input is DynamicSimple => {
                const $join: any = (typia.isParse as any).join;
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
            input = JSON.parse(input);
            return is(input) ? (input as any) : null;
        })(input),
    DynamicSimple.SPOILERS,
);
