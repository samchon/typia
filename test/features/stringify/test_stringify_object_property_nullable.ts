import TSON from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_object_property_nullable = _test_stringify(
    "nullable object property",
    ObjectPropertyNullable.generate,
    (input) => TSON.stringify(input),
);
