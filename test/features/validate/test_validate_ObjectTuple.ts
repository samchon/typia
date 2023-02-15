import typia from "typia";

import { ObjectTuple } from "../../structures/ObjectTuple";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_ObjectTuple = _test_validate(
    "ObjectTuple",
    ObjectTuple.generate,
    (input) => typia.validate(input),
    ObjectTuple.SPOILERS,
);
