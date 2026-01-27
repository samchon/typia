//================================================================
/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
export namespace SafeLock {
  export async function lock(
    locker: () => Promise<void>,
    unlocker: () => Promise<void>,
    lambda: () => void | Promise<void>,
  ): Promise<void> {
    await locker();
    await _Process(unlocker, lambda);
  }

  export async function try_lock(
    locker: () => Promise<boolean>,
    unlocker: () => Promise<void>,
    lambda: () => void | Promise<void>,
  ): Promise<boolean> {
    if ((await locker()) === false) return false;

    await _Process(unlocker, lambda);
    return true;
  }

  async function _Process(
    unlocker: () => Promise<void>,
    lambda: () => void | Promise<void>,
  ): Promise<void> {
    // PROCESS THE CRITICAL SECTION
    try {
      await lambda();
    } catch (error) {
      await unlocker();
      throw error;
    }

    // TERMINATE THE CRITICAL SECTION
    await unlocker();
  }
}
