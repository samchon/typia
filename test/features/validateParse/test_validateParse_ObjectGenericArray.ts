import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_validateParse_ObjectGenericArray = _test_validateParse(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    (input) => typia.validateParse<ObjectGenericArray>(input),
    ObjectGenericArray.SPOILERS,
);
