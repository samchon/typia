import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TagFormat } from "../../structures/TagFormat";

export const test_protobuf_validateDecode_TagFormat =
    _test_protobuf_validateDecode("TagFormat")<TagFormat>(TagFormat)({
        validateDecode: (input) =>
            typia.protobuf.validateDecode<TagFormat>(input),
        encode: typia.protobuf.createEncode<TagFormat>(),
    });
