import typia from "../../../src";
import { ObjectTuple } from "../../structures/ObjectTuple";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_ObjectTuple = _test_assertClone(
    "ObjectTuple",
    ObjectTuple.generate,
    (input) => typia.assertClone(input),
    ObjectTuple.SPOILERS,
);