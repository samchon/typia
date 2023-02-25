import typia from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_assertPrune } from "../internal/_test_assertPrune";
export const test_assertPrune_ObjectOptional = _test_assertPrune("ObjectOptional", ObjectOptional.generate, (input) => ((input: any): ObjectOptional => { const assert = (input: any) => {
    const $guard = (typia.assertPrune as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ObjectOptional => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => (undefined === input.id || "string" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "(string | undefined)",
            value: input.id
        })) && (undefined === input.name || "string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "(string | undefined)",
            value: input.name
        })) && (undefined === input.email || "string" === typeof input.email || $guard(_exceptionable, {
            path: _path + ".email",
            expected: "(string | undefined)",
            value: input.email
        })) && (undefined === input.sequence || "number" === typeof input.sequence || $guard(_exceptionable, {
            path: _path + ".sequence",
            expected: "(number | undefined)",
            value: input.sequence
        }));
        return ("object" === typeof input && null !== input && false === Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Resolve<ObjectOptional>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as ObjectOptional;
}; const prune = (input: ObjectOptional): void => {
    const $po0 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("id" === key || "name" === key || "email" === key || "sequence" === key)
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
}; assert(input); prune(input); return input; })(input), ObjectOptional.SPOILERS);
