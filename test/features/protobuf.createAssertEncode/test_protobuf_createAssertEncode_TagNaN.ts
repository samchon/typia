import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TagNaN } from "../../structures/TagNaN";

export const test_protobuf_assertEncode_TagNaN =
    _test_protobuf_assertEncode<TagNaN>(TagNaN)({
        assertEncode: typia.protobuf.createAssertEncode<TagNaN>(),
        message: typia.protobuf.message<TagNaN>(),
    });
