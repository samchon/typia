import typia from "../../../src";

import { ObjectDynamic } from "../../structures/ObjectDynamic";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ObjectDynamic = _test_is(
    "ObjectDynamic",
    ObjectDynamic.generate,
    typia.createIs<ObjectDynamic>(),
    ObjectDynamic.SPOILERS,
);
