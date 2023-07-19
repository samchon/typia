import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { DynamicSimple } from "../../../structures/DynamicSimple";

export const test_is_DynamicSimple = _test_is<DynamicSimple>(DynamicSimple)(
    (input) =>
        ((input: any): input is DynamicSimple => {
            const $join = (typia.is as any).join;
            const $io0 = (input: any): boolean =>
                Object.keys(input).every((key: any) => {
                    const value = input[key];
                    if (undefined === value) return true;
                    if (RegExp(/(.*)/).test(key))
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
        })(input),
);
