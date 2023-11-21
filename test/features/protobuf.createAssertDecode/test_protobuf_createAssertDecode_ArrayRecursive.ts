import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_protobuf_createAssertDecode_ArrayRecursive =
  _test_protobuf_assertDecode("ArrayRecursive")<ArrayRecursive>(ArrayRecursive)(
    {
      decode: typia.protobuf.createAssertDecode<ArrayRecursive>(),
      encode: typia.protobuf.createEncode<ArrayRecursive>(),
    },
  );
