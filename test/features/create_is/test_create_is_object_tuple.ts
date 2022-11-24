import TSON from "../../../src";
import { ObjectTuple } from "../../structures/ObjectTuple";
import { _test_is } from "../internal/_test_is";

export const test_create_is_object_tuple = _test_is(
    "union object",
    ObjectTuple.generate,
    TSON.createIs<ObjectTuple>(),
    ObjectTuple.SPOILERS,
);
