import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_createValidateParse_ObjectGenericArray = _test_validateParse(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    typia.createValidateParse<ObjectGenericArray>(),
    ObjectGenericArray.SPOILERS,
);
