import typia from "typia";

import { ObjectTuple } from "../../structures/ObjectTuple";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_ObjectTuple = _test_assertEquals(
    "ObjectTuple",
    ObjectTuple.generate,
    (input) => typia.assertEquals(input),
);
