import TSON from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_assert } from "./_test_assert";

export const test_assert_class_closure = _test_assert(
    "class closure",
    ClassGetter.generate,
    (input) => TSON.assertType(input),
);
