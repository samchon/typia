import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_protobuf_createValidateDecode_ObjectSimple =
    _test_protobuf_validateDecode("ObjectSimple")<ObjectSimple>(ObjectSimple)({
        decode: (input) => typia.protobuf.validateDecode<ObjectSimple>(input),
        encode: typia.protobuf.createEncode<ObjectSimple>(),
    });
