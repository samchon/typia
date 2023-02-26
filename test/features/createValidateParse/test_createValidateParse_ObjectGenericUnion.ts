import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_createValidateParse_ObjectGenericUnion = _test_validateParse(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    typia.createValidateParse<ObjectGenericUnion>(),
    ObjectGenericUnion.SPOILERS,
);
