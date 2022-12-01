import TSON from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_message } from "../internal/_test_message";

export const test_message_TagObjectUnion = _test_message(
    "TagObjectUnion",
    TSON.message<TagObjectUnion>(),
    `syntax = \"proto3\";

message TagObjectUnion {
    message Numeric {
        double value = 1;
    }

    message Literal {
        string value = 1;
    }
}

message __Main {
    repeated Array.Element_lt__lp_TagObjectUnion.Literal_space__or__space_TagObjectUnion.Numeric_rp__gt_ value = 1;
}

message Array {
    message Element_lt__lp_TagObjectUnion {
        message Literal_space__or__space_TagObjectUnion {
            message Numeric_rp__gt_ {
                oneof value {
                    TagObjectUnion.Numeric o0 = 1;
                    TagObjectUnion.Literal o1 = 2;
                }
            }
        }
    }
}`,
);
