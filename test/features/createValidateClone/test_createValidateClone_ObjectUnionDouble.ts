import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_createValidateClone_ObjectUnionDouble = _test_validateClone(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    typia.createValidateClone<ObjectUnionDouble>(),
    ObjectUnionDouble.SPOILERS,
);
