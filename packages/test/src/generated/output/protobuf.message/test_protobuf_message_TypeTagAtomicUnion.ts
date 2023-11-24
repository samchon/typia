import typia from "typia";

import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { TypeTagAtomicUnion } from "../../../structures/TypeTagAtomicUnion";

export const test_protobuf_message_TypeTagAtomicUnion = _test_protobuf_message(
  "TypeTagAtomicUnion",
)(
  'syntax = "proto3";\n\nmessage TypeTagAtomicUnion {\n    repeated TypeTagAtomicUnion.Type value = 1;\n    message Type {\n        oneof value {\n            double v1 = 1;\n            string v2 = 2;\n        }\n    }\n}',
);
