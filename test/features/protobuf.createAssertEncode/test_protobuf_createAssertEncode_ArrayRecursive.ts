import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_protobuf_assertEncode_ArrayRecursive =
    _test_protobuf_assertEncode("ArrayRecursive")<ArrayRecursive>(
        ArrayRecursive,
    )({
        assertEncode: typia.protobuf.createAssertEncode<ArrayRecursive>(),
        message: typia.protobuf.message<ArrayRecursive>(),
    });
