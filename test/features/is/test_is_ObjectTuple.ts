import typia from "../../../src";
import { ObjectTuple } from "../../structures/ObjectTuple";
import { _test_is } from "../internal/_test_is";

export const test_is_ObjectTuple = _test_is(
    "ObjectTuple",
    ObjectTuple.generate,
    (input) => typia.is(input),
    ObjectTuple.SPOILERS,
);