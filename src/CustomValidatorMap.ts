import { Customizable } from "./typings/Customizable";

/**
 * Map of custom validators.
 *
 * Map of custom validator functions, storing tag name and type of target value
 * as key, and custom validator function as value.
 *
 * When you want to add a custom validation logic utilizing comment tags, you
 * can insert a custom validator function with specific tag name and type of
 * the target value like below.
 *
 * ```ts
 * typia.customValidators.insert("powerOf")("number")(
 *     (text: string) => {
 *         const denominator: number = Math.log(Number(text));
 *         return (value: number) => {
 *             value = Math.log(value) / denominator;
 *             return value === Math.floor(value);
 *         };
 *     }
 * );
 * typia.customValidators.insert("dollar")("string")(
 *     () => (value: string) => value.startsWith("$"),
 * );
 *
 * interface TagCustom {
 *    /**
 *     * @powerOf 10
 *     *\/
 *    powerOf: number;
 *
 *    /**
 *     * @dollar
 *     *\/
 *    dollar: string;
 * }
 * ```
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface CustomValidatorMap {
    /**
     * Get number of stored tags.
     *
     * @return Number of stored tags
     */
    size(): number;

    /**
     * Get number of stored types of the specified tag name.
     *
     * In other words, number of stored custom validator functions of
     * the specified tag name.
     *
     * @param name Tag name
     * @return Number of stored types function
     */
    size(name: string): number;

    /**
     * Test whether custom validator function exists or not.
     *
     * @param name Tag name
     * @param type Type of the target value
     * @returns Whether exists or not
     */
    has: (name: string) => (type: keyof Customizable) => boolean;

    /**
     * Get custom validator function.
     *
     * @param name Tag name
     * @param type Type of the target value
     * @returns Custom validator function or undefined value
     */
    get(
        name: string,
    ): <Type extends keyof Customizable>(
        type: Type,
    ) => CustomValidatorMap.Closure<Type> | undefined;

    /**
     * Insert a new custom validator function.
     *
     * You can add a custom validation logic utilizing comment tags,
     * by inserting a function which returns a boolean value, with specific
     * tag name and type of the target value.
     *
     * However, if you try to insert a duplicated tag name and type, the
     * closure function would not be enrolled and `false` value would be
     * returned.
     *
     * @param name Tag name
     * @param type Type of the target value
     * @param closure Custom validator function
     * @returns Whether succeeded to insert or not
     */
    insert(
        name: string,
    ): <Type extends keyof Customizable>(
        type: Type,
    ) => (closure: CustomValidatorMap.Closure<Type>) => boolean;

    /**
     * Erase custom validator function.
     *
     * @param name Tag name
     * @param type Type of the target value
     * @returns Whether succeeded to erase or not
     */
    erase(name: string): (type: keyof Customizable) => boolean;
}
export namespace CustomValidatorMap {
    /**
     * Type of closure function of custom validation.
     *
     * @template Type Type of the target value
     * @param text Text of the tag. For example, if the tag is `@powerOf 10`, `text` is 10.
     * @param value Value to validate
     * @returns Whether the value is valid or not
     */
    export type Closure<Type extends keyof Customizable> = (
        text: string,
    ) => (value: Customizable[Type]) => boolean;
}
