import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_protobuf_createAssertDecodeCustom_ObjectGenericAlias =
  (): void =>
    _test_protobuf_assertDecode(CustomGuardError)(
      "ObjectGenericAlias",
    )<ObjectGenericAlias>(ObjectGenericAlias)({
      decode: typia.protobuf.createAssertDecode<ObjectGenericAlias>(
        (p) => new CustomGuardError(p),
      ),
      encode: typia.protobuf.createEncode<ObjectGenericAlias>(),
    });
