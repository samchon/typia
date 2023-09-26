import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_protobuf_validateEncode_ObjectHttpAtomic =
    _test_protobuf_validateEncode("ObjectHttpAtomic")<ObjectHttpAtomic>(
        ObjectHttpAtomic,
    )({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<ObjectHttpAtomic>(input),
        message: typia.protobuf.message<ObjectHttpAtomic>(),
        decode: typia.protobuf.createDecode<ObjectHttpAtomic>(),
    });
