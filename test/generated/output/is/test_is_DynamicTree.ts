import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { DynamicTree } from "../../../structures/DynamicTree";

export const test_is_DynamicTree = _test_is(
    "DynamicTree",
    DynamicTree.generate,
    (input) =>
        ((input: any): input is DynamicTree => {
            const $join: any = (typia.is as any).join;
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
            return "object" === typeof input && null !== input && $io0(input);
        })(input),
    DynamicTree.SPOILERS,
);
