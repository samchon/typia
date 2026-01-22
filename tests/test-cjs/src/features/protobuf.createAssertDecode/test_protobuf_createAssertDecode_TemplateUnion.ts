import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_protobuf_createAssertDecode_TemplateUnion = (): void =>
  _test_protobuf_assertDecode(TypeGuardError)("TemplateUnion")<TemplateUnion>(
    TemplateUnion,
  )({
    decode: typia.protobuf.createAssertDecode<TemplateUnion>(),
    encode: typia.protobuf.createEncode<TemplateUnion>(),
  });
