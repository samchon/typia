import TSON from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_validate_equals } from "./../validate_equals/_test_validate_equals";

export const test_create_validate_equals_object_union_double =
    _test_validate_equals(
        "double union object",
        ObjectUnionDouble.generate,
        TSON.createValidateEquals<ObjectUnionDouble>(),
    );
