import typia from "../../../src";
import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_message } from "../internal/_test_message";

export const test_message_TupleRestObject = _test_message(
    "TupleRestObject",
    typia.message<TupleRestObject>(),
    `syntax = \"proto3\";

message TupleRestObject {
    message IObject {
        string value = 1;
    }
}

message __Main {
    [boolean, number, ...TupleRestObject.IObject] value = 1;
}

message _alt_boolean_comma__space_number_comma__space_ {
    message  {
        message  {
            message TupleRestObject {
                message IObject_agt_ {
                    bool v0 = 1;
                    double v1 = 2;
                    oneof v2 {
                
                    }
                }
            }
        }
    }
}`
);