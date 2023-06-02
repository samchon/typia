import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_createIsClone_TupleRestObject = _test_isClone(
    "TupleRestObject",
    TupleRestObject.generate,
    typia.createIsClone<TupleRestObject>(),
    TupleRestObject.SPOILERS,
);
