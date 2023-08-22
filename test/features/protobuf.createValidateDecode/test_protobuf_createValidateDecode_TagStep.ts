import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TagStep } from "../../structures/TagStep";

export const test_protobuf_validateDecode_TagStep =
    _test_protobuf_validateDecode("TagStep")<TagStep>(TagStep)({
        validateDecode: typia.protobuf.createValidateDecode<TagStep>(),
        encode: typia.protobuf.createEncode<TagStep>(),
    });
