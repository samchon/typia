import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_createValidateClone_TupleRestObject = _test_validateClone(
    "TupleRestObject",
    TupleRestObject.generate,
    typia.createValidateClone<TupleRestObject>(),
    TupleRestObject.SPOILERS,
);
