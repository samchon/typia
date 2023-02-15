import typia from "typia";

import { ToJsonTuple } from "../../structures/ToJsonTuple";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_ToJsonTuple = _test_isStringify(
    "ToJsonTuple",
    ToJsonTuple.generate,
    typia.createIsStringify<ToJsonTuple>(),
);
