import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_protobuf_assertDecodeCustom_MapSimpleProtobufOptional =
  (): void =>
    _test_protobuf_assertDecode(CustomGuardError)(
      "MapSimpleProtobufOptional",
    )<MapSimpleProtobufOptional>(MapSimpleProtobufOptional)({
      decode: (input) =>
        typia.protobuf.assertDecode<MapSimpleProtobufOptional>(
          input,
          (p) => new CustomGuardError(p),
        ),
      encode: typia.protobuf.createEncode<MapSimpleProtobufOptional>(),
    });
