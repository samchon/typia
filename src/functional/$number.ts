import { TypeGuardError } from "../TypeGuardError";

export function $number(value: number): number {
    if (!isFinite(value))
        throw new TypeGuardError({
            method: "typia.stringify",
            expected: "number",
            value,
            message: "Error on typia.stringify(): infinite number.",
        });
    else if (isNaN(value))
        throw new TypeGuardError({
            method: "typia.stringify",
            expected: "number",
            value,
            message: "Error on typia.stringify(): not a valid number.",
        });
    return value;
}
