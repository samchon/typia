import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_protobuf_createIsDecode_ArrayRecursive =
  _test_protobuf_isDecode("ArrayRecursive")<ArrayRecursive>(ArrayRecursive)({
    decode: (input) => typia.protobuf.isDecode<ArrayRecursive>(input),
    encode: typia.protobuf.createEncode<ArrayRecursive>(),
  });
