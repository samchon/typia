import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { ObjectUnionImplicit } from "../../../structures/ObjectUnionImplicit";

export const test_assertStringify_ObjectUnionImplicit = _test_assertStringify(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    (input) =>
        ((input: any): string => {
            const assert: any = (
                input: any,
            ): Array<
                | ObjectUnionImplicit.IPoint
                | ObjectUnionImplicit.ILine
                | ObjectUnionImplicit.ITriangle
                | ObjectUnionImplicit.IRectangle
                | ObjectUnionImplicit.IPolyline
                | ObjectUnionImplicit.IPolygon
                | ObjectUnionImplicit.ICircle
            > => {
                const __is: any = (
                    input: any,
                ): input is Array<
                    | ObjectUnionImplicit.IPoint
                    | ObjectUnionImplicit.ILine
                    | ObjectUnionImplicit.ITriangle
                    | ObjectUnionImplicit.IRectangle
                    | ObjectUnionImplicit.IPolyline
                    | ObjectUnionImplicit.IPolygon
                    | ObjectUnionImplicit.ICircle
                > => {
                    const $io0: any = (input: any): boolean =>
                        "number" === typeof input.x &&
                        Number.isFinite(input.x) &&
                        "number" === typeof input.y &&
                        Number.isFinite(input.y) &&
                        (null === input.slope ||
                            undefined === input.slope ||
                            ("number" === typeof input.slope &&
                                Number.isFinite(input.slope)));
                    const $io1: any = (input: any): boolean =>
                        "object" === typeof input.p1 &&
                        null !== input.p1 &&
                        $io0(input.p1) &&
                        "object" === typeof input.p2 &&
                        null !== input.p2 &&
                        $io0(input.p2) &&
                        (null === input.width ||
                            undefined === input.width ||
                            ("number" === typeof input.width &&
                                Number.isFinite(input.width))) &&
                        (null === input.distance ||
                            undefined === input.distance ||
                            ("number" === typeof input.distance &&
                                Number.isFinite(input.distance)));
                    const $io2: any = (input: any): boolean =>
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
                            ("number" === typeof input.width &&
                                Number.isFinite(input.width))) &&
                        (null === input.height ||
                            undefined === input.height ||
                            ("number" === typeof input.height &&
                                Number.isFinite(input.height))) &&
                        (null === input.area ||
                            undefined === input.area ||
                            ("number" === typeof input.area &&
                                Number.isFinite(input.area)));
                    const $io3: any = (input: any): boolean =>
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
                            ("number" === typeof input.width &&
                                Number.isFinite(input.width))) &&
                        (null === input.height ||
                            undefined === input.height ||
                            ("number" === typeof input.height &&
                                Number.isFinite(input.height))) &&
                        (null === input.area ||
                            undefined === input.area ||
                            ("number" === typeof input.area &&
                                Number.isFinite(input.area)));
                    const $io4: any = (input: any): boolean =>
                        Array.isArray(input.points) &&
                        input.points.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io0(elem),
                        ) &&
                        (null === input.length ||
                            undefined === input.length ||
                            ("number" === typeof input.length &&
                                Number.isFinite(input.length)));
                    const $io5: any = (input: any): boolean =>
                        "object" === typeof input.outer &&
                        null !== input.outer &&
                        $io4(input.outer) &&
                        (undefined === input.inner ||
                            (Array.isArray(input.inner) &&
                                input.inner.every(
                                    (elem: any) =>
                                        "object" === typeof elem &&
                                        null !== elem &&
                                        $io4(elem),
                                ))) &&
                        (null === input.area ||
                            undefined === input.area ||
                            ("number" === typeof input.area &&
                                Number.isFinite(input.area)));
                    const $io6: any = (input: any): boolean =>
                        (undefined === input.centroid ||
                            ("object" === typeof input.centroid &&
                                null !== input.centroid &&
                                $io0(input.centroid))) &&
                        "number" === typeof input.radius &&
                        Number.isFinite(input.radius) &&
                        (null === input.area ||
                            undefined === input.area ||
                            ("number" === typeof input.area &&
                                Number.isFinite(input.area)));
                    const $iu0: any = (input: any): any =>
                        (() => {
                            if (undefined !== input.x) return $io0(input);
                            if (undefined !== input.p4) return $io3(input);
                            if (undefined !== input.points) return $io4(input);
                            if (undefined !== input.outer) return $io5(input);
                            if (undefined !== input.radius) return $io6(input);
                            return (() => {
                                if (undefined !== input.p3) return $io2(input);
                                return $io1(input);
                            })();
                        })();
                    return (
                        Array.isArray(input) &&
                        input.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $iu0(elem),
                        )
                    );
                };
                const $guard: any = (typia.assertStringify as any).guard;
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is Array<
                        | ObjectUnionImplicit.IPoint
                        | ObjectUnionImplicit.ILine
                        | ObjectUnionImplicit.ITriangle
                        | ObjectUnionImplicit.IRectangle
                        | ObjectUnionImplicit.IPolyline
                        | ObjectUnionImplicit.IPolygon
                        | ObjectUnionImplicit.ICircle
                    > => {
                        const $ao0: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            (("number" === typeof input.x &&
                                Number.isFinite(input.x)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".x",
                                    expected: "number",
                                    value: input.x,
                                })) &&
                            (("number" === typeof input.y &&
                                Number.isFinite(input.y)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".y",
                                    expected: "number",
                                    value: input.y,
                                })) &&
                            (null === input.slope ||
                                undefined === input.slope ||
                                ("number" === typeof input.slope &&
                                    Number.isFinite(input.slope)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".slope",
                                    expected: "(null | number | undefined)",
                                    value: input.slope,
                                }));
                        const $ao1: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            (("object" === typeof input.p1 &&
                                null !== input.p1) ||
                                $guard(_exceptionable, {
                                    path: _path + ".p1",
                                    expected: "ObjectUnionImplicit.IPoint",
                                    value: input.p1,
                                })) &&
                            $ao0(
                                input.p1,
                                _path + ".p1",
                                true && _exceptionable,
                            ) &&
                            (("object" === typeof input.p2 &&
                                null !== input.p2) ||
                                $guard(_exceptionable, {
                                    path: _path + ".p2",
                                    expected: "ObjectUnionImplicit.IPoint",
                                    value: input.p2,
                                })) &&
                            $ao0(
                                input.p2,
                                _path + ".p2",
                                true && _exceptionable,
                            ) &&
                            (null === input.width ||
                                undefined === input.width ||
                                ("number" === typeof input.width &&
                                    Number.isFinite(input.width)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".width",
                                    expected: "(null | number | undefined)",
                                    value: input.width,
                                })) &&
                            (null === input.distance ||
                                undefined === input.distance ||
                                ("number" === typeof input.distance &&
                                    Number.isFinite(input.distance)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".distance",
                                    expected: "(null | number | undefined)",
                                    value: input.distance,
                                }));
                        const $ao2: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            (("object" === typeof input.p1 &&
                                null !== input.p1) ||
                                $guard(_exceptionable, {
                                    path: _path + ".p1",
                                    expected: "ObjectUnionImplicit.IPoint",
                                    value: input.p1,
                                })) &&
                            $ao0(
                                input.p1,
                                _path + ".p1",
                                true && _exceptionable,
                            ) &&
                            (("object" === typeof input.p2 &&
                                null !== input.p2) ||
                                $guard(_exceptionable, {
                                    path: _path + ".p2",
                                    expected: "ObjectUnionImplicit.IPoint",
                                    value: input.p2,
                                })) &&
                            $ao0(
                                input.p2,
                                _path + ".p2",
                                true && _exceptionable,
                            ) &&
                            (("object" === typeof input.p3 &&
                                null !== input.p3) ||
                                $guard(_exceptionable, {
                                    path: _path + ".p3",
                                    expected: "ObjectUnionImplicit.IPoint",
                                    value: input.p3,
                                })) &&
                            $ao0(
                                input.p3,
                                _path + ".p3",
                                true && _exceptionable,
                            ) &&
                            (null === input.width ||
                                undefined === input.width ||
                                ("number" === typeof input.width &&
                                    Number.isFinite(input.width)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".width",
                                    expected: "(null | number | undefined)",
                                    value: input.width,
                                })) &&
                            (null === input.height ||
                                undefined === input.height ||
                                ("number" === typeof input.height &&
                                    Number.isFinite(input.height)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".height",
                                    expected: "(null | number | undefined)",
                                    value: input.height,
                                })) &&
                            (null === input.area ||
                                undefined === input.area ||
                                ("number" === typeof input.area &&
                                    Number.isFinite(input.area)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".area",
                                    expected: "(null | number | undefined)",
                                    value: input.area,
                                }));
                        const $ao3: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            (("object" === typeof input.p1 &&
                                null !== input.p1) ||
                                $guard(_exceptionable, {
                                    path: _path + ".p1",
                                    expected: "ObjectUnionImplicit.IPoint",
                                    value: input.p1,
                                })) &&
                            $ao0(
                                input.p1,
                                _path + ".p1",
                                true && _exceptionable,
                            ) &&
                            (("object" === typeof input.p2 &&
                                null !== input.p2) ||
                                $guard(_exceptionable, {
                                    path: _path + ".p2",
                                    expected: "ObjectUnionImplicit.IPoint",
                                    value: input.p2,
                                })) &&
                            $ao0(
                                input.p2,
                                _path + ".p2",
                                true && _exceptionable,
                            ) &&
                            (("object" === typeof input.p3 &&
                                null !== input.p3) ||
                                $guard(_exceptionable, {
                                    path: _path + ".p3",
                                    expected: "ObjectUnionImplicit.IPoint",
                                    value: input.p3,
                                })) &&
                            $ao0(
                                input.p3,
                                _path + ".p3",
                                true && _exceptionable,
                            ) &&
                            (("object" === typeof input.p4 &&
                                null !== input.p4) ||
                                $guard(_exceptionable, {
                                    path: _path + ".p4",
                                    expected: "ObjectUnionImplicit.IPoint",
                                    value: input.p4,
                                })) &&
                            $ao0(
                                input.p4,
                                _path + ".p4",
                                true && _exceptionable,
                            ) &&
                            (null === input.width ||
                                undefined === input.width ||
                                ("number" === typeof input.width &&
                                    Number.isFinite(input.width)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".width",
                                    expected: "(null | number | undefined)",
                                    value: input.width,
                                })) &&
                            (null === input.height ||
                                undefined === input.height ||
                                ("number" === typeof input.height &&
                                    Number.isFinite(input.height)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".height",
                                    expected: "(null | number | undefined)",
                                    value: input.height,
                                })) &&
                            (null === input.area ||
                                undefined === input.area ||
                                ("number" === typeof input.area &&
                                    Number.isFinite(input.area)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".area",
                                    expected: "(null | number | undefined)",
                                    value: input.area,
                                }));
                        const $ao4: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            (Array.isArray(input.points) ||
                                $guard(_exceptionable, {
                                    path: _path + ".points",
                                    expected:
                                        "Array<ObjectUnionImplicit.IPoint>",
                                    value: input.points,
                                })) &&
                            input.points.every(
                                (elem: any, _index2: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".points[" +
                                                _index2 +
                                                "]",
                                            expected:
                                                "ObjectUnionImplicit.IPoint",
                                            value: elem,
                                        })) &&
                                    $ao0(
                                        elem,
                                        _path + ".points[" + _index2 + "]",
                                        true && _exceptionable,
                                    ),
                            ) &&
                            (null === input.length ||
                                undefined === input.length ||
                                ("number" === typeof input.length &&
                                    Number.isFinite(input.length)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".length",
                                    expected: "(null | number | undefined)",
                                    value: input.length,
                                }));
                        const $ao5: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            (("object" === typeof input.outer &&
                                null !== input.outer) ||
                                $guard(_exceptionable, {
                                    path: _path + ".outer",
                                    expected: "ObjectUnionImplicit.IPolyline",
                                    value: input.outer,
                                })) &&
                            $ao4(
                                input.outer,
                                _path + ".outer",
                                true && _exceptionable,
                            ) &&
                            (undefined === input.inner ||
                                ((Array.isArray(input.inner) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".inner",
                                        expected:
                                            "(Array<ObjectUnionImplicit.IPolyline> | undefined)",
                                        value: input.inner,
                                    })) &&
                                    input.inner.every(
                                        (elem: any, _index3: number) =>
                                            (("object" === typeof elem &&
                                                null !== elem) ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".inner[" +
                                                        _index3 +
                                                        "]",
                                                    expected:
                                                        "ObjectUnionImplicit.IPolyline",
                                                    value: elem,
                                                })) &&
                                            $ao4(
                                                elem,
                                                _path +
                                                    ".inner[" +
                                                    _index3 +
                                                    "]",
                                                true && _exceptionable,
                                            ),
                                    ))) &&
                            (null === input.area ||
                                undefined === input.area ||
                                ("number" === typeof input.area &&
                                    Number.isFinite(input.area)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".area",
                                    expected: "(null | number | undefined)",
                                    value: input.area,
                                }));
                        const $ao6: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            (undefined === input.centroid ||
                                ((("object" === typeof input.centroid &&
                                    null !== input.centroid) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".centroid",
                                        expected:
                                            "(ObjectUnionImplicit.IPoint | undefined)",
                                        value: input.centroid,
                                    })) &&
                                    $ao0(
                                        input.centroid,
                                        _path + ".centroid",
                                        true && _exceptionable,
                                    ))) &&
                            (("number" === typeof input.radius &&
                                Number.isFinite(input.radius)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".radius",
                                    expected: "number",
                                    value: input.radius,
                                })) &&
                            (null === input.area ||
                                undefined === input.area ||
                                ("number" === typeof input.area &&
                                    Number.isFinite(input.area)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".area",
                                    expected: "(null | number | undefined)",
                                    value: input.area,
                                }));
                        const $au0: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): any =>
                            (() => {
                                if (undefined !== input.x)
                                    return $ao0(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if (undefined !== input.p4)
                                    return $ao3(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if (undefined !== input.points)
                                    return $ao4(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if (undefined !== input.outer)
                                    return $ao5(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if (undefined !== input.radius)
                                    return $ao6(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                return (() => {
                                    if (undefined !== input.p3)
                                        return $ao2(
                                            input,
                                            _path,
                                            true && _exceptionable,
                                        );
                                    return $ao1(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                })();
                            })();
                        return (
                            (Array.isArray(input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "ObjectUnionImplicit",
                                    value: input,
                                })) &&
                            input.every(
                                (elem: any, _index1: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "(ObjectUnionImplicit.ICircle | ObjectUnionImplicit.ILine | ObjectUnionImplicit.IPoint | ObjectUnionImplicit.IPolygon | ObjectUnionImplicit.IPolyline | ObjectUnionImplicit.IRectangle | ObjectUnionImplicit.ITriangle)",
                                            value: elem,
                                        })) &&
                                    $au0(
                                        elem,
                                        _path + "[" + _index1 + "]",
                                        true,
                                    ),
                            )
                        );
                    })(input, "$input", true);
                return input;
            };
            const stringify: any = (
                input: Array<
                    | ObjectUnionImplicit.IPoint
                    | ObjectUnionImplicit.ILine
                    | ObjectUnionImplicit.ITriangle
                    | ObjectUnionImplicit.IRectangle
                    | ObjectUnionImplicit.IPolyline
                    | ObjectUnionImplicit.IPolygon
                    | ObjectUnionImplicit.ICircle
                >,
            ): string => {
                const $io0: any = (input: any): boolean =>
                    "number" === typeof input.x &&
                    "number" === typeof input.y &&
                    (null === input.slope ||
                        undefined === input.slope ||
                        "number" === typeof input.slope);
                const $io1: any = (input: any): boolean =>
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
                const $io2: any = (input: any): boolean =>
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
                const $io3: any = (input: any): boolean =>
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
                const $io4: any = (input: any): boolean =>
                    Array.isArray(input.points) &&
                    input.points.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem),
                    ) &&
                    (null === input.length ||
                        undefined === input.length ||
                        "number" === typeof input.length);
                const $io5: any = (input: any): boolean =>
                    "object" === typeof input.outer &&
                    null !== input.outer &&
                    $io4(input.outer) &&
                    (undefined === input.inner ||
                        (Array.isArray(input.inner) &&
                            input.inner.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io4(elem),
                            ))) &&
                    (null === input.area ||
                        undefined === input.area ||
                        "number" === typeof input.area);
                const $io6: any = (input: any): boolean =>
                    (undefined === input.centroid ||
                        ("object" === typeof input.centroid &&
                            null !== input.centroid &&
                            $io0(input.centroid))) &&
                    "number" === typeof input.radius &&
                    (null === input.area ||
                        undefined === input.area ||
                        "number" === typeof input.area);
                const $number: any = (typia.assertStringify as any).number;
                const $so0: any = (input: any): any =>
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
                const $so1: any = (input: any): any =>
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
                const $so2: any = (input: any): any =>
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
                    )}}`;
                const $so3: any = (input: any): any =>
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
                const $so4: any = (input: any): any =>
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
                    }"points":${(() =>
                        `[${input.points
                            .map((elem: any) => $so0(elem))
                            .join(",")}]`)()}}`;
                const $so5: any = (input: any): any =>
                    `{${
                        undefined === input.inner
                            ? ""
                            : `"inner":${
                                  undefined !== input.inner
                                      ? (() =>
                                            `[${input.inner
                                                .map((elem: any) => $so4(elem))
                                                .join(",")}]`)()
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
                const $so6: any = (input: any): any =>
                    `{${
                        undefined === input.centroid
                            ? ""
                            : `"centroid":${
                                  undefined !== input.centroid
                                      ? $so0(input.centroid)
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
                    }"radius":${$number(input.radius)}}`;
                const $su0: any = (input: any): any =>
                    (() => {
                        if (undefined !== input.x) return $so0(input);
                        if (undefined !== input.p4) return $so3(input);
                        if (undefined !== input.points) return $so4(input);
                        if (undefined !== input.outer) return $so5(input);
                        if (undefined !== input.radius) return $so6(input);
                        return (() => {
                            if (undefined !== input.p3) return $so2(input);
                            return $so1(input);
                        })();
                    })();
                return (() =>
                    `[${input.map((elem: any) => $su0(elem)).join(",")}]`)();
            };
            return stringify(assert(input));
        })(input),
    ObjectUnionImplicit.SPOILERS,
);
