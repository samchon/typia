import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_protobuf_isDecode_ObjectHttpNullable = (): void =>
  _test_protobuf_isDecode("ObjectHttpNullable")<ObjectHttpNullable>(
    ObjectHttpNullable,
  )({
    decode: (input) => typia.protobuf.isDecode<ObjectHttpNullable>(input),
    encode: typia.protobuf.createEncode<ObjectHttpNullable>(),
  });
