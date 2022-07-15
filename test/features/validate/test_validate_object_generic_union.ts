import TSON from "../../../src";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_validate } from "./_test_validate";

export const test_validate_object_generic_union = _test_validate(
    "generic unioned object",
    ObjectGenericUnion.generate,
    (input) => TSON.validate(input),
    // SKIP
);
