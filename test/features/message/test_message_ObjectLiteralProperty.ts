import typia from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_message } from "../internal/_test_message";

export const test_message_ObjectLiteralProperty = _test_message(
    "ObjectLiteralProperty",
    typia.message<ObjectLiteralProperty>(),
);