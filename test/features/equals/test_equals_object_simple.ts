import TSON from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_object_simple = _test_equals(
    "simple object",
    ObjectSimple.generate,
    (input) => TSON.equals(input),
);
