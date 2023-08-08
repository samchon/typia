import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";

export const test_protobuf_message_ObjectUnionNonPredictable =
    _test_protobuf_message(
        "ObjectUnionNonPredictable",
        'syntax = "proto3";\n\nmessage ObjectUnionNonPredictable {\n    message IWrapper_lt_ObjectUnionNonPredictable {\n        message IUnion_gt_ {\n            ObjectUnionNonPredictable.IPointer_lt_ObjectUnionNonPredictable.IUnion_gt_ value = 1;\n        }\n    }\n\n    message IPointer_lt_ObjectUnionNonPredictable {\n        message IUnion_gt_ {\n            oneof value {\n                ObjectUnionNonPredictable.IWrapper_lt_string_gt_ value_o0 = 1;\n                ObjectUnionNonPredictable.IWrapper_lt_number_gt_ value_o1 = 2;\n                ObjectUnionNonPredictable.IWrapper_lt_boolean_gt_ value_o2 = 3;\n            }\n        }\n    }\n\n    message IWrapper_lt_boolean_gt_ {\n        ObjectUnionNonPredictable.IPointer_lt_boolean_gt_ value = 1;\n    }\n\n    message IPointer_lt_boolean_gt_ {\n        bool value = 1;\n    }\n\n    message IWrapper_lt_number_gt_ {\n        ObjectUnionNonPredictable.IPointer_lt_number_gt_ value = 1;\n    }\n\n    message IPointer_lt_number_gt_ {\n        double value = 1;\n    }\n\n    message IWrapper_lt_string_gt_ {\n        ObjectUnionNonPredictable.IPointer_lt_string_gt_ value = 1;\n    }\n\n    message IPointer_lt_string_gt_ {\n        string value = 1;\n    }\n}\n\nmessage __Main {\n    repeated ObjectUnionNonPredictable.IWrapper_lt_ObjectUnionNonPredictable.IUnion_gt_ value = 1;\n}',
    );
