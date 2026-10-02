/** Provides optional elapsed-time reporting for awaited test tasks. */
export namespace StopWatch {
  /** Identifies an awaited task without supplying its assertions or inputs. */
  export type Task = () => Promise<void>;

  /** Returns wall-clock elapsed milliseconds after one task fulfills. */
  export async function measure(task: Task): Promise<number> {
    const time: number = Date.now();
    await task();
    return Date.now() - time;
  }

  /** Prints a title and a fulfilled task's measured duration. */
  export async function trace(title: string, task: Task): Promise<void> {
    process.stdout.write(title);
    const time: number = await measure(task);
    console.log(`: ${time.toLocaleString()} ms`);
  }
}
