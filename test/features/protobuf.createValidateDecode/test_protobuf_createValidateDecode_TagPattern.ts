import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TagPattern } from "../../structures/TagPattern";

export const test_protobuf_validateDecode_TagPattern =
    _test_protobuf_validateDecode("TagPattern")<TagPattern>(TagPattern)({
        validateDecode: typia.protobuf.createValidateDecode<TagPattern>(),
        encode: typia.protobuf.createEncode<TagPattern>(),
    });
