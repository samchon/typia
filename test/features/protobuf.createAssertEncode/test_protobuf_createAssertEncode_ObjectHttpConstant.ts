import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_protobuf_createAssertEncode_ObjectHttpConstant =
    _test_protobuf_assertEncode("ObjectHttpConstant")<ObjectHttpConstant>(
        ObjectHttpConstant,
    )({
        assertEncode: typia.protobuf.createAssertEncode<ObjectHttpConstant>(),
        message: typia.protobuf.message<ObjectHttpConstant>(),
        decode: typia.protobuf.createDecode<ObjectHttpConstant>(),
    });
