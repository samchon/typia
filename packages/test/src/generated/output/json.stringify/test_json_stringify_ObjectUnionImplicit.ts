import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ObjectUnionImplicit } from "../../../structures/ObjectUnionImplicit";

export const test_json_stringify_ObjectUnionImplicit = _test_json_stringify(
  "ObjectUnionImplicit",
)<ObjectUnionImplicit>(ObjectUnionImplicit)((input) =>
  ((input: ObjectUnionImplicit): string => {
    const $io0 = (input: any): boolean =>
      "number" === typeof input.x &&
      "number" === typeof input.y &&
      (null === input.slope ||
        undefined === input.slope ||
        "number" === typeof input.slope);
    const $io1 = (input: any): boolean =>
      "object" === typeof input.p1 &&
      null !== input.p1 &&
      $io0(input.p1) &&
      "object" === typeof input.p2 &&
      null !== input.p2 &&
      $io0(input.p2) &&
      (null === input.width ||
        undefined === input.width ||
        "number" === typeof input.width) &&
      (null === input.distance ||
        undefined === input.distance ||
        "number" === typeof input.distance);
    const $io2 = (input: any): boolean =>
      "object" === typeof input.p1 &&
      null !== input.p1 &&
      $io0(input.p1) &&
      "object" === typeof input.p2 &&
      null !== input.p2 &&
      $io0(input.p2) &&
      "object" === typeof input.p3 &&
      null !== input.p3 &&
      $io0(input.p3) &&
      (null === input.width ||
        undefined === input.width ||
        "number" === typeof input.width) &&
      (null === input.height ||
        undefined === input.height ||
        "number" === typeof input.height) &&
      (null === input.area ||
        undefined === input.area ||
        "number" === typeof input.area);
    const $io3 = (input: any): boolean =>
      "object" === typeof input.p1 &&
      null !== input.p1 &&
      $io0(input.p1) &&
      "object" === typeof input.p2 &&
      null !== input.p2 &&
      $io0(input.p2) &&
      "object" === typeof input.p3 &&
      null !== input.p3 &&
      $io0(input.p3) &&
      "object" === typeof input.p4 &&
      null !== input.p4 &&
      $io0(input.p4) &&
      (null === input.width ||
        undefined === input.width ||
        "number" === typeof input.width) &&
      (null === input.height ||
        undefined === input.height ||
        "number" === typeof input.height) &&
      (null === input.area ||
        undefined === input.area ||
        "number" === typeof input.area);
    const $io4 = (input: any): boolean =>
      Array.isArray(input.points) &&
      input.points.every(
        (elem: any) => "object" === typeof elem && null !== elem && $io0(elem),
      ) &&
      (null === input.length ||
        undefined === input.length ||
        "number" === typeof input.length);
    const $io5 = (input: any): boolean =>
      "object" === typeof input.outer &&
      null !== input.outer &&
      $io4(input.outer) &&
      (undefined === input.inner ||
        (Array.isArray(input.inner) &&
          input.inner.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io4(elem),
          ))) &&
      (null === input.area ||
        undefined === input.area ||
        "number" === typeof input.area);
    const $io6 = (input: any): boolean =>
      "number" === typeof input.radius &&
      (undefined === input.centroid ||
        ("object" === typeof input.centroid &&
          null !== input.centroid &&
          $io0(input.centroid))) &&
      (null === input.area ||
        undefined === input.area ||
        "number" === typeof input.area);
    const $number = (typia.json.stringify as any).number;
    const $so0 = (input: any): any =>
      `{${
        undefined === input.slope
          ? ""
          : `"slope":${
              undefined !== input.slope
                ? null !== input.slope
                  ? $number(input.slope)
                  : "null"
                : undefined
            },`
      }"x":${$number(input.x)},"y":${$number(input.y)}}`;
    const $so1 = (input: any): any =>
      `{${
        undefined === input.width
          ? ""
          : `"width":${
              undefined !== input.width
                ? null !== input.width
                  ? $number(input.width)
                  : "null"
                : undefined
            },`
      }${
        undefined === input.distance
          ? ""
          : `"distance":${
              undefined !== input.distance
                ? null !== input.distance
                  ? $number(input.distance)
                  : "null"
                : undefined
            },`
      }"p1":${$so0(input.p1)},"p2":${$so0(input.p2)}}`;
    const $so2 = (input: any): any =>
      `{${
        undefined === input.width
          ? ""
          : `"width":${
              undefined !== input.width
                ? null !== input.width
                  ? $number(input.width)
                  : "null"
                : undefined
            },`
      }${
        undefined === input.height
          ? ""
          : `"height":${
              undefined !== input.height
                ? null !== input.height
                  ? $number(input.height)
                  : "null"
                : undefined
            },`
      }${
        undefined === input.area
          ? ""
          : `"area":${
              undefined !== input.area
                ? null !== input.area
                  ? $number(input.area)
                  : "null"
                : undefined
            },`
      }"p1":${$so0(input.p1)},"p2":${$so0(input.p2)},"p3":${$so0(input.p3)}}`;
    const $so3 = (input: any): any =>
      `{${
        undefined === input.width
          ? ""
          : `"width":${
              undefined !== input.width
                ? null !== input.width
                  ? $number(input.width)
                  : "null"
                : undefined
            },`
      }${
        undefined === input.height
          ? ""
          : `"height":${
              undefined !== input.height
                ? null !== input.height
                  ? $number(input.height)
                  : "null"
                : undefined
            },`
      }${
        undefined === input.area
          ? ""
          : `"area":${
              undefined !== input.area
                ? null !== input.area
                  ? $number(input.area)
                  : "null"
                : undefined
            },`
      }"p1":${$so0(input.p1)},"p2":${$so0(input.p2)},"p3":${$so0(
        input.p3,
      )},"p4":${$so0(input.p4)}}`;
    const $so4 = (input: any): any =>
      `{${
        undefined === input.length
          ? ""
          : `"length":${
              undefined !== input.length
                ? null !== input.length
                  ? $number(input.length)
                  : "null"
                : undefined
            },`
      }"points":${`[${input.points
        .map((elem: any) => $so0(elem))
        .join(",")}]`}}`;
    const $so5 = (input: any): any =>
      `{${
        undefined === input.inner
          ? ""
          : `"inner":${
              undefined !== input.inner
                ? `[${input.inner.map((elem: any) => $so4(elem)).join(",")}]`
                : undefined
            },`
      }${
        undefined === input.area
          ? ""
          : `"area":${
              undefined !== input.area
                ? null !== input.area
                  ? $number(input.area)
                  : "null"
                : undefined
            },`
      }"outer":${$so4(input.outer)}}`;
    const $so6 = (input: any): any =>
      `{${
        undefined === input.centroid
          ? ""
          : `"centroid":${
              undefined !== input.centroid ? $so0(input.centroid) : undefined
            },`
      }${
        undefined === input.area
          ? ""
          : `"area":${
              undefined !== input.area
                ? null !== input.area
                  ? $number(input.area)
                  : "null"
                : undefined
            },`
      }"radius":${$number(input.radius)}}`;
    const $su0 = (input: any): any =>
      (() => {
        if (undefined !== input.x) return $so0(input);
        else if (undefined !== input.p4) return $so3(input);
        else if (undefined !== input.points) return $so4(input);
        else if (undefined !== input.outer) return $so5(input);
        else if (undefined !== input.radius) return $so6(input);
        else
          return (() => {
            if (undefined !== input.p3) return $so2(input);
            else return $so1(input);
          })();
      })();
    return `[${input.map((elem: any) => $su0(elem)).join(",")}]`;
  })(input),
);
