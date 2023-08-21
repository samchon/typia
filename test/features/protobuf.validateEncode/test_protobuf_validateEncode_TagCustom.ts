import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TagCustom } from "../../structures/TagCustom";

export const test_protobuf_validateEncode_TagCustom =
    _test_protobuf_validateEncode("TagCustom")<TagCustom>(TagCustom)({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<TagCustom>(input),
        message: typia.protobuf.message<TagCustom>(),
    });
