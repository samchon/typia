import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TagDefault } from "../../structures/TagDefault";

export const test_protobuf_validateDecode_TagDefault =
    _test_protobuf_validateDecode("TagDefault")<TagDefault>(TagDefault)({
        validateDecode: typia.protobuf.createValidateDecode<TagDefault>(),
        encode: typia.protobuf.createEncode<TagDefault>(),
    });
