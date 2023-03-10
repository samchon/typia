import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_createValidateClone_ObjectGenericAlias = _test_validateClone(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    typia.createValidateClone<ObjectGenericAlias>(),
    ObjectGenericAlias.SPOILERS,
);
