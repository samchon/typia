import { TestStructure } from "@typia/template";
import typia from "typia";

import { create_form_data } from "../utils/create_form_data";
import { resolved_equal_to } from "../utils/resolved_equal_to";

export const _test_http_isFormData =
  (name: string) =>
  <T extends object>(factory: TestStructure<T>) =>
  (decode: (input: FormData) => typia.Resolved<T> | null): void => {
    const data: T = factory.generate();
    const encoded: FormData = create_form_data(data);
    const decoded: typia.Resolved<T> | null = decode(encoded);

    const equal: boolean =
      decoded !== null && resolved_equal_to(name)(data, decoded);
    if (equal === false)
      throw new Error(
        `Bug on typia.http.isFormData(): failed to understand ${name} type.`,
      );

    for (const spoil of factory.SPOILERS ?? []) {
      const elem: T = factory.generate();
      spoil(elem);

      if (decode(create_form_data(elem)) !== null)
        throw new Error(
          `Bug on typia.http.isFormData(): failed to detect error on the ${name} type.`,
        );
    }
  };
