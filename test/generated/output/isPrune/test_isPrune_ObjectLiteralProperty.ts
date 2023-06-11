import typia from "../../../../src";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";
import { _test_isPrune } from "../../../internal/_test_isPrune";
export const test_isPrune_ObjectLiteralProperty = _test_isPrune("ObjectLiteralProperty", ObjectLiteralProperty.generate, (input) => ((input: any): input is ObjectLiteralProperty.ISomething => { const is = (input: any): input is ObjectLiteralProperty.ISomething => {
    return "object" === typeof input && null !== input && ("string" === typeof (input as any)["something-interesting-do-you-want?"] && "string" === typeof (input as any)["or-something-crazy-do-you-want?"]);
}; const prune = (input: ObjectLiteralProperty.ISomething): void => {
    const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("something-interesting-do-you-want?" === key || "or-something-crazy-do-you-want?" === key)
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
}; if (!is(input))
    return false; prune(input); return true; })(input), ObjectLiteralProperty.SPOILERS);
