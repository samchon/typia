import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_protobuf_createAssertEncode_ObjectHttpAtomic =
  _test_protobuf_assertEncode("ObjectHttpAtomic")<ObjectHttpAtomic>(
    ObjectHttpAtomic,
  )({
    encode: (input) => typia.protobuf.assertEncode<ObjectHttpAtomic>(input),
    decode: typia.protobuf.createDecode<ObjectHttpAtomic>(),
    message: typia.protobuf.message<ObjectHttpAtomic>(),
  });
