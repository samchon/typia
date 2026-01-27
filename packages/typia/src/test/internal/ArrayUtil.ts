import { randint } from "../../algorithm/random";
import { equal_to } from "../../functional/comparators";

export namespace ArrayUtil {
  export function has<T>(
    elements: T[],
    target: T,
    predicator: (x: T, y: T) => boolean = equal_to,
  ): boolean {
    return elements.find((elem) => predicator(elem, target)) !== undefined;
  }

  export function random<T>(elements: readonly T[]): T {
    const index: number = randint(0, elements.length - 1);
    return elements[index];
  }
}
