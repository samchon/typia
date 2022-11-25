import TSON from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_ObjectLiteralProperty = _test_clone(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    TSON.createClone<ObjectLiteralProperty>(),
);