import typia from "../../../src";

import { ToJsonArray } from "../../structures/ToJsonArray";
import { _test_validateStringify } from "../../internal/_test_validateStringify";

export const test_createValidateStringify_ToJsonArray = _test_validateStringify(
    "ToJsonArray",
    ToJsonArray.generate,
    typia.createValidateStringify<ToJsonArray>(),
);
