import typia from "typia";
import { ToJsonDouble } from "../../structures/ToJsonDouble";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ToJsonDouble = (): void =>
  _test_reflect_metadata("ToJsonDouble")(
    typia.reflect.metadata<[ToJsonDouble]>()
  );