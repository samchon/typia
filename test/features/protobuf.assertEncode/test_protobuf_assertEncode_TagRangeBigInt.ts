import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TagRangeBigInt } from "../../structures/TagRangeBigInt";

export const test_protobuf_assertEncode_TagRangeBigInt =
    _test_protobuf_assertEncode("TagRangeBigInt")<TagRangeBigInt>(
        TagRangeBigInt,
    )({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<TagRangeBigInt>(input),
        message: typia.protobuf.message<TagRangeBigInt>(),
    });
