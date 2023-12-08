import typia from "typia";

import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { TypeTagRange } from "../../../structures/TypeTagRange";

export const test_protobuf_message_TypeTagRange = _test_protobuf_message(
  "TypeTagRange",
)(
  'syntax = "proto3";\n\nmessage TypeTagRange {\n    repeated TypeTagRange.Type value = 1;\n    message Type {\n        required int32 greater = 1;\n        required int32 greater_equal = 2;\n        required int32 less = 3;\n        required int32 less_equal = 4;\n        required int32 greater_less = 5;\n        required int32 greater_equal_less = 6;\n        required int32 greater_less_equal = 7;\n        required int32 greater_equal_less_equal = 8;\n        required int32 equal = 9;\n    }\n}',
);
