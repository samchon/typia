import TSON from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_ObjectRecursive = _test_validateParse(
    "ObjectRecursive",
    ObjectRecursive.generate,
    TSON.createValidateParse<ObjectRecursive>(),
    ObjectRecursive.SPOILERS,
);
