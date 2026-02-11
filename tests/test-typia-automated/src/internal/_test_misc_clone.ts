import { TestStructure } from "@typia/template";
import { Resolved } from "typia";

import { resolved_equal_to } from "../utils/resolved_equal_to";

export const _test_misc_clone =
  (name: string) =>
  <T>(factory: TestStructure<T>) =>
  (clone: (input: T) => Resolved<T>): void => {
    const data: T = factory.generate();
    const cloned: Resolved<T> = clone(data);

    if (resolved_equal_to(name)(data, cloned) === false) {
      throw new Error(
        `Bug on typia.misc.clone(): failed to clone the ${name} type.`,
      );
    }
  };
