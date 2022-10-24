import TSON from "../../../src";
import { ClassNonPublic } from "../../structures/ClassNonPublic";
import { _test_assert_stringify } from "./_test_assert_stringify";

export const test_assert_stringify_class_non_public = _test_assert_stringify(
    "non-public class member",
    ClassNonPublic.generate,
    (input) => TSON.assertStringify(input),
    ClassNonPublic.SPOILERS,
);
