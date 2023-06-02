import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_isStringify_DynamicNever = _test_isStringify(
    "DynamicNever",
    DynamicNever.generate,
    (input) => typia.isStringify(input),
    DynamicNever.SPOILERS,
);
