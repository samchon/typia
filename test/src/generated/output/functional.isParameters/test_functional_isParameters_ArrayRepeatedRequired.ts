import typia from "typia";
import { _test_functional_isParameters } from "../../../internal/_test_functional_isParameters";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";
export const test_functional_isParameters_ArrayRepeatedRequired =
  _test_functional_isParameters("ArrayRepeatedRequired")(ArrayRepeatedRequired)(
    (p: (input: ArrayRepeatedRequired) => ArrayRepeatedRequired) =>
      (input: ArrayRepeatedRequired): ArrayRepeatedRequired | null => {
        if (
          false ===
          ((input: any): input is ArrayRepeatedRequired => {
            const $ia0 = (input: any): any =>
              input.every(
                (elem: any) =>
                  null !== elem &&
                  undefined !== elem &&
                  ("string" === typeof elem ||
                    ("number" === typeof elem && Number.isFinite(elem)) ||
                    (Array.isArray(elem) && ($ia0(elem) || false))),
              );
            return (
              null !== input &&
              undefined !== input &&
              ("string" === typeof input ||
                ("number" === typeof input && Number.isFinite(input)) ||
                (Array.isArray(input) && ($ia0(input) || false)))
            );
          })(input)
        )
          return null;
        return p(input);
      },
  );
