import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TagArray } from "../../structures/TagArray";

export const test_protobuf_assertEncode_TagArray =
    _test_protobuf_assertEncode<TagArray>(TagArray)({
        assertEncode: (input) => typia.protobuf.assertEncode<TagArray>(input),
        message: typia.protobuf.message<TagArray>(),
    });
