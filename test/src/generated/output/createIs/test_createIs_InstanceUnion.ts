import typia from "typia";
import { _test_is } from "../../../internal/_test_is";
import { InstanceUnion } from "../../../structures/InstanceUnion";
export const test_createIs_InstanceUnion = _test_is(
  "InstanceUnion",
)<InstanceUnion>(InstanceUnion)((input: any): input is InstanceUnion => {
  const $ip0 = (input: any) => {
    const array = input;
    const tuplePredicators = [
      [
        (top: any[]): any =>
          top.length === 2 &&
          "string" === typeof top[0] &&
          "string" === typeof top[1],
        (entire: any[]): any =>
          entire.length === 2 &&
          "string" === typeof entire[0] &&
          "string" === typeof entire[1],
      ] as const,
      [
        (top: any[]): any =>
          top.length === 3 &&
          "boolean" === typeof top[0] &&
          "number" === typeof top[1] &&
          Number.isFinite(top[1]) &&
          "number" === typeof top[2] &&
          Number.isFinite(top[2]),
        (entire: any[]): any =>
          entire.length === 3 &&
          "boolean" === typeof entire[0] &&
          "number" === typeof entire[1] &&
          Number.isFinite(entire[1]) &&
          "number" === typeof entire[2] &&
          Number.isFinite(entire[2]),
      ] as const,
      [
        (top: any[]): any => top.length === 0,
        (entire: any[]): any => entire.length === 0,
      ] as const,
    ];
    for (const pred of tuplePredicators)
      if (pred[0](array)) return pred[1](array);
    const top = input[0];
    if (0 === input.length) return true;
    const arrayPredicators = [
      [
        (top: any[]): any => "boolean" === typeof top,
        (entire: any[]): any =>
          entire.every((elem: any) => "boolean" === typeof elem),
      ] as const,
      [
        (top: any[]): any => "number" === typeof top && Number.isFinite(top),
        (entire: any[]): any =>
          entire.every(
            (elem: any) => "number" === typeof elem && Number.isFinite(elem),
          ),
      ] as const,
      [
        (top: any[]): any =>
          "object" === typeof top && null !== top && $iu0(top),
        (entire: any[]): any =>
          entire.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $iu0(elem),
          ),
      ] as const,
    ];
    const passed = arrayPredicators.filter((pred: any) => pred[0](top));
    if (1 === passed.length) return passed[0]![1](array);
    else if (1 < passed.length)
      for (const pred of passed)
        if (array.every((value: any) => true === pred[0](value)))
          return pred[1](array);
    return false;
  };
  const $io0 = (input: any): boolean =>
    "object" === typeof input.scale &&
    null !== input.scale &&
    "number" === typeof (input.scale as any).x &&
    Number.isFinite((input.scale as any).x) &&
    "number" === typeof (input.scale as any).y &&
    Number.isFinite((input.scale as any).y) &&
    "number" === typeof (input.scale as any).z &&
    Number.isFinite((input.scale as any).z) &&
    "object" === typeof input.position &&
    null !== input.position &&
    "number" === typeof (input.position as any).x &&
    Number.isFinite((input.position as any).x) &&
    "number" === typeof (input.position as any).y &&
    Number.isFinite((input.position as any).y) &&
    "number" === typeof (input.position as any).z &&
    Number.isFinite((input.position as any).z) &&
    "object" === typeof input.rotate &&
    null !== input.rotate &&
    "number" === typeof (input.rotate as any).x &&
    Number.isFinite((input.rotate as any).x) &&
    "number" === typeof (input.rotate as any).y &&
    Number.isFinite((input.rotate as any).y) &&
    "number" === typeof (input.rotate as any).z &&
    Number.isFinite((input.rotate as any).z) &&
    "object" === typeof input.pivot &&
    null !== input.pivot &&
    "number" === typeof (input.pivot as any).x &&
    Number.isFinite((input.pivot as any).x) &&
    "number" === typeof (input.pivot as any).y &&
    Number.isFinite((input.pivot as any).y) &&
    "number" === typeof (input.pivot as any).z &&
    Number.isFinite((input.pivot as any).z);
  const $io2 = (input: any): boolean =>
    "number" === typeof input.x &&
    Number.isFinite(input.x) &&
    "number" === typeof input.y &&
    Number.isFinite(input.y) &&
    "point" === input.type;
  const $io3 = (input: any): boolean =>
    "object" === typeof input.p1 &&
    null !== input.p1 &&
    "number" === typeof (input.p1 as any).x &&
    Number.isFinite((input.p1 as any).x) &&
    "number" === typeof (input.p1 as any).y &&
    Number.isFinite((input.p1 as any).y) &&
    "object" === typeof input.p2 &&
    null !== input.p2 &&
    "number" === typeof (input.p2 as any).x &&
    Number.isFinite((input.p2 as any).x) &&
    "number" === typeof (input.p2 as any).y &&
    Number.isFinite((input.p2 as any).y) &&
    "line" === input.type;
  const $io4 = (input: any): boolean =>
    "number" === typeof input.x &&
    Number.isFinite(input.x) &&
    "number" === typeof input.y &&
    Number.isFinite(input.y);
  const $io5 = (input: any): boolean =>
    "object" === typeof input.p1 &&
    null !== input.p1 &&
    "number" === typeof (input.p1 as any).x &&
    Number.isFinite((input.p1 as any).x) &&
    "number" === typeof (input.p1 as any).y &&
    Number.isFinite((input.p1 as any).y) &&
    "object" === typeof input.p2 &&
    null !== input.p2 &&
    "number" === typeof (input.p2 as any).x &&
    Number.isFinite((input.p2 as any).x) &&
    "number" === typeof (input.p2 as any).y &&
    Number.isFinite((input.p2 as any).y) &&
    "object" === typeof input.p3 &&
    null !== input.p3 &&
    "number" === typeof (input.p3 as any).x &&
    Number.isFinite((input.p3 as any).x) &&
    "number" === typeof (input.p3 as any).y &&
    Number.isFinite((input.p3 as any).y) &&
    "triangle" === input.type;
  const $io6 = (input: any): boolean =>
    "object" === typeof input.p1 &&
    null !== input.p1 &&
    "number" === typeof (input.p1 as any).x &&
    Number.isFinite((input.p1 as any).x) &&
    "number" === typeof (input.p1 as any).y &&
    Number.isFinite((input.p1 as any).y) &&
    "object" === typeof input.p2 &&
    null !== input.p2 &&
    "number" === typeof (input.p2 as any).x &&
    Number.isFinite((input.p2 as any).x) &&
    "number" === typeof (input.p2 as any).y &&
    Number.isFinite((input.p2 as any).y) &&
    "object" === typeof input.p3 &&
    null !== input.p3 &&
    "number" === typeof (input.p3 as any).x &&
    Number.isFinite((input.p3 as any).x) &&
    "number" === typeof (input.p3 as any).y &&
    Number.isFinite((input.p3 as any).y) &&
    "object" === typeof input.p4 &&
    null !== input.p4 &&
    "number" === typeof (input.p4 as any).x &&
    Number.isFinite((input.p4 as any).x) &&
    "number" === typeof (input.p4 as any).y &&
    Number.isFinite((input.p4 as any).y) &&
    "rectangle" === input.type;
  const $io7 = (input: any): boolean =>
    Array.isArray(input.points) &&
    input.points.every(
      (elem: any) => "object" === typeof elem && null !== elem && $io4(elem),
    ) &&
    "polyline" === input.type;
  const $io8 = (input: any): boolean =>
    "object" === typeof input.outer &&
    null !== input.outer &&
    $io9(input.outer) &&
    Array.isArray(input.inner) &&
    input.inner.every(
      (elem: any) => "object" === typeof elem && null !== elem && $io9(elem),
    ) &&
    "polygon" === input.type;
  const $io9 = (input: any): boolean =>
    Array.isArray(input.points) &&
    input.points.every(
      (elem: any) => "object" === typeof elem && null !== elem && $io4(elem),
    );
  const $io10 = (input: any): boolean =>
    "object" === typeof input.centroid &&
    null !== input.centroid &&
    "number" === typeof (input.centroid as any).x &&
    Number.isFinite((input.centroid as any).x) &&
    "number" === typeof (input.centroid as any).y &&
    Number.isFinite((input.centroid as any).y) &&
    "number" === typeof input.radius &&
    Number.isFinite(input.radius) &&
    "circle" === input.type;
  const $iu0 = (input: any): any =>
    (() => {
      if ("point" === input.type) return $io2(input);
      else if ("line" === input.type) return $io3(input);
      else if ("triangle" === input.type) return $io5(input);
      else if ("rectangle" === input.type) return $io6(input);
      else if ("polyline" === input.type) return $io7(input);
      else if ("polygon" === input.type) return $io8(input);
      else if ("circle" === input.type) return $io10(input);
      else return false;
    })();
  return (
    Array.isArray(input) &&
    input.every(
      (elem: any) =>
        null !== elem &&
        undefined !== elem &&
        (("number" === typeof elem && Number.isFinite(elem)) ||
          elem instanceof Uint8Array ||
          (elem instanceof Set &&
            (() =>
              [...elem].every((elem: any) => "boolean" === typeof elem))()) ||
          elem instanceof Map ||
          (Array.isArray(elem) && ($ip0(elem) || false)) ||
          ("object" === typeof elem && null !== elem && $io0(elem))),
    )
  );
});
