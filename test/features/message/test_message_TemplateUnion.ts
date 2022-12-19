import typia from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_message } from "../internal/_test_message";

export const test_message_TemplateUnion = _test_message(
    "TemplateUnion",
    typia.message<TemplateUnion>(),
    `syntax = \"proto3\";

message TemplateUnion {
    message Type {
        oneof prefix {
    
        }
        oneof postfix {
    
        }
        string middle = 1;
        oneof mixed {
            double o0 = 2;
            bool o1 = 3;
            string o2 = 4;
            __type o3 = 5;
        }
    }
}

message __type {
    string name = 1;
}

message __Main {
    repeated TemplateUnion.Type value = 1;
}`
);