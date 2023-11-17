import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_protobuf_createIsDecode_ObjectPrimitive =
  _test_protobuf_isDecode("ObjectPrimitive")<ObjectPrimitive>(ObjectPrimitive)({
    decode: (input) => typia.protobuf.isDecode<ObjectPrimitive>(input),
    encode: typia.protobuf.createEncode<ObjectPrimitive>(),
  });
