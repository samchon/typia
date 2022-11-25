import TSON from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_is } from "../internal/_test_is";

export const test_is_ObjectLiteralProperty = _test_is(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input) => TSON.is(input),
    ObjectLiteralProperty.SPOILERS,
);