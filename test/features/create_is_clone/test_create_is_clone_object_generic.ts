import TSON from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_is_clone } from "../internal/_test_is_clone";

export const test_create_is_clone_object_generic = _test_is_clone(
    "generic object",
    ObjectGeneric.generate,
    TSON.createIsClone<ObjectGeneric>(),
    ObjectGeneric.SPOILERS,
);
