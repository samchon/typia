import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_isStringify_DynamicUndefined = _test_isStringify(
    "DynamicUndefined",
    DynamicUndefined.generate,
    (input) => typia.isStringify<DynamicUndefined>(input),
    DynamicUndefined.SPOILERS,
);
