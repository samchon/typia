import typia from "typia";

import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_TupleRestObject = _test_validate(
    "TupleRestObject",
    TupleRestObject.generate,
    typia.createValidate<TupleRestObject>(),
    TupleRestObject.SPOILERS,
);
