import typia from "../../../src";

import { ObjectDynamic } from "../../structures/ObjectDynamic";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_ObjectDynamic = _test_isParse(
    "ObjectDynamic",
    ObjectDynamic.generate,
    typia.createIsParse<ObjectDynamic>(),
    ObjectDynamic.SPOILERS,
);
