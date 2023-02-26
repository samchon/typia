import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_createAssertParse_TupleRestObject = _test_assertParse(
    "TupleRestObject",
    TupleRestObject.generate,
    typia.createAssertParse<TupleRestObject>(),
    TupleRestObject.SPOILERS,
);
