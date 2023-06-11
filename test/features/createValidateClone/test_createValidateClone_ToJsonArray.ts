import typia from "../../../src";

import { ToJsonArray } from "../../structures/ToJsonArray";
import { _test_validateClone } from "../../internal/_test_validateClone";

export const test_createValidateClone_ToJsonArray = _test_validateClone(
    "ToJsonArray",
    ToJsonArray.generate,
    typia.createValidateClone<ToJsonArray>(),
);
