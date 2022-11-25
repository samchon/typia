import TSON from "../../../src";
import { ObjectTuple } from "../../structures/ObjectTuple";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_object_tuple = _test_equals(
    "union object",
    ObjectTuple.generate,
    (input) => TSON.equals(input),
);
