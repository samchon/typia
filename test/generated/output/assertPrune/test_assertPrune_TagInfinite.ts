import typia from "../../../src";
import { TagInfinite } from "../../structures/TagInfinite";
import { _test_assertPrune } from "../internal/_test_assertPrune";
export const test_assertPrune_TagInfinite = _test_assertPrune("TagInfinite", TagInfinite.generate, (input) => ((input: any): TagInfinite => { const assert = (input: any) => {
    const $guard = (typia.assertPrune as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is TagInfinite => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("number" === typeof input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "number",
            value: input.value
        })) && ("number" === typeof input.ranged && 0 <= input.ranged && 100 >= input.ranged || $guard(_exceptionable, {
            path: _path + ".ranged",
            expected: "number",
            value: input.ranged
        })) && ("number" === typeof input.minimum && 0 <= input.minimum || $guard(_exceptionable, {
            path: _path + ".minimum",
            expected: "number",
            value: input.minimum
        })) && ("number" === typeof input.maximum && 100 >= input.maximum || $guard(_exceptionable, {
            path: _path + ".maximum",
            expected: "number",
            value: input.maximum
        })) && ("number" === typeof input.multipleOf && 0 === input.multipleOf % 3 || $guard(_exceptionable, {
            path: _path + ".multipleOf",
            expected: "number",
            value: input.multipleOf
        })) && ("number" === typeof input.typed && parseInt(input.typed) === input.typed || $guard(_exceptionable, {
            path: _path + ".typed",
            expected: "number",
            value: input.typed
        }));
        return ("object" === typeof input && null !== input || $guard(true, {
            path: _path + "",
            expected: "Resolve<TagInfinite>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as TagInfinite;
}; const prune = (input: TagInfinite): void => {
    const $po0 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("value" === key || "ranged" === key || "minimum" === key || "maximum" === key || "multipleOf" === key || "typed" === key)
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
}; assert(input); prune(input); return input; })(input), TagInfinite.SPOILERS);
