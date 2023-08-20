import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_validateStringify_ToJsonArray = _test_validateStringify(
    "ToJsonArray",
    ToJsonArray.generate,
    (input) => typia.validateStringify<ToJsonArray>(input),
);
