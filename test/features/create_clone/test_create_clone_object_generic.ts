import TSON from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_clone } from "../internal/_test_clone";

export const test_create_clone_object_generic = _test_clone(
    "generic object",
    ObjectGeneric.generate,
    TSON.createClone<ObjectGeneric>(),
);
