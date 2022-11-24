import TSON from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_is } from "../internal/_test_is";

export const test_create_is_object_union_implicit = _test_is(
    "implicit union object",
    ObjectUnionImplicit.generate,
    TSON.createIs<ObjectUnionImplicit>(),
    ObjectUnionImplicit.SPOILERS,
);
