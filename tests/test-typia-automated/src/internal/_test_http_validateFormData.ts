import { TestStructure } from "@typia/template";
import typia from "typia";

import { create_form_data } from "../utils/create_form_data";
import { resolved_equal_to } from "../utils/resolved_equal_to";

export const _test_http_validateFormData =
  (name: string) =>
  <T extends object>(factory: TestStructure<T>) =>
  (decode: (input: FormData) => typia.IValidation<typia.Resolved<T>>): void => {
    const data: T = factory.generate();
    const encoded: FormData = create_form_data(data);

    const result: typia.IValidation<typia.Resolved<T>> = decode(encoded);
    if (result.success === false)
      throw new Error(
        `Bug on typia.http.validateFormData(): failed to understand ${name} type.`,
      );
    typia.assertEquals<typia.IValidation.ISuccess<unknown>>(result);

    const equal: boolean =
      result !== null && resolved_equal_to(name)(data, result.data);
    if (equal === false)
      throw new Error(
        `Bug on typia.http.validateFormData(): failed to understand ${name} type.`,
      );

    const wrong: ISpoiled[] = [];
    for (const spoil of factory.SPOILERS ?? []) {
      const elem: T = factory.generate();
      const expected: string[] = spoil(elem);

      const valid: typia.IValidation<typia.Resolved<T>> = decode(
        create_form_data(elem),
      );
      if (valid.success === true)
        throw new Error(
          `Bug on typia.http.validateFormData(): failed to detect error on the ${name} type.`,
        );

      typia.assertEquals(valid);
      expected.sort();
      valid.errors.sort((x, y) => (x.path < y.path ? -1 : 1));

      if (
        valid.errors.length !== expected.length ||
        valid.errors.every((e, i) => e.path === expected[i]) === false
      )
        wrong.push({
          expected,
          actual: valid.errors.map((e) => e.path),
        });
    }
    if (wrong.length !== 0) {
      console.log(wrong);
      throw new Error(
        `Bug on typia.http.validateFormData(): failed to detect error on the ${name} type.`,
      );
    }
  };

interface ISpoiled {
  expected: string[];
  actual: string[];
}
