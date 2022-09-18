import TSON from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_validate_equals } from "./_test_validate_equals";

export const test_validate_equals_object_property_nullable =
    _test_validate_equals(
        "nullable object property",
        ObjectPropertyNullable.generate,
        (input) => TSON.validateEquals(input),
    );
