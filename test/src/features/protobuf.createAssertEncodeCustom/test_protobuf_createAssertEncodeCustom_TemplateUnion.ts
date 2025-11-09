import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_protobuf_createAssertEncodeCustom_TemplateUnion = (): void =>
  _test_protobuf_assertEncode(CustomGuardError)("TemplateUnion")<TemplateUnion>(
    TemplateUnion,
  )({
    encode: typia.protobuf.createAssertEncode<TemplateUnion>(
      (p) => new CustomGuardError(p),
    ),
    decode: typia.protobuf.createDecode<TemplateUnion>(),
    message: typia.protobuf.message<TemplateUnion>(),
  });
