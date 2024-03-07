import typia from "typia";
import { _test_functional_isFunctionAsync } from "../../../internal/_test_functional_isFunctionAsync";
import { ObjectHttpArray } from "../../../structures/ObjectHttpArray";
export const test_functional_isFunctionAsync_ObjectHttpArray =
  _test_functional_isFunctionAsync("ObjectHttpArray")(ObjectHttpArray)(
    (p: (input: ObjectHttpArray) => Promise<ObjectHttpArray>) =>
      async (input: ObjectHttpArray): Promise<ObjectHttpArray | null> => {
        if (
          false ===
          ((input: any): input is ObjectHttpArray => {
            const $io0 = (input: any): boolean =>
              Array.isArray(input.booleans) &&
              input.booleans.every((elem: any) => "boolean" === typeof elem) &&
              Array.isArray(input.bigints) &&
              input.bigints.every((elem: any) => "bigint" === typeof elem) &&
              Array.isArray(input.numbers) &&
              input.numbers.every(
                (elem: any) =>
                  "number" === typeof elem && Number.isFinite(elem),
              ) &&
              Array.isArray(input.strings) &&
              input.strings.every((elem: any) => "string" === typeof elem) &&
              Array.isArray(input.templates) &&
              input.templates.every(
                (elem: any) =>
                  "string" === typeof elem &&
                  RegExp(/^something_(.*)/).test(elem),
              );
            return "object" === typeof input && null !== input && $io0(input);
          })(input)
        )
          return null;
        const result = await p(input);
        return ((input: any): input is ObjectHttpArray => {
          const $io0 = (input: any): boolean =>
            Array.isArray(input.booleans) &&
            input.booleans.every((elem: any) => "boolean" === typeof elem) &&
            Array.isArray(input.bigints) &&
            input.bigints.every((elem: any) => "bigint" === typeof elem) &&
            Array.isArray(input.numbers) &&
            input.numbers.every(
              (elem: any) => "number" === typeof elem && Number.isFinite(elem),
            ) &&
            Array.isArray(input.strings) &&
            input.strings.every((elem: any) => "string" === typeof elem) &&
            Array.isArray(input.templates) &&
            input.templates.every(
              (elem: any) =>
                "string" === typeof elem &&
                RegExp(/^something_(.*)/).test(elem),
            );
          return "object" === typeof input && null !== input && $io0(input);
        })(result)
          ? result
          : null;
      },
  );
