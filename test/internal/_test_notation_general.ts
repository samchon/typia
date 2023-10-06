import { TestStructure } from "../helpers/TestStructure";

export const _test_notation_general =
    (_name: string) =>
    <T>(factory: TestStructure<T>) =>
    <U>(functor: { convert: (input: T) => U; assert: (input: U) => U }) =>
    () => {
        const data: T = factory.generate();
        const converted: U = functor.convert(data);
        functor.assert(converted);
    };
