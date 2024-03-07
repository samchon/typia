import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

import { TypeGuardError } from "typia";

export const test_functional_assertReturn_MapSimpleProtobufOptional =
  _test_functional_assertReturn(TypeGuardError)("MapSimpleProtobufOptional")(
    MapSimpleProtobufOptional,
  )((p: (input: MapSimpleProtobufOptional) => MapSimpleProtobufOptional) =>
    typia.functional.assertReturn(p),
  );
