import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_protobuf_createDecode_ObjectHttpUndefindable = (): void => _test_protobuf_decode(
  "ObjectHttpUndefindable",
)<ObjectHttpUndefindable>(ObjectHttpUndefindable)({
  decode: typia.protobuf.createDecode<ObjectHttpUndefindable>(),
  encode: typia.protobuf.createEncode<ObjectHttpUndefindable>(),
});
