import TSON from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_message } from "../internal/_test_message";

export const test_message_ObjectGeneric = _test_message(
    "ObjectGeneric",
    TSON.message<ObjectGeneric>(),
    `syntax = \"proto3\";

message ObjectGeneric {
    message ISomething_lt_boolean_gt_ {
        bool value = 1;
        ObjectGeneric.IChild_lt_boolean_comma__space_boolean_gt_ child = 2;
        repeated ObjectGeneric.IChild_lt_boolean_comma__space_boolean_gt_ elements = 3;
    }

    message IChild_lt_boolean_comma__space_boolean_gt_ {
        bool child_value = 1;
        bool child_next = 2;
    }

    message ISomething_lt_number_gt_ {
        double value = 1;
        ObjectGeneric.IChild_lt_number_comma__space_number_gt_ child = 2;
        repeated ObjectGeneric.IChild_lt_number_comma__space_number_gt_ elements = 3;
    }

    message IChild_lt_number_comma__space_number_gt_ {
        double child_value = 1;
        double child_next = 2;
    }

    message ISomething_lt_string_gt_ {
        string value = 1;
        ObjectGeneric.IChild_lt_string_comma__space_string_gt_ child = 2;
        repeated ObjectGeneric.IChild_lt_string_comma__space_string_gt_ elements = 3;
    }

    message IChild_lt_string_comma__space_string_gt_ {
        string child_value = 1;
        string child_next = 2;
    }
}

message __Main {
    [ObjectGeneric.ISomething<boolean>, ObjectGeneric.ISomething<number>, ObjectGeneric.ISomething<string>] value = 1;
}

message _alt_ObjectGeneric {
    message ISomething_lt_boolean_gt__comma__space_ObjectGeneric {
        message ISomething_lt_number_gt__comma__space_ObjectGeneric {
            message ISomething_lt_string_gt__agt_ {
                ObjectGeneric.ISomething_lt_boolean_gt_ v0 = 1;
                ObjectGeneric.ISomething_lt_number_gt_ v1 = 2;
                ObjectGeneric.ISomething_lt_string_gt_ v2 = 3;
            }
        }
    }
}`,
);
