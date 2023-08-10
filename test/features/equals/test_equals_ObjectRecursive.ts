import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_equals_ObjectRecursive = _test_equals<ObjectRecursive>(
    ObjectRecursive,
)((input) => typia.equals<ObjectRecursive>(input));
