import typia from "typia";

import { TestStructure } from "../utils/TestStructure";
import { create_form_data } from "../utils/create_form_data";
import { resolved_equal_to } from "../utils/resolved_equal_to";

export const _test_http_formData =
  (name: string) =>
  <T extends object>(factory: TestStructure<T>) =>
  (decode: (input: FormData) => typia.Resolved<T>): void => {
    const data: T = factory.generate();
    const encoded: FormData = create_form_data(data);
    const decoded: typia.Resolved<T> = decode(encoded);

    const equal: boolean = resolved_equal_to(name)(data, decoded);
    if (equal === false)
      throw new Error(
        `Bug on typia.http.formData(): failed to understand ${name} type.`,
      );
  };
