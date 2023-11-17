import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_protobuf_createIsDecode_ObjectHttpAtomic =
  _test_protobuf_isDecode("ObjectHttpAtomic")<ObjectHttpAtomic>(
    ObjectHttpAtomic,
  )({
    decode: typia.protobuf.createIsDecode<ObjectHttpAtomic>(),
    encode: typia.protobuf.createEncode<ObjectHttpAtomic>(),
  });
