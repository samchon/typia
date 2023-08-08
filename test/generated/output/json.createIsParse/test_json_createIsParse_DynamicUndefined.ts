import typia from "../../../../src";
import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { DynamicUndefined } from "../../../structures/DynamicUndefined";

export const test_json_isParse_DynamicUndefined = _test_json_isParse(
    "DynamicUndefined",
    DynamicUndefined.generate,
    (input: any): typia.Primitive<DynamicUndefined> => {
        const is = (input: any): input is DynamicUndefined => {
            const $join = (typia.json.createIsParse as any).join;
            const $io0 = (input: any): boolean =>
                Object.keys(input).every((key: any) => {
                    const value = input[key];
                    if (undefined === value) return true;
                    if (RegExp(/(.*)/).test(key))
                        return null !== value && undefined === value;
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
    },
    DynamicUndefined.SPOILERS,
);
