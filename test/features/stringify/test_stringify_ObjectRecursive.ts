import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_stringify_ObjectRecursive = _test_stringify(
    "ObjectRecursive",
    ObjectRecursive.generate,
    (input) => typia.stringify(input),
);
