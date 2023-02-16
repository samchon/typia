import typia from "typia";

import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_TupleRestObject = _test_clone(
    "TupleRestObject",
    TupleRestObject.generate,
    (input) => typia.clone(input),
);
