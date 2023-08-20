import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_validateEquals_ObjectRecursive = _test_validateEquals(
    "ObjectRecursive",
    ObjectRecursive.generate,
    (input) => typia.validateEquals<ObjectRecursive>(input),
);
