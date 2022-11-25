import TSON from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_ObjectRecursive = _test_assertEquals(
    "ObjectRecursive",
    ObjectRecursive.generate,
    (input) => TSON.assertEquals(input),
);
