import TSON from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_object_generic_array = _test_is_clone(
    "generic arraied object",
    ObjectGenericArray.generate,
    (input) => TSON.isClone(input),
    ObjectGenericArray.SPOILERS,
);
