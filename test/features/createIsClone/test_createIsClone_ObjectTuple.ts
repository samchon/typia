import TSON from "../../../src";
import { ObjectTuple } from "../../structures/ObjectTuple";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_ObjectTuple = _test_isClone(
    "ObjectTuple",
    ObjectTuple.generate,
    TSON.createIsClone<ObjectTuple>(),
    ObjectTuple.SPOILERS,
);