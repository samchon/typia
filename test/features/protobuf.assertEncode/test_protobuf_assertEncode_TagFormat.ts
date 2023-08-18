import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TagFormat } from "../../structures/TagFormat";

export const test_protobuf_assertEncode_TagFormat =
    _test_protobuf_assertEncode<TagFormat>(TagFormat)({
        assertEncode: (input) => typia.protobuf.assertEncode<TagFormat>(input),
        message: typia.protobuf.message<TagFormat>(),
    });
