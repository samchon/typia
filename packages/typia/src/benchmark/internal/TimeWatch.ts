export namespace TimeWatch {
  export function measure(proc: () => void): number {
    const time: number = Date.now();
    proc();
    return Date.now() - time;
  }
}
