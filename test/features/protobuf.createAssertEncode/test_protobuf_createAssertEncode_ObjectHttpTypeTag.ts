import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_protobuf_createAssertEncode_ObjectHttpTypeTag =
    _test_protobuf_assertEncode("ObjectHttpTypeTag")<ObjectHttpTypeTag>(
        ObjectHttpTypeTag,
    )({
        encode: typia.protobuf.createAssertEncode<ObjectHttpTypeTag>(),
        decode: typia.protobuf.createDecode<ObjectHttpTypeTag>(),
        message: typia.protobuf.message<ObjectHttpTypeTag>(),
    });
