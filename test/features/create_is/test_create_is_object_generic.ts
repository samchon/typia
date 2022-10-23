import TSON from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_is } from "./../is/_test_is";

export const test_create_is_object_generic = _test_is(
    "generic object",
    ObjectGeneric.generate,
    TSON.createIs<ObjectGeneric>(),
    ObjectGeneric.SPOILERS,
);
