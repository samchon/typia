import TSON from "../../../src";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_is_clone } from "./../is_clone/_test_is_clone";

export const test_create_is_clone_object_generic_union = _test_is_clone(
    "generic unioned object",
    ObjectGenericUnion.generate,
    TSON.createIsClone<ObjectGenericUnion>(),
    ObjectGenericUnion.SPOILERS,
);
