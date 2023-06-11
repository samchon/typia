import typia from "../../../src";

import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_stringify } from "../../internal/_test_stringify";

export const test_stringify_TupleRestObject = _test_stringify(
    "TupleRestObject",
    TupleRestObject.generate,
    (input) => typia.stringify(input),
);
