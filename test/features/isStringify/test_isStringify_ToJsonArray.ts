import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_isStringify_ToJsonArray = _test_isStringify(
    "ToJsonArray",
    ToJsonArray.generate,
    (input) => typia.isStringify(input),
);
