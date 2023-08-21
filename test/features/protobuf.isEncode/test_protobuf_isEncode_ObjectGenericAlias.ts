import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_protobuf_isEncode_ObjectGenericAlias =
    _test_protobuf_isEncode("ObjectGenericAlias")<ObjectGenericAlias>(
        ObjectGenericAlias,
    )({
        isEncode: (input) => typia.protobuf.isEncode<ObjectGenericAlias>(input),
        message: typia.protobuf.message<ObjectGenericAlias>(),
    });
