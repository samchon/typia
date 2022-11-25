import TSON from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_ObjectLiteralType = _test_stringify(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    TSON.createStringify<ObjectLiteralType>(),
);
