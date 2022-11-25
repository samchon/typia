import TSON from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_object_simple = _test_assert(
    "simple object",
    ObjectSimple.generate,
    (input) => TSON.assert(input),
    ObjectSimple.SPOILERS,
);
