import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_protobuf_createValidateDecode_ObjectGenericUnion = (): void =>
  _test_protobuf_validateDecode("ObjectGenericUnion")<ObjectGenericUnion>(
    ObjectGenericUnion,
  )({
    decode: typia.protobuf.createValidateDecode<ObjectGenericUnion>(),
    encode: typia.protobuf.createEncode<ObjectGenericUnion>(),
  });
