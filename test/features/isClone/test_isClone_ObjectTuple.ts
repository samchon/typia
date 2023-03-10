import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_isClone_ObjectTuple = _test_isClone(
    "ObjectTuple",
    ObjectTuple.generate,
    (input) => typia.isClone(input),
    ObjectTuple.SPOILERS,
);
