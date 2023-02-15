import typia from "typia";

import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_TupleRestArray = _test_validateEquals(
    "TupleRestArray",
    TupleRestArray.generate,
    typia.createValidateEquals<TupleRestArray>(),
);
