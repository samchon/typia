import TSON from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_assert_stringify } from "./_test_assert_stringify";

export const test_assert_stringify_class_closure = _test_assert_stringify(
    "class closure",
    ClassGetter.generate,
    (input) => TSON.assertStringify(input),
    ClassGetter.SPOILERS,
);
