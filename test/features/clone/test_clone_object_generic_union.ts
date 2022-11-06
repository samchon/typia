import TSON from "../../../src";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_clone } from "./_test_clone";

export const test_clone_object_generic_union = _test_clone(
    "generic unioned object",
    ObjectGenericUnion.generate,
    (input) => TSON.clone(input),
);
