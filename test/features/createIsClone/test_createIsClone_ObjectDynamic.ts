import typia from "../../../src";

import { ObjectDynamic } from "../../structures/ObjectDynamic";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_ObjectDynamic = _test_isClone(
    "ObjectDynamic",
    ObjectDynamic.generate,
    typia.createIsClone<ObjectDynamic>(),
    ObjectDynamic.SPOILERS,
);
