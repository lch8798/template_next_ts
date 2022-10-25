/**
 * API 에 미들웨어 함수를 추가
 * @param middleware 미들웨어 함수
 */
export function initMiddleware(middleware: Function): Function {
  return (req, res): Promise<PromiseConstructor> =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
}
