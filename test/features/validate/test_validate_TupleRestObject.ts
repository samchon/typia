import typia from "../../../src";

import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_validate } from "../../internal/_test_validate";

export const test_validate_TupleRestObject = _test_validate(
    "TupleRestObject",
    TupleRestObject.generate,
    (input) => typia.validate(input),
    TupleRestObject.SPOILERS,
);
