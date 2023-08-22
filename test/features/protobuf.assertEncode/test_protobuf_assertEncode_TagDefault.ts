import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TagDefault } from "../../structures/TagDefault";

export const test_protobuf_assertEncode_TagDefault =
    _test_protobuf_assertEncode("TagDefault")<TagDefault>(TagDefault)({
        assertEncode: (input) => typia.protobuf.assertEncode<TagDefault>(input),
        message: typia.protobuf.message<TagDefault>(),
        decode: typia.protobuf.createDecode<TagDefault>(),
    });
