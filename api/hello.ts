import { api } from "@utils/index";
import { Hello } from "@types/index";

/**
 * 테스트용 API
 */
export async function getHello(): Promise<Hello> {
  const URL = "/api/hello";

  try {
    const result = await api.get(URL);
    const payload: Hello = result.data;
    return payload;
  } catch (e) {
    throw e;
  }
}
