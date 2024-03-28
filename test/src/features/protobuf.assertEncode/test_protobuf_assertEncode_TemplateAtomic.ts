import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_protobuf_assertEncode_TemplateAtomic =
  _test_protobuf_assertEncode(TypeGuardError)("TemplateAtomic")<TemplateAtomic>(
    TemplateAtomic,
  )({
    encode: (input) => typia.protobuf.assertEncode<TemplateAtomic>(input),
    decode: typia.protobuf.createDecode<TemplateAtomic>(),
    message: typia.protobuf.message<TemplateAtomic>(),
  });
