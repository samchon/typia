import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TagRangeBigInt } from "../../structures/TagRangeBigInt";

export const test_protobuf_validateEncode_TagRangeBigInt =
    _test_protobuf_validateEncode("TagRangeBigInt")<TagRangeBigInt>(
        TagRangeBigInt,
    )({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<TagRangeBigInt>(input),
        message: typia.protobuf.message<TagRangeBigInt>(),
    });
