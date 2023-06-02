import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_createValidateParse_ObjectUnionExplicit = _test_validateParse(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    typia.createValidateParse<ObjectUnionExplicit>(),
    ObjectUnionExplicit.SPOILERS,
);
