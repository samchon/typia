import typia from "../../../src";

import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_assertEquals } from "../../internal/_test_assertEquals";

export const test_createAssertEquals_TupleRestObject = _test_assertEquals(
    "TupleRestObject",
    TupleRestObject.generate,
    typia.createAssertEquals<TupleRestObject>(),
);
