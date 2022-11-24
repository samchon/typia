import TSON from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_assert_clone } from "../internal/_test_assert_clone";

export const test_create_assert_clone_object_internal = _test_assert_clone(
    "object internal",
    ObjectInternal.generate,
    TSON.createAssertClone<ObjectInternal>(),
    ObjectInternal.SPOILERS,
);
