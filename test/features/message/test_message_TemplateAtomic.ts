import TSON from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_message } from "../internal/_test_message";

export const test_message_TemplateAtomic = _test_message(
    "TemplateAtomic",
    TSON.message<TemplateAtomic>(),
    `syntax = \"proto3\";

message TemplateAtomic {
    oneof prefix {

    }
    oneof postfix {

    }
    oneof middle_string {

    }
    oneof middle_string_empty {

    }
    oneof middle_numeric {

    }
    string middle_boolean = 1;
    oneof ipv4 {

    }
    oneof email {

    }
}`,
);
