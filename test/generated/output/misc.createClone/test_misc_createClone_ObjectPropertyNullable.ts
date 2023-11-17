import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { ObjectPropertyNullable } from "../../../structures/ObjectPropertyNullable";

export const test_misc_createClone_ObjectPropertyNullable = _test_misc_clone(
  "ObjectPropertyNullable",
)<ObjectPropertyNullable>(ObjectPropertyNullable)(
  (input: ObjectPropertyNullable): typia.Resolved<ObjectPropertyNullable> => {
    const $io0 = (input: any): boolean =>
      null === input.value || "boolean" === typeof input.value;
    const $io1 = (input: any): boolean =>
      null === input.value || "number" === typeof input.value;
    const $io2 = (input: any): boolean =>
      null === input.value || "string" === typeof input.value;
    const $io3 = (input: any): boolean =>
      null === input.value ||
      ("object" === typeof input.value &&
        null !== input.value &&
        $io4(input.value));
    const $io4 = (input: any): boolean =>
      "string" === typeof input.id &&
      (null === input.name || "string" === typeof input.name) &&
      (undefined === input.grade || "number" === typeof input.grade) &&
      (null === input.serial ||
        undefined === input.serial ||
        "number" === typeof input.serial) &&
      (null === input.activated || "boolean" === typeof input.activated);
    const $cp0 = (input: any) =>
      input.map((elem: any) =>
        "object" === typeof elem && null !== elem ? $co0(elem) : (elem as any),
      );
    const $cp1 = (input: any) =>
      input.map((elem: any) =>
        "object" === typeof elem && null !== elem ? $co1(elem) : (elem as any),
      );
    const $cp2 = (input: any) =>
      input.map((elem: any) =>
        "object" === typeof elem && null !== elem ? $co2(elem) : (elem as any),
      );
    const $cp3 = (input: any) =>
      input.map((elem: any) =>
        "object" === typeof elem && null !== elem ? $co3(elem) : (elem as any),
      );
    const $co0 = (input: any): any => ({
      value: input.value as any,
    });
    const $co1 = (input: any): any => ({
      value: input.value as any,
    });
    const $co2 = (input: any): any => ({
      value: input.value as any,
    });
    const $co3 = (input: any): any => ({
      value:
        "object" === typeof input.value && null !== input.value
          ? $co4(input.value)
          : (input.value as any),
    });
    const $co4 = (input: any): any => ({
      id: input.id as any,
      name: input.name as any,
      grade: input.grade as any,
      serial: input.serial as any,
      activated: input.activated as any,
    });
    return Array.isArray(input) &&
      input.length === 4 &&
      Array.isArray(input[0]) &&
      input[0].every(
        (elem: any) => "object" === typeof elem && null !== elem && $io0(elem),
      ) &&
      Array.isArray(input[1]) &&
      input[1].every(
        (elem: any) => "object" === typeof elem && null !== elem && $io1(elem),
      ) &&
      Array.isArray(input[2]) &&
      input[2].every(
        (elem: any) => "object" === typeof elem && null !== elem && $io2(elem),
      ) &&
      Array.isArray(input[3]) &&
      input[3].every(
        (elem: any) => "object" === typeof elem && null !== elem && $io3(elem),
      )
      ? ([
          Array.isArray(input[0]) ? $cp0(input[0]) : (input[0] as any),
          Array.isArray(input[1]) ? $cp1(input[1]) : (input[1] as any),
          Array.isArray(input[2]) ? $cp2(input[2]) : (input[2] as any),
          Array.isArray(input[3]) ? $cp3(input[3]) : (input[3] as any),
        ] as any)
      : (input as any);
  },
);
