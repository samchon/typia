import typia from "typia";

import { _test_functional_isParametersAsync } from "../../../internal/_test_functional_isParametersAsync";
import { CommentTagDefault } from "../../../structures/CommentTagDefault";

export const test_functional_isParametersAsync_CommentTagDefault =
  _test_functional_isParametersAsync("CommentTagDefault")(CommentTagDefault)(
    (p: (input: CommentTagDefault) => Promise<CommentTagDefault>) =>
      async (input: CommentTagDefault): Promise<CommentTagDefault | null> => {
        if (
          false ===
          ((input: any): input is CommentTagDefault => {
            const $io0 = (input: any): boolean =>
              "boolean" === typeof input.boolean &&
              "number" === typeof input.number &&
              Number.isFinite(input.number) &&
              "string" === typeof input.string &&
              "string" === typeof input.text &&
              ("string" === typeof input.boolean_and_number_and_string ||
                ("number" === typeof input.boolean_and_number_and_string &&
                  Number.isFinite(input.boolean_and_number_and_string)) ||
                "boolean" === typeof input.boolean_and_number_and_string) &&
              ("string" === typeof input.union_but_boolean ||
                ("number" === typeof input.union_but_boolean &&
                  Number.isFinite(input.union_but_boolean)) ||
                "boolean" === typeof input.union_but_boolean) &&
              ("string" === typeof input.union_but_number ||
                ("number" === typeof input.union_but_number &&
                  Number.isFinite(input.union_but_number)) ||
                "boolean" === typeof input.union_but_number) &&
              ("string" === typeof input.union_but_string ||
                ("number" === typeof input.union_but_string &&
                  Number.isFinite(input.union_but_string)) ||
                "boolean" === typeof input.union_but_string) &&
              "number" === typeof input.vulnerable_range &&
              3 <= input.vulnerable_range &&
              input.vulnerable_range <= 5 &&
              null !== input.boolean_and_number_and_template &&
              undefined !== input.boolean_and_number_and_template &&
              (("number" === typeof input.boolean_and_number_and_template &&
                Number.isFinite(input.boolean_and_number_and_template)) ||
                "boolean" === typeof input.boolean_and_number_and_template ||
                ("string" === typeof input.boolean_and_number_and_template &&
                  RegExp(/^prefix_(.*)/).test(
                    input.boolean_and_number_and_template,
                  )));
            return "object" === typeof input && null !== input && $io0(input);
          })(input)
        )
          return null;
        return p(input);
      },
  );
