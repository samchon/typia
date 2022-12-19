import typia from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_message } from "../internal/_test_message";

export const test_message_DynamicConstant = _test_message(
    "DynamicConstant",
    typia.message<DynamicConstant>(),
    `syntax = \"proto3\";

message DynamicConstant {
    double a = 1;
    double b = 2;
    double c = 3;
    double d = 4;
}`
);