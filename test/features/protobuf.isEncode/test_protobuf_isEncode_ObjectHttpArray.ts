import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_protobuf_createIsEncode_ObjectHttpArray =
  _test_protobuf_isEncode("ObjectHttpArray")<ObjectHttpArray>(ObjectHttpArray)({
    encode: (input) => typia.protobuf.isEncode<ObjectHttpArray>(input),
    decode: typia.protobuf.createDecode<ObjectHttpArray>(),
    message: typia.protobuf.message<ObjectHttpArray>(),
  });
