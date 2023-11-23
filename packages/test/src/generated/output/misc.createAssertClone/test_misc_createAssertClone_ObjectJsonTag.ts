import typia from "typia";

import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_misc_createAssertClone_ObjectJsonTag = _test_misc_assertClone(
  "ObjectJsonTag",
)<ObjectJsonTag>(ObjectJsonTag)((input: any): typia.Resolved<ObjectJsonTag> => {
  const assert = (input: any): ObjectJsonTag => {
    const __is = (input: any): input is ObjectJsonTag => {
      return (
        "object" === typeof input &&
        null !== input &&
        "string" === typeof (input as any).vulnerable &&
        "string" === typeof (input as any).description &&
        "string" === typeof (input as any).title &&
        "string" === typeof (input as any).complicate_title
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ObjectJsonTag => {
        const $guard = (typia.misc.createAssertClone as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("string" === typeof input.vulnerable ||
            $guard(_exceptionable, {
              path: _path + ".vulnerable",
              expected: "string",
              value: input.vulnerable,
            })) &&
          ("string" === typeof input.description ||
            $guard(_exceptionable, {
              path: _path + ".description",
              expected: "string",
              value: input.description,
            })) &&
          ("string" === typeof input.title ||
            $guard(_exceptionable, {
              path: _path + ".title",
              expected: "string",
              value: input.title,
            })) &&
          ("string" === typeof input.complicate_title ||
            $guard(_exceptionable, {
              path: _path + ".complicate_title",
              expected: "string",
              value: input.complicate_title,
            }));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(true, {
              path: _path + "",
              expected: "ObjectJsonTag",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "ObjectJsonTag",
            value: input,
          })
        );
      })(input, "$input", true);
    return input;
  };
  const clone = (input: ObjectJsonTag): typia.Resolved<ObjectJsonTag> => {
    const $co0 = (input: any): any => ({
      vulnerable: input.vulnerable as any,
      description: input.description as any,
      title: input.title as any,
      complicate_title: input.complicate_title as any,
    });
    return "object" === typeof input && null !== input
      ? $co0(input)
      : (input as any);
  };
  assert(input);
  const output = clone(input);
  return output;
});
