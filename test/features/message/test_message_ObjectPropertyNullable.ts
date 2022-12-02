import TSON from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_message } from "../internal/_test_message";

export const test_message_ObjectPropertyNullable = _test_message(
    "ObjectPropertyNullable",
    TSON.message<ObjectPropertyNullable>(),
    `syntax = \"proto3\";

message ObjectPropertyNullable {
    message IPointer_lt_boolean_gt_ {
        optional bool value = 1;
    }

    message IPointer_lt_number_gt_ {
        optional double value = 1;
    }

    message IPointer_lt_string_gt_ {
        optional string value = 1;
    }

    message IPointer_lt_ObjectPropertyNullable {
        message IMember_gt_ {
            optional ObjectPropertyNullable.IMember value = 1;
        }
    }

    message IMember {
        string id = 1;
        optional string name = 2;
        optional double grade = 3;
        optional double serial = 4;
        optional bool activated = 5;
    }
}

message __Main {
    [Array<ObjectPropertyNullable.IPointer<boolean>>, Array<ObjectPropertyNullable.IPointer<number>>, Array<ObjectPropertyNullable.IPointer<string>>, Array<ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>>] value = 1;
}

message _alt_Array_lt_ObjectPropertyNullable {
    message IPointer_lt_boolean_gt__gt__comma__space_Array_lt_ObjectPropertyNullable {
        message IPointer_lt_number_gt__gt__comma__space_Array_lt_ObjectPropertyNullable {
            message IPointer_lt_string_gt__gt__comma__space_Array_lt_ObjectPropertyNullable {
                message IPointer_lt_ObjectPropertyNullable {
                    message IMember_gt__gt__agt_ {
                        repeated ObjectPropertyNullable.IPointer_lt_boolean_gt_ v0 = 1;
                        repeated ObjectPropertyNullable.IPointer_lt_number_gt_ v1 = 2;
                        repeated ObjectPropertyNullable.IPointer_lt_string_gt_ v2 = 3;
                        repeated ObjectPropertyNullable.IPointer_lt_ObjectPropertyNullable.IMember_gt_ v3 = 4;
                    }
                }
            }
        }
    }
}`,
);
