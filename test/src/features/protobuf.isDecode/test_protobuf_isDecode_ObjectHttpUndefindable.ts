import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_protobuf_isDecode_ObjectHttpUndefindable =
  _test_protobuf_isDecode("ObjectHttpUndefindable")<ObjectHttpUndefindable>(
    ObjectHttpUndefindable,
  )({
    decode: (input) => typia.protobuf.isDecode<ObjectHttpUndefindable>(input),
    encode: typia.protobuf.createEncode<ObjectHttpUndefindable>(),
  });
