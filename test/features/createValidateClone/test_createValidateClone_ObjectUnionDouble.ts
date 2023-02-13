import typia from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_ObjectUnionDouble = _test_validateClone(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    typia.createValidateClone<ObjectUnionDouble>(),
    ObjectUnionDouble.SPOILERS,
);