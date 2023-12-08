import typia from "typia";

import { _test_misc_validateClone } from "../../../internal/_test_misc_validateClone";
import { CommentTagLength } from "../../../structures/CommentTagLength";

export const test_misc_createValidateClone_CommentTagLength =
  _test_misc_validateClone("CommentTagLength")<CommentTagLength>(
    CommentTagLength,
  )((input: any): typia.IValidation<typia.Resolved<CommentTagLength>> => {
    const validate = (input: any): typia.IValidation<CommentTagLength> => {
      const errors = [] as any[];
      const __is = (input: any): input is CommentTagLength => {
        const $io0 = (input: any): boolean =>
          Array.isArray(input.value) &&
          input.value.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io1(elem),
          );
        const $io1 = (input: any): boolean =>
          "string" === typeof input.fixed &&
          5 <= input.fixed.length &&
          input.fixed.length <= 5 &&
          "string" === typeof input.minimum &&
          3 <= input.minimum.length &&
          "string" === typeof input.maximum &&
          input.maximum.length <= 7 &&
          "string" === typeof input.minimum_and_maximum &&
          3 <= input.minimum_and_maximum.length &&
          input.minimum_and_maximum.length <= 7 &&
          "string" === typeof input.equal &&
          10 <= input.equal.length &&
          input.equal.length <= 19;
        return "object" === typeof input && null !== input && $io0(input);
      };
      if (false === __is(input)) {
        const $report = (typia.misc.createValidateClone as any).report(errors);
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is CommentTagLength => {
          const $vo0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            [
              ((Array.isArray(input.value) ||
                $report(_exceptionable, {
                  path: _path + ".value",
                  expected: "Array<CommentTagLength.Type>",
                  value: input.value,
                })) &&
                input.value
                  .map(
                    (elem: any, _index1: number) =>
                      ((("object" === typeof elem && null !== elem) ||
                        $report(_exceptionable, {
                          path: _path + ".value[" + _index1 + "]",
                          expected: "CommentTagLength.Type",
                          value: elem,
                        })) &&
                        $vo1(
                          elem,
                          _path + ".value[" + _index1 + "]",
                          true && _exceptionable,
                        )) ||
                      $report(_exceptionable, {
                        path: _path + ".value[" + _index1 + "]",
                        expected: "CommentTagLength.Type",
                        value: elem,
                      }),
                  )
                  .every((flag: boolean) => flag)) ||
                $report(_exceptionable, {
                  path: _path + ".value",
                  expected: "Array<CommentTagLength.Type>",
                  value: input.value,
                }),
            ].every((flag: boolean) => flag);
          const $vo1 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            [
              ("string" === typeof input.fixed &&
                (5 <= input.fixed.length ||
                  $report(_exceptionable, {
                    path: _path + ".fixed",
                    expected: "string & MinLength<5>",
                    value: input.fixed,
                  })) &&
                (input.fixed.length <= 5 ||
                  $report(_exceptionable, {
                    path: _path + ".fixed",
                    expected: "string & MaxLength<5>",
                    value: input.fixed,
                  }))) ||
                $report(_exceptionable, {
                  path: _path + ".fixed",
                  expected: "(string & MinLength<5> & MaxLength<5>)",
                  value: input.fixed,
                }),
              ("string" === typeof input.minimum &&
                (3 <= input.minimum.length ||
                  $report(_exceptionable, {
                    path: _path + ".minimum",
                    expected: "string & MinLength<3>",
                    value: input.minimum,
                  }))) ||
                $report(_exceptionable, {
                  path: _path + ".minimum",
                  expected: "(string & MinLength<3>)",
                  value: input.minimum,
                }),
              ("string" === typeof input.maximum &&
                (input.maximum.length <= 7 ||
                  $report(_exceptionable, {
                    path: _path + ".maximum",
                    expected: "string & MaxLength<7>",
                    value: input.maximum,
                  }))) ||
                $report(_exceptionable, {
                  path: _path + ".maximum",
                  expected: "(string & MaxLength<7>)",
                  value: input.maximum,
                }),
              ("string" === typeof input.minimum_and_maximum &&
                (3 <= input.minimum_and_maximum.length ||
                  $report(_exceptionable, {
                    path: _path + ".minimum_and_maximum",
                    expected: "string & MinLength<3>",
                    value: input.minimum_and_maximum,
                  })) &&
                (input.minimum_and_maximum.length <= 7 ||
                  $report(_exceptionable, {
                    path: _path + ".minimum_and_maximum",
                    expected: "string & MaxLength<7>",
                    value: input.minimum_and_maximum,
                  }))) ||
                $report(_exceptionable, {
                  path: _path + ".minimum_and_maximum",
                  expected: "(string & MinLength<3> & MaxLength<7>)",
                  value: input.minimum_and_maximum,
                }),
              ("string" === typeof input.equal &&
                (10 <= input.equal.length ||
                  $report(_exceptionable, {
                    path: _path + ".equal",
                    expected: "string & MinLength<10>",
                    value: input.equal,
                  })) &&
                (input.equal.length <= 19 ||
                  $report(_exceptionable, {
                    path: _path + ".equal",
                    expected: "string & MaxLength<19>",
                    value: input.equal,
                  }))) ||
                $report(_exceptionable, {
                  path: _path + ".equal",
                  expected: "(string & MinLength<10> & MaxLength<19>)",
                  value: input.equal,
                }),
            ].every((flag: boolean) => flag);
          return (
            ((("object" === typeof input && null !== input) ||
              $report(true, {
                path: _path + "",
                expected: "CommentTagLength",
                value: input,
              })) &&
              $vo0(input, _path + "", true)) ||
            $report(true, {
              path: _path + "",
              expected: "CommentTagLength",
              value: input,
            })
          );
        })(input, "$input", true);
      }
      const success = 0 === errors.length;
      return {
        success,
        errors,
        data: success ? input : undefined,
      } as any;
    };
    const clone = (
      input: CommentTagLength,
    ): typia.Resolved<CommentTagLength> => {
      const $io1 = (input: any): boolean =>
        "string" === typeof input.fixed &&
        5 <= input.fixed.length &&
        input.fixed.length <= 5 &&
        "string" === typeof input.minimum &&
        3 <= input.minimum.length &&
        "string" === typeof input.maximum &&
        input.maximum.length <= 7 &&
        "string" === typeof input.minimum_and_maximum &&
        3 <= input.minimum_and_maximum.length &&
        input.minimum_and_maximum.length <= 7 &&
        "string" === typeof input.equal &&
        10 <= input.equal.length &&
        input.equal.length <= 19;
      const $cp0 = (input: any) =>
        input.map((elem: any) =>
          "object" === typeof elem && null !== elem
            ? $co1(elem)
            : (elem as any),
        );
      const $co0 = (input: any): any => ({
        value: Array.isArray(input.value)
          ? $cp0(input.value)
          : (input.value as any),
      });
      const $co1 = (input: any): any => ({
        fixed: input.fixed as any,
        minimum: input.minimum as any,
        maximum: input.maximum as any,
        minimum_and_maximum: input.minimum_and_maximum as any,
        equal: input.equal as any,
      });
      return "object" === typeof input && null !== input
        ? $co0(input)
        : (input as any);
    };
    const output = validate(input) as any;
    if (output.success) output.data = clone(input);
    return output;
  });
