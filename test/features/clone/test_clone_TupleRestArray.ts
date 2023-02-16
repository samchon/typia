import typia from "typia";

import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_TupleRestArray = _test_clone(
    "TupleRestArray",
    TupleRestArray.generate,
    (input) => typia.clone(input),
);
