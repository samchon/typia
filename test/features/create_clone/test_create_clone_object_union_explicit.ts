import TSON from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_clone } from "../internal/_test_clone";

export const test_create_clone_object_union_explicit = _test_clone(
    "union object",
    ObjectUnionExplicit.generate,
    TSON.createClone<ObjectUnionExplicit>(),
);
