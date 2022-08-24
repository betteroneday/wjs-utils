import { formatUrl } from "./index";

test("formatUrl", () => {
  expect(formatUrl("http://www.baidu.com?a=1&b=2")).toEqual({
    a: "1",
    b: "2",
  });
  expect(formatUrl("http://www.baidu.com?a=1&a=2&a=3&b=3&b=4")).toEqual({
    a: ["1", "2", "3"],
    b: ["3", "4"],
  });
  expect(formatUrl("https://baidu.com?a=1&b=2&c=3?a=2&b=3&c=4")).toEqual({
    a: "1",
    b: "2",
    c: "3",
  });
});
