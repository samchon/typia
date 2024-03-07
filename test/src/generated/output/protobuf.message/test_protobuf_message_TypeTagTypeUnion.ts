import typia from "typia";
import { TypeTagTypeUnion } from "../../../structures/TypeTagTypeUnion";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
export const test_protobuf_message_TypeTagTypeUnion = _test_protobuf_message(
  "TypeTagTypeUnion",
)(
  'syntax = "proto3";\n\nmessage TypeTagTypeUnion {\n  oneof int32_or_uint32 {\n    int32 v1 = 1;\n    uint32 v2 = 2;\n  }\n  oneof int32_or_int64 {\n    int32 v3 = 3;\n    int64 v4 = 4;\n  }\n  oneof int32_or_uint64 {\n    int32 v5 = 5;\n    uint64 v6 = 6;\n  }\n  oneof int32_or_float {\n    int32 v7 = 7;\n    float v8 = 8;\n  }\n  oneof int32_or_double {\n    int32 v9 = 9;\n    double v10 = 10;\n  }\n  oneof int64_or_uint64 {\n    int64 v11 = 11;\n    uint64 v12 = 12;\n  }\n  oneof int64_or_float {\n    int64 v13 = 13;\n    float v14 = 14;\n  }\n  oneof int64_or_double {\n    int64 v15 = 15;\n    double v16 = 16;\n  }\n  oneof float_or_double {\n    float v17 = 17;\n    double v18 = 18;\n  }\n  oneof everything {\n    int32 v19 = 19;\n    uint32 v20 = 20;\n    int64 v21 = 21;\n    uint64 v22 = 22;\n    float v23 = 23;\n    double v24 = 24;\n  }\n}',
);
