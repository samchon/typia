import TSON from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_class_closure = _test_assert_clone(
    "class closure",
    ClassGetter.generate,
    (input) => TSON.assertClone(input),
    ClassGetter.SPOILERS,
);
