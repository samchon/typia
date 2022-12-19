import typia from "../../../src";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_message } from "../internal/_test_message";

export const test_message_ObjectUnionNonPredictable = _test_message(
    "ObjectUnionNonPredictable",
    typia.message<ObjectUnionNonPredictable>(),
    `syntax = \"proto3\";

message ObjectUnionNonPredictable {
    message IWrapper_lt_ObjectUnionNonPredictable {
        message IUnion_gt_ {
            ObjectUnionNonPredictable.IPointer_lt_ObjectUnionNonPredictable.IUnion_gt_ value = 1;
        }
    }

    message IPointer_lt_ObjectUnionNonPredictable {
        message IUnion_gt_ {
            oneof value {
                ObjectUnionNonPredictable.IWrapper_lt_boolean_gt_ o0 = 1;
                ObjectUnionNonPredictable.IWrapper_lt_number_gt_ o1 = 2;
                ObjectUnionNonPredictable.IWrapper_lt_string_gt_ o2 = 3;
            }
        }
    }

    message IWrapper_lt_boolean_gt_ {
        ObjectUnionNonPredictable.IPointer_lt_boolean_gt_ value = 1;
    }

    message IPointer_lt_boolean_gt_ {
        bool value = 1;
    }

    message IWrapper_lt_number_gt_ {
        ObjectUnionNonPredictable.IPointer_lt_number_gt_ value = 1;
    }

    message IPointer_lt_number_gt_ {
        double value = 1;
    }

    message IWrapper_lt_string_gt_ {
        ObjectUnionNonPredictable.IPointer_lt_string_gt_ value = 1;
    }

    message IPointer_lt_string_gt_ {
        string value = 1;
    }
}

message __Main {
    repeated ObjectUnionNonPredictable.IWrapper_lt_ObjectUnionNonPredictable.IUnion_gt_ value = 1;
}`
);