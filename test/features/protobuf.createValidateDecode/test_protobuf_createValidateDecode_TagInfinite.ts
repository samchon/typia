import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TagInfinite } from "../../structures/TagInfinite";

export const test_protobuf_validateDecode_TagInfinite =
    _test_protobuf_validateDecode("TagInfinite")<TagInfinite>(TagInfinite)({
        validateDecode: typia.protobuf.createValidateDecode<TagInfinite>(),
        encode: typia.protobuf.createEncode<TagInfinite>(),
    });
