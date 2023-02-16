import typia from "typia";

import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_ObjectLiteralProperty = _test_stringify(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input) => typia.stringify(input),
);
