import TSON from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_ObjectLiteralProperty = _test_clone(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input) => TSON.clone(input),
);
