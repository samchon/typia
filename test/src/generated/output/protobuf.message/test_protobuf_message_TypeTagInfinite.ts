import typia from "typia";

import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { TypeTagInfinite } from "../../../structures/TypeTagInfinite";

export const test_protobuf_message_TypeTagInfinite = _test_protobuf_message(
  "TypeTagInfinite",
)(
  'syntax = "proto3";\n\nmessage TypeTagInfinite {\n  required double value = 1;\n  required double ranged = 2;\n  required double minimum = 3;\n  required double maximum = 4;\n  required double multipleOf = 5;\n  required int32 typed = 6;\n}',
);
