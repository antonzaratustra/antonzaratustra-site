# Color Animation Adjustment Design

## Overview

The goal was to modify the existing ASCII character animation to change colors dynamically, resembling the warm tones of flames (yellows, oranges, reds) as shown in the reference image. This excludes cooler tones such as green, blue, and purple. The animation has been further enhanced to create realistic flame tongue effects that resemble actual fire rather than the original cheburashka-like appearance.

## Technology Stack & Dependencies

- **HTML**: For structuring the content.
- **CSS**: For styling, though primary color changes are handled via JavaScript.
- **JavaScript**: To manage the animation and dynamic color changes.

## Component Architecture

### Component Definition

The core component is the ASCII character animation, which is defined within the canvas implementation in both [index.html](file:///Users/antonzaratustra/Projects/anton-zaratustra%20site/antonzaratustra-site/index.html) and [phoenix.html](file:///Users/antonzaratustra/Projects/anton-zaratustra%20site/antonzaratustra-site/phoenix.html). This component was updated to include dynamic flame color logic and realistic flame tongue effects.

### Props/State Management

- **Current State**: The existing state manages the animation sequence of ASCII characters.
- **New State**: An additional state manages the color of each character at any given time during the animation, now restricted to flame colors, and the shape of the animation now resembles realistic flame tongues.

### Lifecycle Methods/Hooks

- **Initialization**: Load the initial animation sequence and default flame colors.
- **Animation Loop**: Update the position, shape, and color of each character in every frame using the flame color palette and flame tongue effects.

### Example of Component Usage

The animation is triggered on page load:

```javascript
document.addEventListener('DOMContentLoaded', () => {
    // Animation initializes automatically with new flame color logic and tongue effects
});
```

## API Integration Layer

No external APIs are required for this feature. The color data and shape effects are generated internally based on predefined flame color palettes and mathematical functions.

## Testing Strategy

- **Visual Testing**: Verify that the animation displays warm flame colors (yellows, oranges, reds) and realistic flame tongue shapes.
- **Integration Testing**: Ensure that the animation runs smoothly with the new color logic and shape effects.

## Flame Color Palette

To achieve the desired effect, we use an extended gradient of warm colors for smoother transitions:
- Light Yellow: #FFFFCC
- Yellow: #FFF299
- Golden Yellow: #FFE566
- Yellow: #FFD700
- Yellow-Orange: #FFCC00
- Golden: #FFBF00
- Orange-Yellow: #FFB200
- Orange: #FFA500
- Slightly Darker Orange: #FF9900
- Dark Orange: #FF8C00
- Bright Orange: #FF8000
- Deep Orange: #FF7300
- Vibrant Orange: #FF6600
- Bright Red-Orange: #FF5A00
- Intense Orange: #FF4D00
- Deep Red-Orange: #FF4000

These colors create a smooth transition from bright yellow to deep red-orange.

## Flame Tongue Effect Implementation

To create realistic flame tongue effects, we implemented a new algorithm that generates dynamic flame shapes:

```javascript
function createFlameEffect(time) {
    const t = time * 0.001;
    const flameMask = new Float32Array(cols * rows).fill(0);
    const cx = cols/2, cy = rows*0.75; // Flame origin at bottom center
    
    for (let y=0; y<rows; y++) {
        for (let x=0; x<cols; x++) {
            // Distance from bottom center
            const dx = x - cx;
            const dy = y - cy;
            const distance = Math.sqrt(dx*dx + dy*dy);
            
            // Create multiple flame tongues with random offsets
            let flameIntensity = 0;
            
            // Main central flame
            const angle = Math.atan2(dy, dx);
            const wave = Math.sin(angle * 3 + t * 2) * 0.3;
            const flameShape = Math.max(0, 1 - (distance / (rows * 0.4)) + wave);
            flameIntensity = Math.max(flameIntensity, flameShape * 0.8);
            
            // Secondary flames
            for (let i = 0; i < 5; i++) {
                const offsetX = Math.sin(t * 0.5 + i) * 20;
                const offsetY = Math.cos(t * 0.7 + i) * 10;
                const dx2 = x - (cx + offsetX);
                const dy2 = y - (cy + offsetY);
                const dist2 = Math.sqrt(dx2*dx2 + dy2*dy2);
                const angle2 = Math.atan2(dy2, dx2);
                const wave2 = Math.sin(angle2 * 2 + t * 3 + i) * 0.2;
                const flameShape2 = Math.max(0, 1 - (dist2 / (rows * 0.3)) + wave2);
                flameIntensity = Math.max(flameIntensity, flameShape2 * 0.6);
            }
            
            flameMask[idx(x,y)] = Math.min(1, flameIntensity);
        }
    }
    return flameMask;
}
```

This function creates a central flame with secondary tongues that move dynamically, creating a realistic fire effect.

## Business Logic for Color Change

### Color Interpolation

We implemented a function to interpolate between the chosen colors:

```javascript
function interpolateColor(color1, color2, factor) {
    const result = [];
    for (let i = 0; i < 3; i++) {
        result.push(Math.round(color1[i] + (color2[i] - color1[i]) * factor));
    }
    return result;
}
```

### Dynamic Color Assignment

During each frame of the animation, assign a color to each character based on its intensity value:

```javascript
function getFlameColorByValue(v) {
    // Extended flame color palette with more vibrant colors
    const flameColors = [
        [255, 255, 204],  // Light Yellow (#FFFFCC)
        [255, 242, 153],  // Yellow (#FFF299)
        [255, 229, 102],  // Golden Yellow (#FFE566)
        [255, 215, 0],    // Yellow (#FFD700)
        [255, 204, 0],    // Yellow-Orange (#FFCC00)
        [255, 191, 0],    // Golden (#FFBF00)
        [255, 178, 0],    // Orange-Yellow (#FFB200)
        [255, 165, 0],    // Orange (#FFA500)
        [255, 153, 0],    // Slightly Darker Orange (#FF9900)
        [255, 140, 0],    // Dark Orange (#FF8C00)
        [255, 128, 0],    // Bright Orange (#FF8000)
        [255, 115, 0],    // Deep Orange (#FF7300)
        [255, 102, 0],    // Vibrant Orange (#FF6600)
        [255, 90, 0],     // Bright Red-Orange (#FF5A00)
        [255, 77, 0],     // Intense Orange (#FF4D00)
        [255, 64, 0]      // Deep Red-Orange (#FF4000)
    ];
    
    // Map the value (0-1) to a position in our extended flame gradient
    const index = Math.min(flameColors.length - 1, Math.floor(v * flameColors.length));
    return flameColors[index];
}
```

## Implementation Details

The implementation modifies both HTML files to use the enhanced flame color palette and flame tongue effects instead of the original phoenix shape. The key changes include:

1. Adding the `createFlameEffect()` function to generate realistic flame shapes
2. Replacing the phoenix mask logic with flame tongue logic
3. Maintaining the color enhancement from earlier

The animation now displays dynamic flame tongues with warm colors that move realistically, creating the desired visual effect of actual fire.