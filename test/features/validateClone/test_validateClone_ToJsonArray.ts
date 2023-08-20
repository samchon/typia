import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_validateClone_ToJsonArray = _test_validateClone(
    "ToJsonArray",
    ToJsonArray.generate,
    (input) => typia.validateClone<ToJsonArray>(input),
);
