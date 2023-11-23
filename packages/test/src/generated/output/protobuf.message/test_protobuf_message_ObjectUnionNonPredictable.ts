import typia from "typia";

import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";

export const test_protobuf_message_ObjectUnionNonPredictable =
  _test_protobuf_message("ObjectUnionNonPredictable")(
    'syntax = "proto3";\n\nmessage ObjectUnionNonPredictable {\n    repeated ObjectUnionNonPredictable.IWrapper_lt_ObjectUnionNonPredictable.IUnion_gt_ value = 1;\n    message IWrapper_lt_ObjectUnionNonPredictable {\n        message IUnion_gt_ {\n            required IPointer_lt_ObjectUnionNonPredictable.IUnion_gt_ value = 1;\n        }\n    }\n\n    message IWrapper_lt_boolean_gt_ {\n        required IPointer_lt_boolean_gt_ value = 1;\n    }\n\n    message IWrapper_lt_number_gt_ {\n        required IPointer_lt_number_gt_ value = 1;\n    }\n\n    message IWrapper_lt_string_gt_ {\n        required IPointer_lt_string_gt_ value = 1;\n    }\n}\n\nmessage IPointer_lt_ObjectUnionNonPredictable {\n    message IUnion_gt_ {\n        oneof value {\n            ObjectUnionNonPredictable.IWrapper_lt_string_gt_ v1 = 1;\n            ObjectUnionNonPredictable.IWrapper_lt_number_gt_ v2 = 2;\n            ObjectUnionNonPredictable.IWrapper_lt_boolean_gt_ v3 = 3;\n        }\n    }\n}\n\nmessage IPointer_lt_boolean_gt_ {\n    required bool value = 1;\n}\n\nmessage IPointer_lt_number_gt_ {\n    required double value = 1;\n}\n\nmessage IPointer_lt_string_gt_ {\n    required string value = 1;\n}',
  );
