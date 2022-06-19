import TSON from "../../../src";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_object_generic_union = _test_stringify(
    "generic unioned object",
    ObjectGenericUnion.generate(),
    (input) => TSON.stringify(input),
);
