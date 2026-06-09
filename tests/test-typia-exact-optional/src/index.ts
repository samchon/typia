import { test_exact_optional_undefined_clone_random } from "./features/test_exact_optional_undefined_clone_random";
import { test_exact_optional_undefined_validators } from "./features/test_exact_optional_undefined_validators";

const main = (): void => {
  const tests: Array<[string, () => void]> = [
    [
      "test_exact_optional_undefined_validators",
      test_exact_optional_undefined_validators,
    ],
    [
      "test_exact_optional_undefined_clone_random",
      test_exact_optional_undefined_clone_random,
    ],
  ];

  const exceptions: Error[] = [];
  for (const [name, test] of tests) {
    const started: number = Date.now();
    try {
      test();
      console.log(`  - ${name}: ${(Date.now() - started).toLocaleString()} ms`);
    } catch (error) {
      console.log(`  - ${name}: ${(error as Error).name}`);
      exceptions.push(error as Error);
    }
  }

  if (exceptions.length === 0) {
    console.log("Success");
  } else {
    for (const exp of exceptions) console.log(exp);
    console.log("Failed");
    process.exit(-1);
  }
};

main();
