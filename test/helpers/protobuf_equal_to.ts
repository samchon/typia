export const protobuf_equal_to =
    (name: string) =>
    <Instance>(
        x: Instance,
        y: Instance,
        tracer?: { value?: string },
    ): boolean => {
        if (name.indexOf("Class") !== -1) return true;
        return recursive_equal_to(x, y, "$input", tracer);
    };

function object_equal_to<T extends object>(
    x: T,
    y: T,
    path: string,
    tracer?: { value?: string },
): boolean {
    return Object.entries(x).every(([key, value]) => {
        return recursive_equal_to(
            value,
            (y as any)[key],
            `${path}.${key}`,
            tracer,
        );
    });
}

function array_equal_to<T>(
    x: T[],
    y: T[],
    path: string,
    tracer?: { value?: string },
): boolean {
    if (x.length !== y.length)
        return trace(x.length, y.length, `${path}.length`, tracer);
    return x.every((value, index) => {
        return recursive_equal_to(value, y[index], `${path}[${index}]`, tracer);
    });
}

function recursive_equal_to<T>(
    x: T,
    y: T,
    path: string,
    tracer?: { value?: string },
): boolean {
    const optional = (opposite: any) =>
        opposite === undefined ||
        opposite === null ||
        (Array.isArray(opposite) && opposite.length === 0) ||
        (opposite instanceof Map && opposite.size === 0);
    if ((x === undefined || x === null) && optional(y)) return true;
    else if ((y === undefined || y === null) && optional(x)) return true;
    else if (typeof x !== typeof y) return trace(x, y, path, tracer);
    else if (typeof x === "object")
        if (x === null) return trace(x, y, path, tracer);
        else if (x instanceof Array || x instanceof Uint8Array)
            return array_equal_to(x as any, y as any, path, tracer);
        else if (x instanceof Map)
            return array_equal_to([...x], [...(y as any)], path, tracer);
        else
            return object_equal_to(
                (<any>x) as object,
                (<any>y) as object,
                path,
                tracer,
            );
    else if (typeof x === "number" && typeof y === "number") {
        const gap = Math.abs(x - y) / Math.abs(x);
        if (gap < 0.001) return true;
        return trace(x, y, path, tracer);
    } else return trace(x, y, path, tracer);
}

function trace(
    x: any,
    y: any,
    path: string,
    tracer?: { value?: string },
): boolean {
    if (x !== y) {
        console.log({ x, y, path, typeofX: typeof x, typeofY: typeof y });
        if (tracer) tracer.value = path;
    }
    return x === y;
}
