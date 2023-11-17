import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_protobuf_createAssertEncode_ObjectRequired =
  _test_protobuf_assertEncode("ObjectRequired")<ObjectRequired>(ObjectRequired)(
    {
      encode: (input) => typia.protobuf.assertEncode<ObjectRequired>(input),
      decode: typia.protobuf.createDecode<ObjectRequired>(),
      message: typia.protobuf.message<ObjectRequired>(),
    },
  );
