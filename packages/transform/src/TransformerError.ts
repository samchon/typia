import { MetadataFactory, MetadataObjectType } from "@typia/core";
import { NamingConvention } from "@typia/utils";

/**
 * Error thrown during typia transformation.
 *
 * `TransformerError` is thrown when `typia.*<T>()` receives unsupported types
 * or invalid configurations at compile time. The error message details which
 * types failed and why.
 *
 * Common causes:
 * - Tuples in LLM schema (not supported by most LLMs)
 * - Recursive types without `$ref` support
 * - `any` types without explicit handling
 * - Native classes not serializable to JSON
 *
 * Use {@link from} to create from {@link MetadataFactory.IError} instances.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export class TransformerError extends Error {
  /** Error code identifying the error type. */
  public readonly code: string;

  public constructor(props: TransformerError.IProps) {
    super(props.message);
    this.code = props.code;

    // INHERITANCE POLYFILL
    const proto = new.target.prototype;
    if (Object.setPrototypeOf) Object.setPrototypeOf(this, proto);
    else (this as any).__proto__ = proto;
  }
}
export namespace TransformerError {
  /** Constructor properties for TransformerError. */
  export interface IProps {
    /** Error code identifying the error type. */
    code: string;

    /** Human-readable error message. */
    message: string;
  }

  /**
   * Create error from metadata factory errors.
   *
   * Formats multiple type errors into a single TransformerError.
   */
  export const from = (props: {
    code: string;
    errors: MetadataFactory.IError[];
  }): TransformerError => {
    const body: string = props.errors
      .map((e) => {
        const subject: string =
          e.explore.object === null
            ? ""
            : join(e.explore.object)(e.explore.property);
        const middle: string = e.explore.parameter
          ? `(parameter: ${JSON.stringify(e.explore.parameter)})`
          : e.explore.output
            ? "(return type)"
            : "";
        const type: string = `${subject.length ? `${subject}: ` : ""}${e.name}`;
        return `- ${type}${middle}\n${e.messages
          .map((msg) => `  - ${msg}`)
          .join("\n")}`;
      })
      .join("\n\n");
    return new TransformerError({
      code: props.code,
      message: `unsupported type detected\n\n${body}`,
    });
  };

  const join =
    (object: MetadataObjectType) => (key: string | object | null) => {
      if (key === null) return object.name;
      else if (typeof key === "object") return `${object.name}[key]`;
      else if (NamingConvention.variable(key)) return `${object.name}.${key}`;
      return `${object.name}[${JSON.stringify(key)}]`;
    };
}
