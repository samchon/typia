/** Records fatal asynchronous events for the lifetime of an automated runner. */
export namespace TestProcessFailure {
  /** Installs process-lifetime listeners and returns their sticky state reader. */
  export const listen = (): IListener => {
    let failed: boolean = false;
    const report = (type: string, error: unknown): void => {
      failed = true;
      process.exitCode = 1;
      console.error(type, error);
    };
    process.on("uncaughtException", (error) => {
      report("exception", error);
    });
    process.on("unhandledRejection", (error) => {
      report("rejection", error);
    });
    return { failed: () => failed };
  };

  /** Reads whether this installation observed a fatal asynchronous event. */
  export interface IListener {
    /** Returns the retained state without resetting it. */
    failed(): boolean;
  }
}
