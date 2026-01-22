import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_functional_assertReturn_MapSimpleProtobufOptional =
  (): void =>
    _test_functional_assertReturn(TypeGuardError)("MapSimpleProtobufOptional")(
      MapSimpleProtobufOptional,
    )((p: (input: MapSimpleProtobufOptional) => MapSimpleProtobufOptional) =>
      typia.functional.assertReturn(p),
    );
