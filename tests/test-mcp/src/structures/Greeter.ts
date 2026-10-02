/**
 * Greeting service.
 *
 * Serves friendly greetings to whoever connects to the server.
 */
export class Greeter {
  /**
   * Say hello to the world.
   *
   * @returns The greeting message
   */
  hello(): Greeter.IGreeting {
    return { message: "Hello, world!" };
  }

  /**
   * Complete an operation without a result value.
   *
   * @returns Nothing; this fixture has no mutable state
   */
  reset(): void {}
}
export namespace Greeter {
  /** Greeting produced by {@link Greeter.hello}. */
  export interface IGreeting {
    /** Greeting sentence */
    message: string;
  }
}
