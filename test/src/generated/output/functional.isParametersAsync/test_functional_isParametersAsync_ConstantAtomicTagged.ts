import typia from "typia";

import { _test_functional_isParametersAsync } from "../../../internal/_test_functional_isParametersAsync";
import { ConstantAtomicTagged } from "../../../structures/ConstantAtomicTagged";

export const test_functional_isParametersAsync_ConstantAtomicTagged =
  _test_functional_isParametersAsync("ConstantAtomicTagged")(
    ConstantAtomicTagged,
  )(
    (p: (input: ConstantAtomicTagged) => Promise<ConstantAtomicTagged>) =>
      async (
        input: ConstantAtomicTagged,
      ): Promise<ConstantAtomicTagged | null> => {
        if (
          false ===
          ((input: any): input is ConstantAtomicTagged => {
            const $io0 = (input: any): boolean =>
              ("latest" === input.id ||
                ("string" === typeof input.id &&
                  /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                    input.id,
                  ))) &&
              (-1 === input.age ||
                ("number" === typeof input.age &&
                  Math.floor(input.age) === input.age &&
                  0 <= input.age &&
                  input.age <= 4294967295 &&
                  input.age <= 100));
            return "object" === typeof input && null !== input && $io0(input);
          })(input)
        )
          return null;
        return p(input);
      },
  );
