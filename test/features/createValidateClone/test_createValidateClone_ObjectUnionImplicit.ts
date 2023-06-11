import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_createValidateClone_ObjectUnionImplicit = _test_validateClone(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    typia.createValidateClone<ObjectUnionImplicit>(),
    ObjectUnionImplicit.SPOILERS,
);
