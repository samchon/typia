import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_protobuf_createValidateDecode_ArrayRecursive =
    _test_protobuf_validateDecode("ArrayRecursive")<ArrayRecursive>(
        ArrayRecursive,
    )({
        decode: typia.protobuf.createValidateDecode<ArrayRecursive>(),
        encode: typia.protobuf.createEncode<ArrayRecursive>(),
    });
