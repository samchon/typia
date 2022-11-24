import TSON from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_assert } from "../internal/_test_assert";

export const test_create_assert_object_generic = _test_assert(
    "generic object",
    ObjectGeneric.generate,
    TSON.createAssert<ObjectGeneric>(),
    ObjectGeneric.SPOILERS,
);
