import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_protobuf_createValidateDecode_ObjectHttpAtomic =
    _test_protobuf_validateDecode("ObjectHttpAtomic")<ObjectHttpAtomic>(
        ObjectHttpAtomic,
    )({
        decode: (input) =>
            typia.protobuf.validateDecode<ObjectHttpAtomic>(input),
        encode: typia.protobuf.createEncode<ObjectHttpAtomic>(),
    });
