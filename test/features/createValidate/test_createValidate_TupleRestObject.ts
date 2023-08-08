import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_validate_TupleRestObject = _test_validate(
    "TupleRestObject",
    TupleRestObject.generate,
    typia.createValidate<TupleRestObject>(),
    TupleRestObject.SPOILERS,
);
