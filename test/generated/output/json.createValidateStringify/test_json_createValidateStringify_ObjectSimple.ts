import typia from "../../../../src";
import { _test_json_validateStringify } from "../../../internal/_test_json_validateStringify";
import { ObjectSimple } from "../../../structures/ObjectSimple";

export const test_json_createValidateStringify_ObjectSimple =
  _test_json_validateStringify("ObjectSimple")<ObjectSimple>(ObjectSimple)(
    (input: ObjectSimple): typia.IValidation<string> => {
      const validate = (input: any): typia.IValidation<ObjectSimple> => {
        const errors = [] as any[];
        const __is = (input: any): input is ObjectSimple => {
          return (
            "object" === typeof input &&
            null !== input &&
            "object" === typeof (input as any).scale &&
            null !== (input as any).scale &&
            "number" === typeof ((input as any).scale as any).x &&
            Number.isFinite(((input as any).scale as any).x) &&
            "number" === typeof ((input as any).scale as any).y &&
            Number.isFinite(((input as any).scale as any).y) &&
            "number" === typeof ((input as any).scale as any).z &&
            Number.isFinite(((input as any).scale as any).z) &&
            "object" === typeof (input as any).position &&
            null !== (input as any).position &&
            "number" === typeof ((input as any).position as any).x &&
            Number.isFinite(((input as any).position as any).x) &&
            "number" === typeof ((input as any).position as any).y &&
            Number.isFinite(((input as any).position as any).y) &&
            "number" === typeof ((input as any).position as any).z &&
            Number.isFinite(((input as any).position as any).z) &&
            "object" === typeof (input as any).rotate &&
            null !== (input as any).rotate &&
            "number" === typeof ((input as any).rotate as any).x &&
            Number.isFinite(((input as any).rotate as any).x) &&
            "number" === typeof ((input as any).rotate as any).y &&
            Number.isFinite(((input as any).rotate as any).y) &&
            "number" === typeof ((input as any).rotate as any).z &&
            Number.isFinite(((input as any).rotate as any).z) &&
            "object" === typeof (input as any).pivot &&
            null !== (input as any).pivot &&
            "number" === typeof ((input as any).pivot as any).x &&
            Number.isFinite(((input as any).pivot as any).x) &&
            "number" === typeof ((input as any).pivot as any).y &&
            Number.isFinite(((input as any).pivot as any).y) &&
            "number" === typeof ((input as any).pivot as any).z &&
            Number.isFinite(((input as any).pivot as any).z)
          );
        };
        if (false === __is(input)) {
          const $report = (typia.json.createValidateStringify as any).report(
            errors,
          );
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectSimple => {
            const $vo0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ((("object" === typeof input.scale && null !== input.scale) ||
                  $report(_exceptionable, {
                    path: _path + ".scale",
                    expected: "ObjectSimple.IPoint3D",
                    value: input.scale,
                  })) &&
                  $vo1(
                    input.scale,
                    _path + ".scale",
                    true && _exceptionable,
                  )) ||
                  $report(_exceptionable, {
                    path: _path + ".scale",
                    expected: "ObjectSimple.IPoint3D",
                    value: input.scale,
                  }),
                ((("object" === typeof input.position &&
                  null !== input.position) ||
                  $report(_exceptionable, {
                    path: _path + ".position",
                    expected: "ObjectSimple.IPoint3D",
                    value: input.position,
                  })) &&
                  $vo1(
                    input.position,
                    _path + ".position",
                    true && _exceptionable,
                  )) ||
                  $report(_exceptionable, {
                    path: _path + ".position",
                    expected: "ObjectSimple.IPoint3D",
                    value: input.position,
                  }),
                ((("object" === typeof input.rotate && null !== input.rotate) ||
                  $report(_exceptionable, {
                    path: _path + ".rotate",
                    expected: "ObjectSimple.IPoint3D",
                    value: input.rotate,
                  })) &&
                  $vo1(
                    input.rotate,
                    _path + ".rotate",
                    true && _exceptionable,
                  )) ||
                  $report(_exceptionable, {
                    path: _path + ".rotate",
                    expected: "ObjectSimple.IPoint3D",
                    value: input.rotate,
                  }),
                ((("object" === typeof input.pivot && null !== input.pivot) ||
                  $report(_exceptionable, {
                    path: _path + ".pivot",
                    expected: "ObjectSimple.IPoint3D",
                    value: input.pivot,
                  })) &&
                  $vo1(
                    input.pivot,
                    _path + ".pivot",
                    true && _exceptionable,
                  )) ||
                  $report(_exceptionable, {
                    path: _path + ".pivot",
                    expected: "ObjectSimple.IPoint3D",
                    value: input.pivot,
                  }),
              ].every((flag: boolean) => flag);
            const $vo1 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ("number" === typeof input.x && Number.isFinite(input.x)) ||
                  $report(_exceptionable, {
                    path: _path + ".x",
                    expected: "number",
                    value: input.x,
                  }),
                ("number" === typeof input.y && Number.isFinite(input.y)) ||
                  $report(_exceptionable, {
                    path: _path + ".y",
                    expected: "number",
                    value: input.y,
                  }),
                ("number" === typeof input.z && Number.isFinite(input.z)) ||
                  $report(_exceptionable, {
                    path: _path + ".z",
                    expected: "number",
                    value: input.z,
                  }),
              ].every((flag: boolean) => flag);
            return (
              ((("object" === typeof input && null !== input) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectSimple.IBox3D",
                  value: input,
                })) &&
                $vo0(input, _path + "", true)) ||
              $report(true, {
                path: _path + "",
                expected: "ObjectSimple.IBox3D",
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
      const stringify = (input: ObjectSimple): string => {
        const $io1 = (input: any): boolean =>
          "number" === typeof input.x &&
          "number" === typeof input.y &&
          "number" === typeof input.z;
        const $number = (typia.json.createValidateStringify as any).number;
        return `{"scale":${`{"x":${$number(
          ((input as any).scale as any).x,
        )},"y":${$number(((input as any).scale as any).y)},"z":${$number(
          ((input as any).scale as any).z,
        )}}`},"position":${`{"x":${$number(
          ((input as any).position as any).x,
        )},"y":${$number(((input as any).position as any).y)},"z":${$number(
          ((input as any).position as any).z,
        )}}`},"rotate":${`{"x":${$number(
          ((input as any).rotate as any).x,
        )},"y":${$number(((input as any).rotate as any).y)},"z":${$number(
          ((input as any).rotate as any).z,
        )}}`},"pivot":${`{"x":${$number(
          ((input as any).pivot as any).x,
        )},"y":${$number(((input as any).pivot as any).y)},"z":${$number(
          ((input as any).pivot as any).z,
        )}}`}}`;
      };
      const output = validate(input) as any;
      if (output.success) output.data = stringify(input);
      return output;
    },
  );
