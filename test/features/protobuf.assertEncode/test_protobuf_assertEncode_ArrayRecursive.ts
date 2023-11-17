import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_protobuf_createAssertEncode_ArrayRecursive =
  _test_protobuf_assertEncode("ArrayRecursive")<ArrayRecursive>(ArrayRecursive)(
    {
      encode: (input) => typia.protobuf.assertEncode<ArrayRecursive>(input),
      decode: typia.protobuf.createDecode<ArrayRecursive>(),
      message: typia.protobuf.message<ArrayRecursive>(),
    },
  );
