import typia from "typia";

import { ObjectDynamic } from "../../structures/ObjectDynamic";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_ObjectDynamic = _test_stringify(
    "ObjectDynamic",
    ObjectDynamic.generate,
    (input) => typia.stringify(input),
);
