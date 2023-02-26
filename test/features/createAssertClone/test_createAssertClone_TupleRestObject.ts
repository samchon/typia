import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_createAssertClone_TupleRestObject = _test_assertClone(
    "TupleRestObject",
    TupleRestObject.generate,
    typia.createAssertClone<TupleRestObject>(),
    TupleRestObject.SPOILERS,
);
