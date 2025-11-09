import typia from "typia";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ObjectHttpAtomic = (): void =>
  _test_reflect_metadata("ObjectHttpAtomic")(
    typia.reflect.metadata<[ObjectHttpAtomic]>()
  );