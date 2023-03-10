import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_message_ObjectLiteralType = _test_message(
    "ObjectLiteralType",
    typia.message<ObjectLiteralType>(),
);
