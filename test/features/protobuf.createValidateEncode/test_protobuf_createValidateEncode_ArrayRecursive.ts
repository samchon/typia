import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_protobuf_validateEncode_ArrayRecursive =
    _test_protobuf_validateEncode("ArrayRecursive")<ArrayRecursive>(
        ArrayRecursive,
    )({
        validateEncode: typia.protobuf.createValidateEncode<ArrayRecursive>(),
        message: typia.protobuf.message<ArrayRecursive>(),
        decode: typia.protobuf.createDecode<ArrayRecursive>(),
    });
