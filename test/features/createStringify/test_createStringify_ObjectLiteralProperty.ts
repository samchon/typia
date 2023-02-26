import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_createStringify_ObjectLiteralProperty = _test_stringify(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    typia.createStringify<ObjectLiteralProperty>(),
);
