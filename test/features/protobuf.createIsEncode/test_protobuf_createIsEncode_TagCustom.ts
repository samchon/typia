import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TagCustom } from "../../structures/TagCustom";

export const test_protobuf_isEncode_TagCustom =
    _test_protobuf_isEncode<TagCustom>(TagCustom)({
        isEncode: typia.protobuf.createIsEncode<TagCustom>(),
        message: typia.protobuf.message<TagCustom>(),
    });
