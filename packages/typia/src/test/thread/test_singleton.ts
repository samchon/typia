import std from "../../index";

function closure(
  counter: std.IPointer<number>,
  x: number,
  y: number,
  z: number,
): number {
  ++counter.value;
  return x + y + z;
}

export function test_singleton(): void {
  const variadic = new std.Singleton(closure);
  const counter: std.IPointer<number> = { value: 0 };

  for (let i: number = 0; i < 10; ++i)
    for (let x: number = 0; x < 3; ++x)
      for (let y: number = 0; y < 3; ++y)
        for (let z: number = 0; z < 3; ++z) {
          const solution: number = variadic.get(counter, x, y, z);
          if (solution !== 0)
            throw new Error(
              "Bug on Singleton.get(): retried arguments must not afftect to the return value.",
            );
        }
  if (counter.value !== 1)
    throw new Error(
      "Bug on Singleton.get(): failed to memoize the pre-generated value.",
    );
}
