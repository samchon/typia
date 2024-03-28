import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../../internal/_test_functional_isFunctionAsync";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";

export const test_functional_isFunctionAsync_ObjectUndefined =
  _test_functional_isFunctionAsync("ObjectUndefined")(ObjectUndefined)(
    (p: (input: ObjectUndefined) => Promise<ObjectUndefined>) =>
      async (input: ObjectUndefined): Promise<ObjectUndefined | null> => {
        if (
          false ===
          ((input: any): input is ObjectUndefined => {
            const $io0 = (input: any): boolean =>
              "string" === typeof input.name &&
              (undefined === input.professor ||
                "string" === typeof input.professor ||
                ("number" === typeof input.professor &&
                  Number.isFinite(input.professor))) &&
              (undefined === input.classroom ||
                ("object" === typeof input.classroom &&
                  null !== input.classroom &&
                  $io1(input.classroom))) &&
              (undefined === input.grade ||
                ("number" === typeof input.grade &&
                  Number.isFinite(input.grade))) &&
              null !== input.nothing &&
              undefined === input.nothing &&
              true &&
              null !== input.never &&
              undefined === input.never;
            const $io1 = (input: any): boolean =>
              "string" === typeof input.id && "string" === typeof input.name;
            return (
              Array.isArray(input) &&
              input.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io0(elem),
              )
            );
          })(input)
        )
          return null;
        const result = await p(input);
        return ((input: any): input is ObjectUndefined => {
          const $io0 = (input: any): boolean =>
            "string" === typeof input.name &&
            (undefined === input.professor ||
              "string" === typeof input.professor ||
              ("number" === typeof input.professor &&
                Number.isFinite(input.professor))) &&
            (undefined === input.classroom ||
              ("object" === typeof input.classroom &&
                null !== input.classroom &&
                $io1(input.classroom))) &&
            (undefined === input.grade ||
              ("number" === typeof input.grade &&
                Number.isFinite(input.grade))) &&
            null !== input.nothing &&
            undefined === input.nothing &&
            true &&
            null !== input.never &&
            undefined === input.never;
          const $io1 = (input: any): boolean =>
            "string" === typeof input.id && "string" === typeof input.name;
          return (
            Array.isArray(input) &&
            input.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io0(elem),
            )
          );
        })(result)
          ? result
          : null;
      },
  );
