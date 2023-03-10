import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_createStringify_ObjectLiteralType = _test_stringify(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    typia.createStringify<ObjectLiteralType>(),
);
