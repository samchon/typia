import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TagTypeBigInt } from "../../structures/TagTypeBigInt";

export const test_protobuf_assertEncode_TagTypeBigInt =
    _test_protobuf_assertEncode("TagTypeBigInt")<TagTypeBigInt>(TagTypeBigInt)({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<TagTypeBigInt>(input),
        message: typia.protobuf.message<TagTypeBigInt>(),
    });
