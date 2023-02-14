import typia from "../../../src";
import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_TupleRestObject = _test_validateClone(
    "TupleRestObject",
    TupleRestObject.generate,
    typia.createValidateClone<TupleRestObject>(),
    TupleRestObject.SPOILERS,
);