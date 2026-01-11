
// Fix: Added missing React import to resolve 'Cannot find namespace React' error
import React from 'react';

export interface TrustItem {
  icon: React.ReactNode;
  label: string;
  description: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  image: string;
}

export interface FacilityItem {
  name: string;
  image: string;
  description: string;
}

export interface ActivityItem {
  title: string;
  image: string;
}