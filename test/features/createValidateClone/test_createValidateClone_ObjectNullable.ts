import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_createValidateClone_ObjectNullable = _test_validateClone(
    "ObjectNullable",
    ObjectNullable.generate,
    typia.createValidateClone<ObjectNullable>(),
    ObjectNullable.SPOILERS,
);
