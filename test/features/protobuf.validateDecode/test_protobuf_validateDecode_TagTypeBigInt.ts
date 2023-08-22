import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TagTypeBigInt } from "../../structures/TagTypeBigInt";

export const test_protobuf_validateDecode_TagTypeBigInt =
    _test_protobuf_validateDecode("TagTypeBigInt")<TagTypeBigInt>(
        TagTypeBigInt,
    )({
        validateDecode: (input) =>
            typia.protobuf.validateDecode<TagTypeBigInt>(input),
        encode: typia.protobuf.createEncode<TagTypeBigInt>(),
    });
