import TSON from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_is } from "./../is/_test_is";

export const test_create_is_object_union_explicit = _test_is(
    "explicit union object",
    ObjectUnionExplicit.generate,
    TSON.createIs<ObjectUnionExplicit>(),
    ObjectUnionExplicit.SPOILERS,
);
