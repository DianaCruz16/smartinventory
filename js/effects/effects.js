/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
 
 'use strict';

 import React, { Component } from 'react';
 import {
   AppRegistry,
   View
 } from 'react-native';

 import {
   ViroImage,
   ViroParticleEmitter,
   ViroUtils,
 } from 'react-viro';

/**
 * This file is a collection of functions that configure each "Effect" in the app.
 * The Snow, Bubbles, Smoke & Fireworks are Particle Effects and therefore configure <ViroParticleEmitter> here.
 * Rest of the effects are video "Post Processing Effects" that don't require Particle Emitters.
 *
 * These functions are tied with the data model used in the ListView at the bottoms of the screen. The data model is
 * defined at path: js/model/EffectItems.js
 */
  export function getPinCushion() {
    var views = [];
    return views;
  }


