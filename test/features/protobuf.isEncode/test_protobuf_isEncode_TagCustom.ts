import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TagCustom } from "../../structures/TagCustom";

export const test_protobuf_isEncode_TagCustom =
    _test_protobuf_isEncode<TagCustom>(TagCustom)({
        isEncode: (input) => typia.protobuf.isEncode<TagCustom>(input),
        message: typia.protobuf.message<TagCustom>(),
    });
