import TSON from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_assert_type } from "./../assert_type/_test_assert_type";

export const test_create_assert_type_object_simple = _test_assert_type(
    "simple object",
    ObjectSimple.generate,
    TSON.createAssertType<ObjectSimple>(),
    ObjectSimple.SPOILERS,
);
