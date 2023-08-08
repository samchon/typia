import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_assert_ObjectTuple = _test_assert(
    "ObjectTuple",
    ObjectTuple.generate,
    (input) => typia.assert(input),
    ObjectTuple.SPOILERS,
);
