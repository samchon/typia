import TSON from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_clone } from "../internal/_test_clone";

export const test_create_clone_object_union_implicit = _test_clone(
    "union object",
    ObjectUnionImplicit.generate,
    TSON.createClone<ObjectUnionImplicit>(),
);
