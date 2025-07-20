import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_protobuf_assertDecodeCustom_MapSimpleProtobufNullable =
  (): void =>
    _test_protobuf_assertDecode(CustomGuardError)(
      "MapSimpleProtobufNullable",
    )<MapSimpleProtobufNullable>(MapSimpleProtobufNullable)({
      decode: (input) =>
        typia.protobuf.assertDecode<MapSimpleProtobufNullable>(
          input,
          (p) => new CustomGuardError(p),
        ),
      encode: typia.protobuf.createEncode<MapSimpleProtobufNullable>(),
    });
