import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_validateStringify_DynamicUndefined = _test_validateStringify(
    "DynamicUndefined",
    DynamicUndefined.generate,
    (input) => typia.validateStringify(input),
    DynamicUndefined.SPOILERS,
);
