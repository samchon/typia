import typia from "../../../../src";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_misc_isPrune_ClassMethod = _test_misc_isPrune(
    "ClassMethod",
)<ClassMethod>(ClassMethod)((input: any): input is ClassMethod => {
    const is = (input: any): input is ClassMethod => {
        return (
            "object" === typeof input &&
            null !== input &&
            "string" === typeof (input as any).name &&
            "number" === typeof (input as any).age &&
            Number.isFinite((input as any).age)
        );
    };
    const prune = (input: ClassMethod): void => {
        const $po0 = (input: any): any => {
            for (const key of Object.keys(input)) {
                if ("name" === key || "age" === key) continue;
                delete input[key];
            }
        };
        if ("object" === typeof input && null !== input) $po0(input);
    };
    if (!is(input)) return false;
    prune(input);
    return true;
});
