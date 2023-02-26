import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_createValidateParse_ObjectGeneric = _test_validateParse(
    "ObjectGeneric",
    ObjectGeneric.generate,
    typia.createValidateParse<ObjectGeneric>(),
    ObjectGeneric.SPOILERS,
);
