import { TypeGuardError } from "../TypeGuardError";

export function $number(value: number): number {
    if (!isFinite(value))
        throw new TypeGuardError({
            method: "TSON.stringify",
            expected: "number",
            value,
            message: "Error on TSON.stringify(): infinite number.",
        });
    else if (isNaN(value))
        throw new TypeGuardError({
            method: "TSON.stringify",
            expected: "number",
            value,
            message: "Error on TSON.stringify(): not a valid number.",
        });
    return value;
}
