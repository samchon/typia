import TSON from "../../../src";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_is_stringify_object_generic_union = _test_is_stringify(
    "generic unioned object",
    ObjectGenericUnion.generate,
    (input) => TSON.isStringify(input),
    ObjectGenericUnion.SPOILERS,
);
