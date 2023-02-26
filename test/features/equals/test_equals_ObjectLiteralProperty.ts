import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_equals_ObjectLiteralProperty = _test_equals(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input) => typia.equals(input),
);
