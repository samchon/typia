import TSON from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_message } from "../internal/_test_message";

export const test_message_ObjectLiteralType = _test_message(
    "ObjectLiteralType",
    TSON.message<ObjectLiteralType>(),
    `syntax = \"proto3\";

message __object {
    string id = 1;
    string name = 2;
    double age = 3;
}`,
);
