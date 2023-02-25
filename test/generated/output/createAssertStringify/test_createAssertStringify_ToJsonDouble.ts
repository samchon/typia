import typia from "../../../src";
import { ToJsonDouble } from "../../structures/ToJsonDouble";
import { _test_assertStringify } from "../internal/_test_assertStringify";
export const test_createAssertStringify_ToJsonDouble = _test_assertStringify("ToJsonDouble", ToJsonDouble.generate, (input: Parent): string => { const assert = (input: any) => {
    const $guard = (typia.createAssertStringify as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is Parent => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => true;
        return ("object" === typeof input && null !== input && false === Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Resolve<ToJsonDouble.Parent>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as Parent;
}; const stringify = (input: Parent): string => {
    const $so0 = (input: any) => `{"id":${input.id},"flag":${input.flag}}`;
    return $so0(input.toJSON());
}; return stringify(assert(input)); });
