import TSON from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_assert_equals } from "./_test_assert_equals";

export const test_assert_equals_object_union_double = _test_assert_equals(
    "double union object",
    ObjectUnionDouble.generate,
    (input) => TSON.assertEquals(input),
);
