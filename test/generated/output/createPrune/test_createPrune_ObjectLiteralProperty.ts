import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";
export const test_createPrune_ObjectLiteralProperty = _test_prune("ObjectLiteralProperty", ObjectLiteralProperty.generate, (input: ObjectLiteralProperty): void => {
    const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("something-interesting-do-you-want?" === key || "or-something-crazy-do-you-want?" === key)
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
});
