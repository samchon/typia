import TSON from "../../../src";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_object_generic_union = _test_is_clone(
    "generic unioned object",
    ObjectGenericUnion.generate,
    (input) => TSON.isClone(input),
    ObjectGenericUnion.SPOILERS,
);
