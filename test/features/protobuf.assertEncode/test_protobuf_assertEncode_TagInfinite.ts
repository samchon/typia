import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TagInfinite } from "../../structures/TagInfinite";

export const test_protobuf_assertEncode_TagInfinite =
    _test_protobuf_assertEncode("TagInfinite")<TagInfinite>(TagInfinite)({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<TagInfinite>(input),
        message: typia.protobuf.message<TagInfinite>(),
    });
