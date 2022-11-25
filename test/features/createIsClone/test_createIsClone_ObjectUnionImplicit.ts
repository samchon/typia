import TSON from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_ObjectUnionImplicit = _test_isClone(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    TSON.createIsClone<ObjectUnionImplicit>(),
    ObjectUnionImplicit.SPOILERS,
);
