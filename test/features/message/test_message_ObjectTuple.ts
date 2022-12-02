import TSON from "../../../src";
import { ObjectTuple } from "../../structures/ObjectTuple";
import { _test_message } from "../internal/_test_message";

export const test_message_ObjectTuple = _test_message(
    "ObjectTuple",
    TSON.message<ObjectTuple>(),
    `syntax = \"proto3\";

message ObjectTuple {
    message ISection {
        string id = 1;
        string code = 2;
        string name = 3;
    }

    message ICitizen {
        string id = 1;
        string mobile = 2;
        string name = 3;
    }
}

message __Main {
    [ObjectTuple.ISection, ObjectTuple.ICitizen] value = 1;
}

message _alt_ObjectTuple {
    message ISection_comma__space_ObjectTuple {
        message ICitizen_agt_ {
            ObjectTuple.ISection v0 = 1;
            ObjectTuple.ICitizen v1 = 2;
        }
    }
}`,
);
