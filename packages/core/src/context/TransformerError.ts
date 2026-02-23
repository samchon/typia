import { NamingConvention } from "@typia/utils";

import { MetadataFactory } from "../factories/MetadataFactory";
import { MetadataObjectType } from "../schemas/metadata/MetadataObjectType";

<<<<<<< HEAD
=======
/**
 * Error thrown during typia transformation.
 *
 * Thrown when `typia.*<T>()` receives unsupported types (e.g., tuples for some
 * LLM providers, recursive types without `$ref`, native class types). The error
 * message lists specific type violations. Use {@link from} to create from
 * multiple {@link MetadataFactory.IError} instances.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
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
    /** Error code. */
    code: string;

    /** Error message. */
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
