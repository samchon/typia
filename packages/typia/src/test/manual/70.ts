import { randint } from "../../algorithm/random";
import { Semaphore } from "../../thread/Semaphore";
import { sleep_for } from "../../thread/global";

async function main(): Promise<void> {
  const s: Semaphore = new Semaphore(4);
  const minimum: number = 500;
  const maximum: number = 4000;

  while (true) {
    let waitTime: number = Date.now();
    const success: boolean = await s.try_acquire_for(1000);
    waitTime = Date.now() - waitTime;

    if (success === true) {
      (async () => {
        const sleepTime: number = randint(minimum, maximum);
        console.log(
          "success, sleep_for",
          sleepTime,
          "ms after",
          waitTime,
          "ms",
        );

        await sleep_for(sleepTime);
        await s.release();
      })();
    } else console.log("failed after", waitTime, "ms");
  }
}
main();
