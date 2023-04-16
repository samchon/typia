import typia from "typia";
import { RandomGenerator } from "typia/lib/utils/RandomGenerator";

const data: TagCustom = typia.random<TagCustom>({
    customs: {
        string: (tags: typia.IRandomGenerator.ICommentTag[]) => {
            if (tags.find((t) => t.name === "dollar") !== undefined)
                return "$" + RandomGenerator.integer();

            const postfix = tags.find((t) => t.name === "postfix");
            if (postfix !== undefined)
                return RandomGenerator.string() + postfix.value;
        },
        number: (tags: typia.IRandomGenerator.ICommentTag[]) => {
            const powerOf = tags.find((t) => t.name === "powerOf");
            if (powerOf !== undefined)
                return Math.pow(
                    Number(powerOf.value),
                    RandomGenerator.integer(1, 4),
                );
        },
    },
});

console.log(data);

interface TagCustom {
    /**
     * Regular feature supported by typia
     *
     * @format uuid
     */
    id: string;

    /**
     * Custom feature composed with "$" + number
     *
     * @dollar
     */
    dollar: string;

    /**
     * Custom feature composed with string + "abcd"
     *
     * @postfix abcd
     */
    postfix: string;

    /**
     * Custom feature meaning x^y
     *
     * @powerOf 10
     */
    power: number;
}
