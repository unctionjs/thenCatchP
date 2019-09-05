import {MapperFunctionType} from "./types";

export default function thenCatchP<A, B, C, D> (resolution: MapperFunctionType<A, B>) {
  return function thenCatchPResolution (rejection: MapperFunctionType<C, B>) {
    return function thenCatchPResolutionRejection (promise: Promise<A>): Promise<D | B> {
      return promise.then(resolution, rejection);
    };
  };
}
