import typia from "../../../src";
import { ToJsonNull } from "../../structures/ToJsonNull";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_ToJsonNull = _test_validateClone(
    "ToJsonNull",
    ToJsonNull.generate,
    (input) => typia.validateClone(input),
);