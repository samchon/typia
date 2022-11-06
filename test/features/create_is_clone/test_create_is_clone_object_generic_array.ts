import TSON from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_is_clone } from "./../is_clone/_test_is_clone";

export const test_create_is_clone_object_generic_array = _test_is_clone(
    "generic arraied object",
    ObjectGenericArray.generate,
    TSON.createIsClone<ObjectGenericArray>(),
    ObjectGenericArray.SPOILERS,
);
