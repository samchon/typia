import typia from "../../../src";

import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_TupleRestArray = _test_validate(
    "TupleRestArray",
    TupleRestArray.generate,
    (input) => typia.validate(input),
    TupleRestArray.SPOILERS,
);
