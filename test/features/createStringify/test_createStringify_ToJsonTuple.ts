import typia from "typia";

import { ToJsonTuple } from "../../structures/ToJsonTuple";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_ToJsonTuple = _test_stringify(
    "ToJsonTuple",
    ToJsonTuple.generate,
    typia.createStringify<ToJsonTuple>(),
);
