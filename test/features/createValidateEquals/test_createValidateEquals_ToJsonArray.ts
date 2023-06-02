import typia from "../../../src";

import { ToJsonArray } from "../../structures/ToJsonArray";
import { _test_validateEquals } from "../../internal/_test_validateEquals";

export const test_createValidateEquals_ToJsonArray = _test_validateEquals(
    "ToJsonArray",
    ToJsonArray.generate,
    typia.createValidateEquals<ToJsonArray>(),
);
