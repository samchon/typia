import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TagNaN } from "../../structures/TagNaN";

export const test_protobuf_validateEncode_TagNaN =
    _test_protobuf_validateEncode("TagNaN")<TagNaN>(TagNaN)({
        validateEncode: (input) => typia.protobuf.validateEncode<TagNaN>(input),
        message: typia.protobuf.message<TagNaN>(),
        decode: typia.protobuf.createDecode<TagNaN>(),
    });
