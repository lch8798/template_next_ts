/**
 *
 * @param delay 대기할 시간 (단위: ms)
 */
export function sleep(delay: number): Promise<PromiseConstructor> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}
