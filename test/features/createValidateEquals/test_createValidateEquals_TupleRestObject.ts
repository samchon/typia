import typia from "../../../src";
import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_TupleRestObject = _test_validateEquals(
    "TupleRestObject",
    TupleRestObject.generate,
    typia.createValidateEquals<TupleRestObject>(),
);
