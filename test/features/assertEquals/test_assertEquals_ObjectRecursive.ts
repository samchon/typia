import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_assertEquals_ObjectRecursive = _test_assertEquals(
    "ObjectRecursive",
    ObjectRecursive.generate,
    (input) => typia.assertEquals<ObjectRecursive>(input),
);
