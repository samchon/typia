import typia from "../../../src";

import { ToJsonArray } from "../../structures/ToJsonArray";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_ToJsonArray = _test_isStringify(
    "ToJsonArray",
    ToJsonArray.generate,
    typia.createIsStringify<ToJsonArray>(),
);
