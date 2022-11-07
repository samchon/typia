import TSON from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_assert_type } from "./../assert_type/_test_assert_type";

export const test_create_assert_type_object_union_double = _test_assert_type(
    "double union object",
    ObjectUnionDouble.generate,
    TSON.createAssertType<ObjectUnionDouble>(),
    ObjectUnionDouble.SPOILERS,
);
