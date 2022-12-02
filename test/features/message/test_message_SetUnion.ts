import TSON from "../../../src";
import { SetUnion } from "../../structures/SetUnion";
import { _test_message } from "../internal/_test_message";

export const test_message_SetUnion = _test_message(
    "SetUnion",
    TSON.message<SetUnion>(),
    `syntax = \"proto3\";

message SetUnion {
    message Person {
        string id = 1;
        string name = 2;
        double age = 3;
    }
}

message __Main {
    repeated Array.Element_lt__lp_Set_lt_Array_lt_number_gt__gt__space__or__space_Set_lt_SetUnion.Person_gt__space__or__space_Set_lt_boolean_gt__space__or__space_Set_lt_number_gt__space__or__space_Set_lt_string_gt__rp__gt_ value = 1;
}

message Array {
    message Element_lt__lp_Set_lt_Array_lt_number_gt__gt__space__or__space_Set_lt_SetUnion {
        message Person_gt__space__or__space_Set_lt_boolean_gt__space__or__space_Set_lt_number_gt__space__or__space_Set_lt_string_gt__rp__gt_ {
            oneof value {
                Set.Element_lt_string_gt_ o0 = 1;
                Set.Element_lt_boolean_gt_ o1 = 2;
                Set.Element_lt_number_gt_ o2 = 3;
                Set.Element_lt_Array_lt_number_gt__gt_ o3 = 4;
                Set.Element_lt_SetUnion.Person_gt_ o4 = 5;
            }
        }
    }
}

message Set {
    message Element_lt_string_gt_ {
        string value = 1;
    }

    message Element_lt_boolean_gt_ {
        bool value = 1;
    }

    message Element_lt_number_gt_ {
        double value = 1;
    }

    message Element_lt_Array_lt_number_gt__gt_ {
        repeated number value = 1;
    }

    message Element_lt_SetUnion {
        message Person_gt_ {
            SetUnion.Person value = 1;
        }
    }
}`,
);
