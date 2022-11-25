import TSON from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_ObjectLiteralProperty = _test_validateEquals(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input) => TSON.validateEquals(input),
);