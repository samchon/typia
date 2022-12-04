import TSON from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_ObjectUnionImplicit = _test_validateClone(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    TSON.createValidateClone<ObjectUnionImplicit>(),
    ObjectUnionImplicit.SPOILERS,
);
