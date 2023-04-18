import typia from "typia";

export const checkTagCustom = typia.createIs<TagCustom>();

typia.customValidators.insert("powerOf")("number")((text: string) => {
    const denominator: number = Math.log(Number(text));
    return (value: number) => {
        value = Math.log(value) / denominator;
        return Math.abs(value - Math.floor(value)) < 0.000001;
    };
});
typia.customValidators.insert("dollar")("string")(
    () => (value: string) => value.startsWith("$"),
);

interface TagCustom {
    /**
     * @powerOf 10
     */
    powerOf: number;

    /**
     * @dollar
     */
    dollar: string;
}
