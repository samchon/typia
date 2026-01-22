import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_protobuf_validateDecode_ObjectUnionNonPredictable =
  (): void =>
    _test_protobuf_validateDecode(
      "ObjectUnionNonPredictable",
    )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)({
      decode: (input) =>
        typia.protobuf.validateDecode<ObjectUnionNonPredictable>(input),
      encode: typia.protobuf.createEncode<ObjectUnionNonPredictable>(),
    });
