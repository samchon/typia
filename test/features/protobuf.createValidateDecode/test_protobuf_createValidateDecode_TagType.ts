import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TagType } from "../../structures/TagType";

export const test_protobuf_validateDecode_TagType =
    _test_protobuf_validateDecode("TagType")<TagType>(TagType)({
        validateDecode: typia.protobuf.createValidateDecode<TagType>(),
        encode: typia.protobuf.createEncode<TagType>(),
    });
