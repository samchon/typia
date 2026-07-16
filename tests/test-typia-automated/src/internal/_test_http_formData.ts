import { TestStructure } from "@typia/template";
import typia from "typia";

import { create_form_data } from "../utils/create_form_data";
import { resolved_equal_to_async } from "../utils/resolved_equal_to_async";

export const _test_http_formData =
  (name: string) =>
  <T extends object>(factory: TestStructure<T>) =>
  async (decode: (input: FormData) => typia.Resolved<T>): Promise<void> => {
    const data: T = factory.generate();
    const encoded: FormData = create_form_data(data);
    const decoded: typia.Resolved<T> = decode(encoded);

    const equal: boolean = await resolved_equal_to_async(factory)(
      data,
      decoded,
    );
    if (equal === false)
      throw new Error(
        `Bug on typia.http.formData(): failed to understand ${name} type.`,
      );
  };
