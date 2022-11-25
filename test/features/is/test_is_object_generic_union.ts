import TSON from "../../../src";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_is } from "../internal/_test_is";

export const test_is_object_generic_union = _test_is(
    "generic unioned object",
    ObjectGenericUnion.generate,
    (input) => TSON.is(input),
    ObjectGenericUnion.SPOILERS,
);
