import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TagNaN } from "../../structures/TagNaN";

export const test_protobuf_validateDecode_TagNaN =
    _test_protobuf_validateDecode("TagNaN")<TagNaN>(TagNaN)({
        validateDecode: typia.protobuf.createValidateDecode<TagNaN>(),
        encode: typia.protobuf.createEncode<TagNaN>(),
    });
