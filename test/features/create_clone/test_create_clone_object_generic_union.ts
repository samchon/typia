import TSON from "../../../src";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_clone } from "../internal/_test_clone";

export const test_create_clone_object_generic_union = _test_clone(
    "generic unioned object",
    ObjectGenericUnion.generate,
    TSON.createClone<ObjectGenericUnion>(),
);
