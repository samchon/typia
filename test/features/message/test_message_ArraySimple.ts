import TSON from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_message } from "../internal/_test_message";

export const test_message_ArraySimple = _test_message(
    "ArraySimple",
    TSON.message<ArraySimple>(),
    `syntax = \"proto3\";

message ArraySimple {
    message IPerson {
        string name = 1;
        string email = 2;
        oneof hobbies {
            Array.Element_lt_string_gt_ o0 = 3;
            Array.Element_lt_ArraySimple.IHobby_gt_ o1 = 4;
            Array.Element_lt_ArraySimple.IContent_gt_ o2 = 5;
        }
    }

    message IHobby {
        string name = 1;
        double rank = 2;
    }

    message IContent {
        string body = 1;
    }
}

message Array {
    message Element_lt_string_gt_ {
        string value = 1;
    }

    message Element_lt_ArraySimple {
        message IHobby_gt_ {
            ArraySimple.IHobby value = 1;
        }
    
        message IContent_gt_ {
            ArraySimple.IContent value = 1;
        }
    }
}

message __Main {
    repeated ArraySimple.IPerson value = 1;
}`,
);
