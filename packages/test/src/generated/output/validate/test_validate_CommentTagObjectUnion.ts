import typia from "typia";

import { _test_validate } from "../../../internal/_test_validate";
import { CommentTagObjectUnion } from "../../../structures/CommentTagObjectUnion";

export const test_validate_CommentTagObjectUnion = _test_validate(
  "CommentTagObjectUnion",
)<CommentTagObjectUnion>(CommentTagObjectUnion)((input) =>
  ((input: any): typia.IValidation<CommentTagObjectUnion> => {
    const errors = [] as any[];
    const __is = (input: any): input is CommentTagObjectUnion => {
      const $io0 = (input: any): boolean =>
        "number" === typeof input.value &&
        Number.isFinite(input.value) &&
        3 <= input.value;
      const $io1 = (input: any): boolean =>
        "string" === typeof input.value &&
        3 <= input.value.length &&
        input.value.length <= 7;
      const $iu0 = (input: any): any =>
        (() => {
          if (
            "string" === typeof input.value &&
            3 <= input.value.length &&
            input.value.length <= 7
          )
            return $io1(input);
          else if (
            "number" === typeof input.value &&
            Number.isFinite(input.value) &&
            3 <= input.value
          )
            return $io0(input);
          else return false;
        })();
      return (
        Array.isArray(input) &&
        input.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $iu0(elem),
        )
      );
    };
    if (false === __is(input)) {
      const $report = (typia.validate as any).report(errors);
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is CommentTagObjectUnion => {
        const $vo0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            ("number" === typeof input.value &&
              (Number.isFinite(input.value) ||
                $report(_exceptionable, {
                  path: _path + ".value",
                  expected: "number",
                  value: input.value,
                })) &&
              (3 <= input.value ||
                $report(_exceptionable, {
                  path: _path + ".value",
                  expected: "number & Minimum<3>",
                  value: input.value,
                }))) ||
              $report(_exceptionable, {
                path: _path + ".value",
                expected: "(number & Minimum<3>)",
                value: input.value,
              }),
          ].every((flag: boolean) => flag);
        const $vo1 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            ("string" === typeof input.value &&
              (3 <= input.value.length ||
                $report(_exceptionable, {
                  path: _path + ".value",
                  expected: "string & MinLength<3>",
                  value: input.value,
                })) &&
              (input.value.length <= 7 ||
                $report(_exceptionable, {
                  path: _path + ".value",
                  expected: "string & MaxLength<7>",
                  value: input.value,
                }))) ||
              $report(_exceptionable, {
                path: _path + ".value",
                expected: "(string & MinLength<3> & MaxLength<7>)",
                value: input.value,
              }),
          ].every((flag: boolean) => flag);
        const $vu0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): any =>
          (() => {
            if (
              "string" === typeof input.value &&
              (3 <= input.value.length ||
                $report(_exceptionable, {
                  path: _path + ".value",
                  expected: "string & MinLength<3>",
                  value: input.value,
                })) &&
              (input.value.length <= 7 ||
                $report(_exceptionable, {
                  path: _path + ".value",
                  expected: "string & MaxLength<7>",
                  value: input.value,
                }))
            )
              return $vo1(input, _path, true && _exceptionable);
            else if (
              "number" === typeof input.value &&
              (3 <= input.value ||
                $report(_exceptionable, {
                  path: _path + ".value",
                  expected: "number & Minimum<3>",
                  value: input.value,
                }))
            )
              return $vo0(input, _path, true && _exceptionable);
            else
              return $report(_exceptionable, {
                path: _path,
                expected:
                  "(CommentTagObjectUnion.Literal | CommentTagObjectUnion.Numeric)",
                value: input,
              });
          })();
        return (
          ((Array.isArray(input) ||
            $report(true, {
              path: _path + "",
              expected: "CommentTagObjectUnion",
              value: input,
            })) &&
            input
              .map(
                (elem: any, _index1: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $report(true, {
                      path: _path + "[" + _index1 + "]",
                      expected:
                        "(CommentTagObjectUnion.Literal | CommentTagObjectUnion.Numeric)",
                      value: elem,
                    })) &&
                    $vu0(elem, _path + "[" + _index1 + "]", true)) ||
                  $report(true, {
                    path: _path + "[" + _index1 + "]",
                    expected:
                      "(CommentTagObjectUnion.Literal | CommentTagObjectUnion.Numeric)",
                    value: elem,
                  }),
              )
              .every((flag: boolean) => flag)) ||
          $report(true, {
            path: _path + "",
            expected: "CommentTagObjectUnion",
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
  })(input),
);
