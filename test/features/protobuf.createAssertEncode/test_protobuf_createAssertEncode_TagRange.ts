import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TagRange } from "../../structures/TagRange";

export const test_protobuf_assertEncode_TagRange =
    _test_protobuf_assertEncode<TagRange>(TagRange)({
        assertEncode: typia.protobuf.createAssertEncode<TagRange>(),
        message: typia.protobuf.message<TagRange>(),
    });
