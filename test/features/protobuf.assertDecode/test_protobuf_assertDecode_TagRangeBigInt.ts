import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TagRangeBigInt } from "../../structures/TagRangeBigInt";

export const test_protobuf_assertDecode_TagRangeBigInt =
    _test_protobuf_assertDecode("TagRangeBigInt")<TagRangeBigInt>(
        TagRangeBigInt,
    )({
        assertDecode: (input) =>
            typia.protobuf.assertDecode<TagRangeBigInt>(input),
        encode: typia.protobuf.createEncode<TagRangeBigInt>(),
    });
