import TSON from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_create_assert_type_object_generic = _test_assert_type(
    "generic object",
    ObjectGeneric.generate,
    TSON.createAssertType<ObjectGeneric>(),
    ObjectGeneric.SPOILERS,
);
