import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TagDefault } from "../../structures/TagDefault";

export const test_protobuf_assertEncode_TagDefault =
    _test_protobuf_assertEncode("TagDefault")<TagDefault>(TagDefault)({
        assertEncode: typia.protobuf.createAssertEncode<TagDefault>(),
        message: typia.protobuf.message<TagDefault>(),
        decode: typia.protobuf.createDecode<TagDefault>(),
    });
