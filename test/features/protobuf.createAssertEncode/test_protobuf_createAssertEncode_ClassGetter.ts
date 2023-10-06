import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_protobuf_createAssertEncode_ClassGetter =
    _test_protobuf_assertEncode("ClassGetter")<ClassGetter>(ClassGetter)({
        encode: typia.protobuf.createAssertEncode<ClassGetter>(),
        decode: typia.protobuf.createDecode<ClassGetter>(),
        message: typia.protobuf.message<ClassGetter>(),
    });
