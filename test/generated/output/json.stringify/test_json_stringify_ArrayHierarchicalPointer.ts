import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ArrayHierarchicalPointer } from "../../../structures/ArrayHierarchicalPointer";

export const test_json_stringify_ArrayHierarchicalPointer =
  _test_json_stringify("ArrayHierarchicalPointer")<ArrayHierarchicalPointer>(
    ArrayHierarchicalPointer,
  )((input) =>
    ((input: ArrayHierarchicalPointer): string => {
      const $io1 = (input: any): boolean =>
        "number" === typeof input.id &&
        "number" === typeof input.serial &&
        "string" === typeof input.name &&
        "object" === typeof input.established_at &&
        null !== input.established_at &&
        $io2(input.established_at) &&
        Array.isArray(input.departments) &&
        input.departments.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io3(elem),
        );
      const $io2 = (input: any): boolean =>
        "number" === typeof input.time && "number" === typeof input.zone;
      const $io3 = (input: any): boolean =>
        "number" === typeof input.id &&
        "string" === typeof input.code &&
        "number" === typeof input.sales &&
        "object" === typeof input.created_at &&
        null !== input.created_at &&
        $io2(input.created_at) &&
        Array.isArray(input.employees) &&
        input.employees.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io4(elem),
        );
      const $io4 = (input: any): boolean =>
        "number" === typeof input.id &&
        "string" === typeof input.name &&
        "number" === typeof input.age &&
        "number" === typeof input.grade &&
        "object" === typeof input.employeed_at &&
        null !== input.employeed_at &&
        $io2(input.employeed_at);
      const $number = (typia.json.stringify as any).number;
      const $string = (typia.json.stringify as any).string;
      const $so0 = (input: any): any =>
        `{"value":${`[${input.value
          .map((elem: any) => $so1(elem))
          .join(",")}]`}}`;
      const $so1 = (input: any): any =>
        `{"id":${$number(input.id)},"serial":${$number(
          input.serial,
        )},"name":${$string(input.name)},"established_at":${`{"time":${$number(
          (input.established_at as any).time,
        )},"zone":${$number(
          (input.established_at as any).zone,
        )}}`},"departments":${`[${input.departments
          .map((elem: any) => $so3(elem))
          .join(",")}]`}}`;
      const $so3 = (input: any): any =>
        `{"id":${$number(input.id)},"code":${$string(
          input.code,
        )},"sales":${$number(input.sales)},"created_at":${`{"time":${$number(
          (input.created_at as any).time,
        )},"zone":${$number(
          (input.created_at as any).zone,
        )}}`},"employees":${`[${input.employees
          .map((elem: any) => $so4(elem))
          .join(",")}]`}}`;
      const $so4 = (input: any): any =>
        `{"id":${$number(input.id)},"name":${$string(
          input.name,
        )},"age":${$number(input.age)},"grade":${$number(
          input.grade,
        )},"employeed_at":${`{"time":${$number(
          (input.employeed_at as any).time,
        )},"zone":${$number((input.employeed_at as any).zone)}}`}}`;
      return $so0(input);
    })(input),
  );
