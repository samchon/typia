import TSON from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_is_clone } from "../internal/_test_is_clone";

export const test_create_is_clone_object_union_explicit = _test_is_clone(
    "union object",
    ObjectUnionExplicit.generate,
    TSON.createIsClone<ObjectUnionExplicit>(),
    ObjectUnionExplicit.SPOILERS,
);
