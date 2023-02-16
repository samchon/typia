import typia from "typia";

import { ObjectTuple } from "../../structures/ObjectTuple";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_ObjectTuple = _test_equals(
    "ObjectTuple",
    ObjectTuple.generate,
    (input) => typia.equals(input),
);
