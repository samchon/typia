import TSON from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_assert_type } from "./_test_assert_type";

export const test_assert_type_object_simple = _test_assert_type(
    "simple object",
    ObjectSimple.generate,
    (input) => TSON.assertType(input),
    ObjectSimple.SPOILERS,
);
