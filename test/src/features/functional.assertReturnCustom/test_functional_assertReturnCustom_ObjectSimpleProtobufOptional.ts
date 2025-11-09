import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_functional_assertReturnCustom_ObjectSimpleProtobufOptional =
  (): void =>
    _test_functional_assertReturn(CustomGuardError)(
      "ObjectSimpleProtobufOptional",
    )(ObjectSimpleProtobufOptional)(
      (
        p: (
          input: ObjectSimpleProtobufOptional,
        ) => ObjectSimpleProtobufOptional,
      ) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
