import RandExp from "randexp";

/**
 * @internal
 */
export namespace RandomGenerator {
    const ALPHABETS = "abcdefghijklmnopqrstuvwxyz";

    /* -----------------------------------------------------------
        REGULAR
    ----------------------------------------------------------- */
    export function boolean(): boolean {
        return Math.random() < 0.5;
    }

    export function integer(min?: number, max?: number): number {
        min ??= 0;
        max ??= 100;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    export function bigint(min?: bigint, max?: bigint): bigint {
        min ??= BigInt(0);
        max ??= BigInt(100);
        return BigInt(integer(Number(min), Number(max)));
    }

    export function number(min?: number, max?: number): number {
        min ??= 0;
        max ??= 100;
        return Math.random() * (max - min) + min;
    }

    export function string(length?: number): string {
        return new Array(length ?? integer(5, 10))
            .fill(0)
            .map(() => ALPHABETS[integer(0, ALPHABETS.length - 1)])
            .join("");
    }

    export function array<T>(
        closure: (index: number) => T,
        count?: number,
    ): T[] {
        return new Array(count ?? integer(0, 3))
            .fill(0)
            .map((_e, index) => closure(index));
    }

    export function pick<T>(array: T[]): T {
        return array[integer(0, array.length - 1)]!;
    }

    /* -----------------------------------------------------------
        SECIAL FORMATS
    ----------------------------------------------------------- */
    export function uuid(): string {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
            const r = (Math.random() * 16) | 0;
            const v = c === "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }

    export function email(): string {
        return `${string(10)}@${string(10)}.${string(3)}`;
    }

    export function url(): string {
        return `https://${string(10)}.${string(3)}`;
    }

    export function ipv4(): string {
        return array(() => integer(0, 255), 4).join(".");
    }

    export function ipv6(): string {
        return array(() => integer(0, 65535).toString(16), 8).join(":");
    }

    export function pattern(regex: RegExp): string {
        return new RandExp(regex).gen();
    }

    export function date(min?: number, max?: number): string {
        min ??= 0;
        max ??= Date.now();
        return new Date(number(min, max)).toString();
    }
}
