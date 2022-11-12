import TSON from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_assert_clone } from "./../assert_clone/_test_assert_clone";

export const test_create_assert_clone_object_generic = _test_assert_clone(
    "generic object",
    ObjectGeneric.generate,
    TSON.createAssertClone<ObjectGeneric>(),
    ObjectGeneric.SPOILERS,
);
