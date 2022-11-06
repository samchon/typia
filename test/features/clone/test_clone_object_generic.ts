import TSON from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_clone } from "./_test_clone";

export const test_clone_object_generic = _test_clone(
    "generic object",
    ObjectGeneric.generate,
    (input) => TSON.clone(input),
);
