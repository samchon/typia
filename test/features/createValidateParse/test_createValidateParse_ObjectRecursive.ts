import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_createValidateParse_ObjectRecursive = _test_validateParse(
    "ObjectRecursive",
    ObjectRecursive.generate,
    typia.createValidateParse<ObjectRecursive>(),
    ObjectRecursive.SPOILERS,
);
