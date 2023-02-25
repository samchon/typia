import typia from "../../../src";

import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_TupleRestArray = _test_clone(
    "TupleRestArray",
    TupleRestArray.generate,
    typia.createClone<TupleRestArray>(),
);
