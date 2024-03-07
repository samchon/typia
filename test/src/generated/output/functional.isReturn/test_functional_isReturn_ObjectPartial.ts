import typia from "typia";
import { _test_functional_isReturn } from "../../../internal/_test_functional_isReturn";
import { ObjectPartial } from "../../../structures/ObjectPartial";
export const test_functional_isReturn_ObjectPartial = _test_functional_isReturn(
  "ObjectPartial",
)(ObjectPartial)(
  (p: (input: ObjectPartial) => ObjectPartial) =>
    (input: ObjectPartial): ObjectPartial | null => {
      const result = p(input);
      return ((input: any): input is Partial<ObjectPartial.IBase> => {
        const $io0 = (input: any): boolean =>
          (undefined === input.boolean || "boolean" === typeof input.boolean) &&
          (undefined === input.number ||
            ("number" === typeof input.number &&
              Number.isFinite(input.number))) &&
          (undefined === input.string || "string" === typeof input.string) &&
          (undefined === input.array ||
            (Array.isArray(input.array) &&
              input.array.every(
                (elem: any) =>
                  "number" === typeof elem && Number.isFinite(elem),
              ))) &&
          (null === input.object ||
            undefined === input.object ||
            ("object" === typeof input.object &&
              null !== input.object &&
              $io1(input.object)));
        const $io1 = (input: any): boolean =>
          "boolean" === typeof input.boolean &&
          "number" === typeof input.number &&
          Number.isFinite(input.number) &&
          "string" === typeof input.string &&
          Array.isArray(input.array) &&
          input.array.every(
            (elem: any) => "number" === typeof elem && Number.isFinite(elem),
          ) &&
          (null === input.object ||
            ("object" === typeof input.object &&
              null !== input.object &&
              $io1(input.object)));
        return (
          "object" === typeof input &&
          null !== input &&
          false === Array.isArray(input) &&
          $io0(input)
        );
      })(result)
        ? result
        : null;
    },
);
