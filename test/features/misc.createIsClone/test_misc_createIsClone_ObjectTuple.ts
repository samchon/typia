import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_misc_isClone_ObjectTuple = _test_misc_isClone(
    "ObjectTuple",
    ObjectTuple.generate,
    typia.misc.createIsClone<ObjectTuple>(),
    ObjectTuple.SPOILERS,
);
