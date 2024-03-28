import typia from "typia";

import { _test_functional_isReturnAsync } from "../../../internal/_test_functional_isReturnAsync";
import { ObjectDescription } from "../../../structures/ObjectDescription";

export const test_functional_isReturnAsync_ObjectDescription =
  _test_functional_isReturnAsync("ObjectDescription")(ObjectDescription)(
    (p: (input: ObjectDescription) => Promise<ObjectDescription>) =>
      async (input: ObjectDescription): Promise<ObjectDescription | null> => {
        const result = await p(input);
        return ((input: any): input is ObjectDescription => {
          const $io0 = (input: any): boolean =>
            "string" === typeof input.id &&
            /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
              input.id,
            ) &&
            "boolean" === typeof input.deprecated &&
            "string" === typeof input.title &&
            Array.isArray(input.descriptions) &&
            input.descriptions.every((elem: any) => "string" === typeof elem) &&
            "number" === typeof input.newLine &&
            Number.isFinite(input.newLine);
          return "object" === typeof input && null !== input && $io0(input);
        })(result)
          ? result
          : null;
      },
  );
