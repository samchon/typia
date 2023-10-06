import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_protobuf_createValidateEncode_ClassGetter =
    _test_protobuf_validateEncode("ClassGetter")<ClassGetter>(ClassGetter)({
        encode: (input) => typia.protobuf.validateEncode<ClassGetter>(input),
        decode: typia.protobuf.createDecode<ClassGetter>(),
        message: typia.protobuf.message<ClassGetter>(),
    });
