import typia from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_message } from "../internal/_test_message";

export const test_message_ObjectPrimitive = _test_message(
    "ObjectPrimitive",
    typia.message<ObjectPrimitive>(),
    `syntax = \"proto3\";

message ObjectPrimitive {
    message IArticle {
        string id = 1;
        string extension = 2;
        string title = 3;
        string body = 4;
        repeated ObjectPrimitive.IFile files = 5;
        bool secret = 6;
        string created_at = 7;
    }

    message IFile {
        string id = 1;
        string name = 2;
        string extension = 3;
        string url = 4;
        string created_at = 5;
    }
}`
);