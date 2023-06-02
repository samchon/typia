import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_createValidateClone_ObjectUnionExplicit = _test_validateClone(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    typia.createValidateClone<ObjectUnionExplicit>(),
    ObjectUnionExplicit.SPOILERS,
);
