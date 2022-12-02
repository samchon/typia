import TSON from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ObjectUnionImplicit = _test_is(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    TSON.createIs<ObjectUnionImplicit>(),
    ObjectUnionImplicit.SPOILERS,
);
