import TSON from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_message } from "../internal/_test_message";

export const test_message_TagStep = _test_message(
    "TagStep",
    TSON.message<TagStep>(),
    `syntax = \"proto3\";

message TagStep {
    message Type {
        double exclusiveMinimum = 1;
        double minimum = 2;
        double range = 3;
        double multipleOf = 4;
    }
}

message __Main {
    repeated TagStep.Type value = 1;
}`,
);
