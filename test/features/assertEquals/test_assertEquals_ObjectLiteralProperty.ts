import typia from "../../../src";

import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_assertEquals } from "../../internal/_test_assertEquals";

export const test_assertEquals_ObjectLiteralProperty = _test_assertEquals(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input) => typia.assertEquals(input),
);
