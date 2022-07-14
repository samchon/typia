import TSON from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_validate } from "./_test_validate";

export const test_validate_object_literal_property = _test_validate(
    "literal propertized object",
    ObjectLiteralProperty.generate,
    (input) => TSON.validate(input),
    // [
    //     (input) => {
    //         input["something-interesting-do-you-want?"] = {} as any;
    //         return [`$input["something-interesting-do-you-want?"]`];
    //     },
    //     (input) => {
    //         input["or-something-crazy-do-you-want?"] = null!;
    //         return [`$input["or-something-crazy-do-you-want?"]`];
    //     },
    // ],
);
