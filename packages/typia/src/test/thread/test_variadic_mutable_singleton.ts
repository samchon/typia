import std from "../../index";

async function closure(
  counter: std.IPointer<number>,
  x: number,
  y: number,
  z: number,
): Promise<number> {
  ++counter.value;
  return x + y + z;
}

export async function test_variadic_mutable_singleton(): Promise<void> {
  const variadic = new std.VariadicMutableSingleton(closure);
  const counter: std.IPointer<number> = { value: 0 };

  for (let i: number = 0; i < 10; ++i)
    for (let x: number = 0; x < 3; ++x)
      for (let y: number = 0; y < 3; ++y)
        for (let z: number = 0; z < 3; ++z) {
          const solution: number = await variadic.get(counter, x, y, z);
          if (solution !== x + y + z)
            throw new Error(
              "Bug on VariadicMutableSingleton.get(): failed to detect the different arguments.",
            );
        }
  if (counter.value !== 27)
    throw new Error(
      "Bug on VariadicMutableSingleton.get(): failed to memoize the pre-generated value.",
    );
}
