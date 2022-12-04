import TSON from "../../../src";
import { ObjectTuple } from "../../structures/ObjectTuple";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_ObjectTuple = _test_assertParse(
    "ObjectTuple",
    ObjectTuple.generate,
    (input) => TSON.assertParse<ObjectTuple>(input),
    ObjectTuple.SPOILERS,
);
