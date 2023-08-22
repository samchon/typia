import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TagCustom } from "../../structures/TagCustom";

export const test_protobuf_validateDecode_TagCustom =
    _test_protobuf_validateDecode("TagCustom")<TagCustom>(TagCustom)({
        validateDecode: typia.protobuf.createValidateDecode<TagCustom>(),
        encode: typia.protobuf.createEncode<TagCustom>(),
    });
