import TSON from "../../../src";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_object_generic_union = _test_equals(
    "generic unioned object",
    ObjectGenericUnion.generate,
    (input) => TSON.equals(input),
);
