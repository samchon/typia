import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TagArray } from "../../structures/TagArray";

export const test_protobuf_validateDecode_TagArray =
    _test_protobuf_validateDecode("TagArray")<TagArray>(TagArray)({
        validateDecode: (input) =>
            typia.protobuf.validateDecode<TagArray>(input),
        encode: typia.protobuf.createEncode<TagArray>(),
    });
