import TSON from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_validate_equals } from "./../validate_equals/_test_validate_equals";

export const test_create_validate_equals_object_property_nullable =
    _test_validate_equals(
        "nullable object property",
        ObjectPropertyNullable.generate,
        TSON.createValidateEquals<ObjectPropertyNullable>(),
    );
