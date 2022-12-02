import TSON from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_message } from "../internal/_test_message";

export const test_message_ObjectUnionDouble = _test_message(
    "ObjectUnionDouble",
    TSON.message<ObjectUnionDouble>(),
    `syntax = \"proto3\";

message ObjectUnionDouble {
    message IA {
        __type value = 1;
        oneof child {
            ObjectUnionDouble.IAA o0 = 2;
            ObjectUnionDouble.IAB o1 = 3;
        }
    }

    message IAA {
        __type.o1 value = 1;
    }

    message IAB {
        __type.o2 value = 1;
    }

    message IB {
        __type.o3 value = 1;
        oneof child {
            ObjectUnionDouble.IBA o0 = 2;
            ObjectUnionDouble.IBB o1 = 3;
        }
    }

    message IBA {
        __type.o4 value = 1;
    }

    message IBB {
        __type.o5 value = 1;
    }
}

message __type {
    double x = 1;


    message o1 {
        bool y = 1;
    }

    message o2 {
        double y = 1;
    }

    message o3 {
        string x = 1;
    }

    message o4 {
        string y = 1;
    }

    message o5 {
        repeated number y = 1;
    }
}

message __Main {
    repeated Array.Element_lt__lp_ObjectUnionDouble.IA_space__or__space_ObjectUnionDouble.IB_rp__gt_ value = 1;
}

message Array {
    message Element_lt__lp_ObjectUnionDouble {
        message IA_space__or__space_ObjectUnionDouble {
            message IB_rp__gt_ {
                oneof value {
                    ObjectUnionDouble.IA o0 = 1;
                    ObjectUnionDouble.IB o1 = 2;
                }
            }
        }
    }
}`,
);
