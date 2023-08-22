import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TagRangeBigInt } from "../../structures/TagRangeBigInt";

export const test_protobuf_validateEncode_TagRangeBigInt =
    _test_protobuf_validateEncode("TagRangeBigInt")<TagRangeBigInt>(
        TagRangeBigInt,
    )({
        validateEncode: typia.protobuf.createValidateEncode<TagRangeBigInt>(),
        message: typia.protobuf.message<TagRangeBigInt>(),
        decode: typia.protobuf.createDecode<TagRangeBigInt>(),
    });
