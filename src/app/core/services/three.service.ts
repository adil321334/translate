import type * as three from 'three';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThreeService {
  private importPromise: Promise<typeof three>;
  private three: typeof three;

  async load(): Promise<typeof three> {
    if (!this.importPromise) {
      this.importPromise = import(/* webpackChunkName: "three" */ 'three').then(module => (this.three = module));
    }

    return this.importPromise;
  }

  // TODO implement a global getter to get all properties from three

  get Vector2(): typeof three.Vector2 {
    return this.three.Vector2;
  }

  get Vector3(): typeof three.Vector3 {
    return this.three.Vector3;
  }

  get Box3(): typeof three.Box3 {
    return this.three.Box3;
  }

  get Plane(): typeof three.Plane {
    return this.three.Plane;
  }

  get VectorKeyframeTrack(): typeof three.VectorKeyframeTrack {
    return this.three.VectorKeyframeTrack;
  }

  get QuaternionKeyframeTrack(): typeof three.QuaternionKeyframeTrack {
    return this.three.QuaternionKeyframeTrack;
  }

  get AnimationClip(): typeof three.AnimationClip {
    return this.three.AnimationClip;
  }
}
