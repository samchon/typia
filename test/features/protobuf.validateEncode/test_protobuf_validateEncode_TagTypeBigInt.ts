import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TagTypeBigInt } from "../../structures/TagTypeBigInt";

export const test_protobuf_validateEncode_TagTypeBigInt =
    _test_protobuf_validateEncode("TagTypeBigInt")<TagTypeBigInt>(
        TagTypeBigInt,
    )({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<TagTypeBigInt>(input),
        message: typia.protobuf.message<TagTypeBigInt>(),
        decode: typia.protobuf.createDecode<TagTypeBigInt>(),
    });
