import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_createClone_ObjectLiteralProperty = _test_clone(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    typia.createClone<ObjectLiteralProperty>(),
);
