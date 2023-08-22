import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TagStep } from "../../structures/TagStep";

export const test_protobuf_validateEncode_TagStep =
    _test_protobuf_validateEncode("TagStep")<TagStep>(TagStep)({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<TagStep>(input),
        message: typia.protobuf.message<TagStep>(),
        decode: typia.protobuf.createDecode<TagStep>(),
    });
