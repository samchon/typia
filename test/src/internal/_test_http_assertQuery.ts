import typia, { TypeGuardError } from "typia";

import { TestStructure } from "../helpers/TestStructure";
import { create_query } from "../helpers/create_query";
import { resolved_equal_to } from "../helpers/resolved_equal_to";

export const _test_http_assertQuery =
  (ErrorClass: Function) =>
  (name: string) =>
  <T extends object>(factory: TestStructure<T>) =>
  (decode: (input: URLSearchParams) => typia.Resolved<T>) =>
  () => {
    const data: T = factory.generate();
    const encoded: URLSearchParams = create_query(data);
    const decoded: typia.Resolved<T> = decode(encoded);

    const equal: boolean = resolved_equal_to(name)(data, decoded);
    if (equal === false)
      throw new Error(
        `Bug on typia.http.assertQuery(): failed to understand ${name} type.`,
      );

    for (const spoil of factory.SPOILERS ?? []) {
      const elem: T = factory.generate();
      const expected: string[] = spoil(elem);

      try {
        decode(create_query(elem));
      } catch (exp) {
        if (
          (exp as Function).constructor?.name === ErrorClass.name &&
          typia.is<TypeGuardError.IProps>(exp)
        )
          if (exp.path && expected.includes(exp.path) === true) continue;
          else
            console.log({
              expected,
              actual: exp.path,
            });
      }
      throw new Error(
        `Bug on typia.http.assertQuery(): failed to detect error on the ${name} type.`,
      );
    }
  };
