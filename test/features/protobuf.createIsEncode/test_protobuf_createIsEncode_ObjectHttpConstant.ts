import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_protobuf_createIsEncode_ObjectHttpConstant =
    _test_protobuf_isEncode("ObjectHttpConstant")<ObjectHttpConstant>(
        ObjectHttpConstant,
    )({
        isEncode: typia.protobuf.createIsEncode<ObjectHttpConstant>(),
        message: typia.protobuf.message<ObjectHttpConstant>(),
        decode: typia.protobuf.createDecode<ObjectHttpConstant>(),
    });
