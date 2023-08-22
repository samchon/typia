import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TagPattern } from "../../structures/TagPattern";

export const test_protobuf_assertDecode_TagPattern =
    _test_protobuf_assertDecode("TagPattern")<TagPattern>(TagPattern)({
        assertDecode: (input) => typia.protobuf.assertDecode<TagPattern>(input),
        encode: typia.protobuf.createEncode<TagPattern>(),
    });
