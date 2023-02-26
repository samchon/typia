import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_createValidateClone_ObjectGeneric = _test_validateClone(
    "ObjectGeneric",
    ObjectGeneric.generate,
    typia.createValidateClone<ObjectGeneric>(),
    ObjectGeneric.SPOILERS,
);
