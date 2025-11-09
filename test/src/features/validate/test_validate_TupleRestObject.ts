import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_validate_TupleRestObject = (): void => _test_validate(
    "TupleRestObject",
)<TupleRestObject>(
    TupleRestObject
)((input) => typia.validate<TupleRestObject>(input));
