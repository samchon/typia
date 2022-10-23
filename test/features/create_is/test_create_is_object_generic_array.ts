import TSON from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_is } from "./../is/_test_is";

export const test_create_is_object_generic_array = _test_is(
    "generic arraied object",
    ObjectGenericArray.generate,
    TSON.createIs<ObjectGenericArray>(),
    ObjectGenericArray.SPOILERS,
);
