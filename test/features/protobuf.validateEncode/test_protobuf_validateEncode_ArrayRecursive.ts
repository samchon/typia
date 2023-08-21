import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_protobuf_validateEncode_ArrayRecursive =
    _test_protobuf_validateEncode("ArrayRecursive")<ArrayRecursive>(
        ArrayRecursive,
    )({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<ArrayRecursive>(input),
        message: typia.protobuf.message<ArrayRecursive>(),
    });
