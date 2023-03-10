import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_validateParse_ObjectRecursive = _test_validateParse(
    "ObjectRecursive",
    ObjectRecursive.generate,
    (input) => typia.validateParse<ObjectRecursive>(input),
    ObjectRecursive.SPOILERS,
);
