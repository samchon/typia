import TSON from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_assert_type } from "./_test_assert_type";

export const test_assert_type_object_union_double = _test_assert_type(
    "double union object",
    ObjectUnionDouble.generate,
    (input) => TSON.assertType(input),
    ObjectUnionDouble.SPOILERS,
);
