import TSON from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_object_internal = _test_assert(
    "object internal",
    ObjectInternal.generate,
    TSON.createAssert<ObjectInternal>(),
    ObjectInternal.SPOILERS,
);
