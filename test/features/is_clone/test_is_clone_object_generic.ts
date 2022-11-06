import TSON from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_object_generic = _test_is_clone(
    "generic object",
    ObjectGeneric.generate,
    (input) => TSON.isClone(input),
    ObjectGeneric.SPOILERS,
);
