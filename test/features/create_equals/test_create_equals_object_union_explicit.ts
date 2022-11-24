import TSON from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_equals } from "../internal/_test_equals";

export const test_create_equals_object_union_explicit = _test_equals(
    "explicit union object",
    ObjectUnionExplicit.generate,
    TSON.createEquals<ObjectUnionExplicit>(),
);
