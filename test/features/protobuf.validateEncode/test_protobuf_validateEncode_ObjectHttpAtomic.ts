import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_protobuf_createValidateEncode_ObjectHttpAtomic =
  _test_protobuf_validateEncode("ObjectHttpAtomic")<ObjectHttpAtomic>(
    ObjectHttpAtomic,
  )({
    encode: (input) => typia.protobuf.validateEncode<ObjectHttpAtomic>(input),
    decode: typia.protobuf.createDecode<ObjectHttpAtomic>(),
    message: typia.protobuf.message<ObjectHttpAtomic>(),
  });
