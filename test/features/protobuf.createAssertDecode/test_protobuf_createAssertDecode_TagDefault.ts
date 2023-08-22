import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TagDefault } from "../../structures/TagDefault";

export const test_protobuf_assertDecode_TagDefault =
    _test_protobuf_assertDecode("TagDefault")<TagDefault>(TagDefault)({
        assertDecode: typia.protobuf.createAssertDecode<TagDefault>(),
        encode: typia.protobuf.createEncode<TagDefault>(),
    });
