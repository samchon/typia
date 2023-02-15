import typia from "typia";

import { ObjectDynamic } from "../../structures/ObjectDynamic";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_ObjectDynamic = _test_isClone(
    "ObjectDynamic",
    ObjectDynamic.generate,
    (input) => typia.isClone(input),
    ObjectDynamic.SPOILERS,
);
