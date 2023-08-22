import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TagTypeBigInt } from "../../structures/TagTypeBigInt";

export const test_protobuf_assertEncode_TagTypeBigInt =
    _test_protobuf_assertEncode("TagTypeBigInt")<TagTypeBigInt>(TagTypeBigInt)({
        assertEncode: typia.protobuf.createAssertEncode<TagTypeBigInt>(),
        message: typia.protobuf.message<TagTypeBigInt>(),
        decode: typia.protobuf.createDecode<TagTypeBigInt>(),
    });
