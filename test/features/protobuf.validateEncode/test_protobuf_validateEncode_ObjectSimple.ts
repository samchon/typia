import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_protobuf_validateEncode_ObjectSimple =
    _test_protobuf_validateEncode("ObjectSimple")<ObjectSimple>(ObjectSimple)({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<ObjectSimple>(input),
        message: typia.protobuf.message<ObjectSimple>(),
    });
