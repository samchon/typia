import typia from "../../../src";
import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_message } from "../internal/_test_message";

export const test_message_TupleRestArray = _test_message(
    "TupleRestArray",
    typia.message<TupleRestArray>(),
    `syntax = \"proto3\";

message __Main {
    [boolean, number, ...Array<string>] value = 1;
}

message _alt_boolean_comma__space_number_comma__space_ {
    message  {
        message  {
            message Array_lt_string_gt__agt_ {
                bool v0 = 1;
                double v1 = 2;
                oneof v2 {
            
                }
            }
        }
    }
}`
);