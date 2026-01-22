import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_protobuf_isEncode_ObjectHttpUndefindable = (): void =>
  _test_protobuf_isEncode("ObjectHttpUndefindable")<ObjectHttpUndefindable>(
    ObjectHttpUndefindable,
  )({
    encode: (input) => typia.protobuf.isEncode<ObjectHttpUndefindable>(input),
    decode: typia.protobuf.createDecode<ObjectHttpUndefindable>(),
    message: typia.protobuf.message<ObjectHttpUndefindable>(),
  });
