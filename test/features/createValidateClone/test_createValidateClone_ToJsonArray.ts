import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_createValidateClone_ToJsonArray = _test_validateClone(
    "ToJsonArray",
    ToJsonArray.generate,
    typia.createValidateClone<ToJsonArray>(),
);
