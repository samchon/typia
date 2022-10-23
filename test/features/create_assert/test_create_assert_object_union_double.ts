import TSON from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_object_union_double = _test_assert(
    "double union object",
    ObjectUnionDouble.generate,
    TSON.createAssertType<ObjectUnionDouble>(),
    ObjectUnionDouble.SPOILERS,
);
