import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_assertStringify_ToJsonArray = _test_assertStringify(
    "ToJsonArray",
    ToJsonArray.generate,
    (input) => typia.assertStringify<ToJsonArray>(input),
);
