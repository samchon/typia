import TSON from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_message } from "../internal/_test_message";

export const test_message_ArrayRecursive = _test_message(
    "ArrayRecursive",
    TSON.message<ArrayRecursive>(),
    `syntax = \"proto3\";

message ArrayRecursive {
    message ICategory {
        repeated ArrayRecursive.ICategory children = 1;
        double id = 2;
        string code = 3;
        double sequence = 4;
        ArrayRecursive.ITimestamp created_at = 5;
    }

    message ITimestamp {
        double time = 1;
        double zone = 2;
    }
}`,
);
