import typia from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_message } from "../internal/_test_message";

export const test_message_DynamicTemplate = _test_message(
    "DynamicTemplate",
    typia.message<DynamicTemplate>(),
    `syntax = \"proto3\";

message __Main {
    oneof value {
        map<string, string> o0 = 1;
        map<string, number> o1 = 2;
        map<string, boolean> o2 = 3;
    }
}`
);