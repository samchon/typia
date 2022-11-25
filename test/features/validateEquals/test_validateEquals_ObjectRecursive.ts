import TSON from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_ObjectRecursive = _test_validateEquals(
    "ObjectRecursive",
    ObjectRecursive.generate,
    (input) => TSON.validateEquals(input),
);
