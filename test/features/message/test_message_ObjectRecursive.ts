import TSON from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_message } from "../internal/_test_message";

export const test_message_ObjectRecursive = _test_message(
    "ObjectRecursive",
    TSON.message<ObjectRecursive>(),
    `syntax = \"proto3\";

message ObjectRecursive {
    message IDepartment {
        optional ObjectRecursive.IDepartment parent = 1;
        double id = 2;
        string code = 3;
        string name = 4;
        double sequence = 5;
        ObjectRecursive.ITimestamp created_at = 6;
    }

    message ITimestamp {
        double time = 1;
        double zone = 2;
    }
}`,
);
