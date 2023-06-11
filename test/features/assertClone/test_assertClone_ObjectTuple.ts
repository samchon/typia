import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_assertClone_ObjectTuple = _test_assertClone(
    "ObjectTuple",
    ObjectTuple.generate,
    (input) => typia.assertClone(input),
    ObjectTuple.SPOILERS,
);
