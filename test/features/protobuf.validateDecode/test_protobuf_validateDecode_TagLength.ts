import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TagLength } from "../../structures/TagLength";

export const test_protobuf_validateDecode_TagLength =
    _test_protobuf_validateDecode("TagLength")<TagLength>(TagLength)({
        validateDecode: (input) =>
            typia.protobuf.validateDecode<TagLength>(input),
        encode: typia.protobuf.createEncode<TagLength>(),
    });
