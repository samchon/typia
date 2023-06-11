import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_createValidateClone_ObjectAlias = _test_validateClone(
    "ObjectAlias",
    ObjectAlias.generate,
    typia.createValidateClone<ObjectAlias>(),
    ObjectAlias.SPOILERS,
);
