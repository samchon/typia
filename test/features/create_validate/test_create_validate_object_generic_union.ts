import TSON from "../../../src";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_create_validate_object_generic_union = _test_validate(
    "generic unioned object",
    ObjectGenericUnion.generate,
    TSON.createValidate<ObjectGenericUnion>(),
    ObjectGenericUnion.SPOILERS,
);
