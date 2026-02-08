import typia, { TypeGuardError } from "typia";

import { TestStructure } from "../utils/TestStructure";
import { create_form_data } from "../utils/create_form_data";
import { resolved_equal_to } from "../utils/resolved_equal_to";

export const _test_http_assertFormData =
  (ErrorClass: Function) =>
  (name: string) =>
  <T extends object>(factory: TestStructure<T>) =>
  (decode: (input: FormData) => typia.Resolved<T>): void => {
    const data: T = factory.generate();
    const encoded: FormData = create_form_data(data);
    const decoded: typia.Resolved<T> = decode(encoded);

    const equal: boolean = resolved_equal_to(name)(data, decoded);
    if (equal === false)
      throw new Error(
        `Bug on typia.http.assertFormData(): failed to understand ${name} type.`,
      );

    for (const spoil of factory.SPOILERS ?? []) {
      const elem: T = factory.generate();
      const expected: string[] = spoil(elem);

      try {
        decode(create_form_data(elem));
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
        `Bug on typia.http.assertFormData(): failed to detect error on the ${name} type.`,
      );
    }
  };
