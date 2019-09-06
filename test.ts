
import thenCatchP from "./index.ts";

test(() => {
  return thenCatchP((value) => expect(value).toBe("a"))((value) => expect(value).not.toBe("a"))(Promise.resolve("a"));
});
test(() => {
  return thenCatchP((value) => expect(value).not.toEqual(new Error("a")))((value) => expect(value).toEqual(new Error("a")))(Promise.reject(new Error("a")));
});
