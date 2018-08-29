declare namespace jasmine {
  interface Matchers<T> {
    // @ts-ignore
    toHaveText(actual: any, expectationFailOutput?: any): jasmine.CustomMatcher;
  }
}
