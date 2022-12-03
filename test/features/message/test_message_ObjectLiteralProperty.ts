import TSON from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_message } from "../internal/_test_message";

export const test_message_ObjectLiteralProperty = _test_message(
    "ObjectLiteralProperty",
    TSON.message<ObjectLiteralProperty>(),
    `syntax = \"proto3\";

message ObjectLiteralProperty {
    message ISomething {
        string something-interesting-do-you-want? = 1;
        string or-something-crazy-do-you-want? = 2;
    }
}`,
);
