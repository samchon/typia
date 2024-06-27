export class TypeGuardError<T = any> extends Error {
  public readonly method: string;
  public readonly path: string | undefined;
  public readonly expected: string;
  public readonly value: any;
  protected readonly fake_expected_typed_value_?: T | undefined;

  public constructor(props: TypeGuardError.IProps) {
    // MESSAGE CONSTRUCTION
    super(
      props.message ||
        `Error on ${props.method}(): invalid type${
          props.path ? ` on ${props.path}` : ""
        }, expect to be ${props.expected}`,
    );

    // INHERITANCE POLYFILL
    const proto = new.target.prototype;
    if (Object.setPrototypeOf) Object.setPrototypeOf(this, proto);
    else (this as any).__proto__ = proto;

    // ASSIGN MEMBERS
    this.method = props.method;
    this.path = props.path;
    this.expected = props.expected;
    this.value = props.value;
  }
}
export namespace TypeGuardError {
  export interface IProps {
    method: string;
    path?: undefined | string;
    expected: string;
    value: any;
    message?: undefined | string;
  }
}
