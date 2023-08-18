import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_protobuf_isEncode_ObjectSimple =
    _test_protobuf_isEncode<ObjectSimple>(ObjectSimple)({
        isEncode: (input) => typia.protobuf.isEncode<ObjectSimple>(input),
        message: typia.protobuf.message<ObjectSimple>(),
    });
