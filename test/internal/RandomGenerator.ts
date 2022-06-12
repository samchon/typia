export namespace RandomGenerator {
    const CHARACTERS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    export function string(length: number = integer(3, 10)): string {
        return [...new Array(length)]
            .map(() => CHARACTERS[integer(0, CHARACTERS.length - 1)])
            .join("");
    }

    export function integer(min: number = 0, max: number = 100): number {
        const rand: number = Math.random() * (max - min + 1);
        return Math.floor(rand) + min;
    }

    export function boolean(): boolean {
        return Math.random() < 0.5;
    }

    export function array<T>(
        closure: () => T,
        count: number = integer(1, 3),
    ): T[] {
        return [...new Array(count)].map(closure);
    }
}
