import { Spoiler } from "../../internal/Spoiler";
import { primitive_equal_to } from "../../internal/primitive_equal_to";

export const _test_isParse =
    <T>(
        name: string,
        generator: () => T,
        parser: (input: string) => T | null,
        spoilers?: Spoiler<T>[],
    ) =>
    () => {
        const data: T = generator();
        const string: string = JSON.stringify(data);
        const parsed: T | null = parser(string);

        if (parsed === null || primitive_equal_to(data, parsed) === false) {
            throw new Error(
                `Bug on typia.isParse(): failed to understand the ${name} type.`,
            );
        }

        for (const spoil of spoilers ?? []) {
            const elem: T = generator();
            spoil(elem);

            if (parser(JSON.stringify(elem)) !== null) {
                throw new Error(
                    `Bug on typia.isParse(): failed to detect error on the ${name} type.`,
                );
            }
        }
    };
