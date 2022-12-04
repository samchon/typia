import TSON from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_ObjectLiteralProperty = _test_isParse(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input) => TSON.isParse<ObjectLiteralProperty>(input),
    ObjectLiteralProperty.SPOILERS,
);
