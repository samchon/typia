import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_createValidateEquals_TupleRestObject = _test_validateEquals(
    "TupleRestObject",
    TupleRestObject.generate,
    typia.createValidateEquals<TupleRestObject>(),
);
