import TSON from "../../../src";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_validate_equals } from "../internal/_test_validate_equals";

export const test_create_validate_equals_object_generic_union =
    _test_validate_equals(
        "generic unioned object",
        ObjectGenericUnion.generate,
        TSON.createValidateEquals<ObjectGenericUnion>(),
    );
