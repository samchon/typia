import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_createIsParse_TupleRestObject = _test_isParse(
    "TupleRestObject",
    TupleRestObject.generate,
    typia.createIsParse<TupleRestObject>(),
    TupleRestObject.SPOILERS,
);
