import TSON from "../../../src";
import { ObjectTuple } from "../../structures/ObjectTuple";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_ObjectTuple = _test_assertParse(
    "ObjectTuple",
    ObjectTuple.generate,
    TSON.createAssertParse<ObjectTuple>(),
    ObjectTuple.SPOILERS,
);
