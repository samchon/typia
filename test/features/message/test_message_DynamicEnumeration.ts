import TSON from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_message } from "../internal/_test_message";

export const test_message_DynamicEnumeration = _test_message(
    "DynamicEnumeration",
    TSON.message<DynamicEnumeration>(),
    `syntax = \"proto3\";

message DynamicEnumeration {
    optional string ar = 1;
    optional string zh-Hans = 2;
    optional string zh-Hant = 3;
    optional string en = 4;
    optional string fr = 5;
    optional string de = 6;
    optional string ja = 7;
    optional string ko = 8;
    optional string pt = 9;
    optional string ru = 10;
}`,
);
