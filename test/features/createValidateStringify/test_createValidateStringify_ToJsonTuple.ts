import typia from "typia";

import { ToJsonTuple } from "../../structures/ToJsonTuple";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_ToJsonTuple = _test_validateStringify(
    "ToJsonTuple",
    ToJsonTuple.generate,
    typia.createValidateStringify<ToJsonTuple>(),
);
