import TSON from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_is_clone } from "../internal/_test_is_clone";

export const test_create_is_clone_object_union_double = _test_is_clone(
    "double union object",
    ObjectUnionDouble.generate,
    TSON.createIsClone<ObjectUnionDouble>(),
    ObjectUnionDouble.SPOILERS,
);
