import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { MapSimple } from "../../structures/MapSimple";

export const test_validate_MapSimple = (): void =>
  _test_validate("MapSimple")<MapSimple>(MapSimple)((input) =>
    typia.validate<MapSimple>(input),
  );
