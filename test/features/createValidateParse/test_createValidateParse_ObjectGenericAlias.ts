import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_createValidateParse_ObjectGenericAlias = _test_validateParse(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    typia.createValidateParse<ObjectGenericAlias>(),
    ObjectGenericAlias.SPOILERS,
);
