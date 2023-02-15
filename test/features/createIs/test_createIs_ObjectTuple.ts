import typia from "typia";

import { ObjectTuple } from "../../structures/ObjectTuple";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ObjectTuple = _test_is(
    "ObjectTuple",
    ObjectTuple.generate,
    typia.createIs<ObjectTuple>(),
    ObjectTuple.SPOILERS,
);
