import TSON from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_is } from "../internal/_test_is";

export const test_create_is_object_union_double = _test_is(
    "double union object",
    ObjectUnionDouble.generate,
    TSON.createIs<ObjectUnionDouble>(),
    ObjectUnionDouble.SPOILERS,
);
