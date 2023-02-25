import typia from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_prune } from "../internal/_test_prune";
export const test_prune_ObjectLiteralProperty = _test_prune("ObjectLiteralProperty", ObjectLiteralProperty.generate, (input) => ((input: ISomething): void => {
    const $po0 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("something-interesting-do-you-want?" === key || "or-something-crazy-do-you-want?" === key)
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
})(input));
