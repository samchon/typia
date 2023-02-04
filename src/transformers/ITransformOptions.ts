export interface ITransformOptions {
    /**
     * Whether to validate finite number or not.
     *
     * If configured true, number typed values would be validated by Number.isNaN().
     *
     * However, whatever you configure, it would be ignored when marshaling or parsing.
     *
     *   - when marshaling, always be true
     *     - assertStringify()
     *     - validateEncode()
     *   - when parsing, always be false
     *     - assertParse()
     *     - isDecode()
     *
     * @default false
     */
    finite?: boolean;

    /**
     * Whether to validate finite number or not.
     *
     * If configured true, number typed values would be validated by Number.isFinite().
     *
     * However, whatever you configure, it can be ignored in below case.
     *
     *   - when `finite` option is true, this option would be ignored
     *   - when marshaling, always be true
     *     - assertStringify()
     *     - validateEncode()
     *   - when parsing, always be false
     *     - assertParse()
     *     - isDecode()
     *
     * @default false
     */
    numeric?: boolean;

    /**
     * Whether to validate functional type or not.
     *
     * However, whatever you configure, it becomes false when marshaling or parsing.
     *
     * @default false
     */
    functional?: boolean;

    /**
     * Whether to check undefined value or not.
     *
     * JavaScript can assign `undefined` value to a specific property and it is an
     * issue when validating without allowing superfluous properties. Should undefined
     * value assigned superfluous property be allowed or not?
     *
     * @default true
     */
    undefined?: boolean;
}
