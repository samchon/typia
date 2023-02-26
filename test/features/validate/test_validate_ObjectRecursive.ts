import typia from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_ObjectRecursive = _test_validate(
    "ObjectRecursive",
    ObjectRecursive.generate,
    (input) => typia.validate(input),
    ObjectRecursive.SPOILERS,
);
