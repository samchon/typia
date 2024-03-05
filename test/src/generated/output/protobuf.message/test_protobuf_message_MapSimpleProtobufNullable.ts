import typia from "typia";

import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { MapSimpleProtobufNullable } from "../../../structures/MapSimpleProtobufNullable";

export const test_protobuf_message_MapSimpleProtobufNullable =
  _test_protobuf_message("MapSimpleProtobufNullable")(
    'syntax = "proto3";\n\nmessage MapSimpleProtobufNullable {\n  map<string, bool> boolean = 1;\n  map<string, int32> int32 = 2;\n  map<string, int64> bigint = 3;\n  map<string, double> double = 4;\n  map<string, string> string = 5;\n  map<string, bytes> bytes = 6;\n  map<string, MapSimpleProtobufNullable> objects = 7;\n}',
  );
