import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_createAssert_ObjectDynamic = _test_assert(
    "ObjectDynamic",
    ObjectDynamic.generate,
    typia.createAssert<ObjectDynamic>(),
    ObjectDynamic.SPOILERS,
);
