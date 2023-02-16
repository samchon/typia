import typia from "typia";

import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_ObjectRecursive = _test_stringify(
    "ObjectRecursive",
    ObjectRecursive.generate,
    (input) => typia.stringify(input),
);
