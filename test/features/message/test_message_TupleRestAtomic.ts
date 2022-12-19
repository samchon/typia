import typia from "../../../src";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_message } from "../internal/_test_message";

export const test_message_TupleRestAtomic = _test_message(
    "TupleRestAtomic",
    typia.message<TupleRestAtomic>(),
    `syntax = \"proto3\";

message __Main {
    [boolean, number, ...string] value = 1;
}

message _alt_boolean_comma__space_number_comma__space_ {
    message  {
        message  {
            message string_agt_ {
                bool v0 = 1;
                double v1 = 2;
                oneof v2 {
            
                }
            }
        }
    }
}`
);