import TSON from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_assert_equals } from "./../assert_equals/_test_assert_equals";

export const test_create_assert_equals_object_simple = _test_assert_equals(
    "simple object",
    ObjectSimple.generate,
    TSON.createAssertEquals<ObjectSimple>(),
);
