import React, { useEffect } from 'react';
import { ViewStyle } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  Easing,
} from 'react-native-reanimated';

interface Props {
  children: React.ReactNode;
  delay?: number;
  from?: { opacity?: number; translateY?: number; scale?: number };
  style?: ViewStyle | ViewStyle[];
}

export function FadeSlide({ children, delay = 0, from = {}, style }: Props) {
  const opacity = useSharedValue(from.opacity ?? 0);
  const translateY = useSharedValue(from.translateY ?? 14);
  const scale = useSharedValue(from.scale ?? 1);

  useEffect(() => {
    const t = setTimeout(() => {
      opacity.value = withTiming(1, { duration: 350, easing: Easing.out(Easing.quad) });
      translateY.value = withSpring(0, { damping: 22, stiffness: 200 });
      if (from.scale !== undefined) scale.value = withSpring(1, { damping: 18 });
    }, delay);
    return () => clearTimeout(t);
  }, []);

  const animStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }, { scale: scale.value }],
  }));

  return (
    <Animated.View style={[animStyle, style]}>
      {children}
    </Animated.View>
  );
}
