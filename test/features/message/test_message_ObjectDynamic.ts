import TSON from "../../../src";
import { ObjectDynamic } from "../../structures/ObjectDynamic";
import { _test_message } from "../internal/_test_message";

export const test_message_ObjectDynamic = _test_message(
    "ObjectDynamic",
    TSON.message<ObjectDynamic>(),
    `syntax = \"proto3\";

message __Main {
    map<string, Object.Value_lt__lp_boolean_space__or__space_number_space__or__space_string_rp__gt_> value = 1;
}

message Object {
    message Value_lt__lp_boolean_space__or__space_number_space__or__space_string_rp__gt_ {
        oneof value {
            string o0 = 1;
            double o1 = 2;
            bool o2 = 3;
        }
    }
}`,
);
