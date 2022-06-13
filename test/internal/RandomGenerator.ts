export namespace RandomGenerator {
    const CHARACTERS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    export function string(length: number = number(3, 10)): string {
        return [...new Array(length)]
            .map(() => CHARACTERS[number(0, CHARACTERS.length - 1)])
            .join("");
    }

    export function number(min: number = 0, max: number = 100): number {
        const rand: number = Math.random() * (max - min + 1);
        return Math.floor(rand) + min;
    }

    export function boolean(): boolean {
        return Math.random() < 0.5;
    }

    export function array<T>(
        closure: (index: number) => T,
        count: number = number(3, 10),
    ): T[] {
        return [...new Array(count)].map((_e, index) => closure(index));
    }

    export function pick<T>(array: T[]): T {
        return array[number(0, array.length - 1)]!;
    }
}
