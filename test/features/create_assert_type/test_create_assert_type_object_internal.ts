import TSON from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_assert_type } from "./../assert_type/_test_assert_type";

export const test_create_assert_type_object_internal = _test_assert_type(
    "object internal",
    ObjectInternal.generate,
    TSON.createAssertType<ObjectInternal>(),
    ObjectInternal.SPOILERS,
);
