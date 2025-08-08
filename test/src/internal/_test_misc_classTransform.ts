import { TestStructure } from "../helpers/TestStructure";

export const _test_misc_classTransform =
  (name: string) =>
  <T>(factory: TestStructure<T>) =>
  (classTransform: (input: unknown) => T): void => {
    const input = { name: "test", value: 42 };
    const transformed: T = classTransform(input);

    // Basic check - ensure transformation occurred without error
    if (transformed === null || transformed === undefined) {
      throw new Error(
        `Bug on typia.misc.classTransform(): failed to transform the ${name} type.`,
      );
    }
    
    console.log(`Successfully transformed ${name}:`, transformed);
  };