import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_reflect_metadata_ObjectHttpUndefindable = (): void =>
  _test_reflect_metadata("ObjectHttpUndefindable")(
    typia.reflect.metadata<[ObjectHttpUndefindable]>(),
  );
