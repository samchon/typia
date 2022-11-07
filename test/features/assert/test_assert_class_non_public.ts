import TSON from "../../../src";
import { ClassNonPublic } from "../../structures/ClassNonPublic";
import { _test_assert } from "./_test_assert";

export const test_assert_class_non_public = _test_assert(
    "non-public class member",
    ClassNonPublic.generate,
    (input) => TSON.assert(input),
    ClassNonPublic.SPOILERS,
);
