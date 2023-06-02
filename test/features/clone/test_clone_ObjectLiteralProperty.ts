import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_clone_ObjectLiteralProperty = _test_clone(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input) => typia.clone(input),
);
