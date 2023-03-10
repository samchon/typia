import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_isParse_ObjectLiteralProperty = _test_isParse(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input) => typia.isParse<ObjectLiteralProperty>(input),
    ObjectLiteralProperty.SPOILERS,
);
