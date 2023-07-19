import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_is_ObjectRecursive = _test_is<ObjectRecursive>(
    ObjectRecursive,
)((input) => typia.is(input));
