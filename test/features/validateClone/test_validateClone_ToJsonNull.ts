import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_validateClone_ToJsonNull = _test_validateClone(
    "ToJsonNull",
    ToJsonNull.generate,
    (input) => typia.validateClone<ToJsonNull>(input),
);
